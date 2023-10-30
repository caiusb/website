import React from 'react'
import Layout from '../../components/layout'

const McClassification = () => (
    <Layout>
        <h1>An Empirical Investigation into Merge Conflicts and Their Effect on Software Quality</h1>
        <p> <a href="http://caius.brindescu.com">Caius Brindescu</a>, <a href="https://www.ics.uci.edu/~iftekha/">Iftekhar Ahmed</a>, <a href="https://engineering.oregonstate.edu/carlos-jensen">Carlos Jensen</a>, <a href="http://web.engr.oregonstate.edu/~sarmaa/">Anita Sarma</a>
        </p>
        <p>Merge conflicts are known to cause extra effort for developers, but little is known about the effect on the software. While some research has been done, many questions remain. To better understand merge conflicts and their impact we conducted an empirical study of the causes, frequency, and impact of merge conflicts, where impact is measured in terms of bug fixing commits associated with conflicts. We analyzed <a href="#corpus">143 open source projects</a> and found that for 75.23% of conflicts, a developer needs to reflect on the program logic to resolve conflicts, and that almost 1 in 5 merges cause conflicts. We also found code associated with a merge conflict to be twice as likely to have a bug, and code associated with semantic merge conflicts 26x more likely to have a bug.</p>

    <div id="classification">
       <h2>Merge conflict classification</h2>
        <p>We manually classified 600 randomly sampled commmits. We then trained a classifier to classify our corpus of 6,979 conflicting commits. The categories are presented in the table below:</p>
        <table>
            <thead style={{fontWeight: 'bold'}}>
                <tr>
                    <td>Category</td><td>Definition</td><td>Complexity</td><td>Example</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Semantic</td>
                    <td>Conflicts involving two conflicting semantic changes</td>
                    <td>Non-trivial</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Disjoint</td>
                    <td>Unrelated semantic changes overlapping in lines</td>
                    <td>Non-trivial</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Delete</td>
                    <td>A change and a delete</td>
                    <td>Non-trivial</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Formatting</td>
                    <td>Conflicting changes in formatting</td>
                    <td>Trivial</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Comments</td>
                    <td>Conflicting changes in comments</td>
                    <td>Trivial</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Other</td>
                    <td>Conflicts that do not belong to any of the above</td>
                    <td>Trivial</td>
                    <td></td>
                </tr>
            </tbody>	
        </table>
    </div>
        
    <div id="features">
        <h2>Classification features</h2>
        <p>
            This sections details the features that were used to classify commits based on their root cause (Section 3.2.1 in the paper.)
        </p>
        <table>
        <thead style={{fontWeight: "bold"}}>
            <tr>
                <td>Feature</td>
                <td>Details</td>
            </tr>	
        </thead>
        <tbody>
        <tr><td>AST_A_SIZE</td><td>The total number of AST Nodes of the files involved in a conflict, in one branch</td></tr>
        <tr><td>LOC_A_SIZE</td><td>The sum of LOC of the files involved in a conflict, in one branch</td></tr>
        <tr><td>AST_B_SIZE</td><td>The total number of AST Nodes of the files involved in a conflict, in the other branch</td></tr>
        <tr><td>LOC_B_SIZE</td><td>The sum of LOC of the files involved in a conflict, in the other branch</td></tr>
        <tr><td>CONFLICTING_AST_A_TO_B</td><td>The difference between the two branches, considering only the conflicting region, in AST nodes</td></tr>
        <tr><td>CONFLICTING_AST_A_TO_SOLVED</td><td>The difference between one of the branches and the solved version, in AST nodes</td></tr>
        <tr><td>CONFLICTING_AST_B_TO_SOLVED</td><td>The difference between the other branch and the solved version, in AST nodes</td></tr>
        <tr><td>CONFLICTING_LOC_A_TO_B</td><td>The number of lines difference between the two branches, considering only the conflicting region, in LOC</td></tr>
        <tr><td>CONFLICTING_LOC_A_TO_SOLVED</td><td>The number of lines difference between one of the branches and the solved version considering only the conflicting region, in LOC</td></tr>
        <tr><td>CONFLICTING_LOC_B_TO_SOLVED</td><td>The number of lines difference between the other branch and the solved version, in LOC</td></tr>
        <tr><td>LOC_SIZE_SOLVED</td><td>The size of the resolved merge conflict</td></tr>
        <tr><td>AST_A_TO_B</td><td>The number of lines difference between the two branches, in AST nodes</td></tr>
        <tr><td>NO_AUTHORS</td><td>The number of authors involved in that particular merge</td></tr>
        <tr><td>LOC_DIFF</td><td>The difference between the two branches, in LOC, before the merge</td></tr>
        <tr><td>AST_DIFF</td><td>The difference between the two branches, in AST nodes, before the merge</td></tr>
        <tr><td>MERGED_IN_MASTER</td><td>True if the branch was merged into master</td></tr>
        <tr><td>TIME_SOLVED</td><td>The time of the resolution</td></tr>
        <tr><td>TIME_A</td><td>The timestamp of the last commit on one of the branches</td></tr>
        <tr><td>TIME_B</td><td>The timestamp of the last commit on the other branch</td></tr>
        <tr><td>NO_STATEMENTS</td><td>The number of statements involved in a conflict</td></tr>
        <tr><td>NO_METHODS</td><td>The number of methods involved in a conflict</td></tr>
        <tr><td>NO_CLASSES</td><td>The number of classes involved in a conflict</td></tr>
        <tr><td>DIFF_NODES_A_TO_B</td><td>A set of node types involved in a conflict</td></tr>
        <tr><td>IS_AST_CONFLICT</td><td>True, if the conflict happens at the AST level (concurrent modifications to the same AST node)</td></tr>
        </tbody>
        </table>
    </div>

    <div id="results">
        <h2>Classification results</h2>
        <p>
            The figure below shows the confusion matrix for our classifier.
        </p>
        <img className="media-object" src="/research/mc-classification/confusion_matrix.png" style={{width: '600px'}}/>
     </div>

    <div id="corpus">
        <h2>Corpus</h2>
        <p>
        The table below shows the corpus we used for our paper.
        </p>
        <div>
            <table>
            <thead style={{fontWeight: "bold"}}>
                <tr><td>Project</td><td>Last commit</td><td>Clone URL</td></tr>
            </thead>
            <tbody>
                <tr><td>ActionBarSherlock</td><td>2c71339e756bcc0b1424c4525680549ba3a2dc97</td><td>https://github.com/JakeWharton/ActionBarSherlock.git</td></tr>
                <tr><td>Activiti</td><td>72981d6070b409ab5184a9401fb9f7851a659ef2</td><td>https://github.com/Activiti/Activiti.git</td></tr>
                <tr><td>aipo</td><td>0a9e9491e2146043601b7462b8dac81471f1db53</td><td>https://github.com/aipocom/aipo.git</td></tr>
                <tr><td>androidannotations</td><td>7b7a55ebacb58e26988a2f8f8adf0eb6e0b56d2f</td><td>https://github.com/excilys/androidannotations.git</td></tr>
                <tr><td>android-bootstrap</td><td>2905ac2a2f4bae2e9684b798e2ade14c5afd9d34</td><td>https://github.com/donnfelker/android-bootstrap.git</td></tr>
                <tr><td>android-flip</td><td>ab2dea1b045ffc626221c2826ce9dd00823e696d</td><td>https://github.com/openaphid/android-flip.git</td></tr>
                <tr><td>android-viewflow</td><td>3da74fa32a935bcbb37e5ebeb270477cde1985d4</td><td>https://github.com/pakerfeldt/android-viewflow.git</td></tr>
                <tr><td>antlr4</td><td>59676745319b864fe3b8fd61710e730e760f5afd</td><td>https://github.com/antlr/antlr4.git</td></tr>
                <tr><td>astrid</td><td>4fc5c7714fb1b48ae46dcacbda287bcef9c3f6bf</td><td>https://github.com/todoroo/astrid.git</td></tr>
                <tr><td>atlas-feeds</td><td>602a1df271fb2873c11aff26506429ede5613b82</td><td>https://github.com/atlasapi/atlas-feeds.git</td></tr>
                <tr><td>atlas-model</td><td>7307e326838addaff161b3be836d65c2892b6a74</td><td>https://github.com/atlasapi/atlas-model.git</td></tr>
                <tr><td>atlas-persistence</td><td>95c437d36ed9555a6afe95442fd04b36cacca664</td><td>https://github.com/atlasapi/atlas-persistence.git</td></tr>
                <tr><td>autopsy</td><td>5cd50e9aec71479803e5ee149d5dac5bbd7c7ed5</td><td>https://github.com/sleuthkit/autopsy.git</td></tr>
                <tr><td>BallCraft</td><td>4bf32ffa4f80f669c8300c7d28cc22dae7f34445</td><td>https://github.com/COMP3111H-Project-Team/BallCraft.git</td></tr>
                <tr><td>beam</td><td>ce738053d525f8ce729a9455267f89381a685446</td><td>https://github.com/bcdev/beam.git</td></tr>
                <tr><td>bioformats</td><td>4d0f6757bed4e9b219ee9bfac575f1e924d9a2b9</td><td>https://github.com/openmicroscopy/bioformats.git</td></tr>
                <tr><td>blueprints</td><td>70b35dc90a11602b03afe8e0862f8a0836b34c13</td><td>https://github.com/tinkerpop/blueprints.git</td></tr>
                <tr><td>Bukkit</td><td>f210234e59275330f83b994e199c76f6abd41ee7</td><td>https://github.com/Bukkit/Bukkit.git</td></tr>
                <tr><td>bundlemaker</td><td>f8d12fbc5927268b7fb817a5bf970a1f2ef2c0e3</td><td>https://github.com/wuetherich/bundlemaker.git</td></tr>
                <tr><td>butterknife</td><td>6ab6fb5e98a9da8eeaecc4f8917f06adbc8b67a7</td><td>https://github.com/JakeWharton/butterknife.git</td></tr>
                <tr><td>candlepin</td><td>1f073f1092225b8472323d351e123d4235785d30</td><td>https://github.com/candlepin/candlepin.git</td></tr>
                <tr><td>capedwarf-blue</td><td>6aca5dd1eb9eb31a9c70c73bdcbed608b2c49022</td><td>https://github.com/capedwarf/capedwarf-blue.git</td></tr>
                <tr><td>cat</td><td>99ffe1660bb08e04c4c20f0f77a39f9686149622</td><td>https://github.com/dianping/cat.git</td></tr>
                <tr><td>cloudname</td><td>61fd8d5790d9be894a87b463fad4e69cd94f76e0</td><td>https://github.com/Cloudname/cloudname.git</td></tr>
                <tr><td>cms-ce</td><td>a779b00f26685175aaedb4cd4ea5a561e4f9198e</td><td>https://github.com/enonic/cms-ce.git</td></tr>
                <tr><td>commafeed</td><td>6a699ed5f16fa22852cdb16cb49a908d3473c1df</td><td>https://github.com/Athou/commafeed.git</td></tr>
                <tr><td>commandhelper</td><td>b8dcdb78b67896f234d698072e829287dbed9c7d</td><td>https://github.com/sk89q/commandhelper.git</td></tr>
                <tr><td>CONNECT</td><td>80cf7475c697414ce3e42e39014c85d52abbdd84</td><td>https://github.com/CONNECT-Solution/CONNECT.git</td></tr>
                <tr><td>core</td><td>aef5f83225b5c2a255c4a01f385a4795ce853d17</td><td>https://github.com/forge/core.git</td></tr>
                <tr><td>cse403</td><td>24e2467c91b75d3384fffae14d91e17e3c001a65</td><td>https://github.com/coldstar96/cse403.git</td></tr>
                <tr><td>cucumber-jvm</td><td>0aecc4d3e4c15fc34b63f848043deba2c230e35f</td><td>https://github.com/cucumber/cucumber-jvm.git</td></tr>
                <tr><td>droidplanner</td><td>dcf1988852fdf144927ce53453888ce4c350d78c</td><td>https://github.com/arthurbenemann/droidplanner.git</td></tr>
                <tr><td>DSpace</td><td>61ac9371b2714f57f4c96470b077eb37ed6b8c9c</td><td>https://github.com/DSpace/DSpace.git</td></tr>
                <tr><td>dynmap</td><td>20320c578f89d0d8e41ff992afbf2f60dff3bb65</td><td>https://github.com/webbukkit/dynmap.git</td></tr>
                <tr><td>ecms</td><td>c4479a220d78f2f1ec09888cd770d3fd1cd512ef</td><td>https://github.com/exoplatform/ecms.git</td></tr>
                <tr><td>elasticsearch</td><td>3bd33f839fd293611810ee8d79be4358213dbc52</td><td>https://github.com/elasticsearch/elasticsearch.git</td></tr>
                <tr><td>elephant-bird</td><td>61f3a8f1ba939b4fe1d43d76be181af7b5e55c51</td><td>https://github.com/kevinweil/elephant-bird.git</td></tr>
                <tr><td>ENdoSnipe</td><td>129b66087cd31cb1548b842b897febc3dfb405dc</td><td>https://github.com/endosnipe/ENdoSnipe.git</td></tr>
                <tr><td>fitnesse</td><td>893ce6be6606bbe2312a4716008280baec3fd989</td><td>https://github.com/unclebob/fitnesse.git</td></tr>
                <tr><td>flowvisor</td><td>30fbc0628b4bb3ccba187a8ce4dedeb23f35a670</td><td>https://github.com/OPENNETWORKINGLAB/flowvisor.git</td></tr>
                <tr><td>FML</td><td>1d627656b890ee9ae530687c16a2c288570b4386</td><td>https://github.com/MinecraftForge/FML.git</td></tr>
                <tr><td>furry-octo-avenger</td><td>37da50bacb62469be3f4423817c0a03f554509d7</td><td>https://github.com/iuval/furry-octo-avenger.git</td></tr>
                <tr><td>GeoGit</td><td>e92012ff85bc8f6dc99350ad1e774b82f9f95e42</td><td>https://github.com/opengeo/GeoGit.git</td></tr>
                <tr><td>geoserver</td><td>89d535a96ac16d220e7d2600fd384f04afada7bc</td><td>https://github.com/geoserver/geoserver.git</td></tr>
                <tr><td>gerrit-trigger-plugin</td><td>3e31f724712d5a6f43605f18f601ca0d18d63423</td><td>https://github.com/jenkinsci/gerrit-trigger-plugin.git</td></tr>
                <tr><td>ggc-connect</td><td>1aac49202e35f4fd1565aefa0f7d9a80c3b0e172</td><td>https://github.com/ggc-itec/ggc-connect.git</td></tr>
                <tr><td>gitblit</td><td>252dc07d7f85cc344b5919bb7c6166ef84b2102e</td><td>https://github.com/gitblit/gitblit.git</td></tr>
                <tr><td>glide</td><td>df0856b32383237fdbb672849a20dee9c73c2193</td><td>https://github.com/bumptech/glide.git</td></tr>
                <tr><td>graylog2-server</td><td>d47836bc8fad6422d9334820137cfb4e8b76b413</td><td>https://github.com/Graylog2/graylog2-server.git</td></tr>
                <tr><td>groovy-core</td><td>01309f9d4be34ddf93c4a9943b5a97843bff6181</td><td>https://github.com/groovy/groovy-core.git</td></tr>
                <tr><td>gwt-bootstrap</td><td>3d595bdfabc52c4f682fac5e27bfad7f694c15ae</td><td>https://github.com/gwtbootstrap/gwt-bootstrap.git</td></tr>
                <tr><td>gxa</td><td>c507f08f46545be97e9b90bc00123600a67f23a1</td><td>https://github.com/gxa/gxa.git</td></tr>
                <tr><td>hank</td><td>be0f1b83a038ac167f3c574a1b4c2ddf8a69db98</td><td>git://github.com/LiveRamp/hank</td></tr>
                <tr><td>hazelcast</td><td>3b4c1c5c2b7c1bc27a37d59cf7597e711f9b8487</td><td>https://github.com/hazelcast/hazelcast.git</td></tr>
                <tr><td>head</td><td>88e7df964688ca3955b38125213090297d4171a4</td><td>https://github.com/mifos/head.git</td></tr>
                <tr><td>hector</td><td>a302e68ca8d91b45d332e8c9afd7d98030b54de1</td><td>https://github.com/hector-client/hector.git</td></tr>
                <tr><td>hit</td><td>9caac9c7288627ae384e8fb2c347ff847ce3017c</td><td>https://github.com/CS340Group/hit.git</td></tr>
                <tr><td>HoloEverywhere</td><td>b870abb5ab009a5a6dbab3fb855ec2854e35e125</td><td>https://github.com/Prototik/HoloEverywhere.git</td></tr>
                <tr><td>hornetq</td><td>fdc19ebf7e456571860ec229a504bf73a2b4cb8d</td><td>https://github.com/hornetq/hornetq.git</td></tr>
                <tr><td>Hydra</td><td>2c9039f25e41ee872c30add7021361d77d6330de</td><td>https://github.com/Findwise/Hydra.git</td></tr>
                <tr><td>jackson-dataformat-protobuf</td><td>1b7fe15db7e13d72235c326bce65468bb75c0e90</td><td>git://github.com/FasterXML/jackson-dataformat-protobuf</td></tr>
                <tr><td>jackson-datatype-joda</td><td>373b2b76b5ffd10fad6eb78f14e6401badd1814c</td><td>git://github.com/FasterXML/jackson-datatype-joda</td></tr>
                <tr><td>jade4j</td><td>a95bac357b4bbedd6ed829ba131133571f1310b9</td><td>git://github.com/neuland/jade4j</td></tr>
                <tr><td>JavaBeanstalkClient</td><td>971e094639c384caa29937b6b793574c03cefd33</td><td>git://github.com/RTykulsker/JavaBeanstalkClient</td></tr>
                <tr><td>java-driver</td><td>7d7047fc78507eeb6ebb1b582eaec036461b5658</td><td>https://github.com/datastax/java-driver.git</td></tr>
                <tr><td>javapoet</td><td>34cfcdf973527ec0f3149d868e55d6600802bf9d</td><td>https://github.com/square/javapoet.git</td></tr>
                <tr><td>Java-WebSocket</td><td>58d17786958ec2b629b75de1eed00915b3e4f7c4</td><td>https://github.com/TooTallNate/Java-WebSocket.git</td></tr>
                <tr><td>jbosstools-openshift</td><td>40ce9fca876ec7138e0277ff62965275816b2c1a</td><td>https://github.com/jbosstools/jbosstools-openshift.git</td></tr>
                <tr><td>jbosstools-vpe</td><td>85ef65ceba8e900351156afa60178e5abe8617fb</td><td>https://github.com/jbosstools/jbosstools-vpe.git</td></tr>
                <tr><td>JGroups</td><td>565fa123057e966efb19f24d43975cf8ab13ceed</td><td>https://github.com/belaban/JGroups.git</td></tr>
                <tr><td>jna</td><td>e7809ac26d9f1e5034600608d7818b0750eedbfa</td><td>https://github.com/twall/jna.git</td></tr>
                <tr><td>jobConfigHistory-plugin</td><td>9fb6df23e3786f45e96ecf38e500c883a6a935d6</td><td>git://github.com/jenkinsci/jobConfigHistory-plugin</td></tr>
                <tr><td>jots</td><td>4c88c256cadf0da27be1e092044bf3bea5c0623d</td><td>git://github.com/sparhami/jots</td></tr>
                <tr><td>jsoup</td><td>1dec69d8df78aee955205d8ae8bed0dfe86056f8</td><td>https://github.com/jhy/jsoup.git</td></tr>
                <tr><td>k-9</td><td>7e43b5848412ad7c0b5a20c578c55eea0aa337d8</td><td>https://github.com/k9mail/k-9.git</td></tr>
                <tr><td>karma-exchange</td><td>0e5c24e972c0c0b2c71dc2246352e1c60a589536</td><td>https://github.com/karma-exchange-org/karma-exchange.git</td></tr>
                <tr><td>katello-api</td><td>a3b8078dc093e397bd09cf289d38368eb8e8cd5e</td><td>https://github.com/gkhachik/katello-api.git</td></tr>
                <tr><td>LogisticsPipes</td><td>f2ea777c1dc240fab2a5698e9e0bd593fbb96fc8</td><td>https://github.com/RS485/LogisticsPipes.git</td></tr>
                <tr><td>lombok</td><td>07b8af4cc5c844c9e085e2c4662df1d08221e710</td><td>https://github.com/rzwitserloot/lombok.git</td></tr>
                <tr><td>maven-android-plugin</td><td>74044942cc35f4e60f80f8d8c42a1c4ec4698363</td><td>https://github.com/jayway/maven-android-plugin.git</td></tr>
                <tr><td>mercurial-plugin</td><td>207888ccba25ed53fd0ea151f96e0dfe79e81cdf</td><td>git://github.com/jenkinsci/mercurial-plugin</td></tr>
                <tr><td>mgwt</td><td>375a318a53baf7083282c241c4f751a41ae19e0b</td><td>git://github.com/dankurka/mgwt</td></tr>
                <tr><td>mifosx</td><td>97587d90198e8a32c7a3d7f11d4ffa9423971392</td><td>https://github.com/openMF/mifosx.git</td></tr>
                <tr><td>MinecraftForge</td><td>728319cbb5b3f2691d135a109d10f56f4f601abb</td><td>https://github.com/MinecraftForge/MinecraftForge.git</td></tr>
                <tr><td>MineFactoryReloaded</td><td>68c87a84c0bacb1da2e00bbbe339964a3d451971</td><td>https://github.com/powercrystals/MineFactoryReloaded.git</td></tr>
                <tr><td>mobile-android</td><td>5bb3383768bc1f417f077472b5a17ad03ae516dc</td><td>https://github.com/photo/mobile-android.git</td></tr>
                <tr><td>modeshape</td><td>aa80376d183e944d39648f3ecc2a14ee3edb3a2f</td><td>https://github.com/ModeShape/modeshape.git</td></tr>
                <tr><td>molgenis</td><td>0de67cf2ffe6ac6d032aa9b387b1dc35035f6ae5</td><td>https://github.com/molgenis/molgenis.git</td></tr>
                <tr><td>mondrian</td><td>671c9df2558677a55d0b3b8ca7efffdcbcc571cf</td><td>https://github.com/pentaho/mondrian.git</td></tr>
                <tr><td>mongo-java-server</td><td>c121b5b82f2c0effa768961a7dc2ee7523253c92</td><td>git://github.com/bwaldvogel/mongo-java-server</td></tr>
                <tr><td>MonsterIRC</td><td>e2eaafe47758b86577ce7027aef7b66c2df615f6</td><td>https://github.com/Monstercraft/MonsterIRC.git</td></tr>
                <tr><td>MSLoggerBase</td><td>8fa875675a7460033c4e9feac23d5ba4ef096d16</td><td>https://github.com/scudderfish/MSLoggerBase.git</td></tr>
                <tr><td>mule</td><td>e0a0141b1d4dd43be4afa748d312a1af07655699</td><td>https://github.com/mulesoft/mule.git</td></tr>
                <tr><td>narayana</td><td>5b5b975bdcdba94d1efc5122639ccddee048ab48</td><td>https://github.com/jbosstm/narayana.git</td></tr>
                <tr><td>neo4j</td><td>4fe03c55acce5f3e1ba8ffefddaafa340a760b2e</td><td>https://github.com/neo4j/neo4j.git</td></tr>
                <tr><td>netty</td><td>d66cf2cbfa604048543594a7ab96bb78d1607186</td><td>https://github.com/netty/netty.git</td></tr>
                <tr><td>nexus</td><td>cd395952d84ebb786f39418699c5b921abde3e85</td><td>https://github.com/sonatype/nexus.git</td></tr>
                <tr><td>nexus-oss</td><td>6b57b79c00de5287d8f7dc71f1f04c818c07865b</td><td>https://github.com/sonatype/nexus-oss.git</td></tr>
                <tr><td>nifty-gui</td><td>ae1721052558ba6e30b8624e16443ec803ed085e</td><td>https://github.com/void256/nifty-gui.git</td></tr>
                <tr><td>objectos-dojo</td><td>b3f91a4507b625908a362726b5eb77d4c77d7bec</td><td>https://github.com/objectos/objectos-dojo.git</td></tr>
                <tr><td>OpenCCSensors</td><td>98759c7d5fb5b62a31f4e3aa85cbc93028a5295f</td><td>https://github.com/Cloudhunter/OpenCCSensors.git</td></tr>
                <tr><td>openengsb-framework</td><td>d39058000707f617cd405629f9bc7f17da7b414a</td><td>https://github.com/openengsb/openengsb-framework.git</td></tr>
                <tr><td>openmicroscopy</td><td>3d60c26ddd1574bfb21f702bb20a756585a5d767</td><td>https://github.com/openmicroscopy/openmicroscopy.git</td></tr>
                <tr><td>OpenTripPlanner</td><td>56111502763f28f391cdca41120c958843d96105</td><td>https://github.com/openplans/OpenTripPlanner.git</td></tr>
                <tr><td>Operation-Valkyrie</td><td>d652dbb6eed764898de35bd0b27b5c6d7b15cde9</td><td>https://github.com/MiloTischler/Operation-Valkyrie.git</td></tr>
                <tr><td>Paintroid</td><td>f18cfde5952b725f9382c7e364dbb2007fd0cdde</td><td>https://github.com/Catrobat/Paintroid.git</td></tr>
                <tr><td>patientview</td><td>248520f2a2e4b3fc1c8f36622b92bf2d02ba0b47</td><td>https://github.com/robworth/patientview.git</td></tr>
                <tr><td>pentaho-platform</td><td>748c021b0e70b8c3f7a3564eac50b3a42ded38f8</td><td>https://github.com/pentaho/pentaho-platform.git</td></tr>
                <tr><td>pentaho-reporting</td><td>6e34562dd2aba77e4e57efbbca021a028f906e46</td><td>https://github.com/pentaho/pentaho-reporting.git</td></tr>
                <tr><td>PermissionsEx</td><td>0fe4ee81198499366af2cd9e39333431c1a15de6</td><td>git://github.com/PEXPlugins/PermissionsEx</td></tr>
                <tr><td>phoenix</td><td>5e49d5f940f9dbd2538fb890f0cc6697068c74ac</td><td>https://github.com/forcedotcom/phoenix.git</td></tr>
                <tr><td>picasso</td><td>ebce0a70c446b32c6fd7a6f0c5bde595925ecca1</td><td>https://github.com/square/picasso.git</td></tr>
                <tr><td>picketlink</td><td>c91f1c1e0a62dbe2fe7af5e107e0ac6f177848ab</td><td>https://github.com/picketlink/picketlink.git</td></tr>
                <tr><td>Priam</td><td>e0bbaabfa61ab258f5d49c77c7417d232bde57ba</td><td>https://github.com/Netflix/Priam.git</td></tr>
                <tr><td>quickstart</td><td>1ce1c381b0563f19f1ca16bc2beab1b587fcaab6</td><td>https://github.com/jbosstm/quickstart.git</td></tr>
                <tr><td>realtalk</td><td>7478dffde69c2cf91afa2d3b8c154e557ec4ef28</td><td>https://github.com/realtalk403/realtalk.git</td></tr>
                <tr><td>reddeer</td><td>0ca7dabe5d8b568e1f22570b3eb46e89f17f29de</td><td>https://github.com/jboss-reddeer/reddeer.git</td></tr>
                <tr><td>retrofit</td><td>d41d49c5d1e7f09d8062b2521c70b858f6037edf</td><td>https://github.com/square/retrofit.git</td></tr>
                <tr><td>riak-java-client</td><td>3daaccea0127c68d3b8deaf0b9d685e85b801358</td><td>https://github.com/basho/riak-java-client.git</td></tr>
                <tr><td>rultor</td><td>978ad592342d970ac1ef94347b93603a1e4f8dc9</td><td>https://github.com/rultor/rultor.git</td></tr>
                <tr><td>RxJava</td><td>f8e2136b51ec2c90097087de3f6edd09664f3600</td><td>https://github.com/Netflix/RxJava.git</td></tr>
                <tr><td>seqware</td><td>c0f048e12d1c872b0914cb48f347f8b3f8d5f5da</td><td>https://github.com/SeqWare/seqware.git</td></tr>
                <tr><td>services</td><td>45a49b49ad7a373fe677b8fc004068c7e3ac33fd</td><td>https://github.com/collectionspace/services.git</td></tr>
                <tr><td>Silverpeas-Components</td><td>a878a97df977e854012f99423fa80de45bd99362</td><td>https://github.com/Silverpeas/Silverpeas-Components.git</td></tr>
                <tr><td>snap-desktop</td><td>b4ff1a3f95ca331028b732859ccb9971ed8e499f</td><td>https://github.com/senbox-org/snap-desktop.git</td></tr>
                <tr><td>springside4</td><td>50f76a2e82bbcc97665d320350aa0ead9bbc101b</td><td>https://github.com/springside/springside4.git</td></tr>
                <tr><td>s-ramp</td><td>a188b187d8aaa18a6169689a858f95f2c84af7ea</td><td>https://github.com/Governance/s-ramp.git</td></tr>
                <tr><td>ssGWT-lib</td><td>b7676731b333a45b31f5dbba1209792c899a5425</td><td>https://github.com/A24Group/ssGWT-lib.git</td></tr>
                <tr><td>stripe-java</td><td>889c7c7496436d9630c58efba5cb32d343321b0b</td><td>git://github.com/stripe/stripe-java</td></tr>
                <tr><td>SynapseWebClient</td><td>033ad3d04942e0930978c6d277f6f3d3bd3a6cfa</td><td>https://github.com/Sage-Bionetworks/SynapseWebClient.git</td></tr>
                <tr><td>systemsgenetics</td><td>42f79a58b9b0d6ac7c9c23a6ec9be2d14e98b00e</td><td>https://github.com/molgenis/systemsgenetics.git</td></tr>
                <tr><td>Tardis</td><td>d3a48632f8536d4cf784faadb0a4801291fc00f5</td><td>https://github.com/The-Dream-Team/Tardis.git</td></tr>
                <tr><td>testdroid-api</td><td>ed872736b42e12177b7f5e0ee1d6cec8cedcb68c</td><td>https://github.com/bitbar/testdroid-api.git</td></tr>
                <tr><td>tregmine</td><td>b158025d55f891d4b1da30dc2ecde20170f4266b</td><td>https://github.com/EmilHernvall/tregmine.git</td></tr>
                <tr><td>udig-platform</td><td>f445aae1f9dfc24e81d5f4e123caee5dd889bd5c</td><td>https://github.com/uDig/udig-platform.git</td></tr>
                <tr><td>UniversalMediaServer</td><td>82e4b11034c5272bb26c6f90687c4dbdd9f61ee7</td><td>https://github.com/UniversalMediaServer/UniversalMediaServer.git</td></tr>
                <tr><td>Vanilla</td><td>bc064f0dc283febcaf925103c931532f150e2bc3</td><td>https://github.com/VanillaDev/Vanilla.git</td></tr>
                <tr><td>vInsert</td><td>696e5fb4652c14576aa0ca33e14208eb4989022c</td><td>https://github.com/vInsertOfficial/vInsert.git</td></tr>
                <tr><td>vraptor</td><td>6c36b008e24857075df380e27463b2097b1a146b</td><td>https://github.com/caelum/vraptor.git</td></tr>
                <tr><td>vraptor4</td><td>d1120f10825d888cc8d94625b44074e27b9b745e</td><td>https://github.com/caelum/vraptor4.git</td></tr>
                <tr><td>webbit</td><td>db3b359cbad0cb75cc05d769a1eb260d3cedf038</td><td>git://github.com/webbit/webbit</td></tr>
                <tr><td>worldguard</td><td>93d454c6754db402b4eb64c21876fac3de397193</td><td>https://github.com/sk89q/worldguard.git</td></tr>
                <tr><td>xmemcached</td><td>7eb86628226e5893d8a002ed6cf0f5d9a354c6b9</td><td>git://github.com/killme2008/xmemcached</td></tr>
                <tr><td>xwiki-platform</td><td>0cf2898507eeddb2906b736427c5c39acdffe773</td><td>https://github.com/xwiki/xwiki-platform.git</td></tr>
                <tr><td>yoga</td><td>d98f6b0b2b60ff195cc6878ed54e515e639bc9da</td><td>https://github.com/skyscreamer/yoga.git</td></tr>
                <tr><td>zanata-server</td><td>82975460dc387eac9cadcc931483ea8c9281dd21</td><td>https://github.com/zanata/zanata-server.git</td></tr>
                <tr><td>ZooTypers</td><td>6aa777d921ebe1042e625b9b8e1ca7b0be629f8d</td><td>https://github.com/ZooTypers/ZooTypers.git</td></tr>
                <tr><td>zt-zip</td><td>2e80860ea7aace6413ad5601ef83e166ed4b531f</td><td>git://github.com/zeroturnaround/zt-zip</td></tr>
            </tbody>
            </table>
        </div>
      </div>
    </Layout>
);

export default McClassification;