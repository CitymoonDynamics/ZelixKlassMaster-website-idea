<template>
  <div class="wrap">
    <section class="section">
      <h1>Terms, Privacy and Refunds</h1>
      <div class="panel">
        <h2>Terms of Use</h2>
        <p>License purchases follow the Zelix KlassMaster commercial license. Licensees may not redistribute the software. Prices exclude tax.</p>
        <p class="muted"><RouterLink to="/page/terms">Full terms of use</RouterLink> | <RouterLink to="/page/license">Commercial license</RouterLink></p>
        <h2>Privacy</h2>
        <p>Contact data is used only for sales and support.</p>
        <p class="muted"><RouterLink to="/page/privacy">Full privacy policy</RouterLink></p>
        <h2>Refunds</h2>
        <p>Customized downloadable software. Test the trial build before purchase.</p>
        <p class="muted"><RouterLink to="/page/refunds">Full refund policy</RouterLink></p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({ title: 'Terms, Privacy and Refunds | Zelix KlassMaster', meta: [{ name: 'description', content: 'Zelix KlassMaster commercial license terms, privacy policy and refund policy.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/legal.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/legal' }] })
</script>
