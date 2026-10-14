import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 600
  },
  server: { port: 5173 }
})
