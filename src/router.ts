import Home from './views/Home.vue'
import Features from './views/Features.vue'
import Pricing from './views/Pricing.vue'
import Docs from './views/Docs.vue'
import Support from './views/Support.vue'
import Contact from './views/Contact.vue'
import Legal from './views/Legal.vue'
import Sitemap from './views/Sitemap.vue'
import { autoRoutes } from './autoRoutes'
import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    desc?: string
  }
}

function r(path: string, component: Component, title: string, desc: string): RouteRecordRaw {
  return { path, component, meta: { title, desc } }
}

export const routes: RouteRecordRaw[] = [
  r('/', Home, 'Zelix KlassMaster | Heavy Duty Java Obfuscator Since 1997', 'Zelix KlassMaster protects Java bytecode against decompilation with Flow Obfuscation, string encryption and trim. Licenses from USD 290.'),
  r('/features', Features, 'Features | Zelix KlassMaster Java Obfuscator', 'All 20 Zelix KlassMaster protection features: Flow Obfuscation, String Encryption, Reference Obfuscation, Trim, ZKM Script and more.'),
  r('/pricing', Pricing, 'Pricing and Licenses | Zelix KlassMaster', 'Zelix KlassMaster licenses: Small Developer USD 290, Standard USD 585, multi license and site license USD 2195.'),
  r('/docs', Docs, 'Documentation and ZKM Script | Zelix KlassMaster', 'ZKM Script reference, tutorials and statement documentation for the Zelix KlassMaster Java obfuscator.'),
  r('/support', Support, 'Support and FAQ | Zelix KlassMaster', 'Zelix KlassMaster FAQ: Java 8 through 27, memory, Reflection, Android, Kotlin and build tools.'),
  r('/contact', Contact, 'Contact Sales | Zelix KlassMaster', 'Contact the Zelix KlassMaster sales and support team about licenses and upgrades.'),
  r('/legal', Legal, 'Terms, Privacy and Refunds | Zelix KlassMaster', 'Zelix KlassMaster commercial license terms, privacy policy and refund policy.'),
  r('/sitemap', Sitemap, 'Full Sitemap | Zelix KlassMaster', 'Every Zelix KlassMaster page: 155 source URLs hosted locally.'),
  ...(autoRoutes as RouteRecordRaw[]),
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
