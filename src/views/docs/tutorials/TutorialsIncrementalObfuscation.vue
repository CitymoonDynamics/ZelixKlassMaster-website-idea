<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Incremental Obfuscation Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Incremental Obfuscation Tutorial</li>
          <li>Change Logs and Incremental Obfuscation Tutorial This tutorial is organized into the following sections.</li>
          <li>Change Logs</li>
          <li>Input Change Logs</li>
          <li>Incremental Obfuscation</li>
          <li>old names to new names,</li>
          <li>original source line numbers to scrambled line numbers (if you used Line Number Scrambling),</li>
          <li>flow obfuscation data (if you used flow obfuscation).</li>
          <li>to translate any stack trace you might get if your bytecode contains some bugs,</li>
          <li>to use as an input change log when you obfuscate future releases so that objects are consistently renamed. This is called incremental obfuscation .</li>
        </ul>
        <pre class="code"><code>java.lang.NullPointerException: 
        at a.a.b.gp.a(gp.java:101)
        at a.a.b.gp.a(gp.java:457)
        at a.a.b.gp.b(gp.java:13)
        at a.a.b.gp.a(gp.java:501)
        at a.a.b.b.a(b.java:4)
        at a.a.b.b.a(b.java:98)
        at Main.main(Main.java:433)</code></pre>
        <ul>
          <li>the same new names are assigned to each particular package, class, field and method in all releases,</li>
          <li>flow obfuscation is consistent across releases.</li>
          <li>for Java Serialization support,</li>
          <li>if you wish to release just a subset of your application's classes in the form of a patch.</li>
          <li>you always open and obfuscate all of the classes of your application even if you intend to release just the changed subset,</li>
          <li>your output and input change logs have different names so that one does not overwrite the other. You don't want to accidentally loose your only copy of a change log.</li>
          <li>specify allClassesOpened=false on your obfuscate statement,</li>
          <li>set the classpath so that the unobfuscated versions of all the unopened classes of the application can been located,</li>
          <li>specify an input change log which contains mappings for all the unopened classes of the application.</li>
        </ul>
        <p>Change Logs and Incremental Obfuscation Tutorial</p>
        <p>This tutorial is organized into the following sections.</p>
        <p>You should always let Zelix KlassMaster(TM) produce a change log when you perform your final obfuscation and then store it a safe place.</p>
        <p>to use as an input change log when you obfuscate future releases so that objects are consistently renamed.</p>
        <p>This is called incremental obfuscation .</p>
        <p>This is the kind of stack trace you may get from an obfuscated application.</p>
        <p>java.lang.NullPointerException: at a.a.b.gp.a(gp.java:101) at a.a.b.gp.a(gp.java:457) at a.a.b.gp.b(gp.java:13) at a.a.b.gp.a(gp.java:501) at a.a.b.b.a(b.java:4) at a.a.b.b.a(b.java:98) at Main.main(Main.java:433)</p>
        <p>Without the change log that was produced when the application was obfuscated, the stack trace will be close to indecipherable.</p>
        <p>Note that if you have a change log, you can use the Stack Trace Translate tool to help you decipher stack traces.</p>
        <p>You can specify that a change log should be used as a guide when assigning new names to packages, classes, fields and methods.</p>
        <p>When a change log is used in this way it is refered to as an input change log .</p>
        <p>Input change logs are the basis of Zelix KlassMaster's incremental obfuscation .</p>
        <p>When you are using the ZKM Script obfuscate statement, you can specify more than one input change log.</p>
        <p>If more than one input change log is specified then the change logs are effectively merged.</p>
        <p>Change logs appearing first in the list have precedence over those appearing later in the list.</p>
        <p>By default, Zelix KlassMaster(TM) will honour the mappings in an input change log and it will give those mappings precedence over any name obfuscation exclusion settings that may be in place. So input change log mappings overrule your exclusion settings.</p>
        <p>This strictness is essential for incremental obfuscation.</p>
        <p>However, the obfuscate statement also allows you to specify "loose" input change logs.</p>
        <p>An input change log is specified as "loose" if the looseChangeLogFileIn rather than the changeLogFileIn parameter is used with the obfuscate statement. Loose input change logs are different in that your exclusion settings take precedence over the change log mappings. They are typically only useful when you need to produce a slightly different build for some special purpose.</p>
        <p>They are not suitable for incremental obfuscation because the slight changes that can result could break compatibility with previous releases.</p>
        <p>Incremental Obfuscation is the ability to consistently obfuscate subsequent versions of your bytecode such that:</p>
        <p>Zelix KlassMaster(TM) supports incremental obfuscation through its input change log functionality.</p>
        <p>The change log generated when the previous version was obfuscated is specified as the input change log when the next release is obfuscated. However, note that it is recommended that:</p>
        <p>your output and input change logs have different names so that one does not overwrite the other.</p>
        <p>You don't want to accidentally loose your only copy of a change log.</p>
        <p>Having said the above, Zelix KlassMaster(TM) does provide a limited ability to open only part of an application and successfully obfuscate it.</p>
        <p>Zelix KlassMaster(TM) will automatically update references in opened classes to the names of objects that have not been opened using the input change log as a guide.</p>
        <p>However, this automatic processing applies to name obfuscation and not to the Trim function.</p>
        <p>If you are using the Trim function and opening just a subset of your application then you must explicitly set your trim exclusions to reflect this.</p>
        <p>Zelix KlassMaster(TM) will not trace for accesses to opened classes from classes which have not been opened.</p>
        <p>Similarly, some advanced features such as AutoReflection , Reference Obfuscation and Method Parameter Changing do not support the allClassesOpened=false setting.</p>
        <p>Finally, it is recommended that if you are not opening the application as a whole then you should at least open archive files as complete units.</p>
        <p>So, if your application consists of three archive files A.jar , B.jar and C.jar</p>
        <p>then it is recommended that you open or not open each of the three archives as a whole and not open just a subset of the classes in any of the archives.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Incremental Obfuscation Tutorial",
  "url": "https://zkm-web.vercel.app/docs/incrementalObfuscation"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Incremental Obfuscation Tutorial"
    }
  ]
}]
useHead({
  title: 'Incremental Obfuscation Tutorial | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Incremental Obfusc | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/incrementalObfuscation' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
