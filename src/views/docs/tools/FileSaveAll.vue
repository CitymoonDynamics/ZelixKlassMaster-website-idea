<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Classes Opened from Directories</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>File | Save all Zelix KlassMaster(TM) saves all opened classes in their current state. If you have used the Tools|Obfuscate menu option then the classes will be saved in their obfuscated state.</li>
          <li>Zelix KlassMaster(TM) saves class files, into the selected directory , using the current class names and the ".class" extension. It places the files into directories that reflect the classes package and will automatically create directories if necessary. So a Class named package1.Class1 will be saved in a file called Class1.class in the package1 directory.</li>
          <li>See below for more detail on</li>
          <li>Classes loaded from directories</li>
          <li>Zelix KlassMaster(TM) Smart Save's(TM) special handling of JAR, WAR, EAR and ZIP archive files including</li>
          <li>manifest files</li>
          <li>EJB deployment descriptor files</li>
          <li>service provider files</li>
          <li>Smart Save's(TM) handling of resource files such as image and properties files</li>
          <li>GUI basics</li>
        </ul>
        <h2>Classes Opened from Directories</h2>
        <h3>Smart Save's(TM) Special Handling of JAR, WAR, EAR and ZIP Archive Files</h3>
        <ul>
          <li>If a manifest file (ie. META-INF/MANIFEST.MF ) appears in a particular archive, then a manifest file will be created in the new archive. The following standard attributes will be re-created in the new manifest Manifest-Version</li>
          <li>Class-Path</li>
          <li>Main-Class</li>
          <li>Sealed</li>
          <li>Name</li>
          <li>Java-Bean</li>
          <li>If an EJB deployment descriptor file (ie. META-INF/ejb-jar.xml ) appears in a particular archive, then it will be copied to the new archive after</li>
          <li>ejb-class</li>
          <li>remote</li>
          <li>local</li>
          <li>local-home</li>
          <li>prim-key-class</li>
          <li>dependent-class</li>
          <li>method-param</li>
          <li>field-name</li>
          <li>primkey-field</li>
          <li>small-icon</li>
          <li>large-icon</li>
          <li>Spring XML files will be copied across</li>
          <li>with class names updated to reflect obfuscated names</li>
          <li>with the names of properties updated to reflect obfuscated getter and setter method names</li>
          <li>However, the default destroy-method specified in the &lt;beans&gt; tag will not be updated.</li>
          <li>Hibernate(TM) XML files will be copied across</li>
          <li>However, HQL queries embedded as strings within Java classes will not be updated.</li>
          <li>Google Android(TM) AndroidManifest.xml files will be copied across with class and package names updated to reflect obfuscated names.</li>
          <li>All other XML files will be copied to the new archive after values have been translated to reflect new obfuscated class names. These include</li>
          <li>application.xml</li>
          <li>web.xml</li>
          <li>application-client.xml</li>
          <li>tld (tag library definition)</li>
          <li>All files in the META-INF/services directory will be saved to the corresponding directory in the new archive file after</li>
          <li>the file names have been translated to reflect the new fully qualified name of the abstract service classes</li>
          <li>the names of the concrete provider classes listed within each file have been translated to reflect their new obfuscated names.</li>
          <li>The INDEX-LIST file will be copied across and updated if necessary to reflect obfuscated class names.</li>
          <li>Any SF, DSA, RSA or PGP files in the META-INF directory will NOT be copied across.</li>
        </ul>
        <h3>Smart Save's(TM) handling of Resource Files</h3>
        <h3>GUI Basics</h3>
        <ul>
          <li>below all of its parent directories and</li>
          <li>above of all of its immediate subdirectories.</li>
        </ul>
        <p>Zelix KlassMaster(TM) saves all opened classes in their current state. If you have used the</p>
        <p>menu option then the classes will be saved in their obfuscated state.</p>
        <p>Zelix KlassMaster(TM) saves class files, into the</p>
        <p>, using the current class names and the ".class" extension.</p>
        <p>It places the files into directories that reflect the classes package and will automatically create directories if necessary. So a Class named package1.Class1 will be saved in a file called Class1.class in the package1 directory.</p>
        <p>If you opened any classes directly from directories then they will be saved into corresponding directories.</p>
        <p>In the interests of safety, you should not save your classes back into the directories from which you opened them , especially if you no longer have the source code. Zelix KlassMaster(TM) will not warn you before overwriting existing class files.</p>
        <p>If you opened classes from JAR, WAR, EAR or ZIP archive files, then Zelix KlassMaster's Smart Save(TM) will save the class files to a new, identically named archive file in the selected directory .</p>
        <p>If a file with the same name already exists in the selected directory, then the existing file will be renamed by appending the ".BACKUP" extension.</p>
        <p>Zelix KlassMaster(TM) automatically handles nested archive files such an EAR archive that contains a WAR archive that contains a JAR archive.</p>
        <p>Also, it will create new archives as uncompressed if the source archive was uncompressed.</p>
        <p>The following special handling is provided for files appearing in the</p>
        <p>(ie. META-INF/MANIFEST.MF ) appears in a particular archive, then a manifest file will be created in the new archive. The following standard attributes will be re-created in the new manifest</p>
        <p>The Main-Class and Name attribute values will be translated to reflect any new obfuscated class names.</p>
        <p>However, all signing information is lost. Non-standard attributes in the main section and the entry sections of the manifest will be copied across after translation.</p>
        <p>(ie. META-INF/ejb-jar.xml ) appears in a particular archive, then it will be copied to the new archive after</p>
        <p>values have been translated to reflect new obfuscated class names and</p>
        <p>values, where they appear within an entity segment, have been translated to reflect new obfuscated field names and</p>
        <p>values have been translated to reflect potentially new obfuscated path names. Note that method names are never translated and that Zelix KlassMaster(TM) does not yet support the field and method name conventions of the EJB 2 specification.</p>
        <p>However, Zelix KlassMaster(TM) does support the the updating of EJB 3 annotations which provide an alterative to putting field and method names in XML.</p>
        <p>AndroidManifest.xml files will be copied across with class and package names updated to reflect obfuscated names.</p>
        <p>directory will be saved to the corresponding directory in the new archive file after</p>
        <p>Zelix KlassMaster(TM) Smart Save(TM) provides special handling of non-class files such as image and properties files.</p>
        <p>All non-class files contained in the an opened archive will be copied across to the corresponding archive file in the selected directory.</p>
        <p>Note that files within the META-INF directory are specially handled .</p>
        <p>If package names have been obfuscated, the paths of non-class files stored in directories corresponding to Java packages will be changed to match the new package names. Thus calls to methods such as Class.getResource(String) and Class.getResourceAsStream(String) that use relative paths will not be broken. Similar calls using absolute paths will not be broken provided the path does NOT include a Java package directory name that has been obfuscated.</p>
        <p>You may save your classes at any time by selecting the File Save all menu.</p>
        <p>This brings up the "Select a Folder" dialog.</p>
        <p>The main panel of the "Select a Folder" dialog is the directory tree . It displays the current directory</p>
        <p>The current directory can be changed by using the mouse to double click on another directory or by selecting another directory and pressing &lt;Enter&gt; (&lt;Shift&gt;&lt;Enter&gt; in Windows).</p>
        <p>is the directory that is currently highlighted in the left panel. When you press your class files will be saved.</p>
        <p>Classes that were opened directly from directories will be saved directories below the</p>
        <p>selected directory with names corresponding to the package names. Note that the package names may have been obfuscated.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Classes Opened from Directories",
  "url": "https://zkm-web.vercel.app/docs/fileSaveAll"
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
      "name": "Classes Opened from Directories"
    }
  ]
}]
useHead({
  title: 'Classes Opened from Directories | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Classes Opened from Directories | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/fileSaveAll' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
