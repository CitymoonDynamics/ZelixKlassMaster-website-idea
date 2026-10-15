<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Example</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - saveAllOld</li>
          <li>The saveAllOld Statement Please note that the saveAllOld statement is obsolete and it will eventually be removed from the ZKM Script language.</li>
          <li>The ZKM Script saveAllOld statement saves all opened classes to the specified directory. It has the limited functionality of the saveAll statement as it was in Zelix KlassMaster(TM) 2.4 and earlier. It was created to allow version 2.4 ZKM Scripts to be easily modified to work exactly as intended with Zelix KlassMaster(TM) 2.5 and later.</li>
          <li>Explanation The saveAllOld statement saves all opened classes in their current state. If the statement follows an obfuscate statement then the classes will be saved in their obfuscated state. If the directory specified by the saveAllOld statement doesn't exist then it will be created.</li>
          <li>The saveAllOld statement does not perform any of special handling of</li>
          <li>class files opened from jar and zip archives,</li>
          <li>non-class files such as image and properties files opened from jar and zip archives,</li>
          <li>manifest, EJB deployment descriptor and service provider files</li>
        </ul>
        <h2>Example</h2>
        <h3>Syntax</h3>
        <p>Please note that the saveAllOld statement is obsolete and it will eventually be removed from the ZKM Script language.</p>
        <p>The ZKM Script saveAllOld statement saves all opened classes to the specified directory.</p>
        <p>statement as it was in Zelix KlassMaster(TM) 2.4 and earlier.</p>
        <p>It was created to allow version 2.4 ZKM Scripts to be easily modified to work exactly as intended with Zelix KlassMaster(TM) 2.5 and later.</p>
        <p>The saveAllOld statement saves all opened classes in their current state. If the statement follows an</p>
        <p>statement then the classes will be saved in their obfuscated state.</p>
        <p>If the directory specified by the saveAllOld statement doesn't exist then it will be created.</p>
        <p>that is performed by the saveAll statement. Only class files are saved and they are only saved to the directory structure.</p>
        <p>" saveAllOld " "\"" directoryName "\"" ";"</p>
        <p>where directoryName is the name of the directory into which the class files are to be saved.</p>
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
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/saveAllOldStatement"
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
  title: 'Example | Zelix KlassMaster2345',
  meta: [{ name: 'description', content: 'Example | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/saveAllOldStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
