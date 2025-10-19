// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'

// Keep base "/" because the site uses a custom domain (e.g. 7-senses.ch).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/', // si un jour tu publies sur un sous-chemin GitHub (tonuser.github.io/mon-repo/), change par '/mon-repo/'
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
