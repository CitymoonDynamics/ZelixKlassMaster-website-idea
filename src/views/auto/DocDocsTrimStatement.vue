<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - trim</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - trim</li>
          <li>The trim Statement The ZKM Script trim statement trims all opened classes. It removes classes, fields and methods that have not been explicitly or implicitly excluded by a preceding trimExclude statement.</li>
          <li>The trim statement can also remove specified bytecode attributes.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Explanation</li>
          <li>Examples</li>
          <li>Syntax</li>
        </ul>
        <h3>deleteSourceFileAttributes parameter</h3>
        <h3>deleteDeprecatedAttributes parameter</h3>
        <h3>deleteAnnotationAttributes parameter</h3>
        <h3>deleteExceptionAttributes parameter</h3>
        <h3>deleteDebugExtensionAttributes parameter</h3>
        <h3>deleteUnknownAttributes parameter</h3>
        <pre class="code"><code>trim; //Trim using the defaults

trim deleteSourceFileAttributes=false //Don't remove Source File Attributes
     deleteDeprecatedAttributes=true  //Remove Deprecated Attributes
     deleteAnnotationAttributes=false //Don't remove annotation attributes
     deleteExceptionAttributes=false //Don't remove exception attributes
     deleteDebugExtensionAttributes=true //Remove SourceDebugExtension attributes
     deleteUnknownAttributes=false;   //Don't remove unrecognized attributes</code></pre>
        <p>The ZKM Script trim statement trims all opened classes. It removes classes, fields and methods that have not been explicitly or implicitly excluded by a preceding</p>
        <p>Set this parameter to true to remove any Source File attributes from your classes.</p>
        <p>Source File Attributes store the name of the source file that was compiled to produce a particular class.</p>
        <p>This information is typically only used to report the source file name when producing a stack trace.</p>
        <p>However, some JVMs may not display line numbers in a stack trace for a particular class unless a Source File attribute is present in that class.</p>
        <p>So, if your processed bytecode will have Line Number information (scrambled or otherwise), then you should omit this parameter or set it to false .</p>
        <p>Set this parameter to true to remove any Deprecated attributes from your classes.</p>
        <p>Deprecated Attributes are added to class files by compilers in response to "@deprecated" javadoc parameters.</p>
        <p>Typically, these attributes are only used by compilers to determine when "deprecated" warnings should be reported.</p>
        <p>So, if you do not expect users to compile new classes against your obfuscated classes, then you can safely set this parameter to true .</p>
        <p>Annotation attributes where introduced with Java 5. Set this parameter to true to remove any annotation attributes from your classes.</p>
        <p>Some applications require their annotation attributes to run correctly but many don't.</p>
        <p>You can exclude specific annotations from being removed in response to this setting by using the special annotation exclude syntax of the ZKM Script</p>
        <p>Exception attributes are used at compile time but they are not used at runtime. Set this parameter to true to remove any exception attributes from your classes.</p>
        <p>Set this parameter to true to remove any SourceDebugExtension attributes from your classes.</p>
        <p>Such attributes may be added to your bytecode by various utilities but are typically not required for the running of your classes.</p>
        <p>Set this parameter to true to remove any attributes from your classes that are not recognized by Zelix KlassMaster.</p>
        <p>If Zelix KlassMaster(TM) doesn't recognize an attribute then it most probably is not a standard attribute.</p>
        <p>If you select this option then Zelix KlassMaster(TM) will report the names of the unknown attributes that it deletes.</p>
        <p>The trim statement has useful defaults which are as follows:</p>
        <p>trim deleteSourceFileAttributes=false //Don't remove Source File Attributes</p>
        <p>deleteDeprecatedAttributes=true //Remove Deprecated Attributes</p>
        <p>deleteAnnotationAttributes=false //Don't remove annotation attributes</p>
        <p>deleteExceptionAttributes=false //Don't remove exception attributes</p>
        <p>deleteDebugExtensionAttributes=true //Remove SourceDebugExtension attributes</p>
        <p>deleteUnknownAttributes=false; //Don't remove unrecognized attributes</p>
        <p>[" deleteSourceFileAttributes " "=" (" true " | " false ")]</p>
        <p>[" deleteDeprecatedAttributes " "=" (" true " | " false ")]</p>
        <p>[" deleteAnnotationAttributes " "=" (" true " | " false ")]</p>
        <p>[" deleteExceptionAttributes " "=" (" true " | " false ")]</p>
        <p>[" deleteDebugExtensionAttributes " "=" (" true " | " false ")]</p>
        <p>[" deleteUnknownAttributes " "=" (" true " | " false ")] " ; "</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - trim","url":"https://zkm-web.vercel.app/docs/trimStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - trim | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/trimStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
