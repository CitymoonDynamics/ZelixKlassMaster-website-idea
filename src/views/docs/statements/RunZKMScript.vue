<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Executing a ZKM Script</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Executing a ZKM Script</li>
          <li>Executing a ZKM Script File ZKM Scripts are scripts that have been written in the ZKM Script language that automate the process of using Zelix KlassMaster. They allow you to integrate the use of Zelix KlassMaster into your development procedures. Basic ZKM Scripts can be created interactively using the ZKM Script Helper tool. More advanced scripts can be produced by using a basic text editor to modify basic ZKM Scripts.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Basic Usage</li>
          <li>Special Configuration Options</li>
        </ul>
        <h2>The options</h2>
        <ul>
          <li>passed to Zelix KlassMaster(TM) using the JVM's -D&lt;key&gt;=&lt;value&gt; syntax. ( -D"&lt;key&gt;=&lt;value&gt;" in Windows)</li>
          <li>set as environmental variables provided the special ZKM_LOAD_ENV_VARIABLES=true environmental variable has also been set so that Zelix KlassMaster(TM) will load ALL environmental variables into System properties,</li>
          <li>placed as properties in a file named "ZKM_System.properties" in the working directory (i.e. "user.dir" ).</li>
        </ul>
        <h3>Examples</h3>
        <p>java -DZKM_SCRIPT_ENCODING=ISO-8859-1 -jar ZKM.jar myScript.txt</p>
        <p>In the Windows environment you use quotes as follows.</p>
        <p>java -D"ZKM_SCRIPT_ENCODING=ISO-8859-1" -jar ZKM.jar myScript.txt</p>
        <p>ZKM Scripts are scripts that have been written in the ZKM Script language that automate the process of using Zelix KlassMaster. They allow you to integrate the use of Zelix KlassMaster into your development procedures. Basic ZKM Scripts can be created interactively using the</p>
        <p>ZKM Script Helper tool. More advanced scripts can be produced by using a basic text editor to modify basic ZKM Scripts.</p>
        <p>java -jar ZKM.jar [[-options] &lt;scriptFileName&gt;]</p>
        <p>If no options or script file name are present then the GUI interface will be started.</p>
        <p>To execute a ZKM Script you simply pass the name of the ZKM Script file to Zelix KlassMaster.</p>
        <p>will execute the MyScript.txt ZKM Script file.</p>
        <p>Informative messages are written to standard out and the log file. Error messages are written to the standard error stream and the log file.</p>
        <p>Parse the ZKM Script file and display any errors but don't execute the script. This option is handy for syntax checking a long and complicated script.</p>
        <p>Verbose. Display extra information in the log file.</p>
        <p>Use the specified file as the log file to which messages should be written. May be relative or absolute.</p>
        <p>If the path is relative, then the file will be written to the default directory.</p>
        <p>By default the file "ZKM_log.txt" in the default directory will be used.</p>
        <p>Use the specified file as the trim log file. May be relative or absolute.</p>
        <p>By default the file "ZKM_TrimLog.txt" in the default directory will be used.</p>
        <p>Specifies the path name of the file containing the default name exclusions. May be relative or absolute.</p>
        <p>If the path is relative, Zelix KlassMaster(TM) will look in the default directory.</p>
        <p>By default Zelix KlassMaster(TM) will look in the default directory for the file "defaultExclude.txt".</p>
        <p>Specifies the path name of the file containing the default trim exclusions. May be relative or absolute.</p>
        <p>By default Zelix KlassMaster(TM) will look in the default directory for the file "defaultTrimExclude.txt".</p>
        <p>Specifies the path name of the directory which will be used as the default directory . May be relative or absolute.</p>
        <p>If the path is relative, then it will be relative to the current working directory.</p>
        <p>By default, the default directory will be the current working directory.</p>
        <p>Redirect stdout to the specified file. Redirects messages and warnings.</p>
        <p>The name of the ZKM Script file to execute. May be relative or absolute.</p>
        <p>There are a number of special configuration options which can be either</p>
        <p>passed to Zelix KlassMaster(TM) using the JVM's</p>
        <p>placed as properties in a file named "ZKM_System.properties" in the working directory (i.e.</p>
        <p>The special configuration options are as follows.</p>
        <p>Can be set to indicate the character encoding of any ZKM Scripts. (e.g.</p>
        <p>Can be set to indicate the character encoding to be used when writing change logs . (e.g.</p>
        <p>Can be set to indicate the character encoding to be used when reading or writing a MIDP JAD file. ( UTF-8 by default)</p>
        <p>Set to true to copy across any classes that you have specified as "fixed" completely unchanged.</p>
        <p>Set to false to supress Java Reflection API warnings in the Zelix KlassMaster(TM) log.</p>
        <p>Set to false to stop Zelix KlassMaster(TM) from testing for gaps in the inheritance hierarchy.</p>
        <p>Gaps in the inheritance hierarchy are likely to cause problems in the Trim function so you should not use this option if you are using that function.</p>
        <p>Gaps in the inheritance hierarchy can also cause problems when name obfuscating if package, class or non-private field and method names are changed.</p>
        <p>Set to false to prevent overwritten JAR files being backed up with the .BACKUP extension.</p>
        <p>Set to true to prevent empty directories from being written to the obfuscated archive file.</p>
        <p>Set to true to increase the randomness of Zelix KlassMaster's obfuscation across builds.</p>
        <p>By default, Zelix KlassMaster(TM) will obfuscate an unchanged set of classes in largely the same way across builds.</p>
        <p>ZKM_TREAT_EXCEPTION_OBFUSCATION_AS_FLOW_OBFUSCATION</p>
        <p>Set to true to tell Zelix KlassMaster(TM) to treat Exception Obfuscation as if it were Flow Obfuscation for the purposes of the ZKM Script</p>
        <p>Set to true to tell Zelix KlassMaster(TM) to ignore missing fields and methods in classes in the classpath. This option should only be used if it is necessary because it bypasses useful validation.</p>
        <p>However, it is sometimes necessary if there are clashing versions of 3rd party classes in the classpath.</p>
        <p>Generally this option is superceded by the ZKM Script ignoreMissingReferences statement.</p>
        <p>Set to false to tell Zelix KlassMaster(TM) to not use the invokedynamic instruction when obfuscating field or method references .</p>
        <p>Set to false to tell Zelix KlassMaster(TM) to not use the invokedynamic instruction or DES encryption when when encrypting Strings.</p>
        <p>Currently only relevant if you have specified "enhanced" String Encryption and you are allowing method parameter changing.</p>
        <p>Set to false to tell Zelix KlassMaster(TM) to not use DES encryption when when encrypting Strings.</p>
        <p>Can be set to specify the path name of the directory which will be used as the default directory. Exactly the same as the -dd command line option described above which takes precedence if it is present.</p>
        <p>Can be set to false to switch off a part of the Method Parameter Change functionality which could cause an unreasonable delay in the obfuscated application's start up time in the case of very large applications. This would be at the cost of reduced protection.</p>
        <p>Can be set to true to tell Zelix KlassMaster(TM)'s ZKM Script exclusion statements to match on original package, class, field and method names rather than their possibly obfuscated names.</p>
        <p>This option is only relevant if ZKM Script exclusion statements follow an obfuscate statement in the one ZKM Script.</p>
        <p>Can be set to false to tell Zelix KlassMaster(TM) to not use extra synchronization in the Method Parameter Changing functionality.</p>
        <p>Can be used to specify additional file types in a semicolon delimited list that Zelix KlassMaster should treat as generic XML files.</p>
        <p>Can be set to false to tell Zelix KlassMaster(TM) to never use parallel processing. Defaults to true.</p>
        <p>Can be set to some long value to set the seed for the random number generators Zelix KlassMaster(TM) uses.</p>
        <p>Can be set to true to tell Zelix KlassMaster(TM) to use random number generators that produce reproducible values for a given ZKM_RANDOM_SEED value.</p>
        <p>Set to false to tell Zelix KlassMaster(TM) to not use the invokedynamic instruction or DES encryption when when encrypting integer constants.</p>
        <p>Currently only relevant if you are allowing method parameter changing.</p>
        <p>Set to false to tell Zelix KlassMaster(TM) to not use DES encryption when when encrypting integer constants.</p>
        <p>Set to true to tell Zelix KlassMaster(TM) to include fields with the values -1, 0 and 1 when integer constant encrypting.</p>
        <p>Set to false to tell Zelix KlassMaster(TM) to not use the invokedynamic instruction or DES encryption when when encrypting long constants.</p>
        <p>Set to false to tell Zelix KlassMaster(TM) to not use DES encryption when when encrypting long constants.</p>
        <p>Set to true to tell Zelix KlassMaster(TM) to include long fields with the values 0L and 1L when long constant encrypting.</p>
        <p>Set to false to tell Zelix KlassMaster(TM) to automatically exclude all lambda implementation methods from Method Parameter Changing .</p>
        <p>Set to true to tell Zelix KlassMaster(TM) to ignore the setting of the ZKM Script saveAll statement's lastModifiedTime parameter when saving skipped nest archives or skipped XML,YAML or properties files.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Executing a ZKM Script",
  "url": "https://zkm-web.vercel.app/docs/runZKMScript"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Executing a ZKM Script"
    }
  ]
}]
useHead({
  title: 'Executing a ZKM Script | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Executing a ZKM Sc | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/runZKMScript' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
