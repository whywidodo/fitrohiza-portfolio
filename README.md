# Fitroh Izatul Malkiyah — Portfolio

A polished React + Vite portfolio inspired by modern product interfaces such as Linear: restrained typography, generous spacing, subtle borders, compact navigation, light/dark mode, and editorial project pages.

## Stack

- React 19
- Vite 7
- React Router 7
- Lucide React
- Plain CSS — no UI framework

## Requirements

- Node.js 22.12+ (recommended: current Node 22 LTS)
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

This project includes a GitHub Actions workflow. The workflow builds the site and deploys `dist` to GitHub Pages.

For a repository such as `fitrohiza.github.io`, keep `base: "/"` in `vite.config.js`.

For a project repository such as `portfolio`, change it to:

```js
base: "/portfolio/"
```

Then enable GitHub Pages in the repository settings and select **GitHub Actions** as the source.

## Content

All portfolio content is centralized in:

`src/data/portfolio.js`

This makes it easy to replace or extend project details later.

## Node / tooling

This release intentionally targets Node.js 22 and Vite 7. It does not require Node 18 compatibility.

## Notes

- Public contact information is limited to email, LinkedIn, and GitHub on the main UI.
- Project metrics are intentionally not fabricated.
- The experience dates follow the latest information supplied for this version. Verify the BIIS Corp dates before publishing if they differ from your official CV/LinkedIn.
- The design is intentionally restrained so the portfolio feels like a product rather than a long CV.
