<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Reference</p>
      <h1>ContactUs</h1>
      <div class="panel">
        <h3>ContactUs</h3>
        <h3>Mailing address</h3>
        <h3>E-mail</h3>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"ContactUs","url":"https://zkm-web.vercel.app/page/contact"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/reference.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/page/contact' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
