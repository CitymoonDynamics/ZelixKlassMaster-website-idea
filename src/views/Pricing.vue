<template>
  <div class="wrap">
    <section class="section">
      <h1>ZKM Pricing and Licenses</h1>
      <p class="muted">Source: klassmaster/order.html. Prices in USD, tax excluded. Per machine or per site license. Licensed copies ship by email. No physical goods.</p>
      <div class="grid2">
        <div class="panel">
          <h2>Small Developer: USD 290</h2>
          <p>For organizations of up to 2 people in the last 12 months. One machine. Built for independents and micro businesses.</p>
          <a class="btn dark" href="mailto:sales@example.com?subject=ZKM%20Small%20Developer%20License">Request Small License</a>
        </div>
        <div class="panel">
          <h2>Standard: USD 585</h2>
          <p>For organizations of 3 or more people. One machine. Includes all obfuscation features.</p>
          <a class="btn dark" href="mailto:sales@example.com?subject=ZKM%20Standard%20License">Request Standard License</a>
        </div>
      </div>
      <h3>Multi License and Site Pricing</h3>
      <div class="panel">
        <table class="list-table">
          <thead><tr><th>Effective Licenses</th><th>Bundle Price (USD)</th><th>Separate Price (USD)</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>585</td><td>585</td></tr>
            <tr><td>2</td><td>1,025</td><td>1,170</td></tr>
            <tr><td>3</td><td>1,318</td><td>1,755</td></tr>
            <tr><td>4</td><td>1,610</td><td>2,340</td></tr>
            <tr><td>5</td><td>1,900</td><td>2,925</td></tr>
            <tr><td>Site (unlimited machines, one physical location)</td><td>2,195</td><td>3,510 or more</td></tr>
          </tbody>
        </table>
        <p class="muted">Buying in bulk costs less than separate licenses. Card or PayPal payment through a secure form. Upgrades covered by the upgrades page of the original site.</p>
      </div>
      <h3>Commercial Terms</h3>
      <div class="panel">
        <p>Read the commercial license terms before purchase. Delivery by email with licensee details. Refund policy under Legal.</p>
        <p class="muted"><RouterLink to="/page/order">Full order page</RouterLink> | <RouterLink to="/page/upgrades">Upgrades</RouterLink> | <RouterLink to="/page/license">Commercial license</RouterLink></p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({ title: 'Pricing and Licenses | Zelix KlassMaster', meta: [{ name: 'description', content: 'Zelix KlassMaster licenses: Small Developer USD 290, Standard USD 585, multi license and site license USD 2195.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/pricing.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/pricing' }] })
</script>
