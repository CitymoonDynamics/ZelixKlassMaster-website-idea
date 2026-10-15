<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Calling Zelix KlassMaster(TM) from Gradle</h1>
      <div class="panel">
        <h2>The plugin</h2>
        <h3>Using the plugin</h3>
        <h3>Example build.gradle</h3>
        <pre class="code"><code>apply plugin: 'com.zelix.gradle.plugin'

zkmSetting {
    //Must be set to the ZKM Script to execute. scriptName = "/Projects/myScript.txt" 
	
    /* Optionally can also set the following. They are shown with their default settings. logFileName = "ZKM_log.txt"
       trimLogFileName = "ZKM_TrimLog.txt"
       defaultExcludeFileName = "defaultExclude.txt"
       defaultTrimExcludeFileName = "defaultTrimExclude.txt"
       defaultDirectoryName
       isVerbose = true
       isParseOnly = false
       extraProperties = new Properties()
    */
}

buildscript {
    repositories {
        mavenLocal()
    }
    dependencies {
	    //ZKM_JAR_PATH must point to your ZKM.jar
        classpath files("$ZKM_JAR_PATH") 
        classpath 'com.zelix.gradle:plugin:1.0.0'
    }
}</code></pre>
        <h3>Example gradle.properties</h3>
        <pre class="code"><code>#ZKM_JAR_PATH must be set to point to your ZKM.jar
ZKM_JAR_PATH=/Projects/ZKM.jar
#Other properties that are set here will be accessible in the ZKM Script
CLASSPATH_LIBS=/libs/Jar0.jar;/libs/Jar1.jar
OPEN_DIR=/Projects
JAR_FILE_TO_OBFUSCATE=MyJarFile.jar
IS_KEEP_GENERICS=true
SAVE_DIR=/Projects/save</code></pre>
        <h3>Example ZKM Script</h3>
        <pre class="code"><code>//System variables shown in blue. //These will be replaced with corresponding values in System properties 
//or gradle.properties. classpath "%CLASSPATH_LIBS%"
          ;

open      "%OPEN_DIR%%file.separator%%JAR_FILE_TO_OBFUSCATE%";

trimExclude *.*^ public static main(java.lang.String[]);

trim;

exclude     *.^*^ public static main(java.lang.String[]);

obfuscate   keepInnerClassInfo=false
            keepGenericsInfo=%IS_KEEP_GENERICS%
            obfuscateFlow=aggressive
            exceptionObfuscation=heavy
            encryptStringLiterals=flowObfuscate
            ;

saveAll   "%SAVE_DIR%";</code></pre>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Calling from Gradle</p>
        <p>Zelix KlassMaster(TM) exposes a generic Java API that allows it to be called by a build tool.</p>
        <p>A basic Gradle plugin for the Zelix KlassMaster(TM) obfuscator is built on this API and can be downloaded as zkm-gradle-plugin-1.0.0.zip .</p>
        <p>An example of how to use the Gradle plugin can be downloaded as zkm-gradle-plugin-use-1.0.0.zip .</p>
        <p>Note that versions of Gradle after Gradle 6.5.1 can automatically alter the bytecode that they run. We have found that this can cause Zelix KlassMaster(TM) to fail.</p>
        <p>If you are using a version of Gradle newer than Gradle 6.5.1 then you should set org.gradle.internal.instrumentation.agent=false in your gradle.properties but even this will not work in all cases.</p>
        <p>This problem has been reported to the Gradle development team.</p>
        <p>The plugin can be built and installed with the following command.</p>
        <p>Note that the ZKM_JAR_PATH property in the gradle.properties must be set to the path to your Zelix KlassMaster(TM) distribution's ZKM.jar file.</p>
        <p>Also note that the JAVA_HOME environment variable may need to be set.</p>
        <p>Once the plugin has been installed, it can be used with the following command.</p>
        <p>As mentioned above, an example of how to use the Gradle plugin can be downloaded as zkm-gradle-plugin-use-1.0.0.zip .</p>
        <p>An example build.gradle , gradle.properties and ZKM Script for using the plugin are shown below.</p>
        <p>//Must be set to the ZKM Script to execute.</p>
        <p>/* Optionally can also set the following.</p>
        <p>They are shown with their default settings.</p>
        <p>logFileName = "ZKM_log.txt" trimLogFileName = "ZKM_TrimLog.txt" defaultExcludeFileName = "defaultExclude.txt" defaultTrimExcludeFileName = "defaultTrimExclude.txt" defaultDirectoryName isVerbose = true isParseOnly = false extraProperties = new Properties() */</p>
        <p>buildscript { repositories { mavenLocal() } dependencies {</p>
        <p>//ZKM_JAR_PATH must point to your ZKM.jar</p>
        <p>classpath files("$ZKM_JAR_PATH") classpath 'com.zelix.gradle:plugin:1.0.0' } }</p>
        <p>#ZKM_JAR_PATH must be set to point to your ZKM.jar</p>
        <p>#Other properties that are set here will be accessible in the ZKM Script</p>
        <p>CLASSPATH_LIBS=/libs/Jar0.jar;/libs/Jar1.jar OPEN_DIR=/Projects JAR_FILE_TO_OBFUSCATE=MyJarFile.jar IS_KEEP_GENERICS=true SAVE_DIR=/Projects/save</p>
        <p>//System variables shown in blue. //These will be replaced with corresponding values in System properties //or gradle.properties.</p>
        <p>open " %OPEN_DIR%%file.separator%%JAR_FILE_TO_OBFUSCATE% ";</p>
        <p>trimExclude *.*^ public static main(java.lang.String[]);</p>
        <p>exclude *.^*^ public static main(java.lang.String[]);</p>
        <p>obfuscate keepInnerClassInfo=false keepGenericsInfo= %IS_KEEP_GENERICS%</p>
        <p>obfuscateFlow=aggressive exceptionObfuscation=heavy encryptStringLiterals=flowObfuscate ;</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Calling Zelix KlassMaster(TM) from Gradle",
  "url": "https://zkm-web.vercel.app/docs/buildToolGradle"
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
      "name": "Calling Zelix KlassMaster(TM) from Gradle"
    }
  ]
}]
useHead({
  title: 'Calling Zelix KlassMaster(TM) from Gradle | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Calling Zelix KlassMaster(TM) from Gradle | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/buildToolGradle' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
