<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Field Properties Zelix KlassMaster(TM) lets you examine a field's</li>
          <li>name.</li>
          <li>access modifier (i.e. default, public, protected or private).</li>
          <li>other modifiers (i.e. static, final, volatile and transient).</li>
        </ul>
        <p>Zelix KlassMaster(TM) lets you examine a field's</p>
        <p>Zelix KlassMaster(TM) no longer supports changing any details through this interface.</p>
        <p>So the and buttons are no longer active.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM)",
  "url": "https://zkm-web.vercel.app/docs/fieldProperties"
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
      "name": "Docs",
      "item": "https://zkm-web.vercel.app/docs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Java Obfuscator - Zelix KlassMaster(TM)"
    }
  ]
}]
useHead({
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster234567',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/fieldProperties' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
