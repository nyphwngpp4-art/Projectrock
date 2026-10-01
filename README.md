# Abilene Eye Institute: Concept Demo

A Stage 1 concept build by Agavi AI LLC showing what a modern patient website
for Abilene Eye Institute could look like. It does not replace or modify the
practice's live site and collects no patient information.

Keep this repository private: it holds working notes about a real practice.

## Quick start

```bash
npm install
npm run dev               # local dev server
npm run build             # static build to dist/ (fails if the content register drifts)
npm run check             # Astro/TypeScript check plus the content register check
npm run content:register  # regenerate CONTENT-VERIFICATION.md after editing src/data
npm run preview           # serve the production build locally
```

Node 22.18 or newer (see `.node-version`).

## Deploy (Cloudflare Pages)

Production deploys from `main` through Cloudflare Pages' Git integration:

| Setting | Value |
|---|---|
| Project name | `abilene-eye-demo` (matches `site` in `astro.config.mjs`) |
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | from `.node-version` |

`public/_headers` keeps the demo out of search engines and sets basic
security headers. Put the production URL behind Cloudflare Access so only the
people you invite can open it.

## Stack

- [Astro 5](https://astro.build), static output, no runtime framework
- Tailwind CSS 4 (design tokens in `src/styles/global.css`)
- Self-hosted fonts via Fontsource (Source Serif 4 and Public Sans)
- Icons via astro-icon and Phosphor
- Browser JavaScript: the mobile menu toggle and the self-assessment. Nothing else.

## Where things live

| Path | Purpose |
|---|---|
| `src/data/practice.ts` | Practice facts, with the source of each in `practiceFacts` |
| `src/data/doctors.ts` | Six doctors; every bio line, degree, and credential carries its source |
| `src/data/services.ts` | Services grouped by patient need, each sourced |
| `src/data/sources.ts` | The provenance model: confirmed, published, or pending (never rendered) |
| `src/data/register.ts` | Builds the register in CONTENT-VERIFICATION.md from the data |
| `src/layouts/BaseLayout.astro` | Head, schema, noindex, skip link, header, footer |
| `src/pages/` | All routes, including `/owner-review/` (private walkthrough) and `/notices/` |

## Documents

- `BEFORE-AFTER.md`: what the demo changes compared with the current site
- `CONTENT-VERIFICATION.md`: every fact, its source, and the confirmation call list
- `HIPAA-BOUNDARIES.md`: what the demo collects (nothing) and the rules for anything that would
- `PRODUCTION-HANDOFF.md`: every decision required to take this live
- `ACCESSIBILITY-NOTES.md`, `SEO-PLAN.md`, `ASSET-INVENTORY.md`

## Honest constraints

- Every page is `noindex`, and `robots.txt` disallows crawling. Flip all three
  (meta tag, robots.txt, `_headers`) at launch.
- Practice photography is linked from the current website until the practice
  supplies originals. Two AI-generated lifestyle images are labeled as
  temporary on the page.
- Scheduling is by phone, as it is today. Secure systems (portal, scheduling,
  digital forms, referrals) connect only to vendors covered by a HIPAA business
  associate agreement.
