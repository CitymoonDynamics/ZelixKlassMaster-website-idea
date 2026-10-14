<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Basics</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - ZKM Script Helper</li>
          <li>Tools | ZKM Script Helper The ZKM Script Helper tool leads you through a sequence of dialogs to help you create a basic ZKM Script file. (More elaborate ZKM Scripts can be created using a simple text editor.) Although many of the dialogs in the sequence closely resemble those that can be selected directly from the menus, the ZKM Script Helper doesn't actually open, obfuscate or save your classes. You have to execute the ZKM Script that you create from the command window.</li>
          <li>Also see:</li>
          <li>Executing a ZKM Script file</li>
          <li>The ZKM Script language</li>
        </ul>
        <h3>Basics</h3>
        <h3>Introduction</h3>
        <h3>"classpath" Statement</h3>
        <h3>"open" statement</h3>
        <h3>"trimExclude" Statement</h3>
        <h3>"trim" Statement</h3>
        <h3>"exclude" Statement</h3>
        <h3>"obfuscate" Statement</h3>
        <h3>"obfuscateReferencesInclude Statement"</h3>
        <h3>"saveAll" Satement</h3>
        <h3>Finished Script</h3>
        <p>The ZKM Script Helper tool leads you through a sequence of dialogs to help you create a basic ZKM Script file.</p>
        <p>(More elaborate ZKM Scripts can be created using a simple text editor.) Although many of the dialogs in the sequence closely resemble those that can be selected directly from the menus, the ZKM Script Helper doesn't actually open, obfuscate or save your classes. You have to execute the ZKM Script that you create from the command window.</p>
        <p>You can start the ZKM Script Helper at any time by selecting the Tools | ZKM Script Helper menu.</p>
        <p>You advance through the dialog sequence by clicking on .</p>
        <p>To return to a previous window click on .</p>
        <p>You can exit the sequence at any time by clicking on .</p>
        <p>The ZKM Script Helper "classpath Statement" dialog works in exactly the same way as the</p>
        <p>The directories and archive files that you put into the classpath must already exist.</p>
        <p>Also, there must be a path to java.lang.Object .</p>
        <p>You can import or export a classpath from or to a text file by clicking on the or buttons.</p>
        <p>The ZKM Script Helper "open Statement" dialog works in exactly the same way as the</p>
        <p>dialog. Of course, no files are actually processed.</p>
        <p>Your selections are merely converted into a ZKM Script open statement.</p>
        <p>However, the directories and archive files that you wish to select must already exist and at least one of them must contain a class file.</p>
        <p>By default, any archives nested within selected archives will also be opened for processing.</p>
        <p>You can override this default by deselecting the open nested archives check box.</p>
        <p>The ZKM Script Helper "trimExclude Statement" dialog works in exactly the same way as the</p>
        <p>to skip the Trim Exclusion step entirely.</p>
        <p>The ZKM Script Helper "trim Statement" dialog works in exactly the same way as the</p>
        <p>The ZKM Script Helper "exclude Statement" dialog works in exactly the same way as the</p>
        <p>dialog you can see if you select the "Tools | Obfuscate"</p>
        <p>The ZKM Script Helper "obfuscate Statement" dialog works in exactly the same way as the</p>
        <p>Your will only see this dialog if you have selected the "obfuscate references" on the previous window.</p>
        <p>The ZKM Script Helper "obfuscateReferencesInclude Statement" dialog works in exactly the same way as the</p>
        <p>The ZKM Script Helper "saveAll Statement" dialog works in exactly the same way as the</p>
        <p>The directory into which you wish to save your classes must already exist or be created at this time.</p>
        <p>You can now view your finished ZKM Script. Click on</p>
        <p>to save it to a file. You can of course edit the file in a basic text editor to make any changes you wish.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Basics","url":"https://zkm-web.vercel.app/docs/toolsZKMScriptHelper"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - ZKM Script Helper | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/toolsZKMScriptHelper' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
