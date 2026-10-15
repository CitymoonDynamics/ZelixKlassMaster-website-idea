<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Detail</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Obfuscate</li>
          <li>Tools | Obfuscate</li>
          <li>Overview Java class (bytecode) files can be decompiled back to Java source code. There is little you can do to your bytecode to prevent this. However, Zelix KlassMaster(TM) can obfuscate your bytecode so that the source code produced by a decompiler is much less readable. As a side effect, obfuscation can reduce the size of your bytecode so your classes can move across networks more quickly.</li>
          <li>Zelix KlassMaster(TM) has the following obfuscation features:</li>
          <li>it provides name obfuscation of your packages, classes, fields and methods,</li>
          <li>it provides flow obfuscation that changes most selection (eg. if...else) and loop (eg. while and for) constructs so that they have no direct Java language equivalent.</li>
          <li>it can encrypt your String literals to make decompiled source code less readable.</li>
          <li>it can collapse your package structure to reduce overall bytecode size,</li>
          <li>it has sophisticated yet easy to use Name Exclusion functionality that gives you fine control over which names are obfuscated.</li>
          <li>it can retain scrambled line numbers in your bytecode so that beta test errors can be easily diagnosed without giving decompilers any extra information.</li>
          <li>it can produce a detailed Change Log recording all name changes and provides a Stack Trace Translation tool to help you interpret it.</li>
          <li>it can take an existing Change Log as input so that you get consistent renaming and flow obfuscation across releases. This is important if you use RMI and serialization or if you wish to distribute only the changed subset of your application in the form of a patch.</li>
          <li>it handles RMI , JavaBeans &amp;#153, EJB 1 and EJB 3 (if implemented using annotations) by default .</li>
        </ul>
        <h2>Detail</h2>
        <ul>
          <li>Obfuscate Name Exclusions</li>
          <li>Obfuscate Options</li>
          <li>Obfuscate References Include</li>
        </ul>
        <p>Java class (bytecode) files can be decompiled back to Java source code.</p>
        <p>There is little you can do to your bytecode to prevent this.</p>
        <p>However, Zelix KlassMaster(TM) can obfuscate your bytecode so that the source code produced by a decompiler is much less readable. As a side effect, obfuscation can reduce the size of your bytecode so your classes can move across networks more quickly.</p>
        <p>it can produce a detailed Change Log recording all name changes and provides a</p>
        <p>it can take an existing Change Log as input so that you get consistent renaming and flow obfuscation across releases.</p>
        <p>This is important if you use RMI and serialization or if you wish to distribute only the changed subset of your application in the form of a patch.</p>
        <p>Note that the ability to exclude specific methods from flow obfuscation is available only through the ZKM Script interface.</p>
        <p>The obfuscation tool works on all open classes . It cannot obfuscate classes that have not been opened.</p>
        <p>So you should open your application as a whole so that all references between classes can be updated appropriately.</p>
        <p>Once your classes are open, you may obfuscate them at any time by selecting the Tools | Obfuscate menu.</p>
        <p>The obfuscation dialog consists of two or three windows depending upon the options which you select.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Detail",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/toolsObfuscate"
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
      "name": "Detail"
    }
  ]
}]
useHead({
  title: 'Detail | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Detail | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/toolsObfuscate' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
