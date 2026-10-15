<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Class Exclude Parameter The Class Exclude Parameter dialog has two facets:</li>
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
        <h3>Example</h3>
        <ul>
          <li>are public final</li>
          <li>are contained in a package whose name matches "p*"</li>
          <li>have a name that matches "C*x"</li>
          <li>are annotated by a class matching pack2.MyAnnotation0</li>
          <li>are contained in a package whose name matches "p*.*"</li>
          <li>extend pack1.Class1</li>
        </ul>
        <p>The Class Exclude Parameter dialog has two facets:</p>
        <p>For a class to be excluded it must match the full specification.</p>
        <p>In specifying the class whose name is to be excluded, you can specify:</p>
        <p>To specify the containing package, click the Containing package tab.</p>
        <p>The dialog basically works the same way as the</p>
        <p>dialog. The difference is that you are now specifying the package qualifiers of the class whose name is to be excluded.</p>
        <p>If you clear the Name field then you are specifying that the class is in the default package.</p>
        <p>If you wish to exclude the containing package name as well as the class name then you should select the</p>
        <p>@pack2.MyAnnotation0 public final p*.*.C*x extends pack1.Class1</p>
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
  "url": "https://zkm-web.vercel.app/docs/excludeClassType"
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
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster23',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/excludeClassType' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
