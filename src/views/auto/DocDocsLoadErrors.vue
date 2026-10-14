<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Class Open Errors</h1>
      <div class="panel">
        <h2>Class Open Errors</h2>
        <p>If Zelix KlassMaster(TM) detects errors within the classes that it has opened it reports the fact by displaying the "Class Open Errors" screen. Some obfuscators deliberately insert corrupt information into a class file in the hope of confusing or even crashing decompilers.</p>
        <p>Zelix KlassMaster(TM) removes corrupt Local Variable Table and Inner Class information automatically.</p>
        <p>Files that are totally corrupt are skipped.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Class Open Errors","url":"https://zkm-web.vercel.app/docs/loadErrors"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/loadErrors' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
