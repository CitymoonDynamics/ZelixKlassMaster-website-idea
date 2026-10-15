<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Line Number Scrambling</h1>
      <div class="panel">
        <p>Scrambles line number tables so beta stack traces reveal nothing.</p>
        <p>Real line numbers are recoverable with the mapping file.</p>
        <p>Lets beta customers report crashes without leaking source structure.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>saveAll "dist/app-beta.jar" "dist/map.log";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h3>Java Line Number Scrambling</h3>
        <pre class="code"><code>java.lang.NullPointerException: 
        at com.mycompany.c.a(c.java)
        at com.mycompany.c.a(c.java)
        at com.mycompany.c.b(c.java)
        at com.mycompany.c.a(c.java)
        at com.mycompany.b.a(b.java)
        at com.mycompany.b.a.a(b.java)
        at com.mycompany.Main.main(Main.java)</code></pre>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Line Number Scrambling</p>
        <p>Java obfuscators remove line number debugging information from class files to save space and to provide decompilers with less information about the classes.</p>
        <p>However, if your customers hit a bug in your bytecode, they will report back to you with a stack trace like the following.</p>
        <p>java.lang.NullPointerException: at com.mycompany.c.a(c.java) at com.mycompany.c.a(c.java) at com.mycompany.c.b(c.java) at com.mycompany.c.a(c.java) at com.mycompany.b.a(b.java) at com.mycompany.b.a.a(b.java) at com.mycompany.Main.main(Main.java)</p>
        <p>Since the class com.mycompany.c will typically have been obfuscated to contain many overloaded methods with the names "a"</p>
        <p>and "b" , diagnosing the problem and reproducing the bug will be very time consuming for your developers and very frustrating for your customers.</p>
        <p>Zelix KlassMaster's Line Number Scrambling technology allows you to include scrambled line numbers in your bytecode. Decompilers are given no useful extra information about your classes but your stack traces can be translated by the Stack Trace Translate</p>
        <p>dialog to reveal the exact, original source code line number for each step in the stack trace. It can save your developers weeks of guess work.</p>
        <p>Line Number Scrambling doesn't slow down your bytecode but it does increase it's size. It is intended to be used in beta releases and in any applications that are not size sensitive.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Line Number Scrambling",
  "url": "https://zkm-web.vercel.app/features/featuresLineNumberScrambling"
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
      "name": "Line Number Scrambling"
    }
  ]
}]
useHead({
  title: 'Line Number Scrambling | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Line Number Scrambling | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresLineNumberScrambling' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
