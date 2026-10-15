<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Trim Exclude Parameter Type</h1>
      <div class="panel">
        <h2>Class exclusion parameters</h2>
        <h3>Field exclusion parameters</h3>
        <h3>Method exclusion parameters</h3>
        <p>The Trim Exclude Parameter Type window allows you to select the type of trim exclude parameter you wish to add. There are three kinds of trim exclusion parameter.</p>
        <p>An exclusion parameter that excludes a class prevents that class from being removed. However, in itself it will not prevent the fields and the methods of that class from being removed.</p>
        <p>An exclusion parameter that excludes a field prevents that field from being removed provided its containing class is not removed.</p>
        <p>So excluding a field will not in itself prevent the containing class from being removed.</p>
        <p>Similarly, an exclusion parameter that excludes a method prevents that method from being removed provided its containing class is not removed.</p>
        <p>So, as with fields, excluding a method will not in itself prevent its containing class from being removed.</p>
        <p>If a method and its containing class are explicitly or implicitly excluded then all the classes, fields and methods that that method accesses will implicitly be excluded from being trimmed.</p>
        <p>So, for a simple, self contained application, if the public static main(java.lang.String[]) method and its containing class are excluded then all the classes, fields and methods directly or indirectly accessed by the public static main(java.lang.String[]) method will be implicitly excluded from being trimmed.</p>
        <p>This will result in all the "used" classes, fields and methods being excluded and all the "unused" classes, fields and methods being removed.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trim Exclude Parameter Type",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/trimExclusionType"
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
      "name": "Trim Exclude Parameter Type"
    }
  ]
}]
useHead({
  title: 'Trim Exclude Parameter Type | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Trim Exclude Parameter Type | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/trimExclusionType' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
