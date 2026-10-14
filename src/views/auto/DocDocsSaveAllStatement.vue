<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - saveAll</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - saveAll</li>
          <li>The saveAll Statement The ZKM Script saveAll statement saves all opened classes to the specified directory.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Explanation</li>
          <li>Examples</li>
          <li>Syntax</li>
          <li>Any directory specified in the " defaultDirectoryName " command line option</li>
          <li>Otherwise, it will be relative to the working directory.</li>
          <li>class files opened from jar and zip archives,</li>
          <li>non-class files such as image and properties files opened from jar and zip archives,</li>
          <li>manifest, EJB deployment descriptor and service provider files.</li>
          <li>defaultDirectoryName is the name of the directory into which the class, archive, JAD or XML files are to be saved,</li>
          <li>specificPath is the specific save path for a particular archive, JAD or XML file. The specific save path must end with the name of an archive, JAD or XML file which appears in the preceding open statement.</li>
          <li>ISO-8601_date is a date in ISO-8601 format. E.g. "2021-12-03T10:15:30Z".</li>
          <li>longDate is a date expressed as the number of milliseconds since January 1, 1970 UTC. E.g. "978310861010".</li>
        </ul>
        <p>The ZKM Script saveAll statement saves all opened classes to the specified directory.</p>
        <p>The saveAll statement saves all opened classes in their current state. If the statement follows an</p>
        <p>statement then the classes will be saved in their obfuscated state.</p>
        <p>If a directory specified by the saveAll statement doesn't exist then it will be created.</p>
        <p>If saveAll is going to overwrite an already existing archive file then it will first rename the existing file by appending the suffix ".BACKUP" to the end of its name.</p>
        <p>Any directory specified in a saveAll statement may be absolute or relative.</p>
        <p>If a specified directory is relative then it will be relative to</p>
        <p>The archiveCompression parameter allows you to determine the compression of any archive files created by the</p>
        <p>saveAll statement. By default, the saveAll statement acts as if the value of archiveCompression</p>
        <p>is asIs . The meaning of the different values of archiveCompression are listed below.</p>
        <p>If an entry in the original archive was compressed then the corresponding entry in the new archive will be compressed.</p>
        <p>If an entry in the original archive was not compressed then the corresponding entry in the new archive will not be compressed.</p>
        <p>You can optionally specify deleteEmptyDirectories=true to prevent empty directories from being written to the obfuscated archive file.</p>
        <p>The optional deleteXMLComments parameter allows you to specify that all comments in any XML files saved by the saveAll statement should be deleted.</p>
        <p>The allowable values are deleteXMLComments=false (which is the default) and deleteXMLComments=true .</p>
        <p>parameter allows you to specify the last modified date to be used when saving the obfuscated output to an archive file.</p>
        <p>This parameter is intended to be used when you have specified reproducible obfuscate output .</p>
        <p>Otherwise the saved archive file will not be identical across build because of the changing last modified dates.</p>
        <p>Typically you would specify a directory into which all opened files will be saved.</p>
        <p>However, you may also specfy specific paths into which specific opened files will be saved.</p>
        <p>Zelix KlassMaster(TM) will match the specific save path to an opened file by matching its unqualified file name with that of the the opened file.</p>
        <p>So, if the save path " \saveDirectory\Jar0.jar " is specified in a saveAll statement, then Zelix KlassMaster(TM) will look for an archive named " Jar0.jar " in the preceding open statement.</p>
        <p>The saveAll statement performs a good deal of special handling of</p>
        <p>menu option documentation for more detail.</p>
        <p>//Defaults to archiveCompression=asIs . All opened files saved into C:\Temp.</p>
        <p>//All opened files saved into "myRelativeDirectory" directory which is relative to working directory.</p>
        <p>saveAll archiveCompression=all "myRelativeDirectory";</p>
        <p>//All opened files saved into "myRelativeDirectory" directory and all comments in any XML files will be deleted.</p>
        <p>saveAll deleteXMLComments=true "myRelativeDirectory";</p>
        <p>saveAll "\Projects" //By default, opened files will be saved into \Projects</p>
        <p>"\Projects\lib\Lib0.jar" //Lib0.jar will be saved into \Projects\lib</p>
        <p>"lib\Config.xml" //Config.xml will be saved into the relative directory lib</p>
        <p>[" archiveCompression " "=" (" all " | " none " | " asIs ")]</p>
        <p>[" deleteEmptyDirectories " "=" (" true " | " false ")]</p>
        <p>[" deleteXMLComments " "=" (" true " | " false ")]</p>
        <p>[" lastModifiedTime " "=" ("\"" ISO-8601_date "\"" | "\"" longDate "\"" )]</p>
        <p>specificPath is the specific save path for a particular archive, JAD or XML file.</p>
        <p>The specific save path must end with the name of an archive, JAD or XML file which appears in the preceding</p>
        <p>You can embed quotes within the directory name by using two consecutive quotes (ie. "") for each quote to be embedded.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - saveAll","url":"https://zkm-web.vercel.app/docs/saveAllStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - saveAll | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/saveAllStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
