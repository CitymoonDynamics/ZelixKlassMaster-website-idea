<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Java ME Plugin</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Java ME Plugin</li>
          <li>Java ME(TM) Wireless Toolkit Obfuscator Plugin Zelix KlassMaster(TM) provides an obfuscator plugin to the Sun Java ME Wireless Toolkit to allow you to obfuscate your Java ME MIDlets with a mimimum of effort. However, note that you can avoid the use of a plugin by obfuscating after preverification . Please see the Java ME Obfuscation Tutorial for more detail.</li>
          <li>This rest of this document is organized into the following sections.</li>
          <li>Setting up the plugin</li>
          <li>Running the plugin</li>
          <li>Advanced</li>
          <li>Start the Java ME Wireless Toolkit KToolBar application</li>
          <li>Open your project</li>
          <li>Select the KToolBar "Project | Package | Create Obfuscated Package" menu option</li>
        </ul>
        <pre class="code"><code>trimExclude public *.* extends javax.microedition.midlet.MIDlet;

trim        deleteSourceFileAttributes=true
            deleteDeprecatedAttributes=true
            deleteUnknownAttributes=false;

//Toolkit doesn't allow JAD to be updated so MIDlet package names must not be changed. exclude     public *.^* extends javax.microedition.midlet.MIDlet;

obfuscate   changeLogFileOut="ChangeLog.txt"
            obfuscateFlow=aggressive
            encryptStringLiterals=none
            collapsePackagesWithDefault=""
            lineNumbers=delete;</code></pre>
        <ul>
          <li>an open statement or</li>
          <li>a saveAll statement</li>
        </ul>
        <p>Java ME(TM) Wireless Toolkit Obfuscator Plugin</p>
        <p>Zelix KlassMaster(TM) provides an obfuscator plugin to the Sun Java ME Wireless Toolkit to allow you to obfuscate your Java ME MIDlets with a mimimum of effort. However, note that you can avoid the use of a plugin by obfuscating after preverification .</p>
        <p>Please see the Java ME Obfuscation Tutorial for more detail.</p>
        <p>Setting up the Zelix KlassMaster(TM) plugin involves editing the Wireless Toolkit ktools.properties file.</p>
        <p>&lt;j2mewtk.dir&gt;/wtklib/Linux/ktools.properties</p>
        <p>&lt;j2mewtk.dir&gt;/wtklib/SunOS/ktools.properties</p>
        <p>&lt;j2mewtk.dir&gt;\wtklib\Windows\ktools.properties</p>
        <p>The ktools.properties file should be edited as follows</p>
        <p>The &lt;path to ZKM.jar&gt; can be absolute or relative. If it is relative, it should be relative to &lt;j2mewtk.dir&gt; .</p>
        <p>Note that, in the Windows environment, if the obfuscator.runner.classpath value contains path separators then they must be escaped.</p>
        <p>For example, the path " c:\Projects\ZKM.jar " must be entered as " c:\\Projects\\ZKM.jar "</p>
        <p>The obfuscator.script.name entry in the ktools.properties file is not used by the Zelix KlassMaster(TM) plugin.</p>
        <p>If it is present in the file you can leave it unchanged or you can comment it out using a leading "#" character.</p>
        <p>You should not have to add, delete or modify any other entries.</p>
        <p>You run the plugin from the Java ME Wireless Toolkit KToolBar. The steps are</p>
        <p>The obfuscated JAR file and the updated JAD will be in your project directory.</p>
        <p>The Zelix KlassMaster(TM) plugin sets its default directory to the project directory of the project you have opened within the KToolBar.</p>
        <p>So the Zelix KlassMaster(TM) log file ZKM_log.txt and change log ChangeLog.txt will be written there.</p>
        <p>Zelix KlassMaster(TM) will also look in the project directory for the default exclusion file defaultExclude.txt and the default trim exclusion file defaultTrimExclude.txt .</p>
        <p>By default, the plugin will use the following internal ZKM Script which aims at a balance between size and protection against decompilation.</p>
        <p>trimExclude public *.* extends javax.microedition.midlet.MIDlet;</p>
        <p>trim deleteSourceFileAttributes=true deleteDeprecatedAttributes=true deleteUnknownAttributes=false;</p>
        <p>//Toolkit doesn't allow JAD to be updated so MIDlet package names must not be changed.</p>
        <p>exclude public *.^* extends javax.microedition.midlet.MIDlet;</p>
        <p>obfuscate changeLogFileOut="ChangeLog.txt" obfuscateFlow=aggressive encryptStringLiterals=none collapsePackagesWithDefault="" lineNumbers=delete;</p>
        <p>You can provide your own ZKM Script by putting it in a file named script.txt in your project directory.</p>
        <p>You could achieve further size reduction (at the expense of protection) by setting the ZKM Script obfuscate statement's "obfuscateFlow" parameter to "none" to switch off flow obfuscation.</p>
        <p>because these must be provided by the plugin. It would be a good idea to use the default script above as a model.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Java ME Plugin","url":"https://zkm-web.vercel.app/docs/jmePlugin"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Java ME Plugin | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/jmePlugin' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
