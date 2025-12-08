# Quick Fix for White Screen

## The Issue
Your site shows a white screen because GitHub Pages needs the correct base path.

## Quick Fix (2 minutes)

### 1. Find Your Repository Name
Look at your GitHub repository URL:
- `https://github.com/yourusername/REPO-NAME`
- The `REPO-NAME` is what you need

### 2. Update vite.config.ts

Open `vite.config.ts` and change this line:
```typescript
base: process.env.NODE_ENV === 'production' ? '/etoile/' : '/',
```

Replace `'/etoile/'` with `'/YOUR-REPO-NAME/'`

**Example:** If your repo is `letoile-bakery`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/letoile-bakery/' : '/',
```

### 3. Save, Commit, and Push

```bash
git add vite.config.ts
git commit -m "Fix: Set base path for GitHub Pages"
git push
```

### 4. Wait 1-2 minutes
The workflow will automatically rebuild and deploy. Your site should work!

## Still Not Working?

1. Check browser console (F12) for errors
2. Verify the base path matches your repo name exactly
3. Make sure there's a trailing slash: `/repo-name/` not `/repo-name`

