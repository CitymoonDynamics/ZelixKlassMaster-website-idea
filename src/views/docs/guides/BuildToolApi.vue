<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Calling Zelix KlassMaster(TM) from a Build Tool</h1>
      <div class="panel">
        <h2>Generic API</h2>
        <pre class="code"><code>package com.zelix;

   public class ZKM

      public static void run(String zkmScriptFileName, 
                             String logFileName, 
                             boolean isVerbose, 
                             boolean isParseOnly)
                          throws Exception

      public static void run(String zkmScriptFileName, 
                             String logFileName, 
                             boolean isVerbose, 
                             boolean isParseOnly, 
                             Hashtable propertiesTable)
                          throws Exception

      public static void run(String zkmScriptFileName, 
                             String logFileName, 
                             String trimLogFileName,
                             String defaultExcludeFileName, 
                             String defaultTrimExcludeFileName, 
                             String defaultMethodParameterChangesExcludeFileName, 
                             String defaultMethodParameterObfuscationExcludeFileName, 
                             String defaultDirectoryName, 
                             boolean isVerbose, 
                             boolean isParseOnly)
                          throws Exception

      public static void run(String zkmScriptFileName,  
                             String logFileName, 
                             String trimLogFileName,
                             String defaultExcludeFileName, 
                             String defaultTrimExcludeFileName,
                             String defaultDirectoryName, 
                             boolean isVerbose, 
                             boolean isParseOnly, 
                             Hashtable propertiesTable)
                          throws Exception

      public static void run(String zkmScriptFileName, 
                             String logFileName, 
                             String trimLogFileName,
                             String defaultExcludeFileName, 
                             String defaultTrimExcludeFileName, 
                             String defaultMethodParameterChangesExcludeFileName,
                             String defaultMethodParameterObfuscationExcludeFileName,
                             String defaultDirectoryName, 
                             boolean isVerbose, 
                             boolean isParseOnly, 
                             Hashtable propertiesTable)
                          throws Exception

      public static void run(String zkmScriptFileName, 
                             String logFileName, 
                             String trimLogFileName,
                             String defaultExcludeFileName, 
                             String defaultTrimExcludeFileName, 
                             String defaultDirectoryName, 
                             boolean isVerbose,
                             boolean isParseOnly, 
                             Properties properties)
                         throws Exception

      public static void run(String zkmScriptFileName, 
                             String logFileName, 
                             String trimLogFileName,
                             String defaultExcludeFileName, 
                             String defaultTrimExcludeFileName, 
                             String defaultMethodParameterChangesExcludeFileName, 
                             String defaultMethodParameterObfuscationExcludeFileName, 
                             String defaultDirectoryName, 
                             boolean isVerbose, 
                             boolean isParseOnly, 
                             Properties properties)
                          throws Exception

      public static void run(String zkmScriptFileName, 
                             String logFileName, 
                             String trimLogFileName,</code></pre>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Build Tool API</p>
        <p>Zelix KlassMaster(TM) exposes a generic Java API that allows it to be called by a build tool.</p>
        <p>We provide an Apache Ant plugin , an Apache Maven plugin and a Gradle plugin based upon this API.</p>
        <p>The basic parameters to the run methods correspond to the basic command line options .</p>
        <p>The idea is that the ZKM Script referred to will make use of System Variables that have been set in the System properties or which have been passed in as the extra properties.</p>
        <p>You can also set Special Configuration Options by setting System properties.</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, boolean isVerbose, boolean isParseOnly) throws Exception</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, boolean isVerbose, boolean isParseOnly, Hashtable propertiesTable) throws Exception</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, String trimLogFileName, String defaultExcludeFileName, String defaultTrimExcludeFileName, String defaultMethodParameterChangesExcludeFileName, String defaultMethodParameterObfuscationExcludeFileName, String defaultDirectoryName, boolean isVerbose, boolean isParseOnly) throws Exception</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, String trimLogFileName, String defaultExcludeFileName, String defaultTrimExcludeFileName, String defaultDirectoryName, boolean isVerbose, boolean isParseOnly, Hashtable propertiesTable) throws Exception</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, String trimLogFileName, String defaultExcludeFileName, String defaultTrimExcludeFileName, String defaultMethodParameterChangesExcludeFileName, String defaultMethodParameterObfuscationExcludeFileName, String defaultDirectoryName, boolean isVerbose, boolean isParseOnly, Hashtable propertiesTable) throws Exception</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, String trimLogFileName, String defaultExcludeFileName, String defaultTrimExcludeFileName, String defaultDirectoryName, boolean isVerbose, boolean isParseOnly, Properties properties) throws Exception</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, String trimLogFileName, String defaultExcludeFileName, String defaultTrimExcludeFileName, String defaultMethodParameterChangesExcludeFileName, String defaultMethodParameterObfuscationExcludeFileName, String defaultDirectoryName, boolean isVerbose, boolean isParseOnly, Properties properties) throws Exception</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, String trimLogFileName, String defaultExcludeFileName, String defaultTrimExcludeFileName, String defaultMethodParameterChangesExcludeFileName, String defaultMethodParameterObfuscationExcludeFileName, String defaultDirectoryName, String redirectOutFileName, String redirectErrFileName, boolean isVerbose, boolean isParseOnly, Properties properties) throws Exception</p>
        <p>public static void run(String proGuardConfigFileName, Map propertiesTable) throws Exception</p>
        <p>public static void run(String zkmScriptFileName, String logFileName, String trimLogFileName, String defaultExcludeFileName, String defaultTrimExcludeFileName, String defaultMethodParameterChangesExcludeFileName, String defaultMethodParameterObfuscationExcludeFileName, String defaultDirectoryName, String redirectOutFileName, String redirectErrFileName, boolean isVerbose, boolean isParseOnly, Properties properties, boolean isProGuardStyle) throws Exception</p>
        <p>The path name of the ZKM Script file to execute. May be relative or absolute.</p>
        <p>Mandatory. If the path is relative, Zelix KlassMaster(TM) will look in the default directory.</p>
        <p>The path name of the log file to which messages should be written. May be relative or absolute.</p>
        <p>Optional. If the path is relative, then it will be written to the default directory.</p>
        <p>If null then the file "ZKM_log.txt" will be used.</p>
        <p>The path name of the trim log file to which trim results should be written. May be relative or absolute.</p>
        <p>If null then the file "ZKM_TrimLog.txt" will be used.</p>
        <p>The path name of the file containing the default name exclusions. May be relative or absolute.</p>
        <p>Optional. If the path is relative, Zelix KlassMaster(TM) will look in the default directory.</p>
        <p>If null then Zelix KlassMaster(TM) will look in the default directory for the file "defaultExclude.txt".</p>
        <p>The path name of the file containing the default trim exclusions. May be relative or absolute.</p>
        <p>If the path is null then Zelix KlassMaster(TM) will look in the default directory for the file "defaultTrimExclude.txt".</p>
        <p>defaultMethodParameterChangesExcludeFileName</p>
        <p>The path name of the file containing the default Method Parameter Change exclusions. May be relative or absolute.</p>
        <p>If the path is null then Zelix KlassMaster(TM) will look in the default directory for the file "defaultMethodParameterChangesExclude.txt".</p>
        <p>defaultMethodParameterObfuscationExcludeFileName</p>
        <p>The path name of the file containing the default Method Parameter Obfuscation exclusions. May be relative or absolute.</p>
        <p>If the path is null then Zelix KlassMaster(TM) will look in the default directory for the file "defaultMethodParameterObfuscationExclude.txt".</p>
        <p>The path name of the directory which will be used as the default directory. May be relative or absolute.</p>
        <p>Optional. If the path is relative, then it will be relative to the current working directory.</p>
        <p>If the path is null then the default directory will be the current working directory.</p>
        <p>If true , extra information is written to the log file.</p>
        <p>If true , the ZKM Script file will be parsed but not executed.</p>
        <p>A Hashtable of String name value pairs for use in ZKM Script System Variable substitution.</p>
        <p>A Properties object containing name value pairs for use in ZKM Script System Variable substitution.</p>
        <p>The file to which stdout should be redirected. May be null.</p>
        <p>The file to which stderr should be redirected. May be null.</p>
        <p>If any errors are encountered in parsing and executing the ZKM Script.</p>
        <p>com.zelix.ZKM.run("/projects/myScript.txt", null, null, null, null, null, false, false, myProperties);</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Calling Zelix KlassMaster(TM) from a Build Tool",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/buildToolApi"
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
      "name": "Calling Zelix KlassMaster(TM) from a Build Tool"
    }
  ]
}]
useHead({
  title: 'Calling Zelix KlassMaster(TM) from a Build Tool | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Calling Zelix KlassMaster(TM) from a Build Tool | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/buildToolApi' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
