import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = process.env.SITE_URL || env.SITE_URL || 'https://zkm-web.vercel.app'
  const siteBase = process.env.SITE_BASE || env.SITE_BASE || '/'
  return {
    base: siteBase,
    plugins: [vue()],
    define: {
      __SITE_URL__: JSON.stringify(siteUrl)
    },
    build: {
      assetsInlineLimit: 0,
      chunkSizeWarningLimit: 600
    },
    server: { port: 5173 }
  }
})
