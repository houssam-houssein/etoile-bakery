# Fix White Screen on GitHub Pages

## The Problem
White screen occurs because GitHub Pages serves your site from a subdirectory (e.g., `username.github.io/repo-name/`), but the assets are trying to load from root paths.

## Solution

### Step 1: Find Your Repository Name
Your repository name is the last part of your GitHub URL:
- If your repo is: `https://github.com/yourusername/etoile`
- Your repo name is: `etoile`

### Step 2: Update vite.config.ts

Open `vite.config.ts` and uncomment/update the `base` line:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Replace 'your-repo-name' with your actual repo name
})
```

**Example:** If your repo is `etoile`:
```typescript
base: '/etoile/',
```

### Step 3: Rebuild and Push

```bash
# Rebuild with the new base path
npm run build

# Commit and push
git add vite.config.ts dist/
git commit -m "Fix: Add base path for GitHub Pages"
git push
```

### Step 4: Wait for Deployment
- Go to Actions tab
- Wait for the workflow to complete (1-2 minutes)
- Your site should now work!

## Alternative: If Repo Name is Your Username

If your repository is named exactly like your username (e.g., `username.github.io`), you can use:
```typescript
base: '/',
```

But this is rare - most repos need the base path set to the repo name.

