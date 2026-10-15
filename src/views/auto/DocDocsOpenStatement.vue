<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - open</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - open</li>
          <li>The open Statement The ZKM Script open statement opens class files and Java ME JAD files for processing by Zelix KlassMaster. Successive open statements do not have a cumulative effect. It is highly recommended that you open your classes for obfuscation using the same relative directory and/or archive structure that will be used at runtime. If you do this then your obfuscated application can be deployed in exactly the same way as the original, unobfuscated application.</li>
          <li>Any non-class files contained in opened archive files will be copied across to the corresponding saved archive files. Some of these files may be updated to reflect obfuscated names. See the File | SaveAll documentation for more detail.</li>
          <li>Skip and Unskip If you open an archive that contains nested JAR , ZIP , WAR or RAR archives then the nested archives will also be opened for obfuscation. This typically happens in the case of JEE EAR or WAR archives. Occassionally this can cause a problem where your EAR contains a nested third party JAR that you don't want to obfuscate. In such cases you can use the -"x.ear!y.war!WEB-INF/lib/z.jar" syntax to tell Zelix KlassMaster(TM) to not open (i.e. "skip") a specified nested archive file. Note that although "skipped" classes will not be opened for obfuscation they will still be saved to the specified output archive along with the obfuscated classes. They will also be appended to the effective classpath.</li>
          <li>You can also use the -"x.jar!com/mycompany/MyClass.class" syntax to tell Zelix KlassMaster(TM) to not open (i.e. "skip") a specified class or XML file within an archive. You can use the -"com/mycompany/MyClass.class" syntax to tell Zelix KlassMaster(TM) to not open (i.e. "skip") a specified class or XML file from the file system (i.e. not from within an archive). However, if you "skip" any classes then you must make sure that those classes does not access any of the classes that are to be obfuscated.</li>
          <li>If you have specified a broad "skip" clause then you can use a narrower "unskip" to reduce the scope of that "skip" clause. The syntax is +"x.jar!com/mycompany/MyClass.class" The "unskip" must be at the same archive level as the "skip" that it narrows.</li>
          <li>Note that if a non-class file contained in an opened archive is specified in a "skip" clause then it will still be copied across to the saved archive. However, it will not be analyzed or updated to reflect obfuscated names as described above.</li>
          <li>By contrast, a non-class file opened from the file system (as opposed to contained in an opened archive) which is also specified in a "skip" clause simply will not be opened and therefore will not be saved with the obfuscated output.</li>
          <li>Note that it is highly recommended that a "skip" or "unskip" clause that is intended to match files that have been opened from the file system (as opposed to from an archive) should specify its path as fully as possible. Please see the example immediately below.</li>
          <li>open "C:\directory1\com\mycompany\*.class" //Open all classes in C:\directory1\com\mycompany -"C:\directory1\com\mycompany\X.class" //Don't open X.class -"com\mycompany\Y.class" //Relative path so will match Y.class only if default directory is C:\directory1 ; Also note that "skip" or "unskip" clauses are not supported when they target a top level source path which specifies an entire directory and all of its sub-directories. Again, please see the example immediately below.</li>
          <li>open "C:\directory1\*" //Open all classes in C:\directory1 and its sub-directories. -"C:\directory1\com\mycompany\X.class" //Will not be applied against "C:\directory1\*" so will be ignored ;</li>
          <li>openNestedArchives As mentioned above, by default, any archives nested within opened archives will also be opened for processing. You can override this behavior be specifying openNestedArchives=false . (The default of course is openNestedArchives=true .) Specifying openNestedArchives=false will have the same effect as specifying nested archive in "skip" clauses.</li>
          <li>File Filtering You can tell Zelix KlassMaster(TM) to totally ignore certain files by specifying a file filter. Note that this is fundamentally different from the "skip" and "unskip" syntax that is mentioned above. File filters can specify class or non-class files and filtered files will not be copied to the save destination. Also filtered classes will not be appended to the effective classpath. Note that file filter specifications will be processed before any "skip" clauses.</li>
          <li>A file filter specification must immediately follow the open clause (i.e path specification) to which is is to apply. A file in the associated open clause will be processed only if it matches the full file filter specification. A file filter specification can be simple like {"*.class"} which means that only class files should be processed. It can be negative like {!"MANIFEST.MF"} which means don't match any manifest file. Finally, it can be complex like {"*.class" &amp;&amp; !"Class0.class" || "*.xml" &amp;&amp; !"Junk.xml"} which means match and process all class and XML files but not Class0.class or Junk.xml. Note that the &amp;&amp; operator takes precedence over the || operator.</li>
          <li>Expected SHA 256 hashes If you have specified reproducible obfuscate output then you can optionally make use of the expectedInitial_SHA256 and expectedFinal_SHA256 parameters. The expectedInitial_SHA256 parameter allows you to specify the expected SHA-256 hash of a top level file that you are opening for obfuscation. The expectedFinal_SHA256 parameter allows you to specify the expected final SHA-256 hash of a top level file that you are saving after obfuscation.</li>
          <li>In either case, if the actual hash does not match then it will result in a fatal error.</li>
          <li>Examples</li>
          <li>open "C:\directory1\Class1.class" //a single class file "C:\directory1\MyJar.jar" //all the class files in a single jar "C:\directory2" //all the class files in a single directory "C:\directory3\*" //all the class files in a single directory AND its subdirectories "C:\directory1\MyJar.jad" //Java ME JAD file will be associated with the JAR it specifies "C:\directory4\*.jar" //all the JAR files in directory4 "C:\directory5\Config.xml" //XML file Config.xml "C:\directory6\*.xml" //all the XML files in directory ; open "C:\directory1\MyEar.ear" //Open the EAR and all its nested WAR and JAR files //Don't open the archive X.jar (in the WEB-INF/lib/ directory) nested within MyWar.war nested within MyEar.ear -"MyEar.ear!MyWar.war!WEB-INF/lib/X.jar" //Don't open ANY zip file archive (in the WEB-INF/lib/ directory) nested within MyWar.war nested within MyEar.ear -"MyEar.ear!MyWar.war!WEB-INF/lib/*.zip" //Unskip (i.e. open) special.zip (in the WEB-INF/lib/ directory) nested within MyWar.war nested within MyEar.ear +"MyEar.ear!MyWar.war!WEB-INF/lib/special.zip" //Don't open any class file within the package com/mycompany within MyJar.jar nested within MyEar.ear -"MyEar.ear!MyJar.jar!com/mycompany/*.class" //Unskip (i.e. open) the class file com/mycompany/MyClass.class within MyJar.jar nested within MyEar.ear +"MyEar.ear!MyJar.jar!com/mycompany/MyClass.class" ; open openNestedArchives=false //Don't open any archives nested withing the WAR "C:\directory1\MyWar.war" ; open "C:\directory1\com\mycompany\*.class" //Open all classes in C:\directory1\com\mycompany "C:\directory1\com\mycompany\*.xml" //Open all xml files in C:\directory1\com\mycompany -"C:\directory1\com\mycompany\X.class" //Don't open the class X.class -"C:\directory1\com\mycompany\Y.xml" //Don't open the XML file Y.xml ; //File filter examples open "MyJar0.jar" {"*.class"} //match all class files "MyJar1.jar" {!"MANIFEST.MF"} //match all files except for the manifest //match all class files except Class0 and match all XML files. "&amp;&amp;" takes precedence. "MyJar2.jar" {!"*.class" &amp;&amp; !"Class0.class" || "*.xml"} ; //Expected hash examples open "MyJar0.jar" {"*.class"} expectedInitial_SHA256="bbf5eaa55d8c875d431f51a898b4ee6d9603f6dbd777d5e89b534db8939b6d22" expectedFinal_SHA256="6a59669b8975413c64acd13e334667453442c1f2582643c2ee7daad0e9b4e3bc" "MyJar2.jar" ;</li>
          <li>Explanation The statement's action for each of the sourceName types is Type Action class file Open the specified class file ZIP file Open all class files stored in the ZIP file JAR file Open all class files stored in the JAR file EAR file Open all class files stored in the nested WAR , JAR or RAR files directory Open all class files stored in the directory directory followed by an "*" Open all class files stored in the directory and all of its subdirectories Java ME JAD file Open the JAD file and associate it with the opened JAR that it specifies XML file Open the XML file from the file system. Note that any XML file within an opened archive will be automatically opened. Properties or Yaml file Open the properties or Yaml from the file system. Note that any properties or Yaml files within an opened archive will be automatically opened.</li>
          <li>Syntax " open " [" openNestedArchives " "=" (" true " | " false ")]</li>
          <li>("\"" sourceName "\"" [fileFilter] [expectedInitial_SHA256] [expectedFinal_SHA256]) +</li>
          <li>("-" "\"" skipName "\"") | ("+" "\"" unSkipName "\"")) *</li>
          <li>";"</li>
          <li>fileFilter ::= simpleFileFilter | fileFilterOrList</li>
          <li>simpleFileFilter ::= ["!"] "{" "\"" filterString "\"" "}"</li>
          <li>fileFilterOrList ::= fileFilterAndList ("||" fileFilterAndList) *</li>
          <li>fileFilterAndList ::= simpleFileFilter ("&amp;&amp;" simpleFileFilter) *</li>
          <li>expectedInitial_SHA256 ::= "expectedInitial_SHA256" "=" "\"" hashString "\""</li>
          <li>expectedFinal_SHA256 ::= "expectedFinal_SHA256" "=" "\"" hashString "\""</li>
          <li>where</li>
          <li>sourceName is the fully qualified pathname of a:</li>
          <li>class file or</li>
          <li>JAR file or</li>
          <li>EAR file or</li>
          <li>WAR file or</li>
          <li>RAR file or</li>
          <li>ZIP file or</li>
          <li>directory or</li>
          <li>directory followed by an "*" or</li>
          <li>Java ME JAD file or</li>
          <li>properties file or</li>
          <li>Yaml or</li>
          <li>XML file.</li>
          <li>directory0\*.class OR</li>
          <li>directory1\*\*.jar OR</li>
          <li>directory2\dir*\*.xml</li>
          <li>skipName is the path to a nested archive, class file or XML file that should NOT be opened. The levels of nesting must be separated by "!" characters. Note that a skipName can contain "*" wildcards in the final file name which may be an archive name. For example:</li>
          <li>x.ear!y.war!WEB-INF/lib/myJar.jar OR</li>
          <li>x.ear!y.war!WEB-INF/lib/*.jar OR</li>
          <li>x.jar!com/mycompany/*.class OR</li>
          <li>C:\directory1\com\mycompany\*.class</li>
          <li>x.ear!y.war!WEB-INF/*/myJar.jar OR</li>
          <li>x.ear!y.war!WEB-INF/*/myXml.xml OR</li>
          <li>x.jar!com/mycompany/*/myClass.class</li>
          <li>unSkipName is the path to a nested archive, class file or XML file that should be removed from a corresponding broader "skip" exclusion and therefore SHOULD be opened. The levels of nesting must be separated by "!" characters. As in the case of a skipName , the unSkipName can contain "*" wildcards in the final file name which may be an archive name or in the path that qualifies the final file name. If there is no corresponding broader skipName ("skip" exclusion) then the unSkipName ("unskip" exclusion) will have no effect.</li>
          <li>filterString is a file name or the final part of a file path. It may contain the "*" wildcard.</li>
          <li>*.class OR</li>
          <li>MANIFEST.MF OR</li>
          <li>myDirectory/*.xml</li>
          <li>hashString is a SHA-256 file hash. E.g. "e0391f6ac33ac9b687439b1d0a35a0a9fa02c053fd338c9e17bcb6df74b0d759"</li>
        </ul>
        <p>The ZKM Script open statement opens class files and Java ME JAD files for processing by Zelix KlassMaster. Successive</p>
        <p>open statements do not have a cumulative effect.</p>
        <p>It is highly recommended that you open your classes for obfuscation using the same relative directory and/or archive structure that will be used at runtime.</p>
        <p>If you do this then your obfuscated application can be deployed in exactly the same way as the original, unobfuscated application.</p>
        <p>Any non-class files contained in opened archive files will be copied across to the corresponding saved archive files. Some of these files may be updated to reflect obfuscated names.</p>
        <p>See the File | SaveAll documentation for more detail.</p>
        <p>If you open an archive that contains nested JAR , ZIP , WAR or RAR archives then the nested archives will also be opened for obfuscation. This typically happens in the case of JEE EAR or WAR archives.</p>
        <p>Occassionally this can cause a problem where your EAR contains a nested third party JAR that you don't want to obfuscate.</p>
        <p>In such cases you can use the -"x.ear!y.war!WEB-INF/lib/z.jar" syntax to tell Zelix KlassMaster(TM) to not open (i.e. "skip") a specified nested archive file.</p>
        <p>Note that although "skipped" classes will not be opened for obfuscation they will still be saved to the specified output archive along with the obfuscated classes.</p>
        <p>They will also be appended to the effective classpath.</p>
        <p>You can also use the -"x.jar!com/mycompany/MyClass.class" syntax to tell Zelix KlassMaster(TM) to not open (i.e. "skip") a specified class or XML file within an archive.</p>
        <p>You can use the -"com/mycompany/MyClass.class" syntax to tell Zelix KlassMaster(TM) to not open (i.e. "skip") a specified class or XML file from the file system (i.e. not from within an archive).</p>
        <p>However, if you "skip" any classes then you must make sure that those classes does not access any of the classes that are to be obfuscated.</p>
        <p>If you have specified a broad "skip" clause then you can use a narrower "unskip" to reduce the scope of that "skip" clause.</p>
        <p>The syntax is +"x.jar!com/mycompany/MyClass.class"</p>
        <p>The "unskip" must be at the same archive level as the "skip" that it narrows.</p>
        <p>Note that if a non-class file contained in an opened archive is specified in a "skip" clause then it will still be copied across to the saved archive.</p>
        <p>However, it will not be analyzed or updated to reflect obfuscated names as described above.</p>
        <p>Note that it is highly recommended that a "skip" or "unskip" clause that is intended to match files that have been opened from the file system (as opposed to from an archive) should specify its path as fully as possible.</p>
        <p>Please see the example immediately below.</p>
        <p>open "C:\directory1\com\mycompany\*.class" //Open all classes in C:\directory1\com\mycompany</p>
        <p>-"C:\directory1\com\mycompany\X.class" //Don't open X.class</p>
        <p>-"com\mycompany\Y.class" //Relative path so will match Y.class only if default directory is C:\directory1</p>
        <p>Also note that "skip" or "unskip" clauses are not supported when they target a top level source path which specifies an entire directory and all of its sub-directories.</p>
        <p>Again, please see the example immediately below.</p>
        <p>open "C:\directory1\*" //Open all classes in C:\directory1 and its sub-directories.</p>
        <p>-"C:\directory1\com\mycompany\X.class" //Will not be applied against "C:\directory1\*" so will be ignored</p>
        <p>As mentioned above, by default, any archives nested within opened archives will also be opened for processing. You can override this behavior be specifying openNestedArchives=false .</p>
        <p>(The default of course is openNestedArchives=true .) Specifying openNestedArchives=false will have the same effect as specifying nested archive in "skip" clauses.</p>
        <p>You can tell Zelix KlassMaster(TM) to totally ignore certain files by specifying a file filter.</p>
        <p>Note that this is fundamentally different from the "skip" and "unskip" syntax that is mentioned above.</p>
        <p>File filters can specify class or non-class files and filtered files will not be copied to the save destination.</p>
        <p>Also filtered classes will not be appended to the effective classpath.</p>
        <p>Note that file filter specifications will be processed before any "skip" clauses.</p>
        <p>A file filter specification must immediately follow the open clause (i.e path specification) to which is is to apply.</p>
        <p>A file in the associated open clause will be processed only if it matches the full file filter specification.</p>
        <p>A file filter specification can be simple like {"*.class"} which means that only class files should be processed.</p>
        <p>It can be negative like {!"MANIFEST.MF"} which means don't match any manifest file.</p>
        <p>Finally, it can be complex like {"*.class" &amp;&amp; !"Class0.class" || "*.xml" &amp;&amp; !"Junk.xml"} which means match and process all class and XML files but not Class0.class or Junk.xml.</p>
        <p>Note that the &amp;&amp; operator takes precedence over the || operator.</p>
        <p>If you have specified reproducible obfuscate output then you can optionally make use of the</p>
        <p>expectedInitial_SHA256 and expectedFinal_SHA256 parameters.</p>
        <p>The expectedInitial_SHA256 parameter allows you to specify the expected SHA-256 hash of a top level file that you are opening for obfuscation.</p>
        <p>The expectedFinal_SHA256 parameter allows you to specify the expected final SHA-256 hash of a top level file that you are saving after obfuscation.</p>
        <p>open "C:\directory1\Class1.class" //a single class file</p>
        <p>"C:\directory1\MyJar.jar" //all the class files in a single jar</p>
        <p>"C:\directory2" //all the class files in a single directory</p>
        <p>"C:\directory3\*" //all the class files in a single directory AND its subdirectories</p>
        <p>"C:\directory1\MyJar.jad" //Java ME JAD file will be associated with the JAR it specifies</p>
        <p>"C:\directory4\*.jar" //all the JAR files in directory4</p>
        <p>"C:\directory5\Config.xml" //XML file Config.xml</p>
        <p>"C:\directory6\*.xml" //all the XML files in directory</p>
        <p>open "C:\directory1\MyEar.ear" //Open the EAR and all its nested WAR and JAR files</p>
        <p>//Don't open the archive X.jar (in the WEB-INF/lib/ directory) nested within MyWar.war nested within MyEar.ear</p>
        <p>-"MyEar.ear!MyWar.war!WEB-INF/lib/X.jar"</p>
        <p>//Don't open ANY zip file archive (in the WEB-INF/lib/ directory) nested within MyWar.war nested within MyEar.ear</p>
        <p>-"MyEar.ear!MyWar.war!WEB-INF/lib/*.zip"</p>
        <p>//Unskip (i.e. open) special.zip (in the WEB-INF/lib/ directory) nested within MyWar.war nested within MyEar.ear</p>
        <p>+"MyEar.ear!MyWar.war!WEB-INF/lib/special.zip"</p>
        <p>//Don't open any class file within the package com/mycompany within MyJar.jar nested within MyEar.ear</p>
        <p>-"MyEar.ear!MyJar.jar!com/mycompany/*.class"</p>
        <p>//Unskip (i.e. open) the class file com/mycompany/MyClass.class within MyJar.jar nested within MyEar.ear</p>
        <p>+"MyEar.ear!MyJar.jar!com/mycompany/MyClass.class" ;</p>
        <p>open openNestedArchives=false //Don't open any archives nested withing the WAR</p>
        <p>"C:\directory1\com\mycompany\*.xml" //Open all xml files in C:\directory1\com\mycompany</p>
        <p>-"C:\directory1\com\mycompany\X.class" //Don't open the class X.class</p>
        <p>-"C:\directory1\com\mycompany\Y.xml" //Don't open the XML file Y.xml</p>
        <p>open "MyJar0.jar" {"*.class"} //match all class files</p>
        <p>"MyJar1.jar" {!"MANIFEST.MF"} //match all files except for the manifest</p>
        <p>//match all class files except Class0 and match all XML files. "&amp;&amp;" takes precedence.</p>
        <p>"MyJar2.jar" {!"*.class" &amp;&amp; !"Class0.class" || "*.xml"} ;</p>
        <p>open "MyJar0.jar" {"*.class"} expectedInitial_SHA256="bbf5eaa55d8c875d431f51a898b4ee6d9603f6dbd777d5e89b534db8939b6d22" expectedFinal_SHA256="6a59669b8975413c64acd13e334667453442c1f2582643c2ee7daad0e9b4e3bc" "MyJar2.jar" ;</p>
        <p>The statement's action for each of the sourceName types is</p>
        <p>Open all class files stored in the ZIP file</p>
        <p>Open all class files stored in the JAR file</p>
        <p>Open all class files stored in the nested WAR , JAR or RAR files</p>
        <p>Open all class files stored in the directory</p>
        <p>Open all class files stored in the directory and all of its subdirectories</p>
        <p>Open the JAD file and associate it with the opened JAR that it specifies</p>
        <p>Open the XML file from the file system. Note that any XML file within an opened archive will be automatically opened.</p>
        <p>Open the properties or Yaml from the file system. Note that any properties or Yaml files within an opened archive will be automatically opened.</p>
        <p>" open " [" openNestedArchives " "=" (" true " | " false ")]</p>
        <p>wildcards in the non-suffix part of an archive, class or XML file name or in the final directory qualifier. For example:</p>
        <p>skipName is the path to a nested archive, class file or XML file that should NOT be opened.</p>
        <p>The levels of nesting must be separated by "!" characters.</p>
        <p>wildcards in the final file name which may be an archive name. For example:</p>
        <p>wildcards in the path that qualifies the final file name.</p>
        <p>unSkipName is the path to a nested archive, class file or XML file that should be removed from a corresponding broader "skip" exclusion and therefore SHOULD be opened.</p>
        <p>As in the case of a skipName , the unSkipName can contain</p>
        <p>wildcards in the final file name which may be an archive name or in the path that qualifies the final file name.</p>
        <p>If there is no corresponding broader skipName ("skip" exclusion) then the unSkipName ("unskip" exclusion) will have no effect.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - open",
  "url": "https://zkm-web.vercel.app/docs/openStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - open"
    }
  ]
}]
useHead({
  title: 'open | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - open | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/openStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
