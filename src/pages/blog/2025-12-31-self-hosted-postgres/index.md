---
title: Self Hosted Postgres in Kubernetes with PITR Recovery
date: 2025-12-31
tags: [Kubernetes, Self-Hosting, PostgreSQL]
---

# Introduction 

I would like to selfhost a few services, and they require persistence, in the form of a PostgreSQL database.
Since my Kubernetes cluster runs on 4 Raspberry Pi 4, each with an SD card for disk, it's only a matter of time until one of them gets corrupted.
To avoid the innevitable and predictable data loss, I'll need automated backups, idealy with Point-In-Time Recovery (PITR).

If I'm going to reinvent the wheel, why not go for the whole wheel? 

# Solution

[CloudNativePG](https://cloudnative-pg.io/documentation/current/) seems to be most mature and feature complete out there. 
It provides an operator that does a lot of the heavy lifting.
Backups are handled by the [Barman Cloud](https://cloudnative-pg.io/plugin-barman-cloud/) plugin.
It handles aspects like WAL Log archiving, taking regular snapshots and uploading them a cloud object storage, like S3[^1].
Seems to meet all the needs I need for my project.

# Setup

## Setting up a Cloud Native PG database

Using the [instructions on their website](https://cloudnative-pg.io/docs/1.28/installation_upgrade), we'll need to install the operator.
We can do it with the following command:

```bash
$ kubectl apply --server-side -f https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/release-1.28/releases/cnpg-1.28.0.yaml
```

We can now create our database.
The Barman Cloud Plugin we'll be using later assumes that the DB is in the `cnpg-system` namespace.
To simply this experiment, we'll work with that assumption, and we'll start by creating the namespace:

```bash
$ kubectl create namespace cnpg-system
```

Then we can define our cluster configuration, with one user so we can connect to it later: 

```yaml
apiVersion: v1
type: kubernetes.io/basic-auth
kind: Secret
metadata:
  name: postgres-secret
  namespace: cnpg-system
stringData:
  username: user1
  password: supersecretpassword
---
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: test
  namespace: cpgn-system
spec:
  instances: 1
  storage:
    size: 1Gi
```

And when we apply this, we have a new cluster with 1 instance.
We can forward the port, and connect to it like we normally would to a Postgres instance running locally.

```bash
$ kubectl port-forward -n cnpg-system service/test-restore-rw 5432:5432
```

## Backups

### Installing

Now, we can configure backups for our new Postgres cluster.

First, let's install the prerequisites that the Barman Cloud plugin requires.
We will need to install Certificate Manager[^2].

```bash
$ kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.19.2/cert-manager.yaml
```

Then, we can install the plugin:

```bash
$ kubectl apply -f https://github.com/cloudnative-pg/plugin-barman-cloud/releases/download/v0.9.0/manifest.yaml
```

### Configuration

We can now define the backup configuration.
For this example, I'll use S3 as the storage target for the backups. 

First, we'll need to store a set AWS credentials with access to the right bucket[^3].
We'll use an [Opaque Secret](https://kubernetes.io/docs/concepts/configuration/secret/#secret-types) to store the access and secret keys:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: s3-credentials
  namespace: cnpg-system
type: Opaque
stringData:
  access-key-id: <redacted>
  secret-key-id: <redacted>
```

Next, we'll define the storage configuration to our S3 Bucket:

```yaml
apiVersion: barmancloud.cnpg.io/v1
kind: ObjectStore
metadata:
  name: s3-store
  namespace: cnpg-system
spec:
  configuration:
    destinationPath: s3://<bucket>/postgres/
    s3Credentials:
      accessKeyId:
        name: s3-credentials
        key: access-key-id
      secretAccessKey:
        name: s3-credentials
        key: secret-key-id
    wal:
      compression: gzip
```

Finally, we'll need to tell our Postgres cluster to use this configuration, and enable WAL archiving.
We'll add the following to the Cluster `spec` field:

```yaml
plugins:
  - name: barman-cloud.cloudnative-pg.io
    isWALArchiver: true
    parameters:
      barmanObjectName: s3-store
```

The final piece of the puzzle is setup regular "base" backups.
These will backup the entire dataset, and give us a "base" for the WAL logs to be applied to in order to get our Point-In-Time Restore.

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: ScheduledBackup
metadata:
  name: pg-backup
  namespace: cnpg-system
spec:
  cluster:
    name: test
  schedule: '0 0 * * * *' # hourly
  backupOwnerReference: self
  method: plugin
  pluginConfiguration:
    name: barman-cloud.cloudnative-pg.io
```

### Results

Now that everything is configured, we can list our S3 bucket, and sure enough, we have backups.
The top level structure has our base and WAL logs:

```
$ aws s3 ls s3://<redacted>/postgres/test/
                           PRE base/
                           PRE wals/
```

Digging in deeper, we have our base backups, nicely named by timestamp, one every hour, as we'd expect: 

```
$ aws s3 ls s3://<redacted>/postgres/test/base/
                           PRE 20251227T030000/
                           PRE 20251227T040000/
                           PRE 20251227T050000/
                           PRE 20251227T060000/
                           PRE 20251227T070000/
                           ...
```

And finally, we have our WAL logs archived:

```
$ aws s3 ls s3://<redacted>/postgres/test/wals/0000000100000000/
2025-12-26 21:00:02      16944 000000010000000000000013.gz
2025-12-26 21:00:04        210 000000010000000000000014.00000028.backup.gz
2025-12-26 21:00:03      16513 000000010000000000000014.gz
2025-12-26 21:05:03      17139 000000010000000000000015.gz
2025-12-26 21:30:03      17276 000000010000000000000016.gz
2025-12-26 22:00:02      16416 000000010000000000000017.gz
2025-12-26 22:00:05        209 000000010000000000000018.00000028.backup.gz
2025-12-26 22:00:04      16510 000000010000000000000018.gz
...
```

So we should have all the pieces needed to perform a PITR.
We'll tacke this in the next section.

## Restoring

For testing the restore, I've created a simple table, with timestamps for easy reasoning:

```sql
CREATE TABLE test(
  id int,
  created_at timestamp(6)
);
```

And we inserted different values, and this is the end state of the table:

```
test=> select * from test;
 id |         created_at         
----+----------------------------
 16 | 2025-12-27 03:00:17.601392
 17 | 2025-12-27 03:00:20.438822
 18 | 2025-12-27 03:28:06.64914
 19 | 2025-12-27 20:42:25.563207
 20 | 2025-12-27 20:42:32.992066
 21 | 2025-12-27 20:45:58.634257
(6 rows)
```

We'll restore the table to 2025-12-27, at 20:43:00 UTC.
For this, we'll create a new cluster, and we'll point it at the backups we have.
We'll also need to give it the target time we want the cluster restored to.
We arrive at this configuration:

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: test-restore
  namespace: cnpg-system
spec:
  instances: 1
  imagePullPolicy: IfNotPresent
  bootstrap:
    recovery:
      source: source
  externalClusters:
  - name: source
    plugin:
      name: barman-cloud.cloudnative-pg.io
      parameters:
        barmanObjectName: s3-store
        serverName: test
        targetTime: "2025-12-27T20:43:00Z"
  storage:
    size: 1Gi
```

Once the restore is done (it was pretty much instant for this example), we con connect and check our test table:

```
test=> select * from test;
 id |         created_at         
----+----------------------------
 16 | 2025-12-27 03:00:17.601392
 17 | 2025-12-27 03:00:20.438822
 18 | 2025-12-27 03:28:06.64914
 19 | 2025-12-27 20:42:25.563207
 20 | 2025-12-27 20:42:32.992066
(5 rows)
```

As we'd expect, we're missing row with `id` 21, as it's *after* the target restore time. 

# Conclusions and Final Remarks

All in all, this was an easy setup, and it works fine for at least the basic use case.
The true test is once this sees some "production" loads, and testing with an actual live data base. 

## A note on S3 cots

For this example, I used S3 as the backup target destination.
The amount of data stored is small, however, WAL archiving could end up writing a lot of objects.
This could incur significant S3 API charges, so it's something I'm keeping an eye on.
With hourly base backups, I didn't see any cost increases for my AWS account.
But inserting 21 records, and deleting a few is not exactly a representative use case, but at least the "baseline" cost is not absurd. 

## Retention policies

Barman has [the option of specifying retention policies](https://cloudnative-pg.io/plugin-barman-cloud/docs/retention/).
However, for this experiment, I've gone with specifying a lifecycle policy on the S3 bucket.
Everything under `postgres/` will be deleted after 7 days.
This will give me a one week recovery window.

Using the Barman retention policy will cause the plugin to list S3, and then delete the objects.
This also will incur some S3 API charges, and I think that using the S3 lifecycle rule is probably good enough.

[^1]: The plugin also [supports Google Cloud Storage, or Azure Blobs or some other services that implementation a compatible API](https://cloudnative-pg.io/plugin-barman-cloud/docs/object_stores/).

[^2]:  You can skip this step if your cluster already has it installed on the cluster. My test cluster did not.

[^3]: For reference, I granted the user full access to the S3 bucket where the backups are stored.
