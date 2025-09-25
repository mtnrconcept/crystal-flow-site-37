// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Tu utilises un domaine personnalisé (7-senses.ch) => base à "/"
export default defineConfig({
  plugins: [react()],
  base: '/', // si un jour tu publies sur un sous-chemin GitHub (tonuser.github.io/mon-repo/), change par '/mon-repo/'
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
