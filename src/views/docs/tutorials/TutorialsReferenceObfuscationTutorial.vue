<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Reference Obfuscation Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Reference Obfuscation Tutorial</li>
          <li>Reference Obfuscation Tutorial This tutorial is divided into the following sections:</li>
          <li>Introduction</li>
          <li>Example</li>
          <li>How to use Reference Obfuscation functionality</li>
          <li>How to specify field and method references</li>
          <li>Interaction with Method Parameter Changes</li>
          <li>Qualifications</li>
        </ul>
        <h2>Method decompiled</h2>
        <pre class="code"><code>public static void method0() {
   System.out.println("HelloWorld");
}</code></pre>
        <h3>Method Reference Obfuscated and String Encrypted with Method Parameter Changing then decompiled</h3>
        <pre class="code"><code>private static final String c;
public static void method0(final long n4) {
   /*invokedynamic(j:(Ljava/io/PrintStream;Ljava/lang/String;JJ)V,
                   invokedynamic(\u00ee:(JJ)Ljava/io/PrintStream;, 
                   -7703503747166308699L, n4), 
                   MyClass.c, 
                   -7703568321494008229L, n4)*/
}</code></pre>
        <ul>
          <li>it limits the number of references that can be obfuscated because there is a limit to size of a class's constant pool and</li>
          <li>it creates a new interdependencies between the classes in your application and the new special class which can cause problems in certain scenarios.</li>
          <li>References to class initializer or constructor methods,</li>
          <li>References to certain methods in java.lang.Object,</li>
          <li>References made through the super keyword.</li>
        </ul>
        <p>This tutorial is divided into the following sections:</p>
        <p>A field or method reference is a field access or a method call.</p>
        <p>The following line of Java(TM) code represents references to the field System.out and to the method PrintStream.println(String) .</p>
        <p>A field or method reference can be to a Java(TM) API as in the example above or it can be to your own fields or methods.</p>
        <p>Zelix KlassMaster(TM)'s Reference Obfuscation functionality allows you to obfuscate field or method references by replacing them with Reflection API or invokedynamic calls.</p>
        <p>In the case of static field and method references, it also obscures the identity of the class containing the static member.</p>
        <p>Zelix KlassMaster(TM) then encrypts the names of the fields, methods and classes that are used by the Reflection API calls.</p>
        <p>The Reference Obfuscation functionality is intended to be used to obscure references in and to sensitive parts of your application.</p>
        <p>It can make decompiled code quite incomprehensible.</p>
        <p>It can also obscure key API calls which otherwise would allow a hacker to "zero in" on a particular part of your bytecode.</p>
        <p>As mentioned above, Zelix KlassMaster(TM) will obfuscate a reference by replacing it with a Reflection API or invokedynamic call.</p>
        <p>If the bytecode being opened for obfuscation is Java 8 or better then invokedynamic calls will be used.</p>
        <p>You can change this behaviour by setting the ZKM_OBFUSCATE_REFERENCES_INDY configuration option to false .</p>
        <p>Note that earlier versions of the Oracle and IBM Java 8 JVM's have a bug and may crash when running reference obfuscated bytecode using invokedynamic.</p>
        <p>Versions of the Oracle Java 8 JVM that are 1.8.0_161 or better have had the bug fixed.</p>
        <p>Although you could obfuscate almost ALL of the field and method references in your application, it would have a dramatic and probably unacceptable impact on your application's performance.</p>
        <p>Reflection API calls are much slower than direct references. Invokedynamic calls are much faster than Reflection API calls but they are still slower than direct references.</p>
        <p>As a very rough guide, on a Java 8 JVM, Reflection API calls are about 15 times slower and invokedynamic calls are about 2.5 times slower than direct references.</p>
        <p>On a Java 9 JVM, Reflection API calls are about 7.5 times slower and invokedynamic calls are about 1.5 times slower than direct references.</p>
        <p>When you use the Reference Obfuscation functionality to obscure sensitive parts of your application you should be careful to also obscure a significant number of non-sensitive parts.</p>
        <p>Otherwise you will be drawing attention to the sensitive parts which would be counter productive.</p>
        <p>However, you should be careful not to unnecessarily obfuscate references in performance sensitive parts of your code such as within deeply nested loops.</p>
        <p>public static void method0() { System.out.println("HelloWorld"); }</p>
        <p>private static final String c; public static void method0(final long n4) {</p>
        <p>/*invokedynamic(j:(Ljava/io/PrintStream;Ljava/lang/String;JJ)V, invokedynamic(\u00ee:(JJ)Ljava/io/PrintStream;, -7703503747166308699L, n4), MyClass.c, -7703568321494008229L, n4)*/</p>
        <p>The full Reference Obfuscation functionality is only available through the ZKM Script interface.</p>
        <p>The first step is to "switch on" the Reference Obfuscation functionality.</p>
        <p>You switch on the Reference Obfuscation functionality by setting the obfuscateReferences parameter of the obfuscate statement to normal .</p>
        <p>The obfuscate statement has two other relevant parameters.</p>
        <p>Before discussing these parameters, it should be understood that the Reference Obfuscation functionality requires the creation of some special fields and methods.</p>
        <p>These fields and methods are used to decrypt the strings used in the Reflection API calls and for caching Class, Field and Method objects.</p>
        <p>The first of the two parameters is the obfuscateReferenceStructures parameter which specifies where the special fields and methods should be put.</p>
        <p>The obfuscateReferenceStructures parameter can be set to inSpecialClass or inReferencingClasses . It defaults to inSpecialClass .</p>
        <p>The inSpecialClass setting tells Zelix KlassMaster(TM) to put the special fields and methods into a single special class created just for this purpose.</p>
        <p>This setting typically results in smaller overall code size and better performance because there is one cache for the entire application.</p>
        <p>The weaknesses with this setting are that</p>
        <p>The inReferencingClasses setting the obfuscateReferenceStructures parameter tells Zelix KlassMaster(TM) to put the special fields and methods into the classes that makes the original reference. This can result in duplication with the fields, methods and caches being private to each referencing class.</p>
        <p>However, no new inter-class dependencies are created.</p>
        <p>The second of the two parameters is the obfuscateReferencesPackage parameter. It only has an effect if you specify obfuscateReferenceStructures=inSpecialClass .</p>
        <p>The obfuscateReferencesPackage allows you to specify which already existing package you would like the special class to be put into.</p>
        <p>obfuscateReferencesPackage="com.mycompany.mypackage0"</p>
        <p>After switching the Reference Obfuscation functionality on, you still need to specify which field and method references you wish to have obfuscated. How you do this is explained in the next section.</p>
        <p>You specify which fields and/or method references you want obfuscated by using the obfuscateReferencesInclude and/or obfuscateReferencesExclude statements.</p>
        <p>The obfuscateReferencesInclude specifies the set of references which references are to be obfuscated.</p>
        <p>If a obfuscateReferencesExclude is used in association with a obfuscateReferencesInclude statement, then the obfuscateReferencesExclude removes references from the set specified by the obfuscateReferencesInclude .</p>
        <p>If a obfuscateReferencesExclude is used by itself then it removes references from the set of all references.</p>
        <p>Both statements have a similar structure. The main part of both statements is a field or method specification.</p>
        <p>For example, the statement below specifies that all references to any method declared in the class com.mycompany.MyClass0 should be obfuscated.</p>
        <p>obfuscateReferencesInclude com.mycompany.MyClass0 *(*);</p>
        <p>Both statements also have an optional containedIn clause which specifies the methods in which a reference must exist before it will be obfuscated. The statement below specifies again that that references to any method declared in the class com.mycompany.MyClass0 should be obfuscated but only where those references occur in a public method in the class com.mycompany.MyClass1 .</p>
        <p>obfuscateReferencesInclude containedIn{com.mycompany.MyClass1 public *(*)} com.mycompany.MyClass0 *(*);</p>
        <p>So, let's say that you would like obfuscate (i.e. hide) calls to the method com.mycompany.MyClass1 mySensitiveMethod() no matter where they occur. You could do that with the following statement.</p>
        <p>obfuscateReferencesInclude com.mycompany.MyClass1 mySensitiveMethod();</p>
        <p>Alternatively, let's say that you would like all obfuscate all method calls made from within the method com.mycompany.MyClass1 mySensitiveMethod() . You could do that with the following statement.</p>
        <p>obfuscateReferencesInclude containedIn{com.mycompany.MyClass1 mySensitiveMethod()} *.* *(*);</p>
        <p>As a final example, let's say that you would like all obfuscate all calls to java.lang.System getenv(String) but only where they are made from within the method com.mycompany.MyClass1 mySensitiveMethod() . You could do that with the following statement.</p>
        <p>obfuscateReferencesInclude containedIn{com.mycompany.MyClass1 mySensitiveMethod()} java.lang.System getenv(java.lang.String);</p>
        <p>If you use Zelix KlassMaster(TM)'s Method Parameter Changes functionality then it can significantly "harden" any Reference Obfuscation from attack.</p>
        <p>The downside is that the Method Parameter Changes functionality can interlink your classes such that it can become impractical to release changes to your obfuscated classes in the form of patches which are just a subset of your classes.</p>
        <p>It is a trade-off between protection and flexibility.</p>
        <p>There are a small number of references which cannot be obfuscated. These include the following</p>
        <p>Also, if you specify obfuscateReferenceStructures=inReferencingClasses then references made in pre-Java 8 interfaces cannot be obfuscated.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Reference Obfuscation Tutorial",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/referenceObfuscationTutorial"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Reference Obfuscation Tutorial"
    }
  ]
}]
useHead({
  title: 'Reference Obfuscation Tutorial | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Reference Obfuscat | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/referenceObfuscationTutorial' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
