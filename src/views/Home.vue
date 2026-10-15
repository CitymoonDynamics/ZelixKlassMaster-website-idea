<template>
  <section class="sky">
    <div class="wrap">
      <h1>Java Protection<br>Built for Production</h1>
      <p class="lead">Heavy duty obfuscation since 1997. Flow, encryption, trim.</p>
      <div class="btnrow" style="justify-content: center;">
        <RouterLink class="btn solid" to="/pricing">Buy from USD 290</RouterLink>
        <RouterLink class="btn ghost" to="/features">Features</RouterLink>
      </div>
      <div class="float-cards">
        <div class="float-card"><strong>1997</strong><span>Shipping since</span></div>
        <div class="float-card"><strong>20</strong><span>Protection features</span></div>
        <div class="float-card dark"><strong>USD 290</strong><span>Entry license</span></div>
        <div class="float-card"><strong>Java 27</strong><span>Supported</span></div>
      </div>
    </div>
  </section>

  <div class="wrap after-sky">
    <section class="section">
      <h2 class="center">One Tool. Full Coverage.</h2>
      <div class="svc-grid">
        <div class="svc">
          <img src="/img/Tab5aOn.avif" alt="Heavy duty protection" width="150" height="150" loading="lazy">
          <h3>Protect</h3>
          <p class="muted">Flow, strings, constants, references.</p>
          <RouterLink to="/features/featuresFlowObfuscation">Flow</RouterLink>
        </div>
        <div class="svc">
          <img src="/img/Tab5bOn.avif" alt="Shrink output" width="150" height="150" loading="lazy">
          <h3>Shrink</h3>
          <p class="muted">Rename and trim dead code.</p>
          <RouterLink to="/features/featuresTrim">Trim</RouterLink>
        </div>
        <div class="svc">
          <img src="/img/Tab5cOn.avif" alt="Automate builds" width="150" height="150" loading="lazy">
          <h3>Automate</h3>
          <p class="muted">ZKM Script. Ant, Maven, Gradle.</p>
          <RouterLink to="/features/featuresZKMScript">Script</RouterLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="panel">
        <h2>Pricing</h2>
        <table class="list-table">
          <thead><tr><th>License</th><th>Price (USD)</th><th>Order</th></tr></thead>
          <tbody>
            <tr><td>Small Developer</td><td>290</td><td><RouterLink to="/pricing">Buy</RouterLink></td></tr>
            <tr><td>Standard</td><td>585</td><td><RouterLink to="/pricing">Buy</RouterLink></td></tr>
            <tr><td>Site</td><td>2,195</td><td><RouterLink to="/pricing">Buy</RouterLink></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>

  <section class="cta-band">
    <div class="wrap">
      <h2>Protect Your Next Release</h2>
      <div class="btnrow" style="justify-content: center;">
        <RouterLink class="btn solid" to="/pricing">See Pricing</RouterLink>
        <RouterLink class="btn ghost" to="/sitemap">Full Sitemap</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import { SITE_URL } from '../site'
useHead({ title: 'Zelix KlassMaster | Heavy Duty Java Obfuscator Since 1997', meta: [{ name: 'description', content: 'Zelix KlassMaster protects Java bytecode against decompilation with Flow Obfuscation, string encryption and trim. Licenses from USD 290.' }, { property: 'og:image', content: SITE_URL + '/og/home.png' }], link: [{ rel: 'canonical', href: SITE_URL + '/' }] })
</script>
