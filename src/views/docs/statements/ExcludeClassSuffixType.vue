<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Class Suffix Exclude Parameter The Class Suffix Exclude Parameter dialog has two facets:</li>
          <li>the specification of the class whose name ends with the suffix and</li>
          <li>the specification of the package that contains the class</li>
          <li>its specified suffix is excluded from being renamed</li>
          <li>if a class X can be found that has a name matching the non-suffix part of the matching class's name then the non-suffix part of the matching class's name will be renamed to the new name of that the class X .</li>
          <li>RMI (e.g. the _Stub and _Skel suffixes) and</li>
          <li>Java Beans (e.g. the BeanInfo and Customizer suffixes) scenarios.</li>
        </ul>
        <h2>The class itself</h2>
        <ul>
          <li>its suffix</li>
          <li>the fully qualified name of its superclass</li>
          <li>a comma separated list of fully qualified interface names that it implements.</li>
        </ul>
        <h3>The containing package</h3>
        <h3>An example</h3>
        <ul>
          <li>are annotated by a class matching pack2.MyAnnotation0</li>
          <li>have a name the ends in _Stub</li>
          <li>extend java.rmi.server.RemoteStub</li>
          <li>are contained in a package that matches "*"</li>
        </ul>
        <p>The Class Suffix Exclude Parameter dialog has two facets:</p>
        <p>For a class to match a class suffix exclude parameter it must match the full specification.</p>
        <p>If a class matches a class suffix exclude parameter</p>
        <p>For example, for a class suffix exclude parameter &lt;link&gt;_Stub , the suffix _Stub</p>
        <p>will be excluded from being renamed in a hypothetical class named Class1_Stub . If there is a class in the same package named Class1 and if when obfuscating, Class1 is renamed to abc , then the class Class1_Stub</p>
        <p>The class suffix exclude parameter is useful for situations in the:</p>
        <p>In specifying the class whose suffix is to be excluded, you can specify:</p>
        <p>To specify the containing package, click the Containing package tab.</p>
        <p>The dialog basically works the same way as the</p>
        <p>dialog. The difference is that you are now specifying the package qualifiers of the class whose suffix is to be excluded.</p>
        <p>If you clear the Name input field then you are specifying that the class is in the default package.</p>
        <p>@pack2.MyAnnotation0 *.&lt;link&gt;_Stub extends java.rmi.server.RemoteStub</p>
        <p>means exclude the suffix and link the non-suffix part of the names of classes that:</p>
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
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/excludeClassSuffixType"
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
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster2',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/excludeClassSuffixType' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
