<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - AutoReflection(TM) Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - AutoReflection(TM) Tutorial</li>
          <li>AutoReflection(TM) Tutorial This tutorial is divided into the following sections:</li>
          <li>The problem presented by Java Reflection API calls</li>
          <li>Zelix KlassMaster(TM)'s basic handling of Java Reflection API calls</li>
          <li>How AutoReflection(TM) Works</li>
          <li>How to use AutoReflection(TM)</li>
          <li>Limitations of AutoReflection(TM)</li>
          <li>AutoReflection(TM) Troubleshooting</li>
          <li>Class.forName(String),</li>
          <li>Class.getField(String),</li>
          <li>Class.getMethod(String),</li>
          <li>Class.getDeclaredField(String) and</li>
          <li>Class.getDeclaredMethod(String).</li>
          <li>which classes, fields or methods were directly matched by a particular accessedByReflection or accessedByReflectionExclude exclusion parameter,</li>
          <li>which Reflection API calls were "handled" by AutoReflection(TM) and</li>
          <li>which class, field or method names where included in the AutoReflection(TM) lookup table.</li>
        </ul>
        <p>This tutorial is divided into the following sections:</p>
        <p>The Java(TM) Reflection API allows you to access classes, fields or methods by name. Examples of Reflection API calls are</p>
        <p>Of course, Name Obfuscation can change the names of classes, fields and methods. This means that Name Obfuscation can break Java Reflection API calls.</p>
        <p>When Zelix KlassMaster(TM) opens your classes, it detects Java Reflection API calls that access classes, fields or methods and it automatically looks for the source of the class, field or method name which is being passed to the Reflection API method.</p>
        <p>If Zelix KlassMaster(TM) can find a String literal which contains the name of the class, field or method then it is said to have "resolved" that call.</p>
        <p>Zelix KlassMaster(TM) automatically handles resolved Reflection API calls by updating the String literal that holds the class, field or method name to reflect the corresponding obfuscated name.</p>
        <p>If Zelix KlassMaster(TM) cannot fully resolve a Reflection API call then it lists the unresolved call in the Class Open Warnings window if you are using the GUI or in the Zelix KlassMaster(TM) log (which is named "ZKM_log.txt" by default) under the heading "API calls detected that may not be handled automatically...".</p>
        <p>Prior to the introduction of the AutoReflection(TM) functionality, if you had unresolved Reflection API calls which were being broken by Name Obfuscation, then you had to explicitly exclude from being renamed the name of the class, field or method being accessed by name.</p>
        <p>The AutoReflection(TM) functionality allows the names of such classes, fields and methods to be obfuscated.</p>
        <p>AutoReflection(TM) works by creating a lookup table which maps a hash of the original class, field or method names to the corresponding obfuscated name.</p>
        <p>Your bytecode is then changed to make use of the lookup table so that any original name that would be used in an unresolved Reflection API call is replaced with the corresponding obfuscated name.</p>
        <p>A key thing to note here is that only the names of classes, fields and methods that are actually accessed by unresolved Reflection API calls need to be in the lookup table.</p>
        <p>However, because the Reflection API calls are unresolved, Zelix KlassMaster(TM) doesn't know which names to add to the lookup table.</p>
        <p>So it is highly recommended that you tell Zelix KlassMaster(TM) which names to add to the looup table by using the ZKM Script accessedByReflection</p>
        <p>and/or accessedByReflectionExclude statements.</p>
        <p>The other thing to note is that a hash of the original, unobfuscated class, field or method names is stored in the lookup table within the obfuscated bytecode.</p>
        <p>Provided the original class, field or method names are of a reasonable length (e.g. 11 characters or more) then the hash values are reasonably safe from brute force attack.</p>
        <p>Zelix KlassMaster(TM) will report warnings if overly short names are being added to the lookup table.</p>
        <p>Nonetheless, as is mentioned above, it is highly recommended that you tell Zelix KlassMaster(TM) which names to add to the lookup table so that it contains as few names as is possible.</p>
        <p>In particular, you do not want any overly short names to be added to the lookup table if they are not actually being accessed by unresolved Reflection API calls.</p>
        <p>If you leave any any overly short names in the lookup table unecessarily then you are needlessly providing a mechanism for reversing the name obfuscation of those names.</p>
        <p>When you are using the Zelix KlassMaster(TM) GUI interface, you switch on AutoReflection(TM) by clicking the "auto reflection handling" box on the Obfuscate Options window.</p>
        <p>However, there is no way of telling Zelix KlassMaster(TM) which names to add to the looup table using the GUI interface so this method is only recommended for initial familiarization purposes.</p>
        <p>When you are using Zelix KlassMaster(TM)'s ZKM Script interface, you switch on AutoReflection(TM) by using the autoReflectionHandling=normal setting on the obfuscate statement.</p>
        <p>By default, the SHA-512 or SHA-1 hash algorithm will be used depending upon the Java(TM) version of your bytecode. If for some reason you need to specify a different algorithm then you can do so by using the autoReflectionHash parameter of the obfuscate statement. For example you could say autoReflectionHash="MD5" .</p>
        <p>Of course, the algorithm that you specify must be available in the runtime environment.</p>
        <p>You can also optionally specify the package into which the AutoReflection(TM) lookup class should be placed.</p>
        <p>You do this by using the autoReflectionPackage parameter of the obfuscate statement.</p>
        <p>However, the specified package name must exist within the classes that have been opened for obfuscation.</p>
        <p>As mentioned above, you can (and should) tell Zelix KlassMaster(TM) which names to add to the looup table by using the ZKM Script accessedByReflection</p>
        <p>If neither statement precedes your obfuscate statement, then all class, field and method names which could be accesssed by the detected Reflection API calls will be added to the lookup table which is not recommended.</p>
        <p>If only an accessedByReflection statement precedes your obfuscate statement, then only the names of the classes, fields and methods that it specifies will be added to the lookup table.</p>
        <p>If only an accessedByReflectionExclude statement precedes your obfuscate statement, then the set of names added to the lookup table will be the set of all class, field and method names less the names of the classes, fields and methods that the statement specifies.</p>
        <p>If an accessedByReflection statement followed by an accessedByReflectionExclude statement precedes your obfuscate statement, then the set of names added to the lookup table will be the set of class, field and method names specified by the accessedByReflection statement less the names of the classes, fields and methods specified by the accessedByReflectionExclude statement.</p>
        <p>1. As mentioned above, AutoReflection(TM) puts a hash of the original name into a lookup table within the obfuscated bytecode. This hash can be reversed by a brute force attack but, provided the original class, field or method names are of a reasonable length (e.g. 11 characters or more), then the hash values are reasonably secure.</p>
        <p>In any case, if a class, field or method name is accessed by an unresolved Reflection API call then the alternative to AutoReflection(TM) is to leave that name totally unobfuscated.</p>
        <p>2. The AutoReflection(TM) functionality has no effect on the Trim function. If you are using the Trim function then your ZKM Script trim statement should mirror your</p>
        <p>accessedByReflection and/or accessedByReflectionExclude statements to exclude those classes, fields or methods that you know will be accessed via unresolved Reflection API calls.</p>
        <p>3. There is a limit to the number of class, field and method names that can be added to the AutoReflection(TM) lookup table. The limit is high (about 25,000) but it is highly recommended that you use the</p>
        <p>accessedByReflection and/or accessedByReflectionExclude statements to ensure that the table contains only those entries that are actually required.</p>
        <p>4. AutoReflection(TM) should only be applied once on a given set of classes. If you are applying a number of obfuscation steps on a given set of classes then the autoreflection should be applied in the last step which involves the name obfuscation of any relevant classes, fields or methods.</p>
        <p>5. AutoReflection(TM) is incompatible with the allClassesOpened=false setting of the obfuscate statement. This means that all the classes must be opened for obfuscation if you are going to use AutoReflection(TM). Zelix KlassMaster(TM) will report a fatal error if you specify both allClassesOpened=false and autoReflectionHandling=normal</p>
        <p>6. AutoReflection(TM) will not work in Java 1.0.2 or JavaME environments because there is not the necessary support for hash algorithms.</p>
        <p>If you find yourself needing to debug your AutoReflection(TM) exclusions when running a ZKM Script then you may find it helpful to run Zelix KlassMaster(TM) using the "-v" (ie. verbose) parameter.</p>
        <p>This will result in a great deal of extra information being written to the log. This extra information will include</p>
        <p>If you see class, field or method names being included in the AutoReflection(TM) lookup table and you know that those names would not be accessed by Reflection then you can add or modify your accessedByReflection or accessedByReflectionExclude statements accordingly.</p>
        <p>Note that AutoReflection(TM) does not support the Zelix KlassMaster(TM)'s Method Parameter Changes functionality.</p>
        <p>That is, if you access a method via the Reflection API and then change that method's parameters then AutoReflection(TM) will not handle the change.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - AutoReflection(TM) Tutorial",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/autoReflectionTutorial"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - AutoReflection(TM) Tutorial"
    }
  ]
}]
useHead({
  title: 'AutoReflection(TM) Tutorial | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - AutoReflection(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/autoReflectionTutorial' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
