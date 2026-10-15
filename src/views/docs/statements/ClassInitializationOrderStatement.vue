<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - classInitializationOrder</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - classInitializationOrder</li>
          <li>The classInitializationOrder Statement The ZKM Script classInitializationOrder statement allows you to specify pairs of classes where you guarantee that the first class in the pair will definitely always be initialized at runtime before the second class under all circumstances. This information may then be used by Zelix KlassMaster&amp;#153 to improve its obfuscation. For example, under some circumstances, it may be used by Zelix KlassMaster(TM)'s Method Parameter Changes functionality to make it less vulnerable to being reversed.</li>
          <li>Note that the classInitializationOrder statement does not determine the runtime class initialization order. Rather it is a way for you to tell Zelix KlassMaster(TM) what you definitely know about the runtime class initialization order where that order could not otherwise be discerned .</li>
          <li>The classInitializationOrder statement should be used very carefully. Runtime class initialization order is not always easy to discern. If you specify a class initialization order which is incorrect under certain runtime circumstances then your obfuscated application may fail when those circumstances occur.</li>
          <li>Successive classInitializationOrder statements have a cumulative effect . Once a specification has been set its effect can be removed entirely by a following resetClassInitializationOrder statement.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
        </ul>
        <pre class="code"><code>classInitializationOrder mypackage.Class0 &gt; mypackage.Class1 and //You guarantee Class0 always initialized before Class1
                         mypackage.ClassA &gt; mypackage.ClassB     //You guarantee ClassA always initialized before ClassB
                         ;</code></pre>
        <p>The ZKM Script classInitializationOrder statement allows you to specify pairs of classes where you guarantee that the first class in the pair will definitely always be initialized at runtime before the second class under all circumstances.</p>
        <p>This information may then be used by Zelix KlassMaster&amp;#153 to improve its obfuscation.</p>
        <p>For example, under some circumstances, it may be used by Zelix KlassMaster(TM)'s Method Parameter Changes functionality to make it less vulnerable to being reversed.</p>
        <p>Note that the classInitializationOrder statement does not determine the runtime class initialization order.</p>
        <p>Rather it is a way for you to tell Zelix KlassMaster(TM) what you definitely know about the runtime class initialization order where that order could not otherwise be discerned .</p>
        <p>The classInitializationOrder statement should be used very carefully.</p>
        <p>Runtime class initialization order is not always easy to discern.</p>
        <p>If you specify a class initialization order which is incorrect under certain runtime circumstances then your obfuscated application may fail when those circumstances occur.</p>
        <p>Successive classInitializationOrder statements have a cumulative effect .</p>
        <p>Once a specification has been set its effect can be removed entirely by a following</p>
        <p>You specify class pairs as fully qualified class names separated by the "&gt;" character.</p>
        <p>The first class name in a pair indicates the class that will always be initialized first.</p>
        <p>classInitializationOrder mypackage.Class0 &gt; mypackage.Class1 and //You guarantee Class0 always initialized before Class1</p>
        <p>mypackage.ClassA &gt; mypackage.ClassB //You guarantee ClassA always initialized before ClassB</p>
        <p>" classInitializationOrder " classPair (" and " classPair) * ";"</p>
        <p>classPair ::= fullyQualifiedClassName "&gt;" fullyQualifiedClassName</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>name ::= (["0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package qualifier or class name) with no wildcards allowed</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - classInitializationOrder",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/classInitializationOrderStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - classInitializationOrder"
    }
  ]
}]
useHead({
  title: 'classInitializationOrder | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - classInitializatio | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/classInitializationOrderStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
