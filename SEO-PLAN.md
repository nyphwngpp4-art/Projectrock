# SEO Plan

## Implemented in the demo

- A unique title and meta description on every page, written for patients.
- Canonical URLs and Open Graph metadata (the building photo is the share image).
- One h1 per page and an ordered heading hierarchy.
- XML sitemap via @astrojs/sitemap.
- Descriptive internal links (no "click here").
- Schema.org:
  - MedicalClinic site-wide, with address, geo, phone, fax, opening hours,
    service list, area served, and profiles.
  - Physician on each profile.
  - FAQPage only where the FAQs are visible (cataract, vision correction).
  - Specialties use valid schema.org values (Surgical, Optometric).
- Static HTML, self-hosted fonts, intrinsic image sizes, and minimal JS give
  strong Core Web Vitals by construction.

## Private-demo settings (flip all three at launch)

1. `<meta name="robots" content="noindex, nofollow">` in `BaseLayout.astro`
2. `Disallow: /` in `public/robots.txt`
3. `X-Robots-Tag: noindex, nofollow` in `public/_headers`

## Deliberately not done

- No thin per-city landing pages. The current site has six (Abilene, Clyde,
  Tye, Hamby, Impact, Hawley; the Abilene slug is misspelled `abeline-tx`).
  Redirect them to useful pages instead, for example one "visiting from out of
  town" page.
- No review or rating schema until the practice authorizes a review source.

## Priority search themes

1. cataract surgery abilene tx / cataract surgeon abilene
2. lasik abilene / lasik cost abilene
3. eye doctor abilene tx / ophthalmologist abilene
4. glaucoma specialist abilene
5. diabetic eye exam abilene
6. Provider-name queries for each of the six doctors

## Local listings

The surgery center appears under several names across directories ("Abilene
Eye Institute Cataract & Lasik Surgery Center," "Cataract and Refractive
Surgery Center," "Abilene Cataract & Refractive"). Agree one name, then align
the Google Business Profile, Yelp, BBB, Healthgrades, and AmSurg listings with
the same name, phone, and address.

## Launch checklist

- Set `site` in `astro.config.mjs` to the production domain.
- Flip the three private-demo settings above.
- 301-redirect every current URL (the 35 in the live sitemap, plus the six
  `/services/template-service-*` URLs that already return 404) to its closest
  new page, using a Cloudflare `_redirects` file.
- Submit the sitemap in Search Console. Verify schema with the Rich Results
  test.
