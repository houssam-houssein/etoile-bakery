# Troubleshooting GitHub Pages Deployment

## If Deployment Takes Too Long or Fails

### Step 1: Check GitHub Actions
1. Go to your repository on GitHub
2. Click the **"Actions"** tab
3. Click on the latest workflow run
4. Check if there are any **red X marks** (errors)

### Step 2: Common Issues & Fixes

#### Issue 1: "Pages build and deployment" not enabled
**Fix:**
1. Go to **Settings > Pages**
2. Under "Source", select **"GitHub Actions"**
3. Save and wait for the workflow to run again

#### Issue 2: Workflow fails with permission errors
**Fix:**
1. Go to **Settings > Actions > General**
2. Under "Workflow permissions", select **"Read and write permissions"**
3. Click "Save"
4. Re-run the workflow

#### Issue 3: Build fails
**Check:**
- Look at the error message in Actions
- Common causes:
  - TypeScript errors
  - Missing dependencies
  - Build script issues

### Step 3: Manual Check
1. Verify `vite.config.ts` has the correct base path:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/etoile-bakery/' : '/',
   ```

2. Test build locally:
   ```bash
   npm run build
   ```
   If this fails, fix the errors before pushing.

### Step 4: Re-run Workflow
1. Go to **Actions** tab
2. Click on the failed workflow
3. Click **"Re-run all jobs"**

## Quick Checklist

- [ ] GitHub Pages is enabled (Settings > Pages > Source: GitHub Actions)
- [ ] Workflow permissions are set (Settings > Actions > Workflow permissions: Read and write)
- [ ] `vite.config.ts` has correct base path (`/etoile-bakery/`)
- [ ] Code is pushed to `main` branch
- [ ] No build errors when running `npm run build` locally

## Still Not Working?

Share the error message from the Actions tab and I'll help fix it!

