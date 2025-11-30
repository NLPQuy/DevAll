# Netlify Deployment Troubleshooting Guide

## ✅ Fixed Issues

### Issue 1: Build Failed with "}" Error
**Cause:** Incorrect `publish` directory path in `netlify.toml`

**Original (Wrong):**
```toml
[build]
  base = "devall-nextjs"
  publish = "devall-nextjs/.next"  # ❌ Wrong - this is absolute from repo root
```

**Fixed:**
```toml
[build]
  base = "devall-nextjs"
  publish = ".next"  # ✅ Correct - relative to base directory
```

**Explanation:**
- When `base = "devall-nextjs"` is set, Netlify changes into that directory
- The `publish` path must be **relative to the base directory**, not the repository root
- `publish = ".next"` means: `devall-nextjs/.next` (from base)
- `publish = "devall-nextjs/.next"` means: `devall-nextjs/devall-nextjs/.next` (wrong!)

---

## 🚀 Current Correct Configuration

### Repository Structure
```
DevAll/
├── netlify.toml           # ← At repository root
├── vercel.json            # ← At repository root
├── devall-nextjs/         # ← Next.js project folder
│   ├── package.json
│   ├── next.config.ts
│   ├── app/
│   ├── components/
│   └── .next/             # ← Build output (created during build)
```

### netlify.toml Configuration
```toml
[build]
  base = "devall-nextjs"        # Where package.json is
  command = "npm run build"     # Build command
  publish = ".next"             # Output directory (relative to base)

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🔍 How Netlify Builds Your Site

### Step-by-Step Process

1. **Clone Repository**
   ```
   git clone https://github.com/NLPQuy/DevAll.git
   ```

2. **Change to Base Directory**
   ```bash
   cd devall-nextjs  # Because base = "devall-nextjs"
   ```

3. **Install Dependencies**
   ```bash
   npm install  # Uses package.json in devall-nextjs/
   ```

4. **Run Build Command**
   ```bash
   npm run build  # Executes "next build"
   ```

5. **Look for Output**
   ```bash
   # Looks for .next/ in current directory (devall-nextjs/)
   # Full path: devall-nextjs/.next/
   ```

6. **Deploy**
   - Netlify Next.js plugin handles the deployment
   - Functions are created automatically
   - Redirects are handled by Next.js

---

## 🐛 Common Netlify Build Errors

### Error: "No such file or directory: .next"
**Cause:** Wrong `publish` directory

**Solution:**
```toml
# Make sure publish is relative to base
[build]
  base = "devall-nextjs"
  publish = ".next"  # Not "devall-nextjs/.next"
```

### Error: "Cannot find package.json"
**Cause:** Wrong `base` directory

**Solution:**
```toml
[build]
  base = "devall-nextjs"  # Where package.json actually is
```

### Error: "Command not found: npm"
**Cause:** Node.js not installed or wrong version

**Solution:**
```toml
[build.environment]
  NODE_VERSION = "20"  # Specify Node version
```

### Error: "@netlify/plugin-nextjs not found"
**Cause:** Plugin not specified

**Solution:**
```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Error: "Build script not found"
**Cause:** No "build" script in package.json

**Solution:**
Check `devall-nextjs/package.json`:
```json
{
  "scripts": {
    "build": "next build"  # Must exist
  }
}
```

---

## ✅ Verification Checklist

Before deploying to Netlify, verify:

- [ ] `netlify.toml` is at **repository root** (`DevAll/netlify.toml`)
- [ ] `base = "devall-nextjs"` matches actual folder name
- [ ] `publish = ".next"` is relative to base (no folder prefix)
- [ ] `package.json` exists at `devall-nextjs/package.json`
- [ ] `package.json` has `"build": "next build"` script
- [ ] `NODE_VERSION = "20"` is set
- [ ] `@netlify/plugin-nextjs` plugin is configured
- [ ] Local build works: `cd devall-nextjs && npm run build`

---

## 🧪 Test Locally (Netlify CLI)

### Install Netlify CLI
```bash
npm install -g netlify-cli
netlify login
```

### Test Build
```bash
# From repository root (DevAll/)
netlify build

# This will:
# 1. Read netlify.toml
# 2. cd into devall-nextjs
# 3. Run npm install
# 4. Run npm run build
# 5. Look for .next/ output
```

### Expected Output
```
────────────────────────────────────────────────────────────────
  Netlify Build
────────────────────────────────────────────────────────────────

❯ Version
  @netlify/build x.x.x

❯ Flags
  deployId: xxxxx

❯ Current directory
  /DevAll

❯ Config file
  /DevAll/netlify.toml

❯ Context
  production

❯ Loading plugins
   - @netlify/plugin-nextjs from netlify.toml

❯ Building
  base: devall-nextjs
  command: npm run build
  publish: .next

  Running "npm run build"
  
  > devall-nextjs@0.1.0 build
  > next build
  
  ✓ Creating an optimized production build
  ✓ Compiled successfully
  ✓ Collecting page data
  ✓ Generating static pages (3/3)
  ✓ Finalizing page optimization

❯ Deploy is live!
```

---

## 🔧 Netlify Dashboard Settings

### Build Settings (Site Settings → Build & deploy → Continuous deployment)

**Base directory:**
```
devall-nextjs
```

**Build command:**
```
npm run build
```

**Publish directory:**
```
.next
```

**Deploy log visibility:**
```
Logs are public
```

### Environment Variables (Site Settings → Build & deploy → Environment)

Add if using email service:
```
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=noreply@devall.com
EMAIL_TO=contact@devall.com
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
```

---

## 📊 Successful Build Output

You should see in Netlify logs:

```
5:23:45 PM: build-image version: 12345
5:23:45 PM: buildbot version: abcdef
5:23:45 PM: Fetching cached dependencies
5:23:46 PM: Starting to download cache
5:23:47 PM: Finished downloading cache
5:23:47 PM: Starting to extract cache
5:23:48 PM: Finished extracting cache
5:23:48 PM: Finished restoring cached dependencies
5:23:48 PM: Installing npm packages using npm version 10.x.x
5:23:52 PM: npm install completed
5:23:52 PM: Running build command: npm run build
5:23:53 PM: > devall-nextjs@0.1.0 build
5:23:53 PM: > next build
5:23:54 PM: ▲ Next.js 16.0.5
5:23:55 PM: Creating an optimized production build...
5:24:10 PM: ✓ Compiled successfully
5:24:15 PM: ✓ Collecting page data
5:24:18 PM: ✓ Generating static pages (3/3)
5:24:19 PM: ✓ Finalizing page optimization
5:24:19 PM: Route (app)
5:24:19 PM: ○  /
5:24:19 PM: ○  /_not-found
5:24:19 PM: ƒ  /api/contact
5:24:20 PM: Next.js Runtime configured
5:24:21 PM: Build complete
5:24:22 PM: Deploying to Netlify Edge...
5:24:30 PM: Site is live at: https://your-site.netlify.app
```

---

## 🎯 Quick Fix Summary

| Problem | Solution |
|---------|----------|
| Build fails immediately | Check `base` directory is correct |
| "Cannot find .next" | Change `publish` to `.next` (relative to base) |
| "No package.json" | Verify `base = "devall-nextjs"` |
| "Command not found" | Add `NODE_VERSION = "20"` |
| Routes return 404 | Ensure `@netlify/plugin-nextjs` is configured |
| Build succeeds but deploy fails | Check publish directory has content |

---

## 📞 Still Having Issues?

1. **Check Full Build Log**
   - Netlify Dashboard → Deploys → Click failed deploy → View full log
   - Look for the first ERROR line

2. **Test Locally**
   ```bash
   cd devall-nextjs
   rm -rf .next node_modules package-lock.json
   npm install
   npm run build
   ```

3. **Compare Configs**
   - Ensure `netlify.toml` matches this guide exactly
   - Verify folder structure matches

4. **Check Netlify Status**
   - https://www.netlifystatus.com/

5. **Contact Support**
   - Share full build log
   - Share `netlify.toml` content
   - Share repository structure

---

**Last Updated:** November 30, 2025  
**Configuration Status:** ✅ Tested and Working  
**Build Status:** ✅ Local build successful
