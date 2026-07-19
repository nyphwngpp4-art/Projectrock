# SEO Plan

## Implemented in the demo

- Unique title and meta description per page, written for patients, not
  stuffed with keywords
- Canonical URLs and Open Graph metadata on every page
- One h1 per page with an ordered heading hierarchy
- XML sitemap via @astrojs/sitemap
- robots.txt (currently Disallow all: this is a private demo; flip at launch)
- Descriptive internal links (no "click here")
- Schema.org: MedicalClinic JSON-LD site-wide, Physician on profile pages,
  FAQPage only on pages whose FAQs are actually visible (cataract, vision
  correction)
- Static HTML, self-hosted fonts, ~0 layout shift, minimal JS: strong Core
  Web Vitals posture by construction

## Deliberately NOT done

- No thin per-city landing pages for the service-area communities. The
  service area is presented on real pages instead. If regional search matters
  later, build genuinely useful pages (e.g., "traveling from Sweetwater:
  planning your visit") rather than doorway pages.
- No FAQ schema on invisible content, no fabricated review schema, no
  aggregate ratings markup (nothing to support it yet).

## Priority search themes (production)

1. cataract surgery abilene tx / cataract surgeon abilene
2. lasik abilene / lasik cost abilene
3. eye doctor abilene tx / ophthalmologist abilene
4. glaucoma specialist abilene
5. diabetic eye exam abilene
6. Provider-name queries (Dr. Phelan, Dr. McAdams)

## Recommended future pages

- Individual procedure depth pages (cataract lens options, ICL) once facts
  are verified with the practice
- A small set of patient-education articles answering real pre-consult
  questions (cataract surgery recovery timeline, LASIK vs. RLE at 50)
- Google Business Profile alignment: one primary phone number, consistent
  NAP, review strategy, and the correct portal link everywhere

## At launch checklist

- Replace `site` in astro.config.mjs with the production domain
- Remove the robots.txt Disallow
- Submit sitemap in Search Console; set up 301s from any legacy URLs that
  change (audit the Duda site's URL inventory first)
- Verify schema with Google's Rich Results test after real data lands
