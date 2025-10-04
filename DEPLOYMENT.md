# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy this React/Vite app with zero configuration.

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
# or use npx (no installation needed)
npx vercel
```

2. **Login to Vercel**:
```bash
npx vercel login
```

3. **Deploy the app**:
```bash
npx vercel
```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **play-and-laugh** (or your choice)
   - In which directory is your code located? **./** (press Enter)
   - Want to override settings? **N**

5. **Deploy to production**:
```bash
npx vercel --prod
```

Your app will be live at: `https://play-and-laugh.vercel.app` (or similar)

### Option 2: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit - Play & Laugh game"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Done!** Your app will be live in ~1 minute

---

## Deploy to Netlify

### Via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login**:
```bash
netlify login
```

3. **Deploy**:
```bash
netlify deploy --prod
```

4. **Follow prompts**:
   - Publish directory: **dist**

### Via Netlify Dashboard

1. **Build the app**:
```bash
npm run build
```

2. **Drag & Drop**:
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder
   - Done!

---

## Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/play-and-laugh",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/play-and-laugh/'
})
```

4. **Deploy**:
```bash
npm run deploy
```

---

## Environment Variables

This app doesn't require any environment variables. All data is stored in browser localStorage.

---

## Build Output

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Build size**: ~52 KB gzipped

---

## Post-Deployment Checklist

✅ App loads correctly  
✅ All difficulty modes work  
✅ Roast messages display properly  
✅ Stats persist in localStorage  
✅ Leaderboard saves correctly  
✅ Responsive on mobile devices  
✅ No console errors  

---

## Custom Domain (Optional)

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### On Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

---

## Troubleshooting

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires v16+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### App doesn't load
- Check browser console for errors
- Verify `dist` folder was created
- Ensure `base` path in vite.config.js matches deployment URL

### Stats don't persist
- localStorage is domain-specific
- Check browser privacy settings
- Ensure cookies/storage are enabled

---

## Quick Deploy Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

---

**Recommended**: Use Vercel for the fastest and easiest deployment experience!
