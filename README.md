# Wedding Website - Juan & Thomas

A beautiful wedding website built with Vite, HTML, CSS, and JavaScript.

## 🚀 Deployment to GitHub Pages

This website is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Create a GitHub repository** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - The workflow will automatically deploy when you push to the `main` branch

3. **Verify deployment**:
   - After pushing, go to **Actions** tab in your repository
   - Wait for the workflow to complete (usually 1-2 minutes)
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Custom Domain Setup

1. **Update CNAME file**:
   - Edit the `CNAME` file in the root directory
   - Replace `yourdomain.com` with your actual domain (e.g., `example.com` or `www.example.com`)
   - Commit and push the changes

2. **Configure DNS at your domain registrar**:
   
   **Option A: Using CNAME (recommended for subdomains like www)**
   - Add a CNAME record:
     - Name: `www` (or `@` if your registrar supports it)
     - Value: `YOUR_USERNAME.github.io`
   
   **Option B: Using A records (for apex domains like example.com)**
   - Add these A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Enable custom domain in GitHub**:
   - Go to **Settings** → **Pages**
   - Under **Custom domain**, enter your domain
   - Check **Enforce HTTPS** (recommended)

4. **Wait for DNS propagation** (can take up to 24-48 hours, usually much faster)

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

- `index.html` - Homepage
- `location.html` - Location page
- `programme.html` - Programme page
- `travel.html` - Travel & Arrival page
- `stay.html` - Where to Stay page
- `details.html` - Additional details page
- `src/` - Source files (JS, CSS)
- `public/` - Static assets (images, etc.)
- `dist/` - Built files (generated, don't edit directly)

## ✅ Pre-Deployment Checklist

- [x] All HTML pages included in `vite.config.js`
- [x] GitHub Actions workflow configured
- [x] `.nojekyll` file created (prevents Jekyll processing)
- [x] Build process tested locally (`npm run build`)
- [ ] CNAME file updated with your domain
- [ ] DNS records configured at domain registrar
- [ ] GitHub Pages enabled with GitHub Actions source

## 📝 Notes

- The site uses relative paths (`base: './'` in vite.config.js) which works perfectly with GitHub Pages
- The `dist` folder is gitignored - GitHub Actions will build it automatically
- All pages are built as static HTML files, perfect for GitHub Pages hosting
