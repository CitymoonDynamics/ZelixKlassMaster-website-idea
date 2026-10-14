<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Serialization, RMI and Beans</h1>
      <div class="panel">
        <p>Default exclusions keep Serializable fields, RMI stubs and bean accessors working.</p>
        <p>Existing serialized classes can be pinned with dedicated statements.</p>
        <p>Review warnings when custom serialization logic is present.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>existingSerializedClasses "com.acme.model.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Serialization and RMI Support</li>
          <li>Serialization, RMI &amp; JavaBeans Obfuscation Support The Zelix KlassMaster(TM) Java obfuscator provides automatic support for Java Serialization, RMI and JavaBeans. This support is based on:</li>
          <li>default name obfuscation exclusions (which you can override if you wish),</li>
          <li>automatically adjusting the obfuscation of classes that have been specified as having pre-existing serialized instances so that the obfuscated class definition remains compatible for Serialization purposes,</li>
          <li>support for Incremental Obfuscation which ensures consistent renaming across releases.</li>
          <li>fields named serialVersionUID (required by Serialization),</li>
          <li>private methods named readObject(java.io.ObjectInputStream) (required by Serialization),</li>
          <li>_Skel and _Stub suffixes (required by RMI).</li>
        </ul>
        <p>Serialization, RMI &amp; JavaBeans Obfuscation Support</p>
        <p>The Zelix KlassMaster(TM) Java obfuscator provides automatic support for Java Serialization, RMI and JavaBeans. This support is based on:</p>
        <p>Zelix Klassmaster's default name exclusions ensure that critical field and method names are not changed.</p>
        <p>Examples of some names that are excluded by default are:</p>
        <p>For a complete list of the default exclusion, see the Zelix KlassMaster(TM) online documentation .</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Serialization and RMI Support","url":"https://zkm-web.vercel.app/features/featuresSupport"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Serialization and RMI Support | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresSupport' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
