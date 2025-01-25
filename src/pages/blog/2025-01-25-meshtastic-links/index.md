---
title: Decoding Meshtastic Channel Links
date: 2025-01-25
tags: [Meshtastic]
---

## Introduction

If you don't know what Meshtastic is, this [video has a great introduction](https://www.youtube.com/watch?v=N3FXej9fqIk).
The TL;DR: is that it's a communication protocol using 900 MHz (in the US) [LORA Radios](https://en.wikipedia.org/wiki/LoRa).

Communication is done either via direct messages (DMs), or via channels.
The channels are encrypted, so for 2 parties to communicate, they need to know the encryption key (pre-shared key or PSK, for short) for that channel. 
Sharing the chaneel name, key etc. is done via [QR codes or URLs](https://meshtastic.org/e/).
In this blog post, we'll look at what information is encoded when sharing channel settings, and we can decode it using a "simple" Python script.

## The channel link

We'll use the following link as an example:

```
https://meshtastic.org/e/#CjQSIOsfCkgIpGY_8iW02ad-4QPaCSBISJqzIVoZKHdqKXd8GgtCbG9nQ2hhbm5lbCUEAAAAEg4IATgBQANIAVAeWBRoAQ
```

The part that we are interested in is the fragment:

```
CjQSIOsfCkgIpGY_8iW02ad-4QPaCSBISJqzIVoZKHdqKXd8GgtCbG9nQ2hhbm5lbCUEAAAAEg4IATgBQANIAVAeWBRoAQ
```

This is a [URL safe base64](https://en.wikipedia.org/wiki/Base64) encoded string that has the information we are looking for. 

## Structure

The message is encoded using [protobuf](https://protobuf.dev/). 
The structure we are interested in is defined [in this file](https://github.com/meshtastic/protobufs/blob/2cffaf53e3faf1b6e41a8b8f05312f2f893be413/meshtastic/channel.proto).
It's reasonably well documented, so I will not get into all the details here.
But the main properties we are interested in are the channel name, and the PSK.
They are encoded as the `psk` and `name` properties in the top level `ChannelSettings` message.

For the rest of this post, we'll ignore the remainder of the properties, but they can be extracted using the same approach.

## Protobuf and Python

### Generating Python code from the protobuf structure

The first setup is installing all the prerequisites.
There are 2 parts: the protobuf compiler and the Python protobuf library.

```bash
sudo apt install protobuf-compiler
pip install protobuf==3.20.1
```

> Note: I recommend using a [virtual enviroment](https://docs.python.org/3/library/venv.html) for your python setup. 
> Here's [a good resource for setting it up](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#create-and-use-virtual-environments).

Next, we'll need to get the protobuf definition "compiled" into python code, so we can the deserialize the configuration from the URL.
The protobuf definition [lives in GitHub](https://github.com/meshtastic/protobufs), so we'll need to clone it.

```bash
git clone git@github.com:meshtastic/protobufs.git
```

We'll need to compile a total of four proto files to get this working.
First, let's create a new folder for our generated files to live in:

```bash
mkdir meshtastic
```

Then, `cd` into the `protobuf` folder, and run the following commands.
(You can compile all of them if you want to, but it's not needed for this use case.)
  
```bash
protoc --python_out=.. meshtastic/apponly.proto
protoc --python_out=.. meshtastic/channel.proto
protoc --python_out=.. meshtastic/device_ui.proto
protoc --python_out=.. meshtastic/config.proto
```

Finally, we need to make the `meshtastic` folder a python "module", we we'll create an empty `__init__.py` file inside:

```bash
touch meshtastic/__init__.py
```

### Decoding

How that have all the prerequisites, let's get decoding!

To start with we'll need to import the required pacakges:

```python
from meshtastic.apponly_pb2 import ChannelSet
import base64
```

We'll see the string we want to decode as a constant (for now):

```python
TO_DECODE = 'CjESIMC70tNI5vkpQpHZGeg0WV7y6KqEoD0_t74fM1_jCaMkGghCbG9nVGVzdCUEAAAAEg4IATgBQANIAVAeWBRoAQ'
```

Next, we'll create a new, empty object to populate with the deserialized data:

```python
channelSet = ChannelSet()
```

Finally, let's decode and display the channel name and PSK:

```python
channelSet.ParseFromString(base64.urlsafe_b64decode(TO_DECODE + "=="))

for s in channelSet.settings:
    print("Channel name: " + s.name)
    print("Psk: " + base64.b64encode(s.psk).decode())
```

A few notes on the implementation.
The settings are encoded in a "URL Safe" base64 encoding.
However, Python still expects the padding to be there, so we're adding the maximum of 2 padding characters to get around this.
If that's too many, any extras will be ignored by the decoder.
"Proper" URL Safe encoding explictly omits padding, but the Python library still requires it, so here we are.

## Results

Running the above code, we'll get the settings we expect:

```
$ python decode.py 
Channel name: BlogTest
Psk: wLvS00jm+SlCkdkZ6DRZXvLoqoSgPT+3vh8zX+MJoyQ=
```

We can extract other properties if we want to, using the same approach.

## The End