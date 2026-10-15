<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Example</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - resetTrimExclusions</li>
          <li>The resetTrimExclusions Statement</li>
          <li>The ZKM Script resetTrimExclusions statement removes</li>
          <li>all trim exclusions that may have been set by preceding trimExclude statements,</li>
          <li>all trim unexclusions that may have been set by preceding trimUnexclude statements.</li>
        </ul>
        <h2>Example</h2>
        <h3>Syntax</h3>
        <p>all trim exclusions that may have been set by preceding</p>
        <p>all trim unexclusions that may have been set by preceding</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Example",
  "url": "https://zkm-web.vercel.app/docs/resetTrimExclusionsStatement"
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
      "name": "Example"
    }
  ]
}]
useHead({
  title: 'Example | Zelix KlassMaster234',
  meta: [{ name: 'description', content: 'Example | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/resetTrimExclusionsStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
