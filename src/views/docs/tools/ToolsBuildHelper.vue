<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Basics</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Build Helper</li>
          <li>Tools | Build Helper The Build Helper will guide you through the basic steps of trimming and/or obfuscating your classes. The Build Helper is handy for evaluating Zelix KlassMaster. However, because each step is executed online, using the Build Helper can be time consuming for large applications. Therefore you should consider using ZKM Script as an alternative. The Build Helper will lead you through a sequence of steps that will allow you to:</li>
          <li>set the classpath that Zelix KlassMaster(TM) should use,</li>
          <li>open your classes ,</li>
          <li>set your trim exclusions ,</li>
          <li>trim your classes ,</li>
          <li>set your name obfuscation exclusions ,</li>
          <li>obfuscate your classes ,</li>
          <li>save your trimmed and/or obfuscated classes ,</li>
          <li>save the equivalent ZKM Script to file</li>
        </ul>
        <h2>Basics</h2>
        <h3>Introduction</h3>
        <h3>Classpath</h3>
        <h3>Open Classes</h3>
        <h3>Trim Exclusions</h3>
        <h3>Trim Options</h3>
        <h3>Obfuscate Name Exclusions</h3>
        <h3>Obfuscate Options</h3>
        <h3>"Reference Obfuscation Inclusions"</h3>
        <h3>SaveAll</h3>
        <h3>Finished Build</h3>
        <h3>Equivalent ZKM Script</h3>
        <p>The Build Helper will guide you through the basic steps of trimming and/or obfuscating your classes.</p>
        <p>The Build Helper is handy for evaluating Zelix KlassMaster. However, because each step is executed online, using the Build Helper can be time consuming for large applications. Therefore you should consider using</p>
        <p>ZKM Script as an alternative. The Build Helper will lead you through a sequence of steps that will allow you to:</p>
        <p>You will be given the option to launch the Build Helper when you first start up Zelix KlassMaster.</p>
        <p>Alternately, you can start the Build Helper at any time by selecting the Tools | Build Helper menu.</p>
        <p>You advance through the dialog sequence by clicking on .</p>
        <p>To return to a previous window click on .</p>
        <p>You can exit the sequence at any time by clicking on .</p>
        <p>The Build Helper "Classpath" dialog works in exactly the same way as the</p>
        <p>The directories and archive files that you put into the classpath must already exist.</p>
        <p>Also, there must be a path to java.lang.Object .</p>
        <p>You can import or export a classpath from or to a text file by clicking on the or buttons.</p>
        <p>The Build Helper "Open Classes" dialog works in exactly the same way as the</p>
        <p>dialog. The directories and archive files that you wish to select must already exist and at least one of them must contain a class file.</p>
        <p>By default, any archives nested within selected archives will also be opened for processing.</p>
        <p>You can override this default by deselecting the open nested archives check box.</p>
        <p>The Build Helper "Trim Exclusions" dialog works in exactly the same way as the dialog called by the</p>
        <p>to skip the Trim Exclusion step entirely.</p>
        <p>The Build Helper "Trim Options" dialog works in exactly the same way as the</p>
        <p>The Build Helper "Obfuscate Name Exclusions" dialog works in exactly the same way as the</p>
        <p>The Build Helper "Obfuscate Options" dialog works in exactly the same way as the</p>
        <p>dialog called by the "Tools | Obfuscate" menu option.</p>
        <p>Your will only see this dialog if you have selected the "obfuscate references" on the previous window.</p>
        <p>The ZKM Script Helper "Reference Obfuscation Inclusions" dialog works in exactly the same way as the</p>
        <p>The Build Helper "SaveAll" dialog works in exactly the same way as the dialog you can see if you select the</p>
        <p>The directory into which you wish to save your classes must already exist or be created at this time.</p>
        <p>The Build Helper creates ZKM Script equivalent to the GUI commands entered throughout the Build Helper dialog.</p>
        <p>Click on to view and save the equivalent ZKM Script.</p>
        <p>You can now view the equivalent ZKM Script, and if you wish, save it to file. Click on</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Basics",
  "url": "https://zkm-web.vercel.app/docs/toolsBuildHelper"
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
      "name": "Basics"
    }
  ]
}]
useHead({
  title: 'Basics | Zelix KlassMaster2',
  meta: [{ name: 'description', content: 'Basics | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/toolsBuildHelper' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
