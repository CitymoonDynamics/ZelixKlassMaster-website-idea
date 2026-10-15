<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Zelix KlassMaster(TM) Main Browser Window</h1>
      <div class="panel">
        <p>The Zelix KlassMaster(TM) browser window contains five panes. The relative size of the</p>
        <p>Class Hierarchy Pane at the left and the</p>
        <p>View Pane at the bottom right can be adjusted by dragging the dark bar between the panes.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Zelix KlassMaster(TM) Main Browser Window",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/mainFrame"
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
      "name": "Zelix KlassMaster(TM) Main Browser Window"
    }
  ]
}]
useHead({
  title: 'Zelix KlassMaster(TM) Main Browser Window | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Zelix KlassMaster(TM) Main Browser Window | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/mainFrame' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
