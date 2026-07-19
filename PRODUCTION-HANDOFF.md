# Production Handoff

Every decision required to take this demo live. Owner: the practice, guided by
Agavi AI. Nothing on this list is optional; the compliance items gate launch.

## Infrastructure

| Decision | Notes |
|---|---|
| Domain | Keep abileneeyeinstitute.com; plan DNS cutover and 301 map from current Duda URLs |
| Hosting | Cloudflare Pages or Vercel static hosting fits this build; either is fine |
| CMS | Currently none (content in typed data files). Decide whether staff need self-service editing; if so, a git-based or headless CMS layer can be added without changing the front end |

## Integrations (each requires vendor verification; PHI-adjacent ones require a BAA)

| Integration | Demo state | Production decision |
|---|---|---|
| Secure scheduling / appointment requests | Placeholder page | Choose vendor; BAA; connect from /request-appointment/ |
| Patient portal | Placeholder page | Confirm current portal URL; link out with clear labeling |
| Bill pay | Placeholder page | Confirm current vendor (QuickClick link on live site); BAA review |
| Referral workflow | Placeholder page | Choose secure channel (fax, direct message, vendor); publish fax number |
| Callback capture on self-assessment | Front-end only, stores nothing | Connect to a compliant contact workflow if the practice wants web callbacks |

## Content

- Complete the CONTENT-VERIFICATION.md confirmation call; update
  `src/data/*.ts` with verified facts and remove on-page pending flags
- Collect assets per ASSET-INVENTORY.md and swap placeholder slots
- OD biographies and headshots for Sumrall, Clark, Skrobarcek
- Reviews: choose source (Google), get authorization, link live
- Financing partners for the vision-correction page

## Compliance & legal (gates launch)

- Business Associate Agreements for every PHI-touching vendor
- Privacy notice and Notice of Privacy Practices reviewed by counsel
- Non-discrimination notice (Section 1557) added to footer
- Cookie/tracking policy: current build sets no cookies; keep it that way or
  document exactly what changes
- Analytics decision: none, or privacy-conscious aggregate only (see
  HIPAA-BOUNDARIES.md); never advertising pixels on health pages
- Accessibility audit (automated + assistive-technology pass) before launch
- Full legal review by the practice's healthcare compliance counsel

## Operations

- Staff ownership: who approves content changes, who is trained to request them
- Content approval workflow for anything medical (physician sign-off)
- Ongoing maintenance: dependency updates, uptime, link checks, quarterly
  content review (hours, roster, insurance)
