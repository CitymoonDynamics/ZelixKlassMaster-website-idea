<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Method Parameter Obfuscation</h1>
      <div class="panel">
        <p>Hides method parameter lists. Invented by Zelix.</p>
        <p>Callers and targets are rewritten together so behavior is unchanged.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>methodParameterObfuscationExclude "com.acme.api.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h2>Obfuscation using Method Parameter Obfuscation</h2>
        <p>Java Obfuscation - Zelix KlassMaster(TM) - Java Method Parameter Obfuscation</p>
        <p>The Zelix KlassMaster(TM) Method Parameter Obfuscation functionality obscures method parameter lists by replacing all parameters with a single Object[] parameter.</p>
        <p>This functionality is intended to be used in conjunction with Name Obfuscation .</p>
        <p>For example, the following list of method signatures:</p>
        <p>List getCustomerOrders(Customer, Date, Date, long)</p>
        <p>Please see the Method Parameter Obfuscation Tutorial for more detail.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Obfuscation using Method Parameter Obfuscation","url":"https://zkm-web.vercel.app/features/featuresMethodParameterObfuscation"}
useHead({ title: 'Java Obfuscation - Zelix KlassMaster(TM) - Java Method Parameter Obfuscation | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresMethodParameterObfuscation' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
