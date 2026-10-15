<template>
  <div class="wrap">
    <section class="section">
      <h1>Full Sitemap: {{ urls.length }} Source URLs</h1>
      <p class="muted">Every page from the zelix.com sitemap, each hosted locally on this site.</p>
      <div v-for="g in groups" :key="g.name" class="panel">
        <h2>{{ g.name }} ({{ g.items.length }})</h2>
        <table class="list-table">
          <thead><tr><th scope="col">Page</th><th scope="col">Local Page</th></tr></thead>
          <tbody>
            <tr v-for="u in g.items" :key="u.loc">
              <td>{{ short(u.loc) }}</td>
              <td><RouterLink :to="local(u)">{{ local(u) }}</RouterLink></td>
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
import { sourceUrls, localTarget } from '../data/sourceSitemap'
import { useHead } from '@unhead/vue'
import { SITE_URL } from '../site'
useHead({ title: 'Full Sitemap | Zelix KlassMaster', meta: [{ name: 'description', content: 'Every Zelix KlassMaster page: 155 source URLs hosted locally.' }, { property: 'og:image', content: SITE_URL + '/og/sitemap.png' }], link: [{ rel: 'canonical', href: SITE_URL + '/sitemap' }] })

const urls = sourceUrls
const groups = computed(() => {
  const order = ['Product', 'Feature', 'Commercial', 'DocTutorial', 'DocStatement', 'DocGui']
  return order.map((name) => ({
    name,
    items: urls.filter((u) => u.section === name)
  }))
})

function short(loc: string): string {
  return loc.replace('https://www.zelix.com/', '')
}
function local(u: { loc: string; section: string }): string {
  const m = u.loc.match(/klassmaster\/(features[A-Za-z]+\.html)$/)
  if (m) return '/features/' + m[1].replace(/\.html$/, '')
  if (/docs\/index\.html$/.test(u.loc)) return '/docs'
  const d = u.loc.match(/klassmaster\/docs\/(?:tutorials\/)?([A-Za-z0-9]+\.html)$/)
  if (d) return '/docs/' + d[1].replace(/\.html$/, '')
  if (/klassmaster\/(index\.html)?$/.test(u.loc) || u.loc === 'https://www.zelix.com/') return '/'
  if (/features\.html$/.test(u.loc)) return '/features'
  const p = u.loc.match(/klassmaster\/([A-Za-z]+)\.html$/)
  if (p) {
    const map: Record<string, string> = {
      order: 'order', upgrades: 'upgrades', support: 'support', FAQ: 'faq',
      changes: 'changes', contactUs: 'contact', mailList: 'maillist',
      privacy: 'privacy', refunds: 'refunds', legals: 'terms', commercialLicense: 'license'
    }
    if (map[p[1]]) return '/page/' + map[p[1]]
  }
  return (localTarget as Record<string, string>)[u.section] ?? '/'
}
</script>
