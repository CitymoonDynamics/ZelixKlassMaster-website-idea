<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>String Encryption</h1>
      <div class="panel">
        <p>Encrypts string literals. Zelix invented this technique for Java obfuscators.</p>
        <p>Modes: normal, aggressive, flow obfuscate and enhanced. Stronger modes cost size and CPU.</p>
        <p>Method Parameter Changing hardens encrypted strings against static decryption.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>stringEncryption "aggressive";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Java String Encryption</li>
          <li>Java String Encryption When a competitor or hacker decompiles an obfuscated application, they will use any clue they can to locate the classes of interest to them. The string literals that are embedded in your application provide critical insights. These literals may be:</li>
          <li>The text of the labels or other GUI components on your dialogs,</li>
          <li>The text of your error messages,</li>
          <li>The text of your exception messages.</li>
        </ul>
        <h3>Bytecode Name Obfuscated then decompiled</h3>
        <pre class="code"><code>void a(String s) {
   if(!s.equals(a()))
      throw new Exception("Wrong Password");
   else
      return;
}</code></pre>
        <h3>Bytecode Name Obfuscated and String Encrypted then decompiled</h3>
        <pre class="code"><code>void a(String s) {
   if(!s.equals(a()))
      throw new 
      Exception(b(c("&amp;#200;k9@sg^W0~aa &amp;#255;")));
   else
      return;
}</code></pre>
        <h3>Limitations</h3>
        <p>When a competitor or hacker decompiles an obfuscated application, they will use any clue they can to locate the classes of interest to them.</p>
        <p>The string literals that are embedded in your application provide critical insights. These literals may be:</p>
        <p>The competitor or hacker decompiles all your classes then performs simple string searches on the generated source code.</p>
        <p>Zelix KlassMaster's String Encryption technology encrypts your String literals where they are stored in the Constant Pools of your class files.</p>
        <p>It then adds fragments of code to your classes so that your Strings are decrypted at runtime.</p>
        <p>Note that Zelix KlassMaster(TM) offers different levels of String Encryption.</p>
        <p>See the String Encryption Tutorial for more technical detail.</p>
        <p>The example below demonstrates only the most simple and basic level .</p>
        <p>The more advanced enhanced level of String Encryption will by default make use of invokedynamic calls.</p>
        <p>void a(String s) { if(!s.equals(a())) throw new Exception("Wrong Password"); else return; }</p>
        <p>void a(String s) { if(!s.equals(a())) throw new Exception(b(c("Èk9@sg^W0~aa ÿ"))); else return; }</p>
        <p>Note that Zelix KlassMaster's String Encryption isn't and cannot be fundamentally irreversible.</p>
        <p>However, we are continually improving it to "harden" it against deobfuscation.</p>
        <p>For example, Zelix KlassMaster's Method Parameter Changes functionality significantly "hardens" Zelix KlassMaster's String Encryption if the enhanced setting is used.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "String Encryption",
  "url": "https://zkm-web.vercel.app/features/featuresStringEncryption"
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
      "name": "String Encryption"
    }
  ]
}]
useHead({
  title: 'String Encryption | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'String Encryption | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresStringEncryption' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
