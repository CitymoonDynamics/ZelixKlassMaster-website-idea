<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Integer Encryption Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Integer Encryption Tutorial</li>
          <li>Integer Constant Encryption Tutorial This tutorial is divided into the following sections:</li>
          <li>Introduction</li>
          <li>Example</li>
          <li>How to use Integer Encryption functionality</li>
          <li>Interaction with Method Parameter Changes</li>
        </ul>
        <h2>Method decompiled</h2>
        <pre class="code"><code>int method0() {
   return 127;
}</code></pre>
        <h3>Method Integer Constant Encrypted with Method Parameter Changing then decompiled</h3>
        <pre class="code"><code>private static final long a = o.a(425868181624802497L, 7792344439649777418L, MethodHandles.lookup().lookupClass()).a(188318979481983L);
int method0(long var1) {
  var1 ^= a;
  return true.g(14977, 1548317666104588234L ^ var1);
}</code></pre>
        <p>This tutorial is divided into the following sections:</p>
        <p>Note that generally speaking, any reference below to an integer constant should be taken to mean a reference to a byte, char, short or int constant.</p>
        <p>Reference types like Byte, Character, Short or Integer are not treated as integer constants.</p>
        <p>When you use Zelix KlassMaster(TM)'s Integer Encryption functionality, it will replace integer constants in your bytecode with lightly encrypted equivalents and add instructions to your bytecode that will decrypt those integers back to the originals at runtime.</p>
        <p>Note that because the encryption "key" must be available at runtime, Integer Encryption cannot be 100% irreversible. Don't rely on it to protect highly sensitive data.</p>
        <p>private static final long a = o.a(425868181624802497L, 7792344439649777418L, MethodHandles.lookup().lookupClass()).a(188318979481983L); int method0(long var1) { var1 ^= a; return true.g (14977, 1548317666104588234L ^ var1); }</p>
        <p>You switch on the Integer Encryption functionality by setting the encryptIntegerConstants parameter of the obfuscate statement to a value other than none .</p>
        <p>The allowable settings are none , normal and aggressive .</p>
        <p>When the setting is normal , Zelix KlassMaster will encrypt your integer constants in the following basic fashion.</p>
        <p>Any int, byte, char or short fields which are directly initialized with a value other than -1, 0 or 1 will have their initialization values encrypted.</p>
        <p>Also, if there is a reference in a method to an integer constant that is less than Short.MIN_VALUE and greater than Short.MAX_VALUE, then that integer value will be encrypted.</p>
        <p>When the setting is aggressive , Zelix KlassMaster will encrypt your integer constants in the following fashion.</p>
        <p>As with the normal setting, any int, byte, char or short fields which are directly initialized with a value other than -1, 0 or 1 will have their initialization values encrypted.</p>
        <p>Also, if there is a reference in a method to an integer constant that is less than -1 and greater than 5, then that integer value will be encrypted.</p>
        <p>You can override the exclusion of -1, 0 and 1 field values by setting the</p>
        <p>ZKM_INTEGER_ENCRYPT_LOW_VALUE_FIELDS configuration option to true .</p>
        <p>However, note that integers between -1 and 5 inclusive will only be available for integer encryption if they are used to directly initialize a field .</p>
        <p>You can manage which integer constants are encrypted by using the integerEncryptionExclude and</p>
        <p>integerEncryptionUnexclude statements. You can use the integerEncryptionExclude statement to exclude from Integer Encryption the values of integer fields, the integer constants referenced in specified methods or complete classes.</p>
        <p>The integerEncryptionUnexclude statement can be used to remove fields, methods or classes from the set of excluded objects specified by an</p>
        <p>Also, when used in conjunction with the Method Parameter Changes functionality, the Integer Constants Encryption functionality may make use of the invokedynamic instruction and the DES encryption algorithm if your bytecode is Java 7 or better (Java 8 or better for interfaces).</p>
        <p>If you don't want the invokedynamic and DES algorithm to be used then you can set the ZKM_INTEGER_ENCRYPT_INDY configuration option to false .</p>
        <p>If you don't want just the DES algorithm to be used then you can set the ZKM_INTEGER_ENCRYPT_DES configuration option to false .</p>
        <p>The compatibility of Zelix KlassMaster(TM)'s Integer Encryption functionality depends upon the compiler that generated the bytecode.</p>
        <p>We have found no problems with any of the Oracle, OpenJDK or IBM compilers that we have tested.</p>
        <p>Zelix KlassMaster(TM)'s Method Parameter Changes functionality can significantly "harden" the integer encryption from attack.</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Integer Encryption Tutorial",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/integerEncryptionTutorial"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Integer Encryption Tutorial"
    }
  ]
}]
useHead({
  title: 'Integer Encryption Tutorial | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Integer Encryption | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/integerEncryptionTutorial' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
