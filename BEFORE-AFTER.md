# Before and After

What the demo changes compared with the practice's current website, written for
the practice's own leadership. Everything here is something a patient can see
today; nothing is a criticism of whoever built or maintains the current site.
Templates leave residue, and busy practices have better things to do than
audit their own menus.

Reviewed 2026-10-01 on abileneeyeinstitute.com.

## What already works well

- The practice publishes thorough doctor bios, real photography of the team
  and building, and clear pages for every major service.
- Bill pay, financing, patient forms, and the core legal notices are already
  posted.
- On automated accessibility checks, the current site has only a handful of
  issues, mostly inside embedded YouTube videos.

The demo keeps all of that and reorganizes it.

## Side by side

| Today | In the demo |
|---|---|
| A "Hair Services / Spa Services" block (Haircuts, Extensions, Hair Color, Facials, Massages, Waxing) left over from the site template appears near the bottom of every page, and its six links lead to "page not found" | Eye care only, and every link goes somewhere real |
| "Take our LASIK self test" on the homepage is a heading that isn't linked to anything | A working two-minute self-assessment: four lifestyle questions, no medical history, nothing saved or sent |
| Three phone numbers appear in different places: (855) 463-5490 at the top of each page, (800) 692-2020 under "Call Us" on four pages, and (325) 695-2020 everywhere else | One number everywhere, with tap-to-call on phones |
| Friday hours read "8 to 1, 1:30 to 5" in the contact box and "Monday through Friday 8 to 5" in the text below it | One source of truth for hours, phone, fax, and address, so every page agrees |
| "Meet Our Doctors" lists six doctors; the doctor menu on every other page lists five | All six doctors, from one roster, with bios drawn from their own profile pages |
| The privacy and nondiscrimination notices are posted as PDFs, which screen readers handle poorly | A notices page ready for accessible web versions, with the PDFs kept as downloads |
| No patient portal or online scheduling link; every action is a phone call | Still call-first, and honest about it: no dead "request appointment" buttons |
| Laser-assisted cataract surgery and corneal crosslinking have pages, but patients have to know the terms to find them | Services organized by what patients notice, with both included |
| Six thin city landing pages (one with a misspelled address: /service-area/abeline-tx) | Service area on real pages; a 301 redirect plan for every current URL at launch |

## Accessibility, honestly

A federal rule (Section 504) sets WCAG 2.1 AA as the accessibility standard
for practices that bill Medicare or Medicaid, with a May 11, 2027 deadline
for practices with 15 or more employees.

- **Current site (automated checks, 25 pages, desktop and phone):** 4 issue
  types. Most are inside embedded YouTube players. The practice's own content
  has two low-contrast links. The larger gap is the PDFs, which automated
  tools don't fully judge.
- **Demo (same checks, every page, desktop and phone):** no issues.

Automated tools catch only part of the standard, so neither result is a
verdict. Both sites should get a manual review before anyone calls them
compliant or not.

## What the demo deliberately does not do

- Collect any patient information. There is no intake form, no chatbot, and
  no ad tracking.
- Publish anything the practice hasn't published itself. Claims found only in
  directories stay off the site until the practice confirms them (see
  CONTENT-VERIFICATION.md).
- Present the two AI-generated lifestyle images as the practice's own. They
  are labeled as temporary on the page.
