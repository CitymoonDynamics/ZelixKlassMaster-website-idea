<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Method Parameter Obfuscation Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Method Parameter Obfuscation Tutorial</li>
          <li>Method Parameter Obfuscation Tutorial This tutorial is divided into the following sections:</li>
          <li>Overview</li>
          <li>How to use the Method Parameter Obfuscation functionality</li>
          <li>Which methods will have their parameters obfuscated</li>
          <li>Qualifications</li>
          <li>Are entry points into your application,</li>
          <li>Are accessed via reflection and</li>
          <li>Are expected by some framework which your application uses to have a specific signature. (E.g. getter or setter methods)</li>
          <li>Marshal values into the single Object[] parameter while wrapping any primitive values before calling the parameter obfuscated method and</li>
          <li>Unmarshal values from the single Object[] parameter while unwrapping any primitive values in the called parameter obfuscated method.</li>
        </ul>
        <p>This tutorial is divided into the following sections:</p>
        <p>The Zelix KlassMaster(TM) Method Parameter Obfuscation functionality obfuscates method parameter lists by replacing them with a single Object[] parameter.</p>
        <p>Note that only methods that will have their names obfuscated will be eligible for method parameter obfuscation.</p>
        <p>The combination of method Name Obfuscation and Method Parameter Obfuscation reduces the comprehensibility of the Java source code produced by a decompiler.</p>
        <p>Method Parameter Obfuscation also obscures the changes made by the Method Parameter Changes functionality.</p>
        <p>For example, the following list of method signatures:</p>
        <p>List getCustomerOrders(Customer, Date, Date, long)</p>
        <p>The downside is that it can become impractical to release changes to your obfuscated classes in the form of patches which are just a subset of your classes.</p>
        <p>The Method Parameter Obfuscation functionality will only be used if the obfuscate statement has its obfuscateParameters parameter set to normal</p>
        <p>and if some methods will have their names obfuscated.</p>
        <p>Also, it is recommended that you set the aggressiveMethodRenaming parameter of the obfuscate statement to true</p>
        <p>to give the Name Obfuscation functionality maximum flexibility given that all obfuscated parameter lists will be the same.</p>
        <p>Method selection occurs in stages. As mentioned above, if the obfuscateParameters parameter is set to normal</p>
        <p>then initially all methods that will have their names obfuscated will be eligible for method parameter obfuscation.</p>
        <p>The next stage is to apply exclusions to the candidate method set. You can tailor the candidate set of methods by using a preceding</p>
        <p>methodParameterObfuscationInclude or methodParameterObfuscationExclude statement.</p>
        <p>If a methodParameterObfuscationInclude statement appears by itself then the candidate set of methods can only be chosen from the set of methods that it specifies.</p>
        <p>If a methodParameterObfuscationExclude statement appears by itself then the candidate set of methods can only be chosen from the set of methods that don't match its specification.</p>
        <p>If there is a methodParameterObfuscationInclude statement and a</p>
        <p>methodParameterObfuscationExclude statement then the</p>
        <p>methodParameterObfuscationInclude statement will be applied first against the set of all methods and then the methodParameterObfuscationExclude statement will be applied against the set of methods specified by the</p>
        <p>methodParameterObfuscationInclude statement.</p>
        <p>If there is not an active, preceding methodParameterObfuscationInclude or</p>
        <p>methodParameterObfuscationExclude statement then by default all renamed methods are considered to be possible candidates.</p>
        <p>However, there are some other restrictions that Zelix KlassMaster(TM) applies. For example, all methods which are entry points into your application should not be changed.</p>
        <p>If you have a preceding trimExclude and/or trimUnexclude statements then Zelix KlassMaster(TM) will assume that they specifies the entry point methods for your application.</p>
        <p>Also, methods which are accessed via Reflection should not have their parameters obfuscated.</p>
        <p>If you have a preceding accessedByReflection and/or accessedByReflectionExclude statement then Zelix KlassMaster(TM) will assume that they specify the methods that are accessed by Reflection by your application.</p>
        <p>As mentioned above, there are some methods which should not have their parameters obfuscated. These include methods that</p>
        <p>The above list is not exhaustive. If you use the Method Parameter Obfuscation functionality then you need to understand the application that you are obfuscating and apply the appropriate exclusions where necessary.</p>
        <p>It is highly recommended that you start with only limited changes until you have everything working. You can then iteratively broaden the changes.</p>
        <p>Finally, note that the Method Parameter Obfuscation functionality can have a significant performance impact due to the need to</p>
        <p>The performance impact can be exacerbated by the use Method Parameter Changes functionality which increases the number of parameters that may need to be marshalled/unmarshalled and wrapped/unwrapped.</p>
        <p>For this reason it is recommended that you exclude any performance critical methods from having their parameter lists obfuscated particulary if they have had their parameter lists changed by the Method Parameter Changes functionality.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Method Parameter Obfuscation Tutorial","url":"https://zkm-web.vercel.app/docs/methodParameterObfuscationTutorial"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Method Parameter Obfuscation Tutorial | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/methodParameterObfuscationTutorial' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
