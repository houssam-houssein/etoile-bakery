# GitHub Deployment Guide

## Files to Add to GitHub

### ✅ **DO ADD these files:**

**Source Code:**
- `src/` - All source files (components, styles, images)
- `index.html` - Main HTML file
- `package.json` - Dependencies and scripts
- `package-lock.json` - Lock file for consistent installs
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration

**Documentation:**
- `README.md` - Project documentation
- `DEPLOYMENT.md` - This file

**GitHub Configuration:**
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `.gitignore` - Files to exclude from Git

**Public Assets:**
- `public/` - Static public files (if any)

### ❌ **DO NOT ADD these files:**

**Build Output:**
- `dist/` - Generated build files (will be created during deployment)
- `node_modules/` - Dependencies (installed via npm install)

**Editor/System Files:**
- `.vscode/` - VS Code settings (already in .gitignore)
- `.idea/` - IDE settings
- `.DS_Store` - macOS system files
- `*.log` - Log files

## Quick Setup Commands

```bash
# 1. Initialize Git (if not done)
git init

# 2. Add all files (respects .gitignore)
git add .

# 3. Check what will be committed
git status

# 4. Commit
git commit -m "Initial commit - L'ETOILE Bakery website"

# 5. Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

## What git add . Will Include

When you run `git add .`, it will automatically:
- ✅ Include all source files
- ✅ Include configuration files
- ✅ Include documentation
- ❌ Exclude `node_modules/` (in .gitignore)
- ❌ Exclude `dist/` (in .gitignore)
- ❌ Exclude editor files (in .gitignore)

## Verify Before Pushing

Run `git status` to see what will be committed. You should see:
- ✅ All files in `src/`
- ✅ Configuration files (package.json, tsconfig.json, vite.config.ts)
- ✅ Documentation files
- ✅ .github/workflows/deploy.yml
- ❌ No `node_modules/`
- ❌ No `dist/`

## After Pushing

1. Go to your GitHub repository
2. **Settings > Pages**
3. **Source:** Select **"GitHub Actions"** (NOT "Deploy from a branch" or "/docs")
4. The workflow will automatically build and deploy your site!

## Important Notes

- ✅ **Branch name:** Use `main` (this is correct)
- ✅ **Deployment source:** Select "GitHub Actions" in Settings > Pages
- ❌ **Do NOT use:** "/docs" folder or "Deploy from a branch"
- ✅ **GitHub Actions:** Automatically builds from source and deploys `dist` folder

