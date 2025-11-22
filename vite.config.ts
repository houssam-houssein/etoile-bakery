import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment and update the base path if deploying to GitHub Pages
  // Replace 'etoile' with your repository name
  // base: '/etoile/',
})

