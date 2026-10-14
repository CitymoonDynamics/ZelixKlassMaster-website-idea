<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Reference Obfuscation Field Include Parameter The Field Include Parameter dialog has three facets:</li>
          <li>the specification of the field itself and</li>
          <li>the specification of the class that contains the field and</li>
          <li>the specification of the package that contains the class</li>
        </ul>
        <h3>The field itself</h3>
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
          <li>have a name matching *</li>
          <li>are contained in a class that: has a name that matches System</li>
          <li>is in a package that matches java.lang</li>
        </ul>
        <p>Reference Obfuscation Field Include Parameter</p>
        <p>The Field Include Parameter dialog has three facets:</p>
        <p>For a field reference to be included the referenced field must match the full specification.</p>
        <p>In specifying the field whose references are to be included, you can specify:</p>
        <p>To specify the containing class of the field, click the Containing class tab.</p>
        <p>The class Name field cannot be empty but a simple "*" wildcard is acceptable.</p>
        <p>To specify the containing package of the field, click the Containing package tab.</p>
        <p>If you clear the Name field then you are specifying that the class is in the default package.</p>
        <p>means include references to all fields :</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM)","url":"https://zkm-web.vercel.app/docs/includeFieldType"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/includeFieldType' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
