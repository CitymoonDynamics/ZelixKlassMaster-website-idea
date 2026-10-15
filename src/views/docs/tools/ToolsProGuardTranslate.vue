<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Tools | ProGuard Configuration Translate</h1>
      <div class="panel">
        <h2>Overview</h2>
        <h3>Basics</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - ProGuard Translate</p>
        <p>The "ProGuard Configuration Translate Tool" tool translates a ProGuard obfuscator configuration file into the equivalent ZKM Script file.</p>
        <p>Not every ProGuard configuration option is supported.</p>
        <p>You can start the ProGuard Configuration Translate Tool at any time by selecting the "Tools | ProGuard Configuration Translate" menu.</p>
        <p>The first step is to enter the ProGuard configuration that you wish to translate.</p>
        <p>You can do this by clicking on to browse for a configuration file.</p>
        <p>You can also do this by clicking on to paste the contents of the clipboard.</p>
        <p>Once the contents of the ProGuard configuration file has been entered, click on to perform the translation.</p>
        <p>The translated ZKM Script will appear in the lower area of the window.</p>
        <p>You can then click on to save the translated ZKM Script to a file.</p>
        <p>Note that if you do not specify a -dontshrink option then a ZKM Script</p>
        <p>Similarly, if you do not specify a -dontobfuscate option then a ZKM Script</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Tools | ProGuard Configuration Translate",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/toolsProGuardTranslate"
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
      "name": "Tools | ProGuard Configuration Translate"
    }
  ]
}]
useHead({
  title: 'Tools | ProGuard Configuration Translate | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Tools | ProGuard Configuration Translate | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/toolsProGuardTranslate' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
