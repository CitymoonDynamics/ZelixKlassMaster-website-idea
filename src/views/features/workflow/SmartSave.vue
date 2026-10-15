<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Smart Save</h1>
      <div class="panel">
        <p>Updates JAR manifests, XML descriptors and resource references on save.</p>
        <p>Handles EJB deployment descriptors and renamed main classes.</p>
        <p>Prevents broken archives after aggressive renaming.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>saveAll "dist/app-obf.jar" "dist/map.log";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Smart Save(TM)</li>
          <li>Smart Save(TM) Smart Save(TM) is a set of Zelix KlassMaster(TM) technologies that simplify the handling of</li>
          <li>JAR files ,</li>
          <li>resources such as image files,</li>
          <li>EJB deployment descriptor files,</li>
          <li>Spring(TM) , Hibernate(TM) and Google Android(TM) XML files.</li>
          <li>adjusts attributes in JAR manifest files to reflect obfuscated class names,</li>
          <li>adjusts service provider files names and contents to reflect obfuscated class names,</li>
          <li>adjusts EJB deployment descriptor (ejb-jar.xml) files to reflect obfuscated class and some field names.</li>
          <li>adjusts Spring(TM) , Hibernate(TM) , Google Android(TM) and other XML files to reflect obfuscated class names.</li>
          <li>handles nested archive files.</li>
        </ul>
        <p>Smart Save(TM) is a set of Zelix KlassMaster(TM) technologies that simplify the handling of</p>
        <p>If a class file is opened from a JAR 1 file it is saved to a corresponding JAR file.</p>
        <p>Also, all the non-class files, such as image and property files, are copied across to the new JAR file and their paths are automatically adjusted to reflect any obfuscated package names. This ensures that methods that access the resource files using relative paths will not be broken by package name obfuscation.</p>
        <p>1 ZIP, WAR and EAR files are also supported.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Smart Save",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features/featuresSmartSave"
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
      "name": "Features",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Smart Save"
    }
  ]
}]
useHead({
  title: 'Smart Save | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Smart Save | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features/featuresSmartSave' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
