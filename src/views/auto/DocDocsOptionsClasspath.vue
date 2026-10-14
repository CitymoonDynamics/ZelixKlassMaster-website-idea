<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Options | Classpath Zelix KlassMaster(TM) will not change a method name if it would</li>
          <li>break a polymorphic link with a method defined in a class that hasn't been opened or</li>
          <li>create a new polymorphic link with a method defined in a class that hasn't been opened.</li>
        </ul>
        <p>Zelix KlassMaster(TM) will not change a method name if it would</p>
        <p>To do this, Zelix KlassMaster(TM) must examine class (bytecode) files that haven't been opened using the File Open dialog. It searches for unloaded class files using the classpath as it has been set within your system. You may alter the classpath using the "Classpath" dialog.</p>
        <p>Note that this dialog only changes the classpath inside Zelix KlassMaster(TM) .</p>
        <p>The directories and archive files that you put into the classpath must already exist.</p>
        <p>Also, there must be a path to java.lang.Object .</p>
        <p>After specifying a classpath, you can export it to a text file by clicking on the button.</p>
        <p>Similarly, you can import a saved classpath from a text file by clicking on the button.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM)","url":"https://zkm-web.vercel.app/docs/optionsClasspath"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/optionsClasspath' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
