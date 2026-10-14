<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Reference Obfuscation Method Include Parameter The Method Include Parameter dialog has three facets:</li>
          <li>the specification of the method itself and</li>
          <li>the specification of the class that contains the method and</li>
          <li>the specification of the package that contains the class</li>
        </ul>
        <h3>The method itself</h3>
        <ul>
          <li>whether its access level is not specifed</li>
          <li>public</li>
          <li>protected</li>
          <li>package (i.e. default)</li>
          <li>private</li>
          <li>whether it has or doesn't have the modifiers</li>
          <li>static</li>
          <li>final</li>
          <li>synchronized</li>
          <li>native</li>
          <li>abstract</li>
          <li>its name or a "*" wildcard string that its name must match</li>
          <li>its argument types as either:</li>
          <li>no arguments</li>
          <li>"*" meaning any argument types</li>
          <li>a comma separated list of fully qualified types</li>
          <li>the exception classes that it throws. These are entered as a comma delimited list of fully qualified class names.</li>
          <li>the fully qualified class name of an annotation that a matching method must have. You can use the "*" wildcard. Do not include the '@' character.</li>
        </ul>
        <h3>The containing class</h3>
        <h3>The containing package</h3>
        <h3>Example</h3>
        <ul>
          <li>have a name matching *</li>
          <li>have the argument types matching *</li>
          <li>are contained in a class that: has a name that matches System</li>
          <li>is in a package that matches java.lang</li>
        </ul>
        <p>Reference Obfuscation Method Include Parameter</p>
        <p>The Method Include Parameter dialog has three facets:</p>
        <p>For a method reference to be included the referenced method must match the full specification.</p>
        <p>In specifying the method whose references are to be included, you can specify:</p>
        <p>To specify the containing class of the method, click the Containing class tab.</p>
        <p>The class Name method cannot be empty but a simple "*" wildcard is acceptable.</p>
        <p>To specify the containing package of the method, click the Containing package tab.</p>
        <p>If you clear the Name method then you are specifying that the class is in the default package.</p>
        <p>means include references to all methods :</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM)","url":"https://zkm-web.vercel.app/docs/includeMethodType"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/includeMethodType' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
