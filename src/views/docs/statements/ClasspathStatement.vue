<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Multi-release JAR files</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - classpath</li>
          <li>The classpath Statement The ZKM Script classpath statement sets the classpath that will be used by Zelix KlassMaster(TM). Zelix KlassMaster(TM) uses its classpath to find all classes:</li>
          <li>directly or indirectly extended or implemented by the classes you have opened,</li>
          <li>that are specified in the signatures of any methods in the classes you have opened.</li>
        </ul>
        <h2>Multi-release JAR files</h2>
        <h3>Examples</h3>
        <h3>In the Windows(TM) environments</h3>
        <pre class="code"><code>classpath "." 
          "c:\jdk1.8.0\jre\lib\rt.jar"
          "c:\lib\*.jar";</code></pre>
        <pre class="code"><code>classpath ".;c:\jdk1.8.0\jre\lib\rt.jar;c:\lib\*.jar";</code></pre>
        <pre class="code"><code>classpath "." 
          "c:\JDK\jdk1.9.0\lib\jrt-fs.jar"
          "c:\lib\*.jar";</code></pre>
        <pre class="code"><code>classpath ".;c:\JDK\jdk1.9.0\lib\jrt-fs.jar;c:\lib\*.jar";</code></pre>
        <h3>In a Unix environments (including Mac OS X)</h3>
        <pre class="code"><code>classpath "." 
          "/opt/jdk1.8.0/jre/lib/rt.jar"
          "/lib/*.jar";</code></pre>
        <pre class="code"><code>classpath ".:/opt/jdk1.8.0/jre/lib/rt.jar:/lib/*.jar";</code></pre>
        <pre class="code"><code>classpath "." 
          "/opt/jdk1.9.0/lib/jrt-fs.jar"
          "/lib/*.jar";</code></pre>
        <pre class="code"><code>classpath ".:/opt/jdk1.9.0/lib/jrt-fs.jar:/lib/*.jar";</code></pre>
        <h3>Multi-release example</h3>
        <pre class="code"><code>//Default specifies no Java version
classpath "/opt/jdk1.8.0/jre/lib/rt.jar";

//Classpath specific to Java 9 multi-release classes
classpath 9 "/opt/jdk1.9.0/lib/jrt-fs.jar";

//Classpath specific to Java 10 multi-release classes
classpath 10 "/opt/jdk1.10.0/lib/jrt-fs.jar";</code></pre>
        <h3>Syntax</h3>
        <ul>
          <li>path is a file system path specifying a folder or archive file,</li>
          <li>pathSeparator is the character returned by System.getProperty("path.separator") by the JVM running Zelix KlassMaster (E.g. ';' for Windows) and</li>
          <li>versionInteger is an optional integer (greater than 8) indicating the Java version to which this classpath statement pertains (E.g. 9, 10, 11, etc.).</li>
        </ul>
        <pre class="code"><code>classpath "directory0/*.jar"   //All JAR files in directory0
          "directory1/*/*.jar" //All JAR files in sub-directories of directory1
          ;</code></pre>
        <p>The ZKM Script classpath statement sets the classpath that will be used by Zelix KlassMaster(TM).</p>
        <p>Zelix KlassMaster(TM) uses its classpath to find all classes:</p>
        <p>Note that Zelix KlassMaster(TM) will look inside of any archives appearing in your classpath statement and recursively add any embedded archives to the effective classpath.</p>
        <p>So, if you have an archive myJar.jar in your classpath statement which contains another archive named embedded.jar then both myJar.jar and embedded.jar will be in the effective classpath.</p>
        <p>Note also that the classes you have opened within Zelix KlassMaster(TM) do not have to appear in its classpath.</p>
        <p>Also, the Java bootstrap classes should appear in whatever classpath you set.</p>
        <p>If your classes were compiled using the JDK 1.1 then the path to the JDK 1.1 classes.zip must appear in your classpath.</p>
        <p>If you used the JDK 1.2 or better then the path to the corresponding rt.jar should appear in your classpath.</p>
        <p>If you used the JDK 1.9 then the path to the corresponding jrt:/ file system should appear in your classpath. See the example below.</p>
        <p>If you do not specify a path to any bootstrap classes then Zelix KlassMaster(TM) will automatically append the path to the bootstrap classes associated with the JVM you are using to run Zelix KlassMaster.</p>
        <p>In the absence of any classpath statement, the classpath will be set to whatever the classpath was when Zelix KlassMaster(TM) was started.</p>
        <p>If you have a multi-release JAR file then you may need to specify different classpaths that are specific to particular Java versions.</p>
        <p>You can do this by having additional separate classpath statements that specify the relevant Java version number immediately after the classpath keyword.</p>
        <p>classpath "." "c:\jdk1.8.0\jre\lib\rt.jar" "c:\lib\*.jar";</p>
        <p>classpath "." "c:\JDK\jdk1.9.0\lib\jrt-fs.jar" "c:\lib\*.jar";</p>
        <p>classpath "." "/opt/jdk1.8.0/jre/lib/rt.jar" "/lib/*.jar";</p>
        <p>classpath "." "/opt/jdk1.9.0/lib/jrt-fs.jar" "/lib/*.jar";</p>
        <p>As shown above, you can break the classpath up into independent, quoted Strings without using ";" or ":" separators.</p>
        <p>This syntax is platform independent and is recommended.</p>
        <p>In the example below, all three classpath statements would appear in the same ZKM Script.</p>
        <p>However, the statements specifying a Java version number (e.g. 9 or 10 in this case) would only be applied when analyzing the corresponding multi-release versions of particular classes.</p>
        <p>classpath "/opt/jdk1.8.0/jre/lib/rt.jar";</p>
        <p>//Classpath specific to Java 9 multi-release classes</p>
        <p>classpath 9 "/opt/jdk1.9.0/lib/jrt-fs.jar";</p>
        <p>//Classpath specific to Java 10 multi-release classes</p>
        <p>classpath 10 "/opt/jdk1.10.0/lib/jrt-fs.jar";</p>
        <p>" classpath " [versionInteger] ("\"" classpathString "\"")+ ";"</p>
        <p>classpathString ::= path (pathSeparator path)*</p>
        <p>wildcard in its final file qualifier. Also, a wildcard may appear in the final directory qualifier. See the examples below.</p>
        <p>classpath "directory0/*.jar" //All JAR files in directory0 "directory1/*/*.jar" //All JAR files in sub-directories of directory1 ;</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Multi-release JAR files",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/classpathStatement"
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
      "name": "Multi-release JAR files"
    }
  ]
}]
useHead({
  title: 'Multi-release JAR files | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Multi-release JAR files | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/classpathStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
