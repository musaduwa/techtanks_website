# Tech Tanks Website

Single-page marketing site built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

Requires Node.js 18+ (install from https://nodejs.org).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

All copy, stats, services, partners, and contact details live in `src/data/site.ts`.

Before launch, replace:
- `company.socials` with your real social media links
- Partner initials with official logos (add files to `public/partners/` and set `logo` on each partner)
- The stats numbers
- `og:image` in `index.html`, and add `public/og-image.png` (1200×630)
- Optionally set `company.mapEmbedUrl` to show a Google Map

## Contact form

Without configuration, form submissions are simulated so the UX can be previewed.
To receive real submissions, copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT`
to a form service URL (e.g. Formspree), then rebuild.
# techtanks_website
