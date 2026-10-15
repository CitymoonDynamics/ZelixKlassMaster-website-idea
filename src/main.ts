import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { autoRoutes } from './autoRoutes'
import { SITE_URL } from './site'
import './style.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior() {
      return { top: 0 }
    }
  },
  ({ router }) => {
    router.afterEach((to) => {
      if (typeof document === 'undefined') return
      const meta = (to.meta ?? {}) as { title?: string; desc?: string }
      const title = meta.title ?? 'Zelix KlassMaster | Heavy Duty Java Obfuscator'
      const desc = meta.desc ?? 'Zelix KlassMaster Java obfuscator. Bytecode protection since 1997.'
      document.title = title
      const set = (name: string, attr: string, value: string): void => {
        let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
        if (!el) {
          el = document.createElement('meta')
          el.setAttribute(attr, name)
          document.head.appendChild(el)
        }
        el.setAttribute('content', value)
      }
      set('description', 'name', desc)
      set('og:title', 'property', title)
      set('og:description', 'property', desc)
      set('og:url', 'property', SITE_URL + to.fullPath)
      let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', SITE_URL + to.path)
    })
  }
)

export async function includedRoutes(): Promise<string[]> {
  return [
    '/',
    '/features',
    '/pricing',
    '/docs',
    '/support',
    '/contact',
    '/legal',
    '/sitemap',
    ...(autoRoutes as Array<{ path: string }>).map((x) => x.path)
  ]
}
