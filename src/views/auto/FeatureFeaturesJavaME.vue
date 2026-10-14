<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Java ME and JEE</h1>
      <div class="panel">
        <p>Documented settings for Java ME, JEE, Spring, Hibernate and Android.</p>
        <p>Default exclusions cover common framework entry points.</p>
        <p>The FAQ lists exact settings for Android apps.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>exclude "com.acme.entities.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Java ME and JEE Support</li>
          <li>Java ME &amp; JEE Obfuscation Support The Zelix KlassMaster(TM) Java obfuscator provides support for Java ME and JEE. This support is based on:</li>
          <li>Zelix KlassMaster's ability to obfuscate bytecode before or after Java ME pre-verification so that no IDE plugin is required (see Java ME obfuscation tutorial ),</li>
          <li>default name obfuscation exclusions (which you can override if you wish),</li>
          <li>Smart Save(TM) technology which automatically adjusts EJB XML deployment descriptor files to reflect obfuscated class and field names,</li>
          <li>the ability to update class names appearing within the annotations introduced in EJB 3</li>
          <li>support for Incremental Obfuscation which ensures consistent renaming across releases.</li>
          <li>public methods inside classes annotated with @javax.ejb.Remote (required by EJB 3)</li>
          <li>public methods inside of classes that implement javax.ejb.EJBObject (required by EJBs),</li>
          <li>public methods named create inside of classes that implement javax.ejb.EJBHome (required by EJBs),</li>
        </ul>
        <p>The Zelix KlassMaster(TM) Java obfuscator provides support for Java ME and JEE. This support is based on:</p>
        <p>Zelix Klassmaster's default name exclusions ensure that critical field and method names are not changed.</p>
        <p>Examples of some names that are excluded by default are:</p>
        <p>For a complete list of the default exclusion, see the Zelix KlassMaster(TM) online documentation .</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Java ME and JEE Support","url":"https://zkm-web.vercel.app/features/featuresJavaME"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Java ME and JEE Support | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresJavaME' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
