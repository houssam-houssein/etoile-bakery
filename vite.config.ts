import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/// <reference types="vite/client" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Output to docs folder for GitHub Pages
  build: {
    outDir: 'docs',
  },
  // IMPORTANT: Base path configuration
  // For custom domain: use '/' (root path)
  // For GitHub Pages subpath: use '/etoile-bakery/'
  // Currently set to '/' for custom domain support
  base: '/',
})

