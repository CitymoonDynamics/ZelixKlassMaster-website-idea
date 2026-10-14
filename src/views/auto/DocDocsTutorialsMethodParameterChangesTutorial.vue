<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Method Parameter Changes Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Method Parameter Changes Tutorial</li>
          <li>Method Parameter Changes Tutorial This tutorial is divided into the following sections:</li>
          <li>Overview</li>
          <li>How to use the Method Parameter Change functionality</li>
          <li>Which methods will have their parameters changed</li>
          <li>Qualifications</li>
          <li>The obfuscate statement has its methodParameterChanges parameter set to flowObfuscate OR</li>
          <li>The obfuscate statement has its methodParameterChanges parameter set to either normal or random and Its encryptStringLiterals parameter set to enhanced and/or</li>
          <li>Its encryptIntegerConstants parameter set to normal or aggressive and/or</li>
          <li>Its encryptLongConstants parameter set to normal and/or</li>
          <li>Its obfuscateReferences parameter set to normal .</li>
          <li>It makes use of enhanced String Encryption or</li>
          <li>It makes use of Reference Obfuscation or</li>
          <li>It has significant control flow that could allow flow obfuscation.</li>
          <li>Are entry points into your application,</li>
          <li>Are accessed via reflection and</li>
          <li>Are expected by some framework which your application uses to have a specific signature. (E.g. getter or setter methods)</li>
        </ul>
        <p>This tutorial is divided into the following sections:</p>
        <p>The Zelix KlassMaster(TM) Method Parameter Changes functionality supports the String Encryption ,</p>
        <p>Integer Constant Encryption and Reference Obfuscation functions by "hardening" them against attack by deobfuscators.</p>
        <p>Additional parameters are added to the methods that make use of String Encryption , Integer Constant Encryption and/or</p>
        <p>and these new parameters are used to pass decryption keys to the supported functions.</p>
        <p>Where possible, extra parameters will also be added to calling methods such that the decryption keys will be passed through a chain of methods.</p>
        <p>The objective is to interlink the obfuscated methods and classes such that they must be attacked as a whole rather than as more manageable, individual units.</p>
        <p>The downside is that it can become impractical to release changes to your obfuscated classes in the form of patches which are just a subset of your classes.</p>
        <p>The Method Parameter Changes functionality will only be used if</p>
        <p>The obfuscate statement has its methodParameterChanges parameter set to either normal or random and</p>
        <p>Its encryptStringLiterals parameter set to enhanced and/or</p>
        <p>The random setting will make the type and position of the additional parameters more random with a possible, slight cost to runtime performance.</p>
        <p>The flowObfuscate setting is the same as the random setting but a special kind of Flow Obfuscation may be applied at a possible cost to runtime performance.</p>
        <p>The obfuscate statement's allowMethodParameterChanges parameter is now deprecated.</p>
        <p>The old allowMethodParameterChanges=true setting is equivalent to methodParameterChanges=normal and the allowMethodParameterChanges=false setting is equivalent to methodParameterChanges=none .</p>
        <p>The effectiveness of the Method Parameter Changes functionality can be significantly increased if you also use the ZKM Script classInitializationOrder statement to specify pairs of your classes where you guarantee that the first class in the pair will definitely always be initialized at runtime before the second class under all circumstances.</p>
        <p>The Method Parameter Changes functionality can make use of this information to make it and the transformations that make use of it less vulnerable to being reversed.</p>
        <p>Use of the classInitializationOrder statement is highly recommended if you are going to use the Method Parameter Changes functionality but only if you are prepared to carefully analyze and test the initialization order of your classes. It is better to specify six class pairs that you are certain of than a larger number that might be wrong.</p>
        <p>Method selection occurs in stages. As mentioned above, if the methodParameterChanges parameter is set to either normal or random , a method will be considered as a candidate for having its parameter list changed if it makes use of enhanced String Encryption , Integer Encryption , Long Encryption and/or Reference Obfuscation .</p>
        <p>If the methodParameterChanges parameter is set to flowObfuscate , a method will be considered as a candidate for having its parameter list changed if</p>
        <p>Methods with polymorphic relationships to such methods must also be included as candidates.</p>
        <p>The next stage is to repeatedly include as candidate methods those methods which call candidate methods.</p>
        <p>The next stage is to apply exclusions to the candidate method set. You can tailor the candidate set of methods by using a preceding</p>
        <p>methodParameterChangesInclude or methodParameterChangesExclude statement.</p>
        <p>If a methodParameterChangesInclude statement appears by itself then the candidate set of methods can only be chosen from the set of methods that it specifies.</p>
        <p>If a methodParameterChangesExclude statement appears by itself then the candidate set of methods can only be chosen from the set of methods that don't match its specification.</p>
        <p>If there is a methodParameterChangesInclude statement and a</p>
        <p>methodParameterChangesExclude statement then the</p>
        <p>methodParameterChangesInclude statement will be applied first against the set of all methods and then the methodParameterChangesExclude statement will be applied against the set of methods specified by the</p>
        <p>methodParameterChangesInclude statement.</p>
        <p>If there is not an active, preceding methodParameterChangesInclude or</p>
        <p>methodParameterChangesExclude statement then by default all methods are considered to be possible candidates.</p>
        <p>However, there are some other restrictions that Zelix KlassMaster(TM) applies. For a start, there are some methods that cannot have their parameters changed.</p>
        <p>The public static void main(String[]) method is an example. All methods which are entry points into your application should not be changed.</p>
        <p>If you have a preceding trimExclude and/or trimUnexclude statements then Zelix KlassMaster(TM) will assume that they specifies the entry point methods for your application.</p>
        <p>If there are no preceding trimExclude and/or trimUnexclude statements then Zelix KlassMaster(TM) will assume that any method that has not been name obfuscated and is in a class that has not been name obfuscated is a potential entry point into your application.</p>
        <p>Similarly, methods which are accessed via Reflection should not have their parameters changed.</p>
        <p>If you have a preceding accessedByReflection and/or accessedByReflectionExclude statement then Zelix KlassMaster(TM) will assume that they specify the methods that are accessed by Reflection by your application.</p>
        <p>Finally, in later releases, lambda methods are by default eligible to have their parameters changed. If you do not want lambda methods to be eligible for parameter changing then you should specify the ZKM_INDY_PARAM_CHANGING =false configuration option.</p>
        <p>As mentioned above, there are some methods which should not have their parameters changed. These include methods that</p>
        <p>The above list is not exhaustive. If you use the Method Parameter Changes functionality then you need to understand the application that you are obfuscating and apply the appropriate exclusions where necessary.</p>
        <p>It is highly recommended that you start with only limited changes until you have everything working. You can then iteratively broaden the changes.</p>
        <p>In the case of large applications, the Method Parameter Changes functionality could introduce a delay in the start up time of the obfuscated application.</p>
        <p>This delay would typically be in the order of about 1 second or less.</p>
        <p>However, in the case of very large applications, this delay could become unreasonably large.</p>
        <p>In such a case, the "ZKM_METHOD_PARAM_CHANGING_LOOKUP=false" configuration option can be used to switch off the part of the functionality that could cause this delay.</p>
        <p>This would be at the cost of some protection but in such cases the very size of the obfuscated application itself provides a measure of protection against reverse engineering.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Method Parameter Changes Tutorial","url":"https://zkm-web.vercel.app/docs/methodParameterChangesTutorial"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Method Parameter Changes Tutorial | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/methodParameterChangesTutorial' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
