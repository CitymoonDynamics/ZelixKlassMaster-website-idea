<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>ZKM Script Language</h1>
      <div class="panel">
        <p>Powerful scripting language that automates the whole obfuscation process.</p>
        <p>Scripts are reproducible and version controllable, unlike GUI clicks.</p>
        <p>Supports environment variables, preprocessing and build tool execution.</p>
        <img src="/img/ZKMScript0.avif" alt="ZKM Script Helper screenshot" loading="lazy" style="max-width: 100%; border: 1px solid #d7dee5;">
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>open "build/classes" "com.acme.*";
trim;
saveAll "dist/app-obf.jar";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - ZKM Script</li>
          <li>ZKM Script Language Although Zelix KlassMaster(TM) has an easy to use GUI interface , its real power is in its ZKM Script language. ZKM Scripts allow you to automate your obfuscation task and greatly reduce the risk of human error. The ZKM Script language has an intuitive, Java-like syntax and is supported by:</li>
          <li>A GUI dialog called the ZKM Script Helper that interactively creates basic ZKM Scripts,</li>
          <li>A preprocessor that allows you to include shared ZKM Script fragments inside other ZKM Scripts,</li>
          <li>A Build Tool interface for executing ZKM Scripts from within a build tool such as Apache Ant.</li>
          <li>that are declared in a class that is public and final</li>
          <li>extends java.util.Observerable</li>
          <li>implements java.io.Serializable</li>
          <li>that are annotated with the class com.mycompany.MyAnnotation</li>
          <li>that take a single String argument</li>
          <li>that throw java.lang.RuntimeException</li>
          <li>that are NOT private.</li>
        </ul>
        <pre class="code"><code>public final *.* 
   extends java.util.Observerable 
   implements java.io.Serializable 
      @com.mycompany.MyAnnotation
      !private *(java.lang.String)
      throws java.lang.RuntimeException</code></pre>
        <h3>A sample ZKM Script with color coding</h3>
        <pre class="code"><code>/**********************************************************/
/* Sample ZKM Script. Shows only a fraction of the power. */
/**********************************************************/

print "Starting the script";

classpath ".;C:\jdk1.8.0\jre\lib\rt.jar";

open "c:\directory1\Class1.class" //open specific class
     "c:\directory1\MyJar.jar"    //open all classes in jar file
     "c:\directory2"              //open all classes in specific directory
     "c:\directory3\*"; //open classes in directory and its subdirectories

//Exclude class, field and method names from being changed. Uses wildcards. exclude //Public classes in package "com.mycompany"
        public com.mycompany.* and 
        //Class "com.mycompany.MyClass"
        com.mycompany.MyClass and 
        //Implementors of Serializable
        *.* implements java.io.Serializable and 
        //All methods throwing Exception
        *.* *(*) throws java.lang.Exception and 
        //All classes annotated with MyAnnotation
        @com.mycompany.MyAnnotation *.*; 

obfuscate changeLogFileIn="ChangeLogIn.txt"
          changeLogFileOut="ChangeLog.txt"
          obfuscateFlow=aggressive  //Flow obfuscation level
          encryptStringLiterals=enhanced //String encryption level
          lineNumbers=scramble;          //Use line number scrambling

saveAll "C:\Temp"; //Save the obfuscated classes to "C:\Temp"</code></pre>
        <p>Although Zelix KlassMaster(TM) has an easy to use GUI interface , its real power is in its ZKM Script language.</p>
        <p>ZKM Scripts allow you to automate your obfuscation task and greatly reduce the risk of human error.</p>
        <p>The ZKM Script language has an intuitive, Java-like syntax and is supported by:</p>
        <p>See the sample script below but note that it shows only a fraction of the power of the ZKM Script language. For example, using the exclude statement, you can exclude from obfuscation the names of all methods:</p>
        <p>The exclude parameter that has the abovementioned effect is</p>
        <p>public final *.* extends java.util.Observerable implements java.io.Serializable @com.mycompany.MyAnnotation !private *(java.lang.String) throws java.lang.RuntimeException</p>
        <p>Please see the ZKM Script Exclusions Tutorial for more detail on the power of the exclusion syntax.</p>
        <p>/**********************************************************/ /* Sample ZKM Script. Shows only a fraction of the power. */ /**********************************************************/</p>
        <p>classpath ".;C:\jdk1.8.0\jre\lib\rt.jar";</p>
        <p>open "c:\directory1\Class1.class" //open specific class</p>
        <p>"c:\directory1\MyJar.jar" //open all classes in jar file</p>
        <p>"c:\directory2" //open all classes in specific directory</p>
        <p>"c:\directory3\*"; //open classes in directory and its subdirectories</p>
        <p>//Exclude class, field and method names from being changed. Uses wildcards.</p>
        <p>//Public classes in package "com.mycompany"</p>
        <p>//All classes annotated with MyAnnotation</p>
        <p>obfuscate changeLogFileIn="ChangeLogIn.txt" changeLogFileOut="ChangeLog.txt" obfuscateFlow=aggressive //Flow obfuscation level</p>
        <p>encryptStringLiterals=enhanced //String encryption level</p>
        <p>lineNumbers=scramble; //Use line number scrambling</p>
        <p>saveAll "C:\Temp"; //Save the obfuscated classes to "C:\Temp"</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ZKM Script Language",
  "url": "https://zkm-web.vercel.app/features/featuresZKMScript"
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
      "name": "Features",
      "item": "https://zkm-web.vercel.app/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "ZKM Script Language"
    }
  ]
}]
useHead({
  title: 'ZKM Script Language | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'ZKM Script Language | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresZKMScript' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
