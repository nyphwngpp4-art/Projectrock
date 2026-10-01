# Accessibility Notes

Target: WCAG 2.1 AA, the standard in HHS's Section 504 rule (compliance date
2027-05-11 for practices with 15 or more employees), and 2.2 AA where
practical. The audience skews older and includes people with impaired vision,
so accessibility is a core feature, not a checklist.

## Automated audit (2026-10-01)

axe-core (tags wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa) on every page
at 1366×900 and 390×844, 42 page views in all:

- **Demo:** no violations, no horizontal overflow, no failed requests.
- **Current live site, for comparison (25 pages, same widths):** 4 rule types.
  Most are inside embedded YouTube players. The practice's own content has two
  low-contrast links. Its posted PDFs are untagged.

Automated tools catch only part of WCAG. Before launch, run a keyboard-only
walkthrough, NVDA and VoiceOver passes, and 200% and 400% zoom reflow checks.

## Implemented

- **Contrast:**
  - Body text #24292e on #faf8f4, about 13:1.
  - Secondary text (#454d55) above 7:1.
  - White-on-navy actions above 10:1.
  - Sage accent text uses its 700 weight (#33635c).
  - Footer fine print uses full-strength navy-100, not a faded tint.
- **Type:** 17px base, 1.65 line height, no thin weights, no text in images,
  touch targets of at least 44px.
- **Structure:**
  - One h1 per page and an ordered heading hierarchy.
  - Landmarks: patient shortcuts nav, header, main and mobile navs, main, footer.
  - `dl`, `address`, and table semantics where they fit. The owner-review table
    has a caption, row headers, and a focusable scroll region.
- **Keyboard:** a skip link, a visible 3px focus outline everywhere, logical
  tab order, and native details and summary for FAQs.
- **Mobile menu:** `aria-expanded` and `aria-controls`; the label switches
  between "Open menu" and "Close menu."
- **Self-assessment:**
  - Each question is a fieldset with a legend, and real labels wrap each option.
  - Progress is announced, and the error message uses `role=alert`.
  - The result receives focus when it appears.
  - A noscript fallback offers the phone number.
- **Images:** intrinsic width and height on every image (no layout shift);
  descriptive alt text; the decorative hero photo has empty alt, and its
  description is available to screen readers.
- **Motion:** micro-transitions only, and a global prefers-reduced-motion rule.
- **Language:** the Spanish tagline on `/notices/` is marked `lang="es"`.

## Known limitations

- The team photo is soft at hero size until the original arrives.
- The quiz's checked-state styling uses `:has()`. Radio buttons still work in
  older browsers.
- Practice-supplied PDFs (forms and notices) must be tagged, or paired with
  accessible web versions, before launch.
- A map embed, if added, needs a text alternative (the address and directions
  link are already present).
