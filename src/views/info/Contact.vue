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
  "url": "https://zkm-web.vercel.app/page/contact"
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
      "name": "Reference",
      "item": "https://zkm-web.vercel.app/reference"
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
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/reference.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/page/contact' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
