# Wedding Website - Juan & Thomas

A beautiful wedding website built with Vite, HTML, CSS, and JavaScript.

## 🚀 Deployment to GitHub Pages

This website is configured for automatic deployment to GitHub Pages using GitHub Actions.

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
- [x] CNAME file updated with your domain
- [x] DNS records configured at domain registrar
- [x] GitHub Pages enabled with GitHub Actions source

## 📝 Notes

- The site uses relative paths (`base: './'` in vite.config.js) which works perfectly with GitHub Pages
- The `dist` folder is gitignored - GitHub Actions will build it automatically
- All pages are built as static HTML files, perfect for GitHub Pages hosting
