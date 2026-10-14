<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>AutoReflection</h1>
      <div class="panel">
        <p>Detects Reflection API calls that static analysis cannot fully resolve.</p>
        <p>Handles them automatically instead of forcing manual exclusions.</p>
        <p>Saves days of configuration on reflection heavy codebases.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>accessedByReflection "com.acme.plugin.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h3>AutoReflection(TM)</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - AutoReflection(TM)</p>
        <p>The Java(TM) Reflection API allows you to access classes, fields or methods by name.</p>
        <p>Of course, Name Obfuscation can change the names of classes, fields and methods. This means that Name Obfuscation can break Reflection API calls.</p>
        <p>Zelix KlassMaster(TM) automatically handles Java Reflection API calls that it can fully analyze by updating the String literal that holds the class, field or method name to reflect the corresponding obfuscated name.</p>
        <p>However, some Reflection API calls are too complicated for this approach. In such cases you would normally have to explicitly exclude the class, field or method being accessed by name from being Name Obfuscated.</p>
        <p>The task of identifying such cases can be quite time consuming. This is particularly the case if you are obfuscating 3rd party classes.</p>
        <p>Zelix KlassMaster(TM)'s AutoReflection(TM) functionality solves this problem by automatically handling complicated Java Reflection API calls.</p>
        <p>This can dramatically reduce the amount of work that you have to do if you are obfuscating classes containing complex or obscure Reflection API calls.</p>
        <p>Please see the AutoReflection(TM) Tutorial for more detail.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"AutoReflection(TM)","url":"https://zkm-web.vercel.app/features/featuresAutoReflection"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - AutoReflection(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresAutoReflection' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
