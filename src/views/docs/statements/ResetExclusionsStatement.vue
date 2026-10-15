<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Example</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - resetExclusions</li>
          <li>The resetExclusions Statement</li>
          <li>The ZKM Script resetExclusions statement removes</li>
          <li>all exclusions that may have been set by preceding exclude statements,</li>
          <li>all unexclusions that may have been set by preceding unexclude statements.</li>
        </ul>
        <h2>Example</h2>
        <h3>Syntax</h3>
        <p>all exclusions that may have been set by preceding</p>
        <p>all unexclusions that may have been set by preceding</p>
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
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/resetExclusionsStatement"
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
      "name": "Example"
    }
  ]
}]
useHead({
  title: 'Example | Zelix KlassMaster2',
  meta: [{ name: 'description', content: 'Example | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/resetExclusionsStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
