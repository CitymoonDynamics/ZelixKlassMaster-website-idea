<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - ProGuard Configuration File Translation Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - ProGuard Configuration File Translation Tutorial</li>
          <li>ProGuard Configuration File Translation Tutorial This tutorial is divided into the following sections:</li>
          <li>The Problem</li>
          <li>The Solution</li>
          <li>Output files</li>
          <li>Compatibility</li>
          <li>Customizing certain statements</li>
          <li>Example ZKMScript with customizing statements</li>
          <li>How to use Zelix KlassMaster(TM) in an environment expecting ProGuard</li>
          <li>How to use Zelix KlassMaster(TM) with the Android(TM) Development Tool</li>
          <li>How to use Zelix KlassMaster(TM) with the Android(TM) Studio</li>
          <li>How to translate a ProGuard configuration file to a ZKM Script file</li>
          <li>How to translate a Zelix KlassMaster(TM) change log into ProGuard mapping file format</li>
          <li>Troubleshooting</li>
        </ul>
        <h2>Output Files</h2>
        <ul>
          <li>The ZKM_DEFAULT_DIR configuration option if it has been set or otherwise,</li>
          <li>The -basedirectory option in the ProGuard configuration if it has been set or otherwise,</li>
          <li>The directory specified by the first encountered -printseeds , -printmapping or -printusage option in the ProGuard configuration if it any have been set or otherwise,</li>
          <li>The directory specified by the user.dir property in the System properties.</li>
        </ul>
        <h3>Customizing Certain Statements</h3>
        <ul>
          <li>Only the first occurence of a particular ZKM Script statement will be used,</li>
          <li>The order of the ZKM Script statements is not significant and</li>
          <li>The use of /*...*/ block comments is not supported.</li>
          <li>classpath ,</li>
          <li>ignoreMissingReferences ,</li>
          <li>trimExclude ,</li>
          <li>trimUnexclude ,</li>
          <li>trim ,</li>
          <li>removeMethodCallsInclude ,</li>
          <li>removeMethodCallsExcludeStatement ,</li>
          <li>exclude ,</li>
          <li>unexclude ,</li>
          <li>stringEncryptionExclude ,</li>
          <li>stringEncryptionUnexclude ,</li>
          <li>obfuscateFlowExclude ,</li>
          <li>obfuscateFlowUnexclude ,</li>
          <li>accessedByReflection ,</li>
          <li>accessedByReflectionExclude ,</li>
          <li>obfuscateReferencesInclude ,</li>
          <li>obfuscateReferencesExclude ,</li>
          <li>fixedClasses ,</li>
          <li>methodParameterChangesInclude ,</li>
          <li>methodParameterChangesExclude ,</li>
          <li>obfuscate .</li>
          <li>In the directory specified by the ZKM_DEFAULT_DIR configuration option if it has been set,</li>
          <li>In the directory specified by the -basedirectory option in the ProGuard configuration if it has been set,</li>
          <li>In the directory specified by the first encountered -printseeds , -printmapping or -printusage options in the ProGuard configuration if any have been set,</li>
          <li>Finally, in the directory specified by the user.dir property in the System properties.</li>
        </ul>
        <pre class="code"><code>//Start ZKMScript.txt with customizing statements
obfuscate   keepGenericsInfo=false
            keepInnerClassInfo=false
            methodParameters=keepVisibleIfNotObfuscated 
            changeLogFileOut="%PROGUARD_LOG_DIR%\ChangeLog.txt"
            obfuscateFlow=light
            encryptStringLiterals=flowObfuscate
            exceptionObfuscation=light 
            autoReflectionHandling=none 
            obfuscateReferences=none
            randomize=true 
            preverify=false
            mixedCaseClassNames=false
            keepBalancedLocks=true
            ;
//End ZKMScript.txt</code></pre>
        <pre class="code"><code>buildscript {  
    repositories {
        flatDir { dirs '/proguard' }
    }
    dependencies {
        classpath ':proguard:'
    }
}</code></pre>
        <ul>
          <li>Rename the local proguard.jar JAR file just so that you have it backed up,</li>
          <li>Download the proguardStub_6.0.3.2.jar JAR to the local proguard directory and rename it to proguard.jar</li>
          <li>Put your ZKM.jar JAR file into a location where the renamed ProGuard Stub can find it.</li>
          <li>The directories specified by the System java.library.path property which would normally be based upon the PATH environmental variable,</li>
          <li>The directory specified by the System user.home property,</li>
          <li>The directory specified by the System user.dir property,</li>
          <li>The directories specified by the System java.class.path property,</li>
          <li>The directories specified by the System java.endorsed.dirs property and</li>
          <li>The directories specified by the System java.ext.dirs property.</li>
          <li>The full ProGuard configuration that is to be translated,</li>
          <li>The detail of any messages and warnings,</li>
          <li>The default directory for subsequent processing,</li>
          <li>The name and the location of the Zelix KlassMaster(TM) log file.</li>
        </ul>
        <p>ProGuard Configuration File Translation Tutorial</p>
        <p>This tutorial is divided into the following sections:</p>
        <p>The ProGuard obfuscator is an open source tool. Being open source and freely available, it is often the first obfuscator that a developer might use.</p>
        <p>However, ProGuard has only limited features. For example, it does not provide Flow Obfuscation ,</p>
        <p>Exception Obfuscation , Reference Obfuscation , AutoReflection(TM) , String Encryption or the "hardening" provided by Method Parameter Changing .</p>
        <p>So the situation can arise where a ProGuard user may wish to migrate to Zelix KlassMaster(TM).</p>
        <p>This means that they need to translate their existing ProGuard configuration files to ZKM Script .</p>
        <p>Also, ProGuard has been built into a number of build environments which have not provided an alternative, generic obfuscator interface.</p>
        <p>The Android(TM) Development Tool plugin (ADT) for Eclipse is an example of such a tool.</p>
        <p>So it would be convenient if a developer wishing to use Zelix KlassMaster(TM) rather than ProGuard could do a transparent swap.</p>
        <p>Zelix KlassMaster(TM) provides broad support for ProGuard configuration files. It does this by translating ProGuard configuration files into ZKM Script on the fly.</p>
        <p>So you can execute a ProGuard configuration file using Zelix KlassMaster(TM) just as you would if it was a ZKM Script file.</p>
        <p>Incidentally, you can also translate a ProGuard configuration file into ZKM Script using the ProGuard Configuration File Translation Tool .</p>
        <p>Zelix KlassMaster(TM)'s log files to do not map cleanly to ProGuard's output files. See the table directly below.</p>
        <p>This special a log file which Zelix KlassMaster(TM) uses to write messages relating to the translation of a ProGuard configuration file.</p>
        <p>It will always be named "ZKM_PG_log.txt".</p>
        <p>It will be written to the directory specified by the ZKM_DEFAULT_DIR configuration option if it has been set or otherwise the directory specified by the user.dir property in the System properties.</p>
        <p>ProGuard has no direct equivalent of Zelix KlassMaster(TM)'s log file. However, a verbose "ZKM_log.txt" file does contain the details of what is matched by the various exclusion statements.</p>
        <p>In the context of ProGuard configuration file translation, the name and location of this log file will be set by the ProGuard -printseeds option if it exists.</p>
        <p>Otherwise, it will be named "ZKM_log.txt" and it will be written to the default directory .</p>
        <p>Lists used classes, fields and methods that have been trimmed</p>
        <p>In the context of ProGuard configuration file translation, the name and location of this log file will be set by the ProGuard -printusage option if it exists.</p>
        <p>Otherwise, it will be named "ZKM_TrimLog.txt" and it will be written to the default directory .</p>
        <p>Lists the mapping of old class, field and method names to obfuscated names</p>
        <p>In the context of ProGuard configuration file translation, the name and location of this log file will be set by the ProGuard -printmapping option if it exists.</p>
        <p>Otherwise, it will be named "ChangeLog.txt" and it will be written to the default directory .</p>
        <p>In the context of ProGuard configuration file translation, the default directory is determined in the following fashion. It has the value of</p>
        <p>As mentioned above, Zelix KlassMaster(TM) provides broad support for ProGuard configuration files. However, it doesn't support all ProGuard configuration options.</p>
        <p>When Zelix KlassMaster(TM) encounters one of the following options it will simply ignore them after reporting a warning.</p>
        <p>Similarly, if Zelix KlassMaster(TM) encounters some aspect of a supported ProGuard option which it doesn't FULLY support then it will again report a warning.</p>
        <p>Zelix KlassMaster(TM) will construct a ZKM Script based upon the ProGuard configuration options which it is given.</p>
        <p>However, this will give you just basic trimming and obfuscation without using any of Zelix KlassMaster's special obfuscation features.</p>
        <p>You will often want to customize certain constructed ZKM Script statements with an alternative statement or to add extra ZKM Script statements for which there is no ProGuard equivalent.</p>
        <p>You can do this by putting the customizing or additional ZKM Script statements into a file named "ZKMScript.txt".</p>
        <p>Note that the content of the "ZKMScript.txt" file is just a list of customizing ZKM Script statements and is not an executable script in the normal sense.</p>
        <p>Also Zelix KlassMaster(TM) will only process the following statements in the "ZKMScript.txt" file.</p>
        <p>If a customizing classpath statement is found then all paths that it specifies will be appended to the end of the classpath specified by the ProGuard configuration.</p>
        <p>statement is found then all the parameters that they specify will be appended to the end of any corresponding specifications made by the ProGuard configuration.</p>
        <p>In all other cases, the customizing statement will override any equivalent configuration in the ProGuard configuration.</p>
        <p>Zelix KlassMaster(TM) will look for the "ZKMScript.txt" file in the following directories.</p>
        <p>Zelix KlassMaster(TM) adds the following three convenience properties to the System properties that you are able to use as system variables</p>
        <p>in your customizing ZKM Script statements in addition to the System user.dir property.</p>
        <p>The absolute directory specified by the ProGuard -printseeds , --printusage or -printmapping command if present.</p>
        <p>Otherwise it will be the directory specified by the ProGuard -basedirectory command if present.</p>
        <p>Otherwise it will be the directory specified by the System user.dir property.</p>
        <p>Same as PROGUARD_LOG_DIR except that the ZKM_DEFAULT_DIR System property if it is present will take precedence over the ProGuard -basedirectory command if present.</p>
        <p>The absolute directory specified by the first ProGuard -outjars command if any are present.</p>
        <p>The contents of a basic example ZKMScript file appears below. It contains just a ZKM Script obfuscate statement.</p>
        <p>It specifies light flow and exception obfuscation with relatively safe settings and that Strings should be encrypted.</p>
        <p>Note that it makes use of the PROGUARD_LOG_DIR System property mentioned above.</p>
        <p>//Start ZKMScript.txt with customizing statements obfuscate keepGenericsInfo=false keepInnerClassInfo=false methodParameters=keepVisibleIfNotObfuscated changeLogFileOut="%PROGUARD_LOG_DIR%\ChangeLog.txt" obfuscateFlow=light encryptStringLiterals=flowObfuscate exceptionObfuscation=light autoReflectionHandling=none obfuscateReferences=none randomize=true preverify=false mixedCaseClassNames=false keepBalancedLocks=true ; //End ZKMScript.txt</p>
        <p>If the environment calls ProGuard through a batch or shell script file then you could directly edit that file to point to Zelix KlassMaster(TM) instead.</p>
        <p>That is, a reference in the file to proguard.jar could simply be replaced with a reference to ZKM.jar .</p>
        <p>Of course, you should back up the file before editing it and you would need to ensure that ZKM.jar can be found.</p>
        <p>Another option in the same scenario would be to replace the original proguard.jar with a dummy version which simply calls Zelix KlassMaster(TM).</p>
        <p>For example, you could replace proguard.jar with proguardStub_6.0.3.2.jar .</p>
        <p>Again, you should back up the original proguard.jar before replacing it and you would need to ensure that ZKM.jar is in the the same directory as proguardStub_6.0.3.2.jar .</p>
        <p>If you need to replace ProGuard in an Apache Ant build XML then, as mentioned above, you could replace the reference to proguard.jar with proguardStub_6.0.3.2.jar .</p>
        <p>You can also simply change the reference to proguard.ant.ProguardTask to com.zelix.ZKM_PG_Task</p>
        <p>but note that com.zelix.ZKM_PG_Task does not support the more complicated and verbose XML configuration.</p>
        <p>Again you would need to ensure that ZKM.jar is in the classpath so that com.zelix.ZKM_PG_Task can be found.</p>
        <p>In either case, you should back up the original build XML before editing it,</p>
        <p>The Eclipse ADT plugin calls ProGuard via the &lt;SDK&gt;\tools\proguard\bin\proguard.bat file in Windows(TM) or the &lt;SDK&gt;/tools/proguard/bin/proguard.sh file in Linux.</p>
        <p>These files can be directly edited to specify ZKM.jar rather than proguard.jar .</p>
        <p>Note that when using the Android(TM) Development Tool you do not manually translate any ProGuard configuration into ZKM Script.</p>
        <p>Rather, when ProGuard is replaced with Zelix KlassMaster(TM), Zelix KlassMaster(TM) will automatically translate the ProGuard configuration passed to it by the Android(TM) Development Tool.</p>
        <p>Android(TM) Studio 3.6 no longer allows you to use ProGuard. You must use R8.</p>
        <p>So unfortunately you cannot use Zelix KlassMaster(TM) in place of ProGuard in this version.</p>
        <p>Everything set out below assumes that you are using a version of Android(TM) Studio prior to 3.6.</p>
        <p>Newer versions of the Android(TM) Studio (prior to 3.6) treat ProGuard as a dependency of the Android Gradle plugin and will automatically upgrade it. That is not what you want if you want to replace ProGuard.</p>
        <p>So the recommended approach is to first configure Android(TM) Studio so that it is successfully using a local copy of ProGuard that you have downloaded and then make changes so that it uses Zelix KlassMaster(TM) instead.</p>
        <p>Step 1 is to configure Android(TM) Studio so that it is using a local copy of ProGuard.</p>
        <p>You do this by adding two lines to your build.gradle file as is shown below.</p>
        <p>The flatDir specifies a flat directory repository in your project directory.</p>
        <p>Download the latest version of ProGuard and place the proguard.jar file into the proguard directory that you have created in your project directory.</p>
        <p>Also, Android Studio 3.4 or better now uses the R8 compiler rather than ProGuard. So, to use Zelix KlassMaster rather than R8, you need to set</p>
        <p>Check that ProGuard is being called successfully before going on to the next step.</p>
        <p>Step 2 is to use Zelix KlassMaster(TM) rather than ProGuard.</p>
        <p>The renamed ProGuard Stub will look in the following places.</p>
        <p>Typically it would be easiest to put your ZKM.jar file in a folder that is specified by your PATH environmental variable.</p>
        <p>Note that when using the Android Studio you do not manually translate any ProGuard configuration into ZKM Script.</p>
        <p>Rather, when ProGuard is replaced with Zelix KlassMaster(TM), Zelix KlassMaster(TM) will automatically translate the ProGuard configuration passed to it by the Android Studio.</p>
        <p>The com.zelix.ZKMProGuardTranslate class appears in the Zelix KlassMaster(TM) JAR file distribution.</p>
        <p>It provides a command line alternative to the ProGuard Configuration Translate tool GUI tool.</p>
        <p>It is used as follows to translate a ProGuard configuration file into ZKM Script format.</p>
        <p>java -cp ZKM.jar com.zelix.ZKMProGuardTranslate &lt;proguardConfigFileName&gt; &lt;outputFileName&gt;</p>
        <p>The com.zelix.ZKMChangeLogConvert class appears in the Zelix KlassMaster(TM) JAR file distribution.</p>
        <p>It provides a command line tool to translate a Zelix KlassMaster(TM) change log into ProGuard mapping file format.</p>
        <p>This can be useful when a third party tool supports only the ProGuard mapping file format. The usage is as follows.</p>
        <p>java -cp ZKM.jar com.zelix.ZKMChangeLogConvert &lt;changeLogFileName&gt; &lt;outputFileName&gt; [&lt;pathToObfuscatedClasses&gt;]</p>
        <p>If the optional third parameter specifying the path to the obfuscated classes (e.g. the obfuscated JAR file) is specified then Zelix KlassMaster will include line number mappings for those methods in the obfuscated JAR that have a LineNumberTable attribute.</p>
        <p>Note that these line number mappings will be overlapping across methods if the "lineNumbers=scramble" setting has been specifed at the time of obfuscation.</p>
        <p>If you are replacing ProGuard with Zelix KlassMaster(TM) in some environment that uses ProGuard by default then the very first step should be to make sure that you are successfully obfuscating using ProGuard.</p>
        <p>Obviously if ProGuard is not being successfully called by the environment then attempts to replace ProGuard with Zelix KlassMaster(TM) will be ineffective.</p>
        <p>In the context of translating a ProGuard configuration, if you are having problems then the first place to look is in the ZKM_PG_log.txt file.</p>
        <p>If no ZKM_PG_log.txt file is being produced then Zelix KlassMaster(TM) is not being called to translate the ProGuard configuration.</p>
        <p>As mentioned above, ZKM_PG_log.txt file will be written to the directory specified by the ZKM_DEFAULT_DIR configuration option if it has been set or otherwise the directory specified by the user.dir property in the System properties. The ZKM_PG_log.txt file will show</p>
        <p>You can then look in the Zelix KlassMaster(TM) log file named in the ZKM_PG_log.txt file to see if there are any further warning and error messages.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - ProGuard Configuration File Translation Tutorial",
  "url": "https://zkm-web.vercel.app/docs/proGuardTranslateTutorial"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - ProGuard Configuration File Translation Tutorial"
    }
  ]
}]
useHead({
  title: 'ProGuard Configuration File Translation Tutorial | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - ProGuard Configura | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/proGuardTranslateTutorial' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
