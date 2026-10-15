<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Obfuscate Reference Inclusions</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Obfuscate Reference Inclusions</li>
          <li>Obfuscate Reference Inclusions</li>
          <li>Overview You will only see this window if you have selected the "obfuscate references" option on the preceding "Obfuscate Options" window. The "obfuscate references" option will only have an effect if you specify field and/or method references to be obfuscated. A field or method reference is a field access or a method call. Zelix KlassMaster(TM) obfuscates references by replacing them with Reflection API calls.</li>
          <li>However, the "Obfuscate Reference Inclusions" window also allows you to interactively construct precise custom inclusion specifications. Include parameters may be added, modified and deleted from the list. If an inclusion parameter is selected in the list, an explanation of its inclusion effect appears in the lower pane.</li>
          <li>Inclusion parameter list</li>
          <li>Add button</li>
          <li>Modify button</li>
          <li>Delete button</li>
          <li>Explanation area</li>
        </ul>
        <p>You will only see this window if you have selected the "obfuscate references" option on the preceding "Obfuscate Options" window.</p>
        <p>The "obfuscate references" option will only have an effect if you specify field and/or method references to be obfuscated.</p>
        <p>A field or method reference is a field access or a method call. Zelix KlassMaster(TM) obfuscates references by replacing them with Reflection API calls.</p>
        <p>However, the "Obfuscate Reference Inclusions" window also allows you to interactively construct precise custom inclusion specifications.</p>
        <p>Include parameters may be added, modified and deleted from the list.</p>
        <p>If an inclusion parameter is selected in the list, an explanation of its inclusion effect appears in the lower pane.</p>
        <p>Shows the current inclusion parameters. Although the form of the inclusion parameters is the</p>
        <p>syntax (where "*" is a wildcard), you do not need to know this syntax.</p>
        <p>Click this button to add an inclusion parameter to the "Inclusion parameter" list.</p>
        <p>It will open the Include Parameter Type dialog.</p>
        <p>Click this button to modify the selected inclusion parameter in the "Inclusion parameter" list.</p>
        <p>Click this button to delete the selected inclusion parameter in the "Inclusion parameter" list.</p>
        <p>Displays a plain language explanation of the effect of the selected inclusion parameter in the "Inclusion parameter" list.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Obfuscate Reference Inclusions",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/obfuscateReferencesInclude"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Obfuscate Reference Inclusions"
    }
  ]
}]
useHead({
  title: 'Obfuscate Reference Inclusions | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Obfuscate Referenc | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/obfuscateReferencesInclude' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
