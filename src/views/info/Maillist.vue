<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Reference</p>
      <h1>Zelix KlassMaster(TM) Announcements Mailing List</h1>
      <div class="panel">
        <h2>Zelix KlassMaster(TM) Announcements Mailing List</h2>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Mailing List</p>
        <p>The Zelix KlassMaster(TM) Announcements List is a low noise mailing list. Subscribers receive an e-mail when a new release of Zelix KlassMaster(TM) becomes available.</p>
        <p>You can use the form below to add yourself to or remove yourself from the list. If you add yourself to the list, you will be sent an e-mail requesting confirmation of the operation.</p>
        <p>(Note that your privacy will be respected and your e-mail address will not be passed on to third parties.)</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Zelix KlassMaster(TM) Announcements Mailing List",
  "url": "https://zkm-web.vercel.app/page/maillist"
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
      "name": "Zelix KlassMaster(TM) Announcements Mailing List"
    }
  ]
}]
useHead({
  title: 'Zelix KlassMaster(TM) Announcements Mailing List | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Zelix KlassMaster(TM) Announcements Mailing List | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/reference.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/page/maillist' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
