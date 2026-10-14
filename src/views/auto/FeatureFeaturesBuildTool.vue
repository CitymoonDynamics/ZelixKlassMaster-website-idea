<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Build Tool Interface</h1>
      <div class="panel">
        <p>Runs ZKM Scripts from Ant, Maven and Gradle.</p>
        <p>Obfuscation becomes one step of the CI pipeline.</p>
        <p>API access available for custom build tooling.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>// Called from build.xml, pom.xml or build.gradle</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h3>Java Build Tool Interface</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Build Tool Interface</p>
        <p>Zelix KlassMaster(TM) provides a special interface that allows you to execute a ZKM Script from within a build tool such as</p>
        <p>Apache Ant , Apache Maven or Gradle . The interface consists of a simple Java method call. It allows you to fully integrate Zelix KlassMaster's obfuscation into your build cycle.</p>
        <p>For more information, please see the Zelix KlassMaster(TM) online documentation .</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Build Tool Interface","url":"https://zkm-web.vercel.app/features/featuresBuildTool"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Build Tool Interface | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresBuildTool' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
