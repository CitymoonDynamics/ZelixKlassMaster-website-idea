<template>
  <a class="skip" href="#content">Skip to content</a>
  <header class="site-header">
    <div class="wrap">
      <RouterLink class="brand" to="/">
        <img src="/img/logo.avif" alt="Zelix KlassMaster logo" width="34" height="34">
        <span class="brand-name">Zelix KlassMaster</span>
      </RouterLink>
      <nav class="nav" aria-label="Primary">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/features" active-class="active">Features</RouterLink>
        <RouterLink to="/pricing" active-class="active">Pricing</RouterLink>
        <RouterLink to="/docs" active-class="active">Docs</RouterLink>
        <RouterLink to="/support" active-class="active">Support</RouterLink>
        <RouterLink to="/contact" active-class="active">Contact</RouterLink>
        <RouterLink to="/sitemap" active-class="active">Sitemap</RouterLink>
        <RouterLink to="/pricing" class="cta" active-class="active">Buy License</RouterLink>
      </nav>
    </div>
  </header>
  <main id="content">
    <RouterView />
  </main>
  <footer class="site-footer">
    <div class="wrap">
      <div>
        <strong>Zelix KlassMaster</strong>
        <p class="muted">Heavy duty Java obfuscator since 1997. Flow Obfuscation, string and constant encryption, trim and ZKM Script.</p>
      </div>
      <div>
        <strong>Features</strong><br>
        <span v-for="f in featLinks" :key="f.slug"><RouterLink :to="'/features/' + f.slug">{{ f.title }}</RouterLink><br></span>
      </div>
      <div>
        <strong>Docs</strong><br>
        <RouterLink to="/docs">Documentation index</RouterLink><br>
        <RouterLink to="/docs/gettingStarted">Getting started</RouterLink><br>
        <RouterLink to="/docs/langZKMScript">ZKM Script reference</RouterLink><br>
        <RouterLink to="/docs/buildToolAnt">Ant</RouterLink><br>
        <RouterLink to="/docs/buildToolGradle">Gradle</RouterLink><br>
        <RouterLink to="/docs/buildToolMaven">Maven</RouterLink><br>
        <RouterLink to="/docs/toolsStackTraceTranslate">Stack Trace Translate</RouterLink><br>
        <RouterLink to="/docs/toolsZKMScriptHelper">Script Helper</RouterLink>
      </div>
      <div>
        <strong>Company</strong><br>
        <RouterLink to="/pricing">Pricing and licenses</RouterLink><br>
        <RouterLink to="/support">Support and FAQ</RouterLink><br>
        <RouterLink to="/contact">Contact</RouterLink><br>
        <RouterLink to="/legal">Terms and privacy</RouterLink><br>
        <RouterLink to="/sitemap">Full sitemap</RouterLink>
      </div>
    </div>
    <div class="fineprint"><div class="wrap">Copyright 1997-2026 Zelix Pty Ltd. Prices in USD, tax excluded. <RouterLink to="/legal">Legal notice</RouterLink>.</div></div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { features } from './data/features'
const featLinks = features.map((f) => ({ slug: f.slug, title: f.title }))
</script>
