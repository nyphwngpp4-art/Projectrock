# Accessibility Notes

Target: WCAG 2.2 AA. For this practice the audience skews older and includes
people with genuinely impaired vision, so accessibility is treated as a core
feature, not a checklist.

## Implemented

- **Contrast:** body text is #24292e on warm off-white (#faf8f4), ~13:1.
  Secondary text (#454d55) exceeds 7:1. White-on-navy CTAs (#1b3350) exceed
  10:1. The sage accent is used at its 700 weight (#33635c) for text so links
  and labels stay above 4.5:1.
- **Type:** 17px base body, 1.65 line height, no thin weights, no text in
  images, generous touch targets (min ~44px on all buttons and menu items).
- **Structure:** one h1 per page, ordered heading hierarchy, semantic
  landmarks (header, nav with aria-labels, main, footer), address/dl elements
  where appropriate.
- **Keyboard:** skip-to-content link, visible 3px focus outline on every
  interactive element via :focus-visible, logical tab order, native
  details/summary for FAQs (keyboard-operable for free).
- **Mobile menu:** button with aria-expanded and aria-controls, label swaps
  between open/close states.
- **Self-assessment:** fieldset/legend per question, real labels wrapping each
  radio/checkbox, progress announced via aria-live, error message with
  role=alert, result container receives focus when shown, noscript fallback
  points to the phone number.
- **Forms:** callback fields use explicit label elements and autocomplete
  attributes even though they are demonstration-only. No placeholder-as-label.
- **Motion:** only micro-transitions; a global prefers-reduced-motion rule
  collapses all animation and smooth scrolling.
- **Color independence:** active nav state uses underline plus color; required
  actions are labeled in text; no meaning carried by color alone.
- **Images:** decorative icons are aria-hidden; meaningful placeholders carry
  role=img with descriptive aria-labels.

## Deliberate decisions

- **Single light theme.** The general guidance to ship dark mode was
  overridden: the brief specifies a calm clinical light palette for an older
  demographic, and a single high-contrast light theme avoids the risk of a
  low-contrast dark variant. Documented as a decision, revisitable at
  production.
- **Sticky header** is kept short (64-72px) so it does not consume small
  viewports.

## Known limitations (to address at production)

- Automated (axe/Lighthouse) and screen-reader (NVDA/VoiceOver) audits have
  not been run inside this build environment; run both before launch.
- The quiz "has-checked" visual affordance depends on a modern CSS selector;
  the radio buttons themselves remain visible and functional in older
  browsers, so this degrades safely.
- Map embed, when added, will need a text alternative (address + directions
  link already present).
- PDF forms, if the practice supplies them, must be tagged/accessible or
  paired with an accessible alternative.
