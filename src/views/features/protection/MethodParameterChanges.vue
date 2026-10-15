<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Method Parameter Changes</h1>
      <div class="panel">
        <p>Changes method signatures by adding, removing or reordering parameters.</p>
        <p>Dramatically hardens string encryption, constant encryption and reference obfuscation.</p>
        <p>Foundation of the third generation flow obfuscation.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>methodParameterChangesExclude "com.acme.api.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <p>Java Obfuscation - Zelix KlassMaster(TM) - Java Method Parameter Changes</p>
        <p>The Zelix KlassMaster(TM) Method Parameter Changes functionality supports the String Encryption and Reference Obfuscation functions by "hardening" them against attack by deobfuscators.</p>
        <p>Additional parameters are added to the methods that make use of String Encryption and/or Reference Obfuscation</p>
        <p>and these new parameters are used to pass decryption keys to the supported functions.</p>
        <p>Where possible, extra parameters will also be added to calling methods such that the decryption keys will be passed through a chain of methods.</p>
        <p>The objective is to interlink the obfuscated methods and classes such that they must be attacked as a whole rather than as more manageable, individual units.</p>
        <p>This makes the String Encryption and Reference Obfuscation functions much harder to reverse or "deobfuscate".</p>
        <p>Also the Method Parameter Changes functionality allows you to specify a form of Flow Obfuscation that makes use of the new parameters.</p>
        <p>You can use either the Method Parameter Changes Flow Obfuscation implementation or the original Flow Obfuscation implementation or both together.</p>
        <p>Please see the Method Parameter Changes Tutorial for more detail.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Method Parameter Changes",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features/featuresMethodParameterChanges"
}, {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Features",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Method Parameter Changes"
    }
  ]
}]
useHead({
  title: 'Method Parameter Changes | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Method Parameter Changes | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features/featuresMethodParameterChanges' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
