<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Constant Properties</h1>
      <div class="panel">
        <p>Zelix KlassMaster(TM) lets you examine a constant's value.</p>
        <p>It no longer supports changing the value through this interface.</p>
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
  "name": "Constant Properties",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/constantProperties"
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
      "name": "Docs",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Constant Properties"
    }
  ]
}]
useHead({
  title: 'Constant Properties | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Constant Properties | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/constantProperties' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
