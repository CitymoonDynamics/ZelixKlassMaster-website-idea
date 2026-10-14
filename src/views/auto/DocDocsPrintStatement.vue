<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>The print Statement</h1>
      <div class="panel">
        <h2>The print Statement</h2>
        <h3>Examples</h3>
        <pre class="code"><code>print "Hello World";
print "Bye ""cruel"" World"; //cruel will appear with quotes</code></pre>
        <h3>Syntax</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - print</p>
        <p>The ZKM Script print statement writes a specified string to standard out and the Zelix KlassMaster(TM) log.</p>
        <p>It can be useful for documenting the output of complex scripts.</p>
        <p>print "Hello World"; print "Bye ""cruel"" World"; //cruel will appear with quotes</p>
        <p>where messageString is the string to write.</p>
        <p>You can embed quotes within the message string by using two consecutive quotes (ie. "") for each quote to be embedded.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"The print Statement","url":"https://zkm-web.vercel.app/docs/printStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - print | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/printStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
