<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>After Installation</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Installation</li>
          <li>Installation Zelix KlassMaster(TM) 27.0 is distributed in either a zip archive or tar.gz.</li>
          <li>The evaluation version is distributed as ZKMEval.zip or ZKMEval.tar.gz.</li>
          <li>The commercial version is distributed as ZKM.zip or ZKM.tar.gz.</li>
          <li>The full documentation is distributed separately as ZKMDocs.zip and ZKMDocs.tar.gz.</li>
          <li>the file ZKM.jar</li>
          <li>the file ZKM.class</li>
          <li>the file readme.txt</li>
          <li>the file license.html</li>
          <li>the file install.html (this file)</li>
          <li>the file defaultExclude.txt</li>
          <li>the file defaultTrimExclude.txt</li>
        </ul>
        <p>Zelix KlassMaster(TM) 27.0 is distributed in either a zip archive or tar.gz.</p>
        <p>To expand the tar.gz archive in Unix use the</p>
        <p>. In Windows both the tar.gz and zip files can be expanded using WinZip .</p>
        <p>When you expand the distribution archive, you should get</p>
        <p>Note that Zelix KlassMaster(TM) requires Java 8 (ie. JDK 1.8 or better) to run. However, it can process Java bytecode from versions 1.1 through to and including Java 27.</p>
        <p>However, note that Zelix KlassMaster(TM) version 27 requires a newer version of a Java 8 JVM to run . If you use an Oracle JVM earlier than 1.8.0_152 then you may get a JVM crash due to HotSpot bugs.</p>
        <p>The cleanest way to run Zelix KlassMaster(TM) is use the -jar parameter.</p>
        <p>Alternatively, you can put ZKM.jar into the classpath. Note that it is not enough just to put the directory containing ZKM.jar into the classpath.</p>
        <p>(The file ZKM.class exists as a separate file and as a file within ZKM.jar. The separate file exists purely to catch classpath errors and can be safely ignored.)</p>
        <p>You run Zelix KlassMaster(TM) by telling Java to run the com.zelix.ZKM class. Typically you should give the JVM more than the default amount of memory to work with. If you use the</p>
        <p>parameter then you will give the JVM 512MB of memory which should be adequate for most purposes. However, you should be sure not to give the JVM more memory than is physically available. Otherwise performance will deteriorate dramatically as the JVM starts to use virtual memory.</p>
        <p>Start Zelix KlassMaster(TM) GUI in this way</p>
        <p>NOT added ZKM.jar to the system classpath</p>
        <p>To execute a ZKM Script , you specify the path to the ZKM Script file as the last option on the command line. The basic usage is:</p>
        <p>java -jar ZKM.jar [[-options] &lt;scriptFileName&gt;]</p>
        <p>Once you have Zelix KlassMaster(TM) installed successfully, it is recommended that you read the Getting Started document.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "After Installation",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/install"
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
      "name": "After Installation"
    }
  ]
}]
useHead({
  title: 'After Installation | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'After Installation | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/install' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
