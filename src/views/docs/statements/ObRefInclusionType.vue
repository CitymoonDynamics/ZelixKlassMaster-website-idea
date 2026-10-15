<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Include Parameter Type</h1>
      <div class="panel">
        <h2>Field reference inclusion parameters</h2>
        <h3>Method reference inclusion parameters</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) Include Parameter Type</p>
        <p>The Include Parameter Type window allows you to select the type of obfuscate references include parameter you wish to add. There are two kinds of obfuscate references include parameter.</p>
        <p>An inclusion parameter that includes a field reference specifying that any matching field reference should be obfuscated.</p>
        <p>An inclusion parameter that includes a method reference specifying that any matching method reference should be obfuscated.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Include Parameter Type",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/obRefInclusionType"
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
      "name": "Include Parameter Type"
    }
  ]
}]
useHead({
  title: 'Include Parameter Type | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Include Parameter Type | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/obRefInclusionType' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
