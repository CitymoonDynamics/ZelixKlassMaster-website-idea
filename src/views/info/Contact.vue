<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Reference</p>
      <h1>ContactUs</h1>
      <div class="panel">
        <h2>ContactUs</h2>
        <h3>Mailing address</h3>
        <h3>E-mail</h3>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ContactUs",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/page/contact"
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
      "name": "Reference",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/reference"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "ContactUs"
    }
  ]
}]
useHead({
  title: 'ContactUs | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'ContactUs | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/reference.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/page/contact' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
