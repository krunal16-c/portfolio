# Krunal Chavda — Portfolio

Personal portfolio site built with **React + Vite + Tailwind** and deployed to **GitHub Pages**.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:
- installs dependencies
- runs `npm run build`
- publishes the `dist/` folder to the `gh-pages` branch

### One-time GitHub setup

1. Push this repo to GitHub (default branch should be `main`).
2. In GitHub: **Repo → Settings → Pages**
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `/ (root)`

After that, every push to `main` triggers a deploy.

### Notes for Pages + routing

- The app uses `HashRouter` (see `src/App.jsx`) so routes work on GitHub Pages.
- Vite is configured with a relative base for Pages in `vite.config.js`:
  - `base: './'`

## Content + customization

- **Hero**: `src/components/Hero.jsx`
- **About (bio + quote + headshot)**: `src/components/About.jsx`
- **Work / Experience**: `src/components/Experience.jsx`
- **Ventures (Arcite-AI / Zester)**: `src/components/Ventures.jsx`
- **Projects / demos**: `src/components/Projects.jsx`
- **Blog posts (Markdown)**: `src/posts/*.md`

## Profile photo

The About section uses responsive JPEG assets:
- `src/assets/profile-600.jpg`
- `src/assets/profile-1200.jpg`

To swap the headshot, replace those files (keep names) or update imports in `src/components/About.jsx`.

