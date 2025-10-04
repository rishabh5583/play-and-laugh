# 📦 GitHub Setup Instructions

Your code is ready to push to GitHub! Follow these steps:

## Option 1: Create Repository via GitHub Website (Easiest)

1. **Go to GitHub**: Visit [github.com/new](https://github.com/new)

2. **Create New Repository**:
   - Repository name: `play-and-laugh`
   - Description: `A fun number guessing game with multiple difficulty levels and roast modes`
   - Visibility: Public (or Private)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

3. **Copy the repository URL** (it will look like):
   ```
   https://github.com/YOUR_USERNAME/play-and-laugh.git
   ```

4. **Run these commands** in your terminal:
   ```bash
   cd /Users/rishabhsharma/CascadeProjects/play-and-laugh
   git remote add origin https://github.com/YOUR_USERNAME/play-and-laugh.git
   git push -u origin main
   ```

5. **Done!** Your code is now on GitHub 🎉

---

## Option 2: Using GitHub CLI (If Installed)

If you have GitHub CLI installed, run:

```bash
cd /Users/rishabhsharma/CascadeProjects/play-and-laugh
gh repo create play-and-laugh --public --source=. --remote=origin --push
```

---

## What's Already Done ✅

- ✅ Git repository initialized
- ✅ All files committed to main branch
- ✅ .gitignore configured (excludes node_modules, dist, etc.)
- ✅ Ready to push

---

## After Pushing to GitHub

### Deploy to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy" (Vercel auto-detects Vite settings)
5. Your app will be live in ~1 minute!

### Deploy to Netlify:
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

---

## Repository Details

- **Files committed**: 14 files, 4192 lines
- **Branch**: main
- **Last commit**: "Initial commit: Play & Laugh game with difficulty levels, roast modes, and leaderboard"

---

## Troubleshooting

### Authentication Issues
If you get authentication errors when pushing:

**Using HTTPS:**
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/play-and-laugh.git
git push -u origin main
```
You'll be prompted for your GitHub username and Personal Access Token (PAT).

**Using SSH:**
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/play-and-laugh.git
git push -u origin main
```
Requires SSH key setup on GitHub.

### Create Personal Access Token (if needed)
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use this token as your password when pushing

---

## Quick Commands Reference

```bash
# Check current status
git status

# View commit history
git log --oneline

# Check remote
git remote -v

# Push to GitHub (after adding remote)
git push -u origin main

# Future pushes (after first push)
git add .
git commit -m "Your commit message"
git push
```

---

**Next Step**: Create the GitHub repository at [github.com/new](https://github.com/new) and follow the instructions above!
