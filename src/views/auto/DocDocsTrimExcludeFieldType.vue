<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Trim Field Exclude Parameter The Field Exclude Parameter dialog has three facets:</li>
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
        <h3>Example</h3>
        <ul>
          <li>that are annotated by a class matching pack2.MyAnnotation0</li>
          <li>that are static and final</li>
          <li>that are of the type java.lang.String[]</li>
          <li>have a name matching f*</li>
          <li>are contained in a class that: is public</li>
          <li>has a name that matches *</li>
          <li>is in a package that matches *</li>
          <li>implements java.io.Serializable</li>
          <li>Also exclude any class containing a matching field</li>
        </ul>
        <p>The Field Exclude Parameter dialog has three facets:</p>
        <p>For a field to be excluded it must match the full specification.</p>
        <p>In specifying the field which is to be excluded, you can specify:</p>
        <p>To specify the containing class, click the Containing class tab.</p>
        <p>The dialog basically works the same way as the</p>
        <p>dialog. The difference is that you are now specifying the containing class of the method which is to be excluded.</p>
        <p>The class Name field cannot be empty but a simple "*" wildcard is acceptable.</p>
        <p>If you wish to exclude the containing class as well as the field name then you should select the</p>
        <p>To specify the containing package, click the Containing package tab.</p>
        <p>If you clear the Name field then you are specifying that the class is in the default package.</p>
        <p>public *.*^ implements java.io.Serializable @pack2.MyAnnotation0 static final java.lang.String[] f*</p>
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
  "url": "https://zkm-web.vercel.app/docs/trimExcludeFieldType"
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
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster2345678916',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/trimExcludeFieldType' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
