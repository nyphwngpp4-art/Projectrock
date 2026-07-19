# Abilene Eye Institute: Concept Demo

Stage 1 concept build prepared by Agavi AI LLC to show what a modern digital
patient experience for Abilene Eye Institute could look like. Private sales
asset; it does not replace or modify the live site and collects no protected
health information.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # static production build to dist/
npm run check    # Astro/TypeScript check (passes with 0 errors)
npm run preview  # serve the production build locally
```

## Stack

- [Astro 5](https://astro.build) static output, no runtime framework
- Tailwind CSS 4 (design tokens in `src/styles/global.css`)
- Self-hosted fonts via Fontsource (Source Serif 4 + Public Sans)
- Icons via astro-icon + Phosphor
- JavaScript shipped to the browser: the mobile menu toggle and the
  self-assessment. Nothing else.

## Where things live

| Path | Purpose |
|---|---|
| `src/data/practice.ts` | Single source of truth for contact facts, with verification flags |
| `src/data/doctors.ts` | Provider roster; unverified providers render placeholder blocks |
| `src/data/services.ts` | Services grouped by patient need |
| `src/layouts/BaseLayout.astro` | Head/meta/schema, skip link, header, footer |
| `src/components/` | Reusable cards, CTA band, FAQ, placeholder-page shell |
| `src/pages/` | All routes, including the four secure-system placeholder routes |

## The documents that matter for the owner conversation

- `BEFORE-AFTER.md` - the thirty-second defect-by-defect comparison
- `CONTENT-VERIFICATION.md` - every fact, its status, and the 15-minute confirmation call list
- `HIPAA-BOUNDARIES.md` - what the demo collects (nothing) and what production must respect
- `PRODUCTION-HANDOFF.md` - every decision required to take this live
- `ACCESSIBILITY-NOTES.md`, `SEO-PLAN.md`, `ASSET-INVENTORY.md`

## Honest constraints

- `robots.txt` disallows indexing; this is a private demo.
- Photography is represented by labeled placeholder slots (see
  `ASSET-INVENTORY.md`). Nothing misrepresents the facility.
- Secure actions (appointments, portal, billing, referrals) route to
  explanatory placeholder pages; production connects them to the practice's
  approved systems.
