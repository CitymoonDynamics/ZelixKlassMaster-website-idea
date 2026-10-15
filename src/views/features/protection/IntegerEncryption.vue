<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Integer Encryption</h1>
      <div class="panel">
        <p>Encrypts int constants so magic numbers and keys do not appear in bytecode.</p>
        <p>Decryption happens at runtime through generated helper logic.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>integerEncryption;</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Java Integer Constant Encryption</li>
          <li>Java Integer Constant Encryption When a competitor or hacker decompiles an obfuscated application, they will use any clue they can to locate the classes of interest to them. The integer constants that are embedded in your application may provide critical insights. Integer constants may be Java byte, char, short or int constant values. Integer constants may appear as the initial or constant values of certain fields or they may be referenced from within a method. These constants may be used as:</li>
          <li>Product codes,</li>
          <li>Decryption keys,</li>
          <li>Application specific processing indicies.</li>
        </ul>
        <h3>Example</h3>
        <h3>Method decompiled</h3>
        <pre class="code"><code>int method0() {
   return 127;
}</code></pre>
        <h3>Method Integer Constant Encrypted with Method Parameter Changing then decompiled</h3>
        <pre class="code"><code>private static final long a = o.a(425868181624802497L, 7792344439649777418L, MethodHandles.lookup().lookupClass()).a(188318979481983L);
int method0(long var1) {
  var1 ^= a;
  return true.g(14977, 1548317666104588234L ^ var1);
}</code></pre>
        <h3>Limitations</h3>
        <p>When a competitor or hacker decompiles an obfuscated application, they will use any clue they can to locate the classes of interest to them.</p>
        <p>The integer constants that are embedded in your application may provide critical insights. Integer constants may be Java byte, char, short or int constant values.</p>
        <p>Integer constants may appear as the initial or constant values of certain fields or they may be referenced from within a method.</p>
        <p>The competitor or hacker decompiles all your classes then performs simple string searches on the generated source code looking for constants of interest to them.</p>
        <p>Zelix KlassMaster's Integer Constant Encryption technology encrypts your integer constants where they are stored in the Constant Pools of your class files.</p>
        <p>It then adds fragments of code to your classes so that your integer constants are decrypted at runtime.</p>
        <p>See the Integer Constant Encryption Tutorial for more technical detail.</p>
        <p>private static final long a = o.a(425868181624802497L, 7792344439649777418L, MethodHandles.lookup().lookupClass()).a(188318979481983L); int method0(long var1) { var1 ^= a; return true.g (14977, 1548317666104588234L ^ var1); }</p>
        <p>Note that Zelix KlassMaster's Integer Constant Encryption isn't and cannot be fundamentally irreversible.</p>
        <p>However, we are continually improving it to "harden" it against deobfuscation.</p>
        <p>For example, Zelix KlassMaster's Method Parameter Changes functionality can significantly "hardens" Zelix KlassMaster's Integer Constant Encryption.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Integer Encryption",
  "url": "https://zkm-web.vercel.app/features/featuresIntegerEncryption"
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
      "name": "Integer Encryption"
    }
  ]
}]
useHead({
  title: 'Integer Encryption | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Integer Encryption | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresIntegerEncryption' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
