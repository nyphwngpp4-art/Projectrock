# Content Verification Register

Every fact used in this demo, its source, and its status. Nothing marked
**UNVERIFIED** may be published as fact in production. The fifteen-minute
confirmation call with the practice should walk this list top to bottom.

Note on method: this build environment's network policy blocked direct fetching
of abileneeyeinstitute.com, so the audit synthesizes (a) the defect list in the
build brief, which was compiled from the live site, and (b) public search-index
data and directory listings. Items sourced only from third-party directories
are marked accordingly.

## Legend
- **VERIFIED** - confirmed by multiple public sources or the practice
- **LIKELY** - consistent across public sources, confirm with practice
- **UNVERIFIED** - appears on live site or directories only; must be confirmed

## Contact & identity

| Fact | Value used in demo | Status | Notes |
|---|---|---|---|
| Practice name | Abilene Eye Institute | VERIFIED | Consistent everywhere |
| Address | 2120 Antilley Rd, Abilene, TX 79606 | VERIFIED | Site, Healthgrades, Yelp, CareCredit agree |
| Primary phone | (325) 695-2020 | LIKELY | The only number used across public directories; live site shows it unlabeled alongside two others |
| Second number | 855-463-5490 | UNVERIFIED | On live site, unlabeled; purpose unknown (LASIK line? answering service?). Not shown in demo |
| Third number | 800-692-2020 | UNVERIFIED | On live site, unlabeled. Stored in data layer, not displayed |
| Fax | none | UNVERIFIED | Not found publicly; placeholder text shown |
| Founding year | 1987 ("since 1987") | UNVERIFIED | Live site shows both "since 1987" and "over 30 years" (which would imply pre-1996 at minimum but reads as stale copy). Demo uses 1987 with an on-page pending-confirmation note |
| Hours | M-Th 8-5, F 8-12 & 1-5, closed weekends | UNVERIFIED | Live site shows split Friday; flagged on every page where hours render |
| Service area | Abilene, Comanche, Sweetwater, Colorado City, Eastland, Breckenridge | LIKELY | Listed on live site; McAdams directory entries corroborate Eastland outreach |

## Providers

| Provider | Facts used | Status | Notes |
|---|---|---|---|
| Mark J. Phelan, MD | Cataract/refractive surgeon; MD, University of Michigan; ABES certified; Fellow ABO, ACS; member AAO, ASCRS, ISRS | LIKELY | From live-site bio via search index. Confirm every credential verbatim before production |
| Rocky McAdams, MD | Board-certified ophthalmologist; UT Southwestern MD and residency; cataract, refractive, surgical glaucoma, diabetic/AMD care; English and Spanish; sees patients in outreach communities | LIKELY | From Doximity/WebMD/US News directories, not the practice. Confirm directly |
| Jessica Sumrall, OD | Optometrist | UNVERIFIED | Roster presence confirmed; no bio details published in demo |
| Jeannie Clark, OD | Optometrist | UNVERIFIED | Roster presence from brief; profile shows pending-verification placeholders |
| Logan Skrobarcek, OD | Optometrist | UNVERIFIED | Same as above |

Profile pages for unverified providers render explicit "pending verification"
blocks instead of invented content.

## Services

| Service | Status | Notes |
|---|---|---|
| Cataract evaluation & surgery | VERIFIED | Core of practice identity across all sources |
| LASIK | VERIFIED | Dedicated live-site page exists |
| Visian ICL | LIKELY | Dedicated live-site page exists; confirm actively offered |
| Refractive lens exchange | UNVERIFIED | Appears on live site; confirm actively offered |
| Corneal crosslinking | UNVERIFIED | Appears on live site; NOT included in demo pending confirmation |
| Glaucoma (medical & surgical) | LIKELY | Corroborated by McAdams directory focus areas |
| Diabetic eye care | VERIFIED | Dedicated live-site page exists |
| Macular degeneration | LIKELY | Confirm scope (monitoring vs. injections in-house) |
| Dry eye | LIKELY | Confirm treatment offerings |
| Onsite surgery center | UNVERIFIED | Yelp lists "Cataract & LASIK Surgery Center" at the same address; demo says "surgery center relationship, details pending" and claims nothing more |

## Secure links (production URLs needed from practice)

| Link | Live-site state | Demo state |
|---|---|---|
| Patient portal | URL unknown/unlabeled | Placeholder page at /patient-portal/ |
| Pay bill | QuickClick link on live site | Placeholder page at /pay-bill/; confirm current vendor |
| Patient forms | Unknown | Described on /patient-resources/, no link |
| Online scheduling | None found | Placeholder page at /request-appointment/ |
| LASIK self-test | BROKEN on live site | Rebuilt as PHI-free self-assessment on /vision-correction/ |

## Deliberately not published anywhere in the demo

Board certifications not sourced above, surgical volumes, success rates,
outcomes claims, awards, technology or equipment ownership, insurance
participation lists, financing terms, testimonials, patient names or photos.

## The 15-minute confirmation call (short list)

1. Physician roster complete and current? Degrees, focus areas, and Phelan/McAdams credentials verbatim?
2. Founding year: 1987, or different?
3. Which phone number is primary for patients? What are 855-463-5490 and 800-692-2020, and should either appear on the site?
4. Fax number for referrals?
5. Is the onsite surgery center description accurate, and how should it be described?
6. Are Visian ICL, refractive lens exchange, and corneal crosslinking actively offered?
7. Current, correct URLs: patient portal, bill pay, patient forms.
8. Friday hours: split schedule correct?
9. Service-area list complete? Any outreach clinic locations to list (e.g., Eastland)?
10. Financing partners to name on the vision-correction page?
