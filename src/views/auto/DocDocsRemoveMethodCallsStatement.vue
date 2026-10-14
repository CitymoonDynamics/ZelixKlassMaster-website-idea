<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>The removeMethodCalls Statement</h1>
      <div class="panel">
        <h2>The removeMethodCalls Statement</h2>
        <h3>Example</h3>
        <h3>Syntax</h3>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - removeMethodCalls</p>
        <p>The ZKM Script removeMethodCalls statement removes the method calls that you have specified using one or both of the</p>
        <p>statements. It is intended to be used for the removal of "optional" method calls which have no effect such as debugging statements.</p>
        <p>However, Zelix KlassMaster(TM) will not remove method calls in cases where the method returns an object which is actually used (as opposed to being popped off the stack).</p>
        <p>Note that you should only use this functionality if you are certain that removing the specified methods will not break your application.</p>
        <p>Zelix KlassMaster(TM) cannot check this. It will simply do what you have specified.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"The removeMethodCalls Statement","url":"https://zkm-web.vercel.app/docs/removeMethodCallsStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - removeMethodCalls | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/removeMethodCallsStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
