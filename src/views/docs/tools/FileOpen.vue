<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Basics</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>File | Open With Zelix KlassMaster(TM) you open classes by specifying directories or archive files. So to open a class you must either:</li>
          <li>load the directory in which it is stored or</li>
          <li>load the zip or jar archive file in which it is stored.</li>
        </ul>
        <h2>Basics</h2>
        <h3>Selecting Directories</h3>
        <ul>
          <li>Click on " width="48" height="26" /&gt;</li>
          <li>Click on &gt;" width="48" height="26" /&gt; or</li>
          <li>Press &lt;Ctrl&gt;&lt;Enter&gt;</li>
        </ul>
        <h3>Removing Directories</h3>
        <ul>
          <li>Click on or</li>
          <li>Double click on the directory in the Selected Folders and Archives panel or</li>
          <li>Press &lt;Delete&gt;</li>
        </ul>
        <h3>OK to Open Classes</h3>
        <p>With Zelix KlassMaster(TM) you open classes by specifying directories or archive files. So to open a class you must either:</p>
        <p>All the files with the ".class" extension in selected directories will be opened.</p>
        <p>In the case of archive files, all of the contained ".class" and XML files wil be opened.</p>
        <p>Any other files in the selected archives will be copied across when the processed archives are saved.</p>
        <p>When Zelix KlassMaster(TM) is started, it automatically opens the "Initial Helper Dialog" .</p>
        <p>If you use the "Initial Helper Dialog" , then it will lead you through to the "Open Classes" dialog.</p>
        <p>Otherwise, you may open the dialog at any time by selecting the File | Open menu.</p>
        <p>The left panel of the "Open Classes" dialog is the File Selection List .</p>
        <p>The current directory or folder is displayed in the drop down list that is above the File Selection List .</p>
        <p>The current directory can be changed by using the mouse to double click on another directory or by selecting another directory and pressing &lt;Enter&gt;.</p>
        <p>By default, any archives nested within selected archives will also be opened for processing.</p>
        <p>You can override this default by deselecting the open nested archives check box.</p>
        <p>The Selected Folders and Archives panel lists the directories and file archives that will be searched for ".class" files to open. Select a directory or archive file in the directory tree then</p>
        <p>to move it to the Selected Folders and Archives panel.</p>
        <p>to move a selected directory and all its subdirectories to the</p>
        <p>To remove a directory or archive file from the Selected Folders and Archives panel, select it and</p>
        <p>To remove all directories and archive files from the Selected Folders and Archives panel, simply click on</p>
        <p>Click on to open the ".class" files stored in the selected directories. Otherwise press</p>
        <p>Once you have all of your classes in the Selected Folders and Archives panel, click on to open the selected classes. This may result in</p>
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
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/fileOpen"
}, {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Docs",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Basics"
    }
  ]
}]
useHead({
  title: 'Basics | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Basics | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/fileOpen' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
