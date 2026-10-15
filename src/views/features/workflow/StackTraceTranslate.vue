<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Stack Trace Translate</h1>
      <div class="panel">
        <p>GUI tool that decodes obfuscated stack traces back to real names.</p>
        <p>Loads the mapping file produced during the obfuscated build.</p>
        <p>Makes production debugging effortless after full renaming.</p>
        <img src="/img/stackTraceTranslate0.avif" alt="Stack Trace Translate tool screenshot" loading="lazy" style="max-width: 100%; border: 1px solid #d7dee5;">
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>saveAll "dist/app-obf.jar" "dist/map.log";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h3>Stack Trace Translate</h3>
        <pre class="code"><code>Exception in thread "main" 
   java.lang.NullPointerException
      at a.a.c.a(c.java:7)
      at a.a.b.a(b.java:7)
      at a.a.a.a(a.java:3)
      at a.a.a.main(a.java:10)</code></pre>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate</p>
        <p>A major disadvantage of obfuscating Java bytecode is that it complicates the interpretation of the stack traces that are generated should the bytecode contain a bug. This problem is exacerbated by the fact that obfuscated methods tend to be highly overloaded.</p>
        <p>If a bug is reported by a customer then a stack trace like the one that follows may be all you have to work with.</p>
        <p>Exception in thread "main" java.lang.NullPointerException at a.a.c.a(c.java:7) at a.a.b.a(b.java:7) at a.a.a.a(a.java:3) at a.a.a.main(a.java:10)</p>
        <p>Zelix KlassMaster's Stack Trace Translate tool allows you to quickly interpret the contents of an obfuscated stack trace.</p>
        <p>The tool performs an advanced analysis of the obfuscated bytecode that usually allows it to identify a single original method signature for each obfuscated method name in the stack trace even if the stack trace contains no line numbers .</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Stack Trace Translate",
  "url": "https://zkm-web.vercel.app/features/featuresStackTraceTranslate"
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
      "name": "Features",
      "item": "https://zkm-web.vercel.app/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Stack Trace Translate"
    }
  ]
}]
useHead({
  title: 'Stack Trace Translate | Zelix KlassMaster2',
  meta: [{ name: 'description', content: 'Stack Trace Translate | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresStackTraceTranslate' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
