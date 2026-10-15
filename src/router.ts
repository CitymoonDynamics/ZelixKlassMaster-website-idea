import type { RouteComponent, RouteRecordRaw } from 'vue-router'
import { autoRoutes } from './autoRoutes'

const Home = () => import('./views/Home.vue')
const Features = () => import('./views/Features.vue')
const Pricing = () => import('./views/Pricing.vue')
const Docs = () => import('./views/Docs.vue')
const Support = () => import('./views/Support.vue')
const Contact = () => import('./views/Contact.vue')
const Legal = () => import('./views/Legal.vue')
const Sitemap = () => import('./views/Sitemap.vue')

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    desc?: string
  }
}

function r(path: string, component: RouteComponent, title: string, desc: string): RouteRecordRaw {
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
