import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Set this to your repository name for GitHub Pages
  // Repository name: etoile-bakery
  base: process.env.NODE_ENV === 'production' ? '/etoile-bakery/' : '/',
})

