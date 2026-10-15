<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Use of Annotations to Specify Obfuscation Settings Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Use of Annotations to Specify Obfuscation Settings Tutorial</li>
          <li>Use of Annotations to Specify Obfuscation Settings Tutorial This tutorial is divided into the following sections:</li>
          <li>Overview</li>
          <li>The Annotation Classes</li>
          <li>Using the Annotations</li>
          <li>Example</li>
        </ul>
        <pre class="code"><code>package com.zelix.annotation;

import java.lang.annotation.*;

/**
 * Used to override certain obfuscation settings at the class level
 */
@Retention(value=RetentionPolicy.CLASS)
@Target(value={ElementType.TYPE})
public @interface ZKMClassLevel {
   FlowObfuscationPolicy   obfuscateFlow() default FlowObfuscationPolicy.LIGHT;
   ExceptionObfuscationPolicy exceptionObfuscation() default ExceptionObfuscationPolicy.LIGHT;
}</code></pre>
        <pre class="code"><code>package com.zelix.annotation;

import java.lang.annotation.*;

/**
 * Used to override certain obfuscation settings at the method level
 */
@Retention(value=RetentionPolicy.CLASS)
@Target(value={ElementType.METHOD})
public @interface ZKMMethodLevel {
   FlowObfuscationPolicy   obfuscateFlow() default FlowObfuscationPolicy.LIGHT;
   ExceptionObfuscationPolicy exceptionObfuscation() default ExceptionObfuscationPolicy.LIGHT;
}</code></pre>
        <pre class="code"><code>package com.zelix.annotation;

/**
 * Indicates that the annotated program element should be excluded from obfuscation. */
public enum FlowObfuscationPolicy {
    NONE,
    LIGHT,
    NORMAL,
    AGGRESSIVE
}</code></pre>
        <pre class="code"><code>package com.zelix.annotation;

/**
 * Indicates that the annotated program element should be excluded from obfuscation. */
public enum ExceptionObfuscationPolicy {
    NONE,
    LIGHT,
    HEAVY
}</code></pre>
        <ul>
          <li>If the relevant transformation setting (i.e. Flow or Exception Obfuscation) has been enabled in the preceding obfuscate statement and</li>
          <li>If the annotated class or method has not been explicitly excluded from the relevant transformation by an exclusion statement.</li>
        </ul>
        <pre class="code"><code>/**
* This method will not be Flow or Exception Obfuscated because of its special annotation. */
@ZKMMethodLevel(obfuscateFlow=FlowObfuscationPolicy.NONE, exceptionObfuscation=ExceptionObfuscationPolicy.NONE)
public void m0(int i0) {
   for(int i=0; i if (i == 5) {
         System.out.println("m0 A");
      }
      else if (i == 6) {
         System.out.println("m0 B");
      }
   }
}</code></pre>
        <p>Use of Annotations to Specify Obfuscation Settings Tutorial</p>
        <p>This tutorial is divided into the following sections:</p>
        <p>Zelix KlassMaster(TM)'s obfuscation settings are normally specified using the clauses of the ZKM Script obfuscate statement and the various exclusion statements such as the obfuscateFlowExclude statement. However, the effects of the</p>
        <p>obfuscate statement's obfuscateFlow and exceptionObfuscation settings are all or nothing.</p>
        <p>For example, if you specify obfuscateFlow=aggressive then that level of Flow Obfuscation will be applied to all methods which have not been excluded from Flow Obfuscation.</p>
        <p>However, there are some scenarios where you may wish to have a fine grained control of the obfuscation setting at the level of individual classes or methods.</p>
        <p>This can be done by annotating specific classes or methods in your Java source code with special Zelix KlassMaster annotations.</p>
        <p>/** * Used to override certain obfuscation settings at the class level */</p>
        <p>@Retention(value=RetentionPolicy. CLASS ) @Target(value={ElementType.</p>
        <p>ZKMClassLevel { FlowObfuscationPolicy obfuscateFlow()</p>
        <p>default FlowObfuscationPolicy. LIGHT ; ExceptionObfuscationPolicy exceptionObfuscation()</p>
        <p>default ExceptionObfuscationPolicy. LIGHT ; }</p>
        <p>/** * Used to override certain obfuscation settings at the method level */</p>
        <p>ZKMMethodLevel { FlowObfuscationPolicy obfuscateFlow() default FlowObfuscationPolicy.</p>
        <p>LIGHT ; ExceptionObfuscationPolicy exceptionObfuscation() default ExceptionObfuscationPolicy.</p>
        <p>/** * Indicates that the annotated program element should be excluded from obfuscation.</p>
        <p>Simply annotate the class or method that you wish to obfuscate with a specific Flow or Exception Obfuscation setting with a</p>
        <p>ZKMClassLevel or ZKMMethodLevel annotation which specifies that setting.</p>
        <p>Note that the annotation will only have an effect</p>
        <p>Put another way, the annotations can only change the level of Flow or Exception Obfuscation for the annotated class or method if that class or method would otherwise have been flow or exception obfuscated.</p>
        <p>/** * This method will not be Flow or Exception Obfuscated because of its special annotation.</p>
        <p>@ZKMMethodLevel(obfuscateFlow=FlowObfuscationPolicy.NONE, exceptionObfuscation=ExceptionObfuscationPolicy.NONE)</p>
        <p>for ( int i=0; i if (i == 5) { System.out.println("m0 A"); }</p>
        <p>else if (i == 6) { System.out.println("m0 B"); } } }</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Use of Annotations to Specify Obfuscation Settings Tutorial",
  "url": "https://zkm-web.vercel.app/docs/obfuscationSettingsAnnotationsTutorial"
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
      "name": "Docs",
      "item": "https://zkm-web.vercel.app/docs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Use of Annotations to Specify Obfuscation Settings Tutorial"
    }
  ]
}]
useHead({
  title: 'Use of Annotations to Specify Obfuscation Settings Tuto | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Use of Annotations | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/obfuscationSettingsAnnotationsTutorial' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
