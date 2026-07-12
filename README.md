# Sowmya Portfolio

A React + Vite data science portfolio.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Deploy to GitHub Pages

This repo is pre-configured for GitHub Pages under the repository name
`sowmya-portfolio` (i.e. hosted at `https://<your-username>.github.io/sowmya-portfolio/`).

**Option A — GitHub Actions (recommended)**

1. Push this project to a GitHub repository named `sowmya-portfolio`.
2. In the repo settings, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually from the
   **Actions** tab). The included workflow at
   `.github/workflows/deploy.yml` will build and publish the site
   automatically.

**Option B — `gh-pages` CLI**

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to a `gh-pages`
branch using the `gh-pages` package. Then enable Pages in your repo
settings with source set to the `gh-pages` branch.

> If you rename the repository to something other than `sowmya-portfolio`,
> update the `repoName` constant in `vite.config.ts` to match — this
> controls the base path used for built asset URLs.
