# Production Handoff

Every decision required to take this demo live. Owner: the practice, guided by
Agavi AI. The compliance items gate launch.

## Governance (settle first)

- The surgery center is an AmSurg location, and the current site carries
  AmSurg's website privacy policy and terms of service. Confirm who owns the
  domain, the current Duda account, and the legal pages, and who approves
  changes (the practice, AmSurg, or both) before any work is scoped.
- AmSurg may already have a plan for the 2027 accessibility deadline. Ask.

## Infrastructure

| Decision | Status and notes |
|---|---|
| Hosting | Cloudflare Pages, production branch `main` (see README). Demo protected with Cloudflare Access |
| Domain | Keep abileneeyeinstitute.com. Plan DNS cutover and a 301 map from the 35 URLs in the current sitemap (see SEO-PLAN.md) |
| CMS | None today; content lives in typed data files with provenance. Decide whether staff need self-service editing; a git-based or headless CMS can sit on top without changing the front end |

## Integrations (each needs vendor verification; anything touching PHI needs a BAA)

| Integration | Today | Demo | Production decision |
|---|---|---|---|
| Scheduling | Phone only | Phone only | Stay phone-first, or add a BAA-covered scheduling vendor |
| Patient portal | None linked | Not shown | Confirm whether one exists |
| Bill pay | QuickClick | Links to QuickClick | Confirm vendor and BAA status |
| Patient forms | Seven PDFs dated 2012 to 2015 | Links to the current forms page | Current versions as accessible PDFs, or a BAA-covered digital intake vendor |
| Referrals | Phone, fax (325) 695-2326 | Phone and fax published; placeholder for a secure channel | Choose a secure channel (fax, Direct messaging, or a vendor) |
| Self-assessment callback | n/a | Front end only, stores nothing | Connect only to a BAA-covered contact workflow, or drop the callback |

## Content

- Run the confirmation call in CONTENT-VERIFICATION.md. Update `src/data/*.ts`
  (status `confirmed`), then `npm run content:register`.
- Photo rights and original files for the team, building, and headshots (see
  ASSET-INVENTORY.md). Replace the two AI lifestyle images.
- Written permission on file for the quoted patient comments.
- Financing details for CareCredit and First Financial Bank.

## Compliance and legal (gates launch)

- BAAs for every PHI-touching vendor, including any form, scheduling, or
  messaging tool.
- One current Notice of Privacy Practices, with an effective date, published
  as a web page plus a download. It keeps the Texas electronic-disclosure
  statement.
- Nondiscrimination notice and language-assistance taglines (the 15 languages
  on the Office for Civil Rights list for Texas) as an accessible web page,
  linked from every page.
- Section 504: WCAG 2.1 AA conformance by 2027-05-11 (15 or more employees),
  including posted documents patients use.
- Tracking: none, or cookieless aggregate analytics only. Never ad pixels (see
  HIPAA-BOUNDARIES.md).
- Accessibility audit (automated plus assistive-technology walkthrough) before
  launch.
- Full review by the practice's healthcare compliance counsel.

## Operations

- Who approves content changes, and physician sign-off for anything medical.
- Content workflow: edit `src/data`, run `npm run content:register`, commit,
  and Cloudflare deploys `main`.
- Ongoing: dependency updates, uptime and link checks, quarterly review of
  hours, roster, and insurance.
