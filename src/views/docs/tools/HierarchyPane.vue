<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Class Hierarchy Pane</h1>
      <div class="panel">
        <p>The left pane of the main Zelix KlassMaster(TM) window is the Class Hierarchy pane.</p>
        <p>The Class Hierarchy pane shows all opened classes and interfaces in hierarchy order. Subclasses appear indented slightly to the right relative to their superclasses. Classes that have not been opened in Zelix KlassMaster(TM) but which are extended by classes that have been opened will appear as disabled list entries.</p>
        <p>It should be noted that although the Java language allows one interface to extend another, the relationship is implemented at the bytecode level as one interface implementing another.</p>
        <p>The Class Hierarchy pane does not show any implementation relationships.</p>
        <p>Select classes in the Class Hierachy pane using the mouse or the cursor keys.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Class Hierarchy Pane",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/hierarchyPane"
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
      "name": "Class Hierarchy Pane"
    }
  ]
}]
useHead({
  title: 'Class Hierarchy Pane | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Class Hierarchy Pane | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/hierarchyPane' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
