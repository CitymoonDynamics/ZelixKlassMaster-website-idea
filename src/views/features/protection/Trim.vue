<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Trim</h1>
      <div class="panel">
        <p>Removes unused classes, fields and methods to shrink output JARs.</p>
        <p>Entry points and reflection targets need explicit exclusions.</p>
        <p>Usually combined with Name Obfuscation for maximum size reduction.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>trimExclude "com.acme.Main";
trim;</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h3>Trim</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Trim</p>
        <p>The Zelix KlassMaster(TM) trim tool can reduce the size of your application by removing the unused classes, fields and methods and the unnecessary bytecode attributes.</p>
        <p>If your application is distributed with a third party library or your own general purpose utility classes then the number of classes, fields and methods that are not actually used could be quite significant.</p>
        <p>Of course, Zelix KlassMaster(TM) has a trim exclusion facility with defaults that greatly reduce the risk of classes, fields or methods being inappropriately removed.</p>
        <p>It also is able to analyze typical Java Reflection API calls that might otherwise disguise a class, field or method use.</p>
        <p>Finally, Zelix KlassMaster(TM) produces a comprehensive "Trim Report" listing all the classes, fields and methods that have been removed.</p>
        <p>Please see the Trim Tutorial for more detail.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trim",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features/featuresTrim"
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
      "name": "Trim"
    }
  ]
}]
useHead({
  title: 'Trim | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Trim | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features/featuresTrim' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
