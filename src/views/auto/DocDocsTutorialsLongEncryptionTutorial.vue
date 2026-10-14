<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Long Encryption Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Long Encryption Tutorial</li>
          <li>Long Constant Encryption Tutorial This tutorial is divided into the following sections:</li>
          <li>Introduction</li>
          <li>Example</li>
          <li>How to use Long Encryption functionality</li>
          <li>Interaction with Method Parameter Changes</li>
        </ul>
        <h3>Method decompiled</h3>
        <pre class="code"><code>long method0() {
   return 127L;
}</code></pre>
        <h3>Method Long Constant Encrypted with Method Parameter Changing then decompiled</h3>
        <pre class="code"><code>private static final long a = o.a(425868181624802497L, 7792344439649777418L, MethodHandles.lookup().lookupClass()).a(188318979481983L);
long method0(long var1) {
  var1 ^= a;
  return true.g(14977, 1548317666104588234L ^ var1);
}</code></pre>
        <p>This tutorial is divided into the following sections:</p>
        <p>When you use Zelix KlassMaster(TM)'s Long Encryption functionality, it will replace long constants in your bytecode with lightly encrypted equivalents and add instructions to your bytecode that will decrypt those longs back to the originals at runtime.</p>
        <p>Note that because the encryption "key" must be available at runtime, Long Encryption cannot be 100% irreversible. Don't rely on it to protect highly sensitive data.</p>
        <p>private static final long a = o.a(425868181624802497L, 7792344439649777418L, MethodHandles.lookup().lookupClass()).a(188318979481983L); long method0(long var1) { var1 ^= a; return true.g (14977, 1548317666104588234L ^ var1); }</p>
        <p>You switch on the Long Encryption functionality by setting the encryptLongConstants parameter of the obfuscate statement to a value other than none .</p>
        <p>The allowable settings are none and normal .</p>
        <p>When the setting is normal , Zelix KlassMaster will encrypt your long constants in the following basic fashion.</p>
        <p>Any long fields which are directly initialized with a value other than 0 or 1 will have their initialization values encrypted.</p>
        <p>Also, if there is a reference in a method to a long constant other than 0 or 1 then that long value will be encrypted.</p>
        <p>You can override the exclusion of 0 and 1 field values by setting the</p>
        <p>ZKM_LONG_ENCRYPT_LOW_VALUE_FIELDS configuration option to true .</p>
        <p>You can manage which long constants are encrypted by using the longEncryptionExclude and</p>
        <p>longEncryptionUnexclude statements. You can use the longEncryptionExclude statement to exclude from Long Encryption the values of long fields, the long constants referenced in specified methods or complete classes.</p>
        <p>The longEncryptionUnexclude statement can be used to remove fields, methods or classes from the set of excluded objects specified by an</p>
        <p>Also, when used in conjunction with the Method Parameter Changes functionality, the Long Constants Encryption functionality may make use of the invokedynamic instruction and the DES encryption algorithm if your bytecode is Java 7 or better (Java 8 or better for interfaces).</p>
        <p>If you don't want the invokedynamic and DES algorithm to be used then you can set the ZKM_LONG_ENCRYPT_INDY configuration option to false .</p>
        <p>If you don't want just the DES algorithm to be used then you can set the ZKM_LONG_ENCRYPT_DES configuration option to false .</p>
        <p>The compatibility of Zelix KlassMaster(TM)'s Long Encryption functionality depends upon the compiler that generated the bytecode.</p>
        <p>We have found no problems with any of the Oracle, OpenJDK or IBM compilers that we have tested.</p>
        <p>Zelix KlassMaster(TM)'s Method Parameter Changes functionality can significantly "harden" the long encryption from attack.</p>
        <p>The downside is that the Method Parameter Changes functionality can interlink your classes such that it can become impractical to release changes to your obfuscated classes in the form of patches which are just a subset of your classes.</p>
        <p>It is a trade-off between protection and flexibility.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Long Encryption Tutorial","url":"https://zkm-web.vercel.app/docs/longEncryptionTutorial"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Long Encryption Tutorial | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/longEncryptionTutorial' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
