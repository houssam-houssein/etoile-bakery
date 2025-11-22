import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Output to docs folder for GitHub Pages
  build: {
    outDir: 'docs',
  },
  // IMPORTANT: Set this to your repository name for GitHub Pages
  // Repository name: etoile-bakery
  base: '/etoile-bakery/',
})

