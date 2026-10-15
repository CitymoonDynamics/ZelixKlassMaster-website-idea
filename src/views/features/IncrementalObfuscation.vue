<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Incremental Obfuscation</h1>
      <div class="panel">
        <p>Keeps name mappings stable across releases using the previous change log.</p>
        <p>Patches and plugins built against older releases keep linking.</p>
        <p>Feed the prior map.log as input change log on every release build.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>open "build/classes" "com.acme.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Incremental Obfuscation</li>
          <li>Incremental Java Obfuscation Zelix KlassMaster(TM) supports incremental Java obfuscation by ensuring:</li>
          <li>consistent renaming of classes, fields and methods,</li>
          <li>consistent Flow Obfuscation</li>
          <li>Java Serialization,</li>
          <li>RMI,</li>
          <li>Java Beans,</li>
          <li>the release of subsets of the classes of an obfuscated application.</li>
        </ul>
        <p>Zelix KlassMaster(TM) supports incremental Java obfuscation by ensuring:</p>
        <p>across releases of your bytecode. This allows Zelix KlassMaster(TM) to support:</p>
        <p>Please see the Change Logs and Incremental Obfuscation tutorial for more detail on incremental obfuscation.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Incremental Obfuscation",
  "url": "https://zkm-web.vercel.app/features/featuresIncrementalObfuscation"
}, {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zkm-web.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Features",
      "item": "https://zkm-web.vercel.app/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Incremental Obfuscation"
    }
  ]
}]
useHead({
  title: 'Incremental Obfuscation | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Incremental Obfuscation | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresIncrementalObfuscation' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
