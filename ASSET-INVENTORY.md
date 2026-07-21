# Asset Inventory

Every visual asset the production site needs, and what stands in for it in the
demo. No copyrighted photography was scraped; every placeholder is labeled in
the UI itself and easy to swap (each is an `ImagePlaceholder` component
instance or a documented initials block).

## Needed from the practice

| Asset | Used on | Demo stand-in | Production requirement |
|---|---|---|---|
| Physician/OD headshots (5) | Doctor cards, profile pages | Initials monogram block with descriptive aria-label | Consistent, recent portraits, min ~800px square, neutral background |
| Exam room photo (physician with patient) | Homepage hero | Labeled placeholder slot | Authentic practice photo; older-adult patient demographic; no staged stock clichés |
| Building exterior | About page | Labeled placeholder slot | Daylight shot of 2120 Antilley Rd entrance |
| Interior / waiting area | Optional, services or about | Not placed | Nice-to-have |
| Surgical suite or equipment | Optional, cataract page | Not placed | Only if it depicts equipment the practice actually owns |
| Logo / wordmark | Header, favicon | Typeset wordmark + eye-mark favicon (original, created for demo) | Practice's real logo files (SVG preferred) |
| Map embed | Locations page | Labeled placeholder slot | Google Maps embed or static map at production |

## Created for the demo (owned, swappable)

- `public/favicon.svg` - original simple eye mark, deep navy
- Typeset header wordmark (plain HTML/CSS, no image)

## AI-generated temporary assets (to be replaced with practice photography)

Generated with the Higgsfield `soul_2` model for the concept demo only. All are
environment-and-lifestyle imagery: no real named physician or patient is
depicted, no readable text, logos, or signage appears in any image, and no
facility or equipment is represented as the practice's own. Each renders through
`ImagePlaceholder` in image mode, which carries the on-screen placard
"Temporary imagery, practice photography to follow."

| File | Used on | Aspect | Prompt intent |
|---|---|---|---|
| `public/images/home-hero.jpg` | Homepage hero (`index.astro`) | 4:3 | Ophthalmologist examining an older-adult patient at a slit lamp, warm window light |
| `public/images/vision-lifestyle.jpg` | Vision Correction band (`vision-correction.astro`) | 3:2 | Active adult outdoors on West Texas prairie at golden hour, no glasses |
| `public/images/cataract-lifestyle.jpg` | Cataract Care band (`cataract-care.astro`) | 3:2 | Couple in their 70s walking outdoors in soft evening light |
| `public/images/about-interior.jpg` | About page (`about.astro`) | 4:3 | Calm modern clinic waiting area, no people, warm muted palette |

Each of the above is an **AI-generated temporary asset, to be replaced with
practice photography.** They exist to show the intended editorial tone and
composition of each slot, not to depict the real practice, its staff, or its
patients. Replace them one file at a time as authentic photography arrives; no
markup change is needed beyond swapping the file or the `image` path.

## Rules applied

- No stock photo was shipped in the demo at all: for a medical practice,
  wrong photography is worse than an honest labeled slot, and every slot is
  one component swap away from the real asset.
- If temporary stock is used before real photography arrives, it must look
  authentic, match the patient demographic, avoid misrepresenting technology
  or facilities, and be flagged here.
- Any image too low-resolution for production gets logged here when the
  practice supplies assets.
