<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Field Exclude Parameter The Field Exclude Parameter dialog has three facets:</li>
          <li>the specification of the field itself and</li>
          <li>the specification of the class that contains the field and</li>
          <li>the specification of the package that contains the class</li>
        </ul>
        <h2>The field itself</h2>
        <ul>
          <li>whether its access level is not specifed</li>
          <li>public</li>
          <li>protected</li>
          <li>package (i.e. default)</li>
          <li>private</li>
          <li>whether it has or doesn't have the modifiers</li>
          <li>static</li>
          <li>final</li>
          <li>volatile</li>
          <li>transient</li>
          <li>its name or a "*" wildcard string that its name must match</li>
          <li>the fully qualified name of its type</li>
          <li>the fully qualified class name of an annotation that a matching method must have. You can use the "*" wildcard. Do not include the '@' character.</li>
        </ul>
        <h3>The containing class</h3>
        <h3>The containing package</h3>
        <h3>Examples</h3>
        <ul>
          <li>are annotated by a class matching pack2.MyAnnotation0</li>
          <li>are NOT static and are NOT transient</li>
          <li>are contained in a class that: implements java.io.Serializable or a subclass of java.io.Serializable</li>
          <li>are public static final</li>
          <li>are of the type java.lang.String[]</li>
          <li>have a name that matches "f*"</li>
          <li>are contained in a class that: is public final</li>
          <li>has a name that matches "*"</li>
          <li>extends pack1.Class1</li>
          <li>is contained in the default package</li>
        </ul>
        <p>The Field Exclude Parameter dialog has three facets:</p>
        <p>For a field to be excluded it must match the full specification.</p>
        <p>In specifying the field whose name is to be excluded, you can specify:</p>
        <p>To specify the containing class, click the Containing class tab.</p>
        <p>The dialog basically works the same way as the</p>
        <p>dialog. The difference is that you are now specifying the containing class of the field whose name is to be excluded.</p>
        <p>The class Name field cannot be empty but a simple "*" wildcard is acceptable.</p>
        <p>If you wish to exclude the containing class name as well as the field name then you should select the</p>
        <p>To specify the containing package, click the Containing package tab.</p>
        <p>dialog. The difference is that you are now specifying the package qualifiers of the class containing the field whose name is to be excluded.</p>
        <p>If you clear the Name field then you are specifying that the class is in the default package.</p>
        <p>If you wish to exclude the containing package name as well as the field name then you should select the</p>
        <p>*.* implements java.io.Serializable @pack2.MyAnnotation0 !static !transient *</p>
        <p>implements java.io.Serializable or a subclass of java.io.Serializable</p>
        <p>public final * extends pack1.Class1 public static final java.lang.String[] f*</p>
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
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/excludeFieldType"
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
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster234',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/excludeFieldType' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
