<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Name Obfuscation</h1>
      <div class="panel">
        <p>First generation obfuscation. Renames packages, classes, methods and fields to short identifiers.</p>
        <p>Shorter names shrink class files, so this feature protects and optimizes at the same time.</p>
        <p>Overloaded and inherited names are resolved so renamed hierarchies stay consistent.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>exclude "com.acme.api.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h3>Original Source</h3>
        <pre class="code"><code>package test;

import java.util.*;

class Demo {

   private List buffer = new ArrayList&lt;&gt;();

   /**
   * Return the position of the specified String
   * in the list. Remove the String once if it
   * has been found. Return -1 if the String
   * isn't found. */
   int getStringPos(String string) {
      for(int ctr=0; ctr &lt; list.size(); ctr++) {
         String curString = list.get(ctr);
         if (curString.equals(string)) {
            list.remove(ctr);
            return ctr;
         }
      }
      return -1;
   }
}</code></pre>
        <h3>Name obfuscated (1st Generation Obfuscation) then decompiled</h3>
        <pre class="code"><code>package a;

import java.util.*;

class a {

    private List = new ArrayList&lt;&gt;();

    int a(String s) {
        for(int i = 0; i &lt; a.size(); i++) {
            String s1 = a.get(i);
            if(s1.equals(s)) {
                a.remove(i);
                return i;
            }
        }
        return -1;
    }
}</code></pre>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Java Name Obfuscation</p>
        <p>Name Obfuscation is the changing of meaningful class, field and method names to meaningless strings.</p>
        <p>This makes the decompiled source harder to understand but the overall flow of the code is not obscured.</p>
        <p>Although Zelix KlassMaster(TM) can do much more to than just change class, field and method names, it nonetheless performs excellent name obfuscation.</p>
        <p>Unlike some other obfuscators, it has been engineered to handle extremely complicated inheritance and interface implementation relationships.</p>
        <p>Also, Zelix KlassMaster's name obfuscation is absolutely irreversible .</p>
        <p>Some other obfuscators embed old to new name look up tables in your bytecode. That opens the door to their name obfuscation being reversible.</p>
        <p>The new names that Zelix KlassMaster(TM) generates are extremely short so it reduces the size of your bytecode .</p>
        <p>See the examples below. Note that in the name obfuscated bytecode, the package, class, field and method names have been renamed and the original local variable names have been removed.</p>
        <p>Unfortunately, the control flow and method calls are still clearly visible.</p>
        <p>That is why you need Zelix KlassMaster's Flow Obfuscation , String Encryption ,</p>
        <p>Reference Obfuscation , Method Parameter Changing and</p>
        <p>private List buffer = new ArrayList&lt;&gt;();</p>
        <p>/** * Return the position of the specified String * in the list. Remove the String once if it * has been found. Return -1 if the String * isn't found. */</p>
        <p>int getStringPos(String string) { for(int ctr=0; ctr &lt; list.size(); ctr++) { String curString = list.get(ctr); if (curString.equals(string)) { list.remove(ctr); return ctr; } } return -1; } }</p>
        <p>int a(String s) { for(int i = 0; i &lt; a.size(); i++) { String s1 = a.get(i); if(s1.equals(s)) { a.remove(i); return i; } } return -1; } }</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Name Obfuscation",
  "url": "https://zkm-web.vercel.app/features/featuresNameObfuscation"
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
      "name": "Name Obfuscation"
    }
  ]
}]
useHead({
  title: 'Name Obfuscation | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Name Obfuscation | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features/featuresNameObfuscation' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
