<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>What you need to do</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>Class Open Warnings Some classes cannot be automatically and reliably obfuscated or have any names changed. Examples are classes that use the Java Reflection API by hardcoding package, class, field or method names in a string and then at runtime</li>
          <li>test a class, field or method's name against that string</li>
          <li>create Class, Field, Method or Constructor instances using that string</li>
          <li>Class.forName(String)</li>
          <li>Class.getName()</li>
          <li>Class.getField(String)</li>
          <li>Class.getMethod(String)</li>
          <li>Class.getDeclaredField(String)</li>
          <li>Class.getDeclaredMethod(String)</li>
          <li>Field.getName()</li>
          <li>Method.getName()</li>
          <li>Constructor.getName()</li>
          <li>ClassLoader.loadClass(String,boolean)</li>
          <li>ClassLoader.defineClass()</li>
          <li>ClassLoader.findSystemClass(String)</li>
          <li>ClassLoader.findLoadedClass(String)</li>
          <li>RMIClassLoader.loadClass(String)</li>
          <li>RMIClassLoader.loadClass(URL, String)</li>
          <li>LoaderHandler.loadClass(String)</li>
          <li>LoaderHandler.loadClass(URL, String)</li>
          <li>EventSetDescriptor(Class, String, Class, String)</li>
          <li>EventSetDescriptor(Class, String, Class, String[], String, String)</li>
          <li>EventSetDescriptor(Class, String, Class, String[], String, String, String)</li>
          <li>the name of the class that contains the Java Reflection API method call and</li>
          <li>the signature of the method that contains the Reflection API method call and</li>
          <li>the signature of the Reflection API method call that was detected.</li>
        </ul>
        <h3>What you need to do</h3>
        <ul>
          <li>the string is stored as an unencrypted string constant within an opened class file (as opposed, for example, to being read from a file) and</li>
          <li>the fully qualified old class name: is at least three characters long</li>
          <li>contains at least one alpha character</li>
          <li>contains the package separator character "."</li>
        </ul>
        <p>Some classes cannot be automatically and reliably obfuscated or have any names changed.</p>
        <p>Examples are classes that use the Java Reflection API by hardcoding package, class, field or method names in a string and then at runtime</p>
        <p>Zelix KlassMaster(TM) can automatically handle many simple Reflection API calls. However, if Zelix KlassMaster(TM) opens a class that it might not be able to automatically process reliably then it reports the fact using the "Class Open Warnings" screen.</p>
        <p>You may get the "Class Open Warnings" screen if an opened class contains a call to one or more of the following methods:</p>
        <p>Note that the "Class Open Warnings" screen shows:</p>
        <p>Note that it does not show the name of the class, field or method that is being accessed by its name .</p>
        <p>Of course it cannot do that because the Reflection API call could not be fully analyzed.</p>
        <p>Zelix KlassMaster(TM) may still be able to automatically process classes that are listed in the Open Warnings.</p>
        <p>For example, calls to Class.getName() are often made for debugging purposes and can be ignored. Also, in certain situations, Zelix KlassMaster(TM) can change the contents of a string containing a class name to match the new class name.</p>
        <p>Zelix KlassMaster(TM) can do this only if:</p>
        <p>In any case, the user must look at the way the call is used to determine if the class can be reliably automatically processed. If necessary, you should explicity exclude the name of the class, field or method, that is being accessed by its name, from being changed. You do this by using either the Obfuscation Name Exclusions dialog or the ZKM Script exclude statement.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"What you need to do","url":"https://zkm-web.vercel.app/docs/loadWarnings"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/loadWarnings' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
