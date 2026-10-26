# IELTS Navigator Pro

IELTS Navigator Pro is a frontend learning navigation website for IELTS English study.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Features

- Home page
- Listening resources
- Reading resources
- Writing resources
- Speaking resources
- Vocabulary guidance
- Weekly News

The `/weekly-news` page currently contains **fictional sample reading topics**, not a live news feed. Publisher links open their homepages for further reading; the sample headlines are not attributed news reports. Filters can be combined and reset, and the page links back to the study resources.

## Local Development

```bash
node --version # Node.js 24 LTS recommended
npm ci
npm run dev
```

Before pushing changes, run `npm run typecheck` and `npm run build`. GitHub Actions runs both checks for pushes to `main` and pull requests. Use `npm run preview` to inspect the production build locally, including direct navigation to `/weekly-news` and unknown routes.

## Deployment

Deploy with Vercel. Use the default Vite settings:

- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist`

`vercel.json` rewrites client routes to `index.html`, so refreshing `/weekly-news` opens the app instead of a hosting 404. Unknown routes show the app's 404 page. Vercel deployment itself is separate from the local build checks.

## Public Version Notice

This repository is a public frontend showcase version. It does not include backend services, database configuration, private environment files, or private API keys.
