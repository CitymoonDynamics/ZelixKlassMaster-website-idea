<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>The execute Statement</h1>
      <div class="panel">
        <h2>The execute Statement</h2>
        <h3>Examples</h3>
        <pre class="code"><code>execute "mkdir temp";
execute "copy *.txt temp";
execute "prepare.bat";</code></pre>
        <h3>Syntax</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - execute</p>
        <p>The ZKM Script execute statement executes simple operating system commands. Any error output is written to standard err and the Zelix KlassMaster(TM) log. Similarly, any normal output is written to standard out and to the Zelix KlassMaster(TM) log.</p>
        <p>execute "mkdir temp"; execute "copy *.txt temp"; execute "prepare.bat";</p>
        <p>where command is the operating system command complete with simple parameters.</p>
        <p>You can embed quotes within the command by using two consecutive quotes (ie. "") for each quote to be embedded.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"The execute Statement","url":"https://zkm-web.vercel.app/docs/executeStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - execute | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/executeStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
