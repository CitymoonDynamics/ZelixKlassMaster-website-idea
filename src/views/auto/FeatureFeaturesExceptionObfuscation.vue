<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Exception Obfuscation</h1>
      <div class="panel">
        <p>Obfuscates exception handlers and error paths, which attackers often read first.</p>
        <p>Try catch ranges are restructured while preserving exact runtime semantics.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>obfuscateExceptionsExclude "com.acme.api.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h2>Java Exception Obfuscation</h2>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Java Exception Obfuscation</p>
        <p>Exception Obfuscation has a similar effect to Flow Obfuscation in that it changes your bytecode such that it has no direct Java source code equivalent. This of course complicates the task of a decompiler.</p>
        <p>The difference between Flow Obfuscation and Exception Obfuscation is that Exception Obfuscation makes slight changes to the exception handling of your bytecode rather than to the control flow structures.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Exception Obfuscation","url":"https://zkm-web.vercel.app/features/featuresExceptionObfuscation"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Java Exception Obfuscation | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresExceptionObfuscation' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
