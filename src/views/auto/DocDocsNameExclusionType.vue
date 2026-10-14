<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Exclude Parameter Type</li>
          <li>The Exclude Parameter Type window allows you to select the type of exclude parameter you wish to add. There are five kinds of name exclusion parameter.</li>
          <li>Package exclusion parameters An exclusion parameter that excludes a package name prevents that package and its sub-packages from being renamed. However, in itself it will not prevent the class, field and the method names within that package from being renamed.</li>
          <li>Class exclusion parameters An exclusion parameter that excludes a class name prevents that class from being renamed. However, in itself it will not prevent the field and the method names of that class from being renamed.</li>
          <li>Field exclusion parameters An exclusion parameter that excludes a field name prevents that field from being renamed.</li>
          <li>Method exclusion parameters An exclusion parameter that excludes a method name prevents that method from being renamed.</li>
          <li>Class suffix exclusion parameters A class suffix exclusion parameter is a relatively complex and specialized exclusion parameter. It works in two stages. If a class matches a class suffix exclusion parameter then</li>
          <li>its specified suffix is excluded from being renamed</li>
          <li>if a class X can be found that has an unqualified name matching the non-suffix part of the matching class's name, then the non-suffix part of the matching class's name will be renamed to the new name of class X.</li>
        </ul>
        <p>An exclusion parameter that excludes a package name prevents that package and its sub-packages from being renamed.</p>
        <p>However, in itself it will not prevent the class, field and the method names within that package from being renamed.</p>
        <p>An exclusion parameter that excludes a class name prevents that class from being renamed.</p>
        <p>However, in itself it will not prevent the field and the method names of that class from being renamed.</p>
        <p>An exclusion parameter that excludes a field name prevents that field from being renamed.</p>
        <p>An exclusion parameter that excludes a method name prevents that method from being renamed.</p>
        <p>A class suffix exclusion parameter is a relatively complex and specialized exclusion parameter. It works in two stages.</p>
        <p>If a class matches a class suffix exclusion parameter then</p>
        <p>Its operation is best explained with an example.</p>
        <p>Consider a class suffix exclude parameter specifying the suffix "_Stub".</p>
        <p>A hypothetical class named "Class1_Stub" matches the parameter so the suffix part of the name will be retained.</p>
        <p>The non-suffix part of the matching class name "Class1_Stub" is "Class1".</p>
        <p>If there is a class in the same package named "Class1" and if, when obfuscating, "Class1" is renamed to "abc" then the class "Class1_Stub" will be renamed to "abc_Stub".</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM)","url":"https://zkm-web.vercel.app/docs/nameExclusionType"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/nameExclusionType' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
