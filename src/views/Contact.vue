<template>
  <div class="wrap">
    <section class="section">
      <h1>Sales Contact</h1>
      <div class="grid2">
        <div class="panel">
          <h2>Sales</h2>
          <p>Purchase questions, multi licenses and site licenses.</p>
          <p><a href="mailto:sales@example.com">sales@example.com</a></p>
          <h2>Support</h2>
          <p>Include ZKM version, Java version, OS and the relevant map.log.</p>
          <p><a href="mailto:support@example.com">support@example.com</a></p>
          <p class="muted"><RouterLink to="/page/contact">Full contact page</RouterLink> | <RouterLink to="/page/maillist">Mailing list</RouterLink></p>
        </div>
        <div class="panel">
          <h2>Contact Form</h2>
          <form @submit.prevent="sent = true">
            <p><label>Name<br><input v-model="name" required type="text" name="name"></label></p>
            <p><label>Email<br><input v-model="email" required type="email" name="email"></label></p>
            <p><label>Topic<br><select v-model="topic" name="topic"><option>License purchase</option><option>Upgrade</option><option>Technical support</option><option>Press</option></select></label></p>
            <p><label>Message<br><textarea v-model="msg" required rows="5" name="message"></textarea></label></p>
            <p><button class="btn dark" type="submit">Send Inquiry</button></p>
            <p v-if="sent" role="status">Inquiry recorded. We will reply by email.</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({ title: 'Contact Sales | Zelix KlassMaster', meta: [{ name: 'description', content: 'Contact the Zelix KlassMaster sales and support team about licenses and upgrades.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/contact.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/contact' }] })
const name = ref('')
const email = ref('')
const topic = ref('License purchase')
const msg = ref('')
const sent = ref(false)
</script>

<style scoped>
input, select, textarea { width: 100%; padding: 8px; border: 1px solid #d7dee5; border-radius: 2px; font: inherit; }
</style>
