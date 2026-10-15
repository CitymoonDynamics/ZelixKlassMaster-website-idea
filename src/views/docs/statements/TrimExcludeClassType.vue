<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Trim Class Exclude Parameter The Class Exclude Parameter dialog has two facets:</li>
          <li>the specification of the class itself and</li>
          <li>the specification of the package that contains the class</li>
        </ul>
        <h2>The class itself</h2>
        <ul>
          <li>whether its access level is not specifed</li>
          <li>public</li>
          <li>package (i.e. default)</li>
          <li>whether it has or doesn't have the modifiers</li>
          <li>abstract</li>
          <li>final</li>
          <li>interface (i.e. the class is an interface)</li>
          <li>its name or a "*" wildcard string that its unqualified name must match</li>
          <li>the fully qualified name of its superclass</li>
          <li>a comma separated list of fully qualified interface names that it implements.</li>
          <li>the fully qualified class name of an annotation that a matching method must have. You can use the "*" wildcard. Do not include the '@' character.</li>
        </ul>
        <h3>The containing package</h3>
        <h3>An example</h3>
        <ul>
          <li>are annotated by a class matching pack2.MyAnnotation0</li>
          <li>are public final</li>
          <li>have a name that matches "C*x"</li>
          <li>extend pack1.Class1</li>
          <li>are contained in a package whose name matches "p*.*"</li>
        </ul>
        <p>The Class Exclude Parameter dialog has two facets:</p>
        <p>For a class to be excluded it must match the full specification.</p>
        <p>In specifying the class which is to be excluded, you can specify:</p>
        <p>To specify the containing package, click the Containing package tab.</p>
        <p>If you clear the Name field then you are specifying that the class is in the default package.</p>
        <p>@pack2.MyAnnotation0 public final p*.*.C*x extends pack1.Class1 implements java.io.Serializable, pack2.Class2</p>
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
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/trimExcludeClassType"
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
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster2345678915',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/trimExcludeClassType' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
