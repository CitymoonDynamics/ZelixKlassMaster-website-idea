<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>The gc Statement</h1>
      <div class="panel">
        <h2>The gc Statement</h2>
        <h3>Examples</h3>
        <pre class="code"><code>gc;       //Ask for garbage collection then sleep for 500ms - the default. gc 1000;  //Ask for garbage collection then sleep for 1000ms.</code></pre>
        <h3>Syntax</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - gc</p>
        <p>The ZKM Script gc statement asks the Virtual Machine to perform garbage collection then puts its thread to sleep for a certain number of milliseconds. Whether garbage collection actually takes place depends upon the particular Virtual Machine. The statement puts its thread to sleep because, in some environments, garbage collection can take place asynchronously so it can be useful to give it time to do its work.</p>
        <p>In theory, this option should not be required. In practice, with some Virtual Machines and when memory is low, it can be handy place this statement prior to one that will perform a memory intensive operation.</p>
        <p>If you are not having any memory problems then ignore this option.</p>
        <p>gc; //Ask for garbage collection then sleep for 500ms - the default.</p>
        <p>gc 1000; //Ask for garbage collection then sleep for 1000ms.</p>
        <p>where integerLiteral is the number of milliseconds to sleep. The default is 500ms.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"The gc Statement","url":"https://zkm-web.vercel.app/docs/gcStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - gc | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/gcStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
