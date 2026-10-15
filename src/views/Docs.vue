<template>
  <div class="wrap">
    <section class="section">
      <h1>Documentation and ZKM Script</h1>
      <p class="muted">Summary of klassmaster/docs with {{ entries.length }} reference pages. Statement reference, tutorials and build tools. Each entry links to its full page.</p>
      <div class="grid2">
        <div class="panel">
          <h2>Minimal Reproducible Script</h2>
          <pre class="code"><code>// build.zkm
classpath "lib/app.jar";
open "build/classes" "com.acme.*";
trimExclude "com.acme.api.PublicApi";
obfuscateFlowExclude "com.acme.crypto.*";
stringEncryption "aggressive";
integerEncryption;
trim;
saveAll "dist/app-obf.jar" "dist/map.log";</code></pre>
          <p class="muted">Keep map.log for Incremental Obfuscation and Stack Trace Translate.</p>
        </div>
        <div class="panel">
          <h2>Statement Reference</h2>
          <table class="list-table">
            <thead><tr><th scope="col">Statement</th><th scope="col">Use</th></tr></thead>
            <tbody>
              <tr><td>open / classpath</td><td>Load classes and dependencies</td></tr>
              <tr><td>exclude / unexclude</td><td>Rename exclusions</td></tr>
              <tr><td>trim / trimExclude</td><td>Dead code removal</td></tr>
              <tr><td>obfuscateFlowExclude</td><td>Flow exclusion by package</td></tr>
              <tr><td>stringEncryptionExclude</td><td>String encryption exclusion</td></tr>
              <tr><td>fixedClasses / groupings</td><td>Stable mapping across releases</td></tr>
              <tr><td>saveAll / saveAllOld</td><td>Output and compatibility</td></tr>
              <tr><td>buildToolAnt / Gradle / Maven</td><td>CI integration</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3>All Reference Pages</h3>
      <div v-for="g in groups" :key="g.name" class="panel">
        <h3>{{ g.name }} ({{ g.items.length }})</h3>
        <table class="list-table">
          <thead><tr><th scope="col">Page</th><th scope="col">Summary</th></tr></thead>
          <tbody>
            <tr v-for="e in g.items" :key="e.slug">
              <td><RouterLink :to="'/docs/' + e.slug">{{ e.title }}</RouterLink></td>
              <td>{{ e.summary }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { docEntries } from '../data/docs'
import { useHead } from '@unhead/vue'
import { SITE_URL } from '../site'
useHead({ title: 'Documentation and ZKM Script | Zelix KlassMaster', meta: [{ name: 'description', content: 'ZKM Script reference, tutorials and statement documentation for the Zelix KlassMaster Java obfuscator.' }, { property: 'og:image', content: SITE_URL + '/og/docs.png' }], link: [{ rel: 'canonical', href: SITE_URL + '/docs' }] })

const entries = docEntries
const groups = computed(() => ['tutorial', 'statement', 'tool'].map((name) => ({
  name,
  items: entries.filter((e) => e.kind === name)
})))
</script>
