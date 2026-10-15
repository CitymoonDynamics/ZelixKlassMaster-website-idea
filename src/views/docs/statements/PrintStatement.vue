<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>The print Statement</h1>
      <div class="panel">
        <h2>Examples</h2>
        <pre class="code"><code>print "Hello World";
print "Bye ""cruel"" World"; //cruel will appear with quotes</code></pre>
        <h3>Syntax</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - print</p>
        <p>The ZKM Script print statement writes a specified string to standard out and the Zelix KlassMaster(TM) log.</p>
        <p>It can be useful for documenting the output of complex scripts.</p>
        <p>print "Hello World"; print "Bye ""cruel"" World"; //cruel will appear with quotes</p>
        <p>where messageString is the string to write.</p>
        <p>You can embed quotes within the message string by using two consecutive quotes (ie. "") for each quote to be embedded.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "The print Statement",
  "url": "https://zkm-web.vercel.app/docs/printStatement"
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
      "name": "The print Statement"
    }
  ]
}]
useHead({
  title: 'The print Statement | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'The print Statement | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/printStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
