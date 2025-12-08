import { copyFileSync } from 'fs'
import { join } from 'path'

// Copy index.html to 404.html for GitHub Pages client-side routing
const docsDir = join(process.cwd(), 'docs')
const indexPath = join(docsDir, 'index.html')
const notFoundPath = join(docsDir, '404.html')

try {
  copyFileSync(indexPath, notFoundPath)
  console.log('✓ Copied index.html to 404.html for GitHub Pages routing')
} catch (error) {
  console.error('Error copying index.html to 404.html:', error)
  process.exit(1)
}

