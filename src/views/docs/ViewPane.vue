<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>View Pane</h1>
      <div class="panel">
        <p>The lower right hand pane of the main Zelix KlassMaster(TM) window is the View pane.</p>
        <p>When an opened class has been selected in the Class Hierarchy Pane</p>
        <p>the View pane displays the field and method definitions of the class in a Java like format.</p>
        <p>When a method's properties are being viewed the View pane displays the method's instructions in assembler. The mnemonics used in the assembler are based on those used in the Java Virtual Machine Specification .</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "View Pane",
  "url": "https://zkm-web.vercel.app/docs/viewPane"
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
      "name": "View Pane"
    }
  ]
}]
useHead({
  title: 'View Pane | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'View Pane | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/viewPane' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
