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
          <p class="muted">This form opens your email client with your message prefilled. Nothing is sent automatically.</p>
          <form @submit.prevent="compose">
            <p><label for="cf-name">Name<br><input id="cf-name" v-model="name" required type="text" name="name" autocomplete="name"></label></p>
            <p><label for="cf-email">Email<br><input id="cf-email" v-model="email" required type="email" name="email" autocomplete="email"></label></p>
            <p><label for="cf-topic">Topic<br><select id="cf-topic" v-model="topic" name="topic"><option>License purchase</option><option>Upgrade</option><option>Technical support</option><option>Press</option></select></label></p>
            <p><label for="cf-msg">Message<br><textarea id="cf-msg" v-model="msg" required rows="5" name="message"></textarea></label></p>
            <p><button class="btn dark" type="submit">Open Email Client</button></p>
            <p v-if="opened" role="status">Your email client should have opened with the message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({ title: 'Contact Sales | Zelix KlassMaster', meta: [{ name: 'description', content: 'Contact the Zelix KlassMaster sales and support team about licenses and upgrades.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/contact.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/contact' }] })
const name = ref('')
const email = ref('')
const topic = ref('License purchase')
const msg = ref('')
const opened = ref(false)
const recipient = computed(() => (topic.value === 'Technical support' ? 'support@example.com' : 'sales@example.com'))
function compose() {
  const subject = encodeURIComponent('[ZKM] ' + topic.value + ' from ' + name.value)
  const body = encodeURIComponent(msg.value + '\n\nReply to: ' + email.value)
  window.location.href = 'mailto:' + recipient.value + '?subject=' + subject + '&body=' + body
  opened.value = true
}
</script>

<style scoped>
input, select, textarea { width: 100%; padding: 8px; border: 1px solid #d7dee5; border-radius: 2px; font: inherit; }
</style>
