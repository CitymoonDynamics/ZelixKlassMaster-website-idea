<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Trim Options</h1>
      <div class="panel">
        <h2>Trim Options</h2>
        <h3>Overview</h3>
        <h3>Delete Source File attributes</h3>
        <h3>Delete Deprecated attributes</h3>
        <h3>Delete annotation attributes</h3>
        <h3>Delete Exception attributes</h3>
        <h3>Delete Source Debug Extension attributes</h3>
        <h3>Delete unknown file attributes</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Trim Options</p>
        <p>The Zelix KlassMaster(TM) "Trim" tool removes "unused" classes, fields and methods. It can also reduce the size of your bytecode by removing certain attributes from the bytecode. Bytecode attributes are data structures that compilers place within the bytecode that they produce. Some attributes are essential but others are optional.</p>
        <p>Select this box to remove any Source File attributes from your classes.</p>
        <p>Source File Attributes store the name of the source file that was compiled to produce a particular class.</p>
        <p>This information is typically only used to report the source file name when producing a stack trace.</p>
        <p>However, some JVMs may not display line numbers in a stack trace for a particular class unless a Source File attribute is present in that class.</p>
        <p>So, if your processed bytecode will have Line Number information (scrambled or otherwise), then you should not select this box.</p>
        <p>Select this box to remove any Deprecated attributes from your classes.</p>
        <p>Deprecated Attributes are added to class files by compilers in response to "@deprecated" javadoc parameters.</p>
        <p>Typically, these attributes are only used by compilers to determine when "deprecated" warnings should be reported.</p>
        <p>So, if you do not expect users to compile new classes against your obfuscated classes, then you can safely select this box.</p>
        <p>Select this box to remove all annotation attributes from your classes. Annotations where introduced by Java 5.</p>
        <p>Some applications require their annotation attributes to run correctly but many don't.</p>
        <p>Select this box to remove all Exception attributes from your classes. The Exception attributes are not required at runtime but are required at compile time.</p>
        <p>Select this box to remove all SourceDebugExtension attributes from your classes.</p>
        <p>Such attributes may be added to your bytecode by various utilities but are typically not required for the running of your classes.</p>
        <p>Select this box to remove any attributes from your classes that are not recognized by Zelix KlassMaster.</p>
        <p>If Zelix KlassMaster(TM) doesn't recognize an attribute then it most probably is not a standard attribute.</p>
        <p>If you select this option then Zelix KlassMaster(TM) will report the names of the unknown attributes that it deletes.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Trim Options","url":"https://zkm-web.vercel.app/docs/trimOptions"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Trim Options | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/trimOptions' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
