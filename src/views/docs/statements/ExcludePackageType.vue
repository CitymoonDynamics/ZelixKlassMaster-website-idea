<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Package Exclude Parameter A package exclude parameter excludes the names of all matching packages. The "*" wildcard can be used to match any number of characters.</li>
          <li>Given the following list of package names:</li>
          <li>pack1.</li>
          <li>pack1.pack2.</li>
          <li>pack2.pack1.pack3.</li>
        </ul>
        <p>A package exclude parameter excludes the names of all matching packages.</p>
        <p>The "*" wildcard can be used to match any number of characters.</p>
        <p>the exclusion parameter pack1.*. will exclude from being renamed only the package names</p>
        <p>pack1.pack2 and pack1.pack2.pack3 . Note that, while the package separator character " .</p>
        <p>" is treated as a character for wildcard matching purposes, the trailing " .</p>
        <p>, the trailing " . " distinguishes a package exclude parameter from an otherwise valid class exlude parameter. If you don't enter the " .</p>
        <p>" the Package Exclude Parameter dialog will append it automatically.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM)",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/excludePackageType"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM)"
    }
  ]
}]
useHead({
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster23456',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/excludePackageType' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
