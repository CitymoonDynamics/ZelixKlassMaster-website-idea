<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Constant Properties</h1>
      <div class="panel">
        <h2>Constant Properties</h2>
        <p>Zelix KlassMaster(TM) lets you examine a constant's value.</p>
        <p>It no longer supports changing the value through this interface.</p>
        <p>So the and buttons are no longer active.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Constant Properties","url":"https://zkm-web.vercel.app/docs/constantProperties"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/constantProperties' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
