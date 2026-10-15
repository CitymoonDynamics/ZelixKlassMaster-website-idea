<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Options | Garbage Collect The "Garbage Collect" option suggests to the Java Virtual Machine that it should attempt garbage collection. In theory, this option should not be required. In practice, with some Virtual Machines and when memory is low, it can be handy to select this option prior to performing a complex operation. If you are not having any memory problems then ignore this option. If you have memory problems by all means see if this option helps but, if practicable, it would be better to:</li>
          <li>Give the Virtual Machine more memory to play with by using the -XmxNNm parameter when you start Java (where NN represents the number of megabytes). By default, most JVMs allocate only 64MB. It is recommended that you don't give the Virtual Machine more memory than is physically installed. Performance is likely to be unacceptable due to virtual memory paging.</li>
          <li>Install more physical memory so that more available memory can be allocated to the JVM.</li>
        </ul>
        <p>The "Garbage Collect" option suggests to the Java Virtual Machine that it should attempt garbage collection.</p>
        <p>In theory, this option should not be required. In practice, with some Virtual Machines and when memory is low, it can be handy to select this option prior to performing a complex operation. If you are not having any memory problems then ignore this option.</p>
        <p>If you have memory problems by all means see if this option helps but, if practicable, it would be better to:</p>
        <p>Give the Virtual Machine more memory to play with by using the -XmxNNm</p>
        <p>parameter when you start Java (where NN represents the number of megabytes).</p>
        <p>By default, most JVMs allocate only 64MB. It is recommended that you don't give the Virtual Machine more memory than is physically installed. Performance is likely to be unacceptable due to virtual memory paging.</p>
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
  "url": "https://zkm-web.vercel.app/docs/optionsGC"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM)"
    }
  ]
}]
useHead({
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster2345678913',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/optionsGC' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
