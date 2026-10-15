<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Features</p>
      <h1>Flow Obfuscation</h1>
      <div class="panel">
        <p>Second generation control flow rewriting. Plain bytecode becomes goto heavy logic that decompilers cannot structure.</p>
        <p>Third generation flow builds on Method Parameter Changing for stronger opaque predicates.</p>
        <p>Methods can be excluded per package when flow rewriting costs too much performance.</p>
        <h3>ZKM Script Sample</h3>
        <pre class="code"><code>obfuscateFlowExclude "com.acme.hotpath.*";</code></pre>
      </div>
      <div class="panel" style="margin-top: 20px;">
        <h2>Complete Local Copy</h2>
        <h3>Original Source</h3>
        <pre class="code"><code>package test;

import java.util.*;

class Demo {

   private List list = new ArrayList&lt;&gt;();

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
        <h3>Name and Flow obfuscated (2nd Generation Obfuscation) then decompiled</h3>
        <pre class="code"><code>package a;

import java.util.*;

class a {

    private List a;
    public static int b;

    a() {
        a = new ArrayList();
    }

    int a(String s) {
        int i;
        int j;
        j = b;
        i = 0;
        if(j == 0) goto _L2; else goto _L1
_L1:
        String s1 = (String)a.get(i);
        s1.equals(s);
        if(j != 0) goto _L4; else goto _L3
_L3:
        JVM INSTR ifeq 48;
           goto _L5 _L6
_L5:
        break MISSING_BLOCK_LABEL_37;
_L6:
        continue;
        a.remove(i);
        i;
_L4:
        return;
_L2:
        if(i &gt;= a.size())
            return -1;
        if(true) goto _L1; else goto _L7
_L7:
    }
}</code></pre>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Java Flow Obfuscation</p>
        <p>performs flow obfuscation in addition to name obfuscation .</p>
        <p>It makes slight changes to the bytecode that obscure the control flow without changing what the code does at runtime. Typically, selection (eg. if...else...) and looping constructs (eg. while and for loops) are changed so that they no longer have a direct Java source code equivalent. Flow obfuscated bytecode typically forces decompilers to inset a series of labels and illegal goto statements into the source code they produce. The source code is sometimes further obscured by decompiler errors.</p>
        <p>As well as the standard Flow Obfuscation, Zelix KlassMaster(TM) can also perform Flow Obfuscation making use of the Method Parameter Changes functionality.</p>
        <p>You can use either approach or both together.</p>
        <p>Other obfuscators claim to perform flow obfuscation but, in reality, they only make a token effort. Zelix KlassMaster(TM) was the first true second generation, heavy duty Java obfuscator</p>
        <p>and its flow obfuscation remains unmatched .</p>
        <p>See the very simple examples below. Note that the appearance of your flow obfuscated code after decompilation will vary depending on the decompiler used.</p>
        <p>/** * Return the position of the specified String * in the list. Remove the String once if it * has been found. Return -1 if the String * isn't found. */</p>
        <p>int getStringPos(String string) { for(int ctr=0; ctr &lt; list.size(); ctr++) { String curString = list.get(ctr); if (curString.equals(string)) { list.remove(ctr); return ctr; } } return -1; } }</p>
        <p>int a(String s) { int i; int j; j = b; i = 0; if(j == 0) goto _L2; else goto _L1 _L1: String s1 = (String)a.get(i); s1.equals(s); if(j != 0) goto _L4; else goto _L3 _L3: JVM INSTR ifeq 48; goto _L5 _L6 _L5: break MISSING_BLOCK_LABEL_37; _L6: continue; a.remove(i); i; _L4: return; _L2: if(i &gt;= a.size()) return -1; if(true) goto _L1; else goto _L7 _L7: } }</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Flow Obfuscation",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features/featuresFlowObfuscation"
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
      "name": "Features",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Flow Obfuscation"
    }
  ]
}]
useHead({
  title: 'Flow Obfuscation | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Flow Obfuscation | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/features.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/features/featuresFlowObfuscation' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
