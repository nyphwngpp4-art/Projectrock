# Asset Inventory

Every visual asset the site uses, where it comes from, and what production
needs instead.

## Practice photography (linked from the current website)

These are the practice's own photos, linked from the current site's image
host (lirp.cdn-website.com) rather than copied into this repository. The links
stop working when the current site is retired, so production needs the
original files and confirmation of usage rights.

| Asset | Size | Used on | Production need |
|---|---|---|---|
| Logo (white on transparent) | 631×142 | Footer only (navy background) | Vector (SVG) logo in dark and light versions |
| Team photo | 800×530 | Homepage hero, under a navy overlay | Original at 2000px or wider; it is soft at hero size |
| Building | 1440×810 | Homepage band, About page | Confirm it is current: the sign lists physician names |
| Six headshots | 300×450 to 1920×1758 | Doctor cards and profiles | Consistent originals, at least 800px on the short side |

## AI-generated temporary images

Generated 2026-07-20 with the Higgsfield `soul_2` model. They show settings and
lifestyle only: no real physician, patient, signage, or equipment is depicted
or presented as the practice's own. On the page they carry the placard
"Temporary imagery, practice photography to follow."

| File | Used on | Notes |
|---|---|---|
| `public/images/vision-lifestyle.jpg` (1600×1067) | Vision Correction | The pose reads oddly; regenerate or replace first |
| `public/images/cataract-lifestyle.jpg` (1600×1067) | Cataract Care | Usable placeholder |
| home-hero (not in repo) | Not used | The practice's real team photo is the better hero |
| about-interior | Never generated | The About page uses the building photo |

## Created for the demo

- `public/favicon.svg`: a simple eye mark in deep navy
- The typeset header wordmark (HTML and CSS, no image)

## Rules

- Never generate headshots or likenesses of the practice's real physicians.
- AI imagery shows settings and lifestyle only, is labeled on the page, and is
  replaced as practice photography arrives.
- Wrong photography is worse than an honest placeholder. Nothing should imply
  equipment, facilities, or outcomes the practice hasn't confirmed.
