<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Automatic handling of references in XML, manifest and JAD files</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Trim</li>
          <li>Tools | Trim</li>
          <li>Overview Applications can often contain unused classes, fields or methods. This can happen if your application</li>
          <li>includes a class library that it doesn't fully utilize,</li>
          <li>contains general purpose utility classes that are not fully utilized.</li>
          <li>automatic handling of references in XML, manifest and JAD files</li>
          <li>GUI basics</li>
        </ul>
        <h2>Automatic handling of references in XML, manifest and JAD files</h2>
        <h3>Detail</h3>
        <ul>
          <li>"Trim Exclusions"</li>
          <li>"Trim Options"</li>
        </ul>
        <p>Applications can often contain unused classes, fields or methods. This can happen if your application</p>
        <p>Bytecode can also contain attributes that are not necessary for the running of your application.</p>
        <p>(Bytecode attributes are data structures that compilers place within the bytecode that they produce.)</p>
        <p>The Zelix KlassMaster(TM) trim tool can reduce the size of your application by removing the unused classes, fields and methods and the unnecessary bytecode attributes.</p>
        <p>The magnitude of the size reduction depends upon the number of unused classes, fields and methods and unnecessary attributes present.</p>
        <p>Text files such as XML, manifest and JAD files typically contain references to classes.</p>
        <p>If these files are contained within an archive that has been opened for obfuscation then Zelix KlassMaster(TM) will analyze them and automatically exclude the referenced classes from being trimmed.</p>
        <p>Zelix KlassMaster(TM) can also automatically exclude some field names from being trimmed if they appear in certain tags within certain XML files.</p>
        <p>For example, fields appearing in a field-name tag in a META-INF/ejb-jar.xml file will be automatically excluded from being trimmed.</p>
        <p>However, the automatic exclusion of fields is not as comprehensive as the automatic exclusion of classes.</p>
        <p>Once your classes are open, you may trim them at any time by selecting the Tools | Trim menu.</p>
        <p>The trim dialog consists of two windows.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Automatic handling of references in XML, manifest and JAD files",
  "url": "https://zkm-web.vercel.app/docs/toolsTrim"
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
      "name": "Automatic handling of references in XML, manifest and JAD files"
    }
  ]
}]
useHead({
  title: 'Automatic handling of references in XML, manifest and J | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Automatic handling of references in XML, manifest and JAD fi | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/toolsTrim' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
