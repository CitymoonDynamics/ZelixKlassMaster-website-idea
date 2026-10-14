<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Obfuscating after preverification</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Java ME Tutorial</li>
          <li>Obfuscating Java ME(TM) MIDlets using Zelix KlassMaster(TM) Zelix KlassMaster(TM) can obfuscate Java ME MIDlets before or after preverification. However, it is usually easiest and most effective to obfuscate after preverification. There are two reasons for this</li>
          <li>If the preverification is done automatically by an IDE then the IDE usually requires a special obfuscation plugin that it can call between its compile and preverification steps. Unfortunately, obfuscation plugins can limit the obfuscation options available to you.</li>
          <li>If the preverification is done by a utility then that utility may not open classes from a JAR file. This can complicate your build process.</li>
        </ul>
        <h3>Obfuscating after preverification</h3>
        <h3>Obfuscating before preverification</h3>
        <h3>Suggested options</h3>
        <ul>
          <li>trim your classes after setting your trim exclusions using the ZKM Script trimExclude statement trimExclude *.* extends javax.microedition.midlet.MIDlet;</li>
          <li>obfuscate your classes after setting your name exclusions using the ZKM Script exclude statement exclude *.* extends javax.microedition.midlet.MIDlet;</li>
          <li>to reduce bytecode size you can use the following obfuscate statement parameters collapsePackagesWithDefault=""</li>
          <li>lineNumbers=delete</li>
          <li>encryptStringLiterals=none</li>
          <li>to improve bytecode protection without greatly increasing its size you can use the obfuscate statement's obfuscateFlow=light parameter.</li>
        </ul>
        <p>Obfuscating Java ME(TM) MIDlets using Zelix KlassMaster(TM)</p>
        <p>Zelix KlassMaster(TM) can obfuscate Java ME MIDlets before or after preverification.</p>
        <p>However, it is usually easiest and most effective to obfuscate after preverification.</p>
        <p>If the preverification is done by a utility then that utility may not open classes from a JAR file.</p>
        <p>If you obfuscate after preverification then Zelix KlassMaster(TM) will automatically update the preverification data structures in the bytecode.</p>
        <p>This means that you can easily add the obfuscation step to the end of your Java ME build prepocess without the need of a special IDE plugin.</p>
        <p>Note that you must include your JAD file in your ZKM Script open statement along with your JAR file so that Zelix KlassMaster(TM) can update it.</p>
        <p>Also make sure that your classpath statement contains the CLDC bootstrap classes rather than the Standard Edition bootstrap classes.</p>
        <p>Zelix KlassMaster(TM) must use the CLDC versions of classes such as java.lang.Object and java.lang.Throwable .</p>
        <p>If you obfuscate before preverification then you may need a special plugin.</p>
        <p>There is a Zelix KlassMaster(TM) plugin for the Sun Wireless Toolkit but it does slightly limit the obfuscation options that you can specify.</p>
        <p>For example the Toolkit doesn't allow Zelix KlassMaster(TM) to update the JAD so MIDlet fully qualified names cannot be changed.</p>
        <p>trim your classes after setting your trim exclusions using the ZKM Script trimExclude statement</p>
        <p>trimExclude *.* extends javax.microedition.midlet.MIDlet;</p>
        <p>obfuscate your classes after setting your name exclusions using the ZKM Script exclude statement</p>
        <p>exclude *.* extends javax.microedition.midlet.MIDlet;</p>
        <p>to reduce bytecode size you can use the following obfuscate statement parameters</p>
        <p>to improve bytecode protection without greatly increasing its size you can use the</p>
        <p>obfuscate statement's obfuscateFlow=light parameter.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Obfuscating after preverification","url":"https://zkm-web.vercel.app/docs/jmeTutorial"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Java ME Tutorial | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/jmeTutorial' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
