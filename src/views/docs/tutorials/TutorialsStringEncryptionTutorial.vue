<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - String Encryption Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - String Encryption Tutorial</li>
          <li>String Encryption Tutorial This tutorial is divided into the following sections:</li>
          <li>Introduction</li>
          <li>Example</li>
          <li>How to use String Encryption functionality</li>
          <li>Interaction with Method Parameter Changes</li>
        </ul>
        <h2>Method decompiled</h2>
        <pre class="code"><code>public static void method0() {
   System.out.println("HelloWorld");
}</code></pre>
        <h3>Method Reference Obfuscated and String Encrypted with Method Parameter Changing then decompiled</h3>
        <pre class="code"><code>private static final long a = test.n.a(-6988621542635325209L, 7195782317132729740L, MethodHandles.lookup().lookupClass()).a(29323127650775L);
public static void method0(long var0) {
  var0 ^= a;
  -1266232702660827338L.�(-1266232702660827338L, var0).�(-1266232702660827338L.�(-1266232702660827338L, var0), 
     true.e(32096, 1913912090056950416L ^ var0), -1266178821949706891L, var0);
}</code></pre>
        <p>This tutorial is divided into the following sections:</p>
        <p>When you use Zelix KlassMaster(TM)'s String Encryption functionality, it will replace String literals in your bytecode with lightly encrypted equivalents and add instructions to your bytecode that will decrypt those Strings back to the originals at runtime.</p>
        <p>Note that because the encryption "key" must be available at runtime, String Encryption cannot be 100% irreversible. Don't rely on it to protect highly sensitive data.</p>
        <p>public static void method0() { System.out.println("HelloWorld"); }</p>
        <p>private static final long a = test.n.a(-6988621542635325209L, 7195782317132729740L, MethodHandles.lookup().lookupClass()).a(29323127650775L); public static void method0(long var0) { var0 ^= a; -1266232702660827338L.� (-1266232702660827338L, var0).� (-1266232702660827338L.� (-1266232702660827338L, var0), true.e (32096, 1913912090056950416L ^ var0), -1266178821949706891L, var0); }</p>
        <p>You switch on the String Encryption functionality by setting the encryptStringLiterals parameter of the obfuscate statement to a value other than none .</p>
        <p>The allowable settings are none , normal , aggressive , flowObfuscate and enhanced .</p>
        <p>The normal , aggressive and flowObfuscate settings have less impact on the size of your bytecode but they are easier to reverse.</p>
        <p>The aggressive setting differs from the normal setting in that it goes further by removing any static final String constants that can be left unencrypted when the normal setting is used.</p>
        <p>The flowObfuscate setting is the same as the aggressive setting except that it flow obfuscates the decryption instructions automatically inserted into your bytecode. This makes the decryption methods a little harder to decompile.</p>
        <p>The enhanced setting adds a second layer of encryption. When used in conjunction with the Method Parameter Changes functionality, the enhanced setting is much more resistant to being reversed.</p>
        <p>You can manage which String literals are encrypted by using the stringEncryptionExclude and</p>
        <p>stringEncryptionUnexclude statements. You can use the stringEncryptionExclude statement to exclude from String Encryption the values of String fields, the Strings referenced in specified methods or complete classes.</p>
        <p>The stringEncryptionUnexclude statement can be used to remove fields, methods or classes from the set of excluded objects specified by an</p>
        <p>Also, when used in conjunction with the Method Parameter Changes functionality, the String Encryption functionality may make use of the invokedynamic instruction and the DES encryption algorithm if you bytecode is Java 7 or better.</p>
        <p>If you don't want the invokedynamic and DES algorithm to be used then you can set the ZKM_STRING_ENCRYPT_INDY configuration option to false .</p>
        <p>If you don't want just the DES algorithm to be used then you can set the ZKM_STRING_ENCRYPT_DES configuration option to false .</p>
        <p>The compatibility of Zelix KlassMaster(TM)'s String Encryption functionality depends upon the compiler that generated the bytecode. We have found no problems with any of the Oracle and IBM compilers that we have tested.</p>
        <p>If you use the enhanced String Encryption setting then Zelix KlassMaster(TM)'s Method Parameter Changes functionality can significantly "harden" the encryption from attack.</p>
        <p>The downside is that the Method Parameter Changes functionality can interlink your classes such that it can become impractical to release changes to your obfuscated classes in the form of patches which are just a subset of your classes.</p>
        <p>It is a trade-off between protection and flexibility.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - String Encryption Tutorial",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/stringEncryptionTutorial"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - String Encryption Tutorial"
    }
  ]
}]
useHead({
  title: 'String Encryption Tutorial | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - String Encryption  | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/stringEncryptionTutorial' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
