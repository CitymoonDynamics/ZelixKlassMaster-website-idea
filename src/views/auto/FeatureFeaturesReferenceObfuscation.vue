<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Reference Obfuscation</h1>
      <div class="panel">
        <p>Hides selected field accesses and method calls behind indirection.</p>
        <p>Applied selectively so serialization, RMI and frameworks keep working.</p>
        <p>Pairs with Method Parameter Changing for resistance against analysis.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>obfuscateReferencesExclude "com.acme.api.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h3>Method decompiled</h3>
        <pre class="code"><code>public static void method0() {
   System.out.println("HelloWorld");
}</code></pre>
        <h3>Method Reference Obfuscated and String Encrypted with Method Parameter Changing then decompiled</h3>
        <pre class="code"><code>private static final String c;
public static void method0(final long n4) {
   /*invokedynamic(j:(Ljava/io/PrintStream;Ljava/lang/String;JJ)V,
                   invokedynamic(\u00ee:(JJ)Ljava/io/PrintStream;, 
                   -7703503747166308699L, n4), 
                   HelloWorld.c, 
                   -7703568321494008229L, n4)*/
}</code></pre>
        <p>Java Obfuscation - Zelix KlassMaster(TM) - Java Reference Obfuscation</p>
        <p>A field or method reference is a field access or a method call.</p>
        <p>The following line of Java(TM) code represents references to the field System.out and to the method PrintStream.println(String) .</p>
        <p>A field or method reference can be to a Java(TM) API as in the example above or it can be to your own fields or methods.</p>
        <p>Zelix KlassMaster(TM)'s Reference Obfuscation functionality allows you to obfuscate field or method references by replacing them with Reflection API or invokedynamic calls.</p>
        <p>In the case of static field and method references, it also obscures the identity of the class containing the static member.</p>
        <p>Zelix KlassMaster(TM) then encrypts the names of the fields, methods and classes that are accessed via the Reflection API or invokedynamic calls.</p>
        <p>This allows you to selectively obscure field accesses and method calls in or to sensitive parts of your applications.</p>
        <p>It can make decompiled code quite incomprehensible.</p>
        <p>It can also obscure key API calls which otherwise would allow a hacker to "zero in" on a particular part of your bytecode.</p>
        <p>Note that Zelix KlassMaster(TM)'s Method Parameter Changes functionality significantly "hardens" Zelix KlassMaster's Reference Obfuscation.</p>
        <p>Please see the simple example below and the Reference Obfuscation Tutorial for more detail.</p>
        <p>public static void method0() { System.out.println("HelloWorld"); }</p>
        <p>private static final String c; public static void method0(final long n4) {</p>
        <p>/*invokedynamic(j:(Ljava/io/PrintStream;Ljava/lang/String;JJ)V, invokedynamic(\u00ee:(JJ)Ljava/io/PrintStream;, -7703503747166308699L, n4), HelloWorld.c, -7703568321494008229L, n4)*/</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Reference Obfuscation",
  "url": "https://zkm-web.vercel.app/features/featuresReferenceObfuscation"
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
      "name": "Reference Obfuscation"
    }
  ]
}]
useHead({
  title: 'Reference Obfuscation | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Reference Obfuscation | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresReferenceObfuscation' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
