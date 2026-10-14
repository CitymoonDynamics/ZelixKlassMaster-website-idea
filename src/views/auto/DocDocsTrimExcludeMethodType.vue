<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Trim Method Exclude Parameter The Trim Method Exclude Parameter dialog has three facets:</li>
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
          <li>abstract</li>
          <li>static</li>
          <li>final</li>
          <li>native</li>
          <li>synchronized</li>
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
        <h3>An example</h3>
        <ul>
          <li>are annotated by a class matching pack2.MyAnnotation0</li>
          <li>have a name that matches "m*"</li>
          <li>have the argument type java.lang.String[]</li>
          <li>are contained in a class that: has a name that matches "*"</li>
          <li>implements java.util.Observer</li>
          <li>is contained in a package that matches "*"</li>
        </ul>
        <p>The Trim Method Exclude Parameter dialog has three facets:</p>
        <p>For a method to be excluded it must match the full specification.</p>
        <p>In specifying the method which is to be excluded, you can specify:</p>
        <p>To specify the containing class, click the Containing class tab.</p>
        <p>The dialog basically works the same way as the</p>
        <p>dialog. The difference is that you are now specifying the containing class of the method which is to be excluded.</p>
        <p>The class Name field cannot be empty but a simple "*" wildcard is acceptable.</p>
        <p>If you wish to exclude the containing class as well as the method then you should select the</p>
        <p>To specify the containing package, click the Containing package tab.</p>
        <p>If you clear the Name input field then you are specifying that the class is in the default package.</p>
        <p>*.*^ implements java.util.Observer @pack2.MyAnnotation0 m*(java.lang.String[])</p>
        <p>and exclude the containing class as well.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM)","url":"https://zkm-web.vercel.app/docs/trimExcludeMethodType"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/trimExcludeMethodType' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
