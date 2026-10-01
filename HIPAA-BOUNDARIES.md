# HIPAA Boundaries

## What this demo is

A static marketing website. It collects **no protected health information and
no personal information of any kind**. There is no database, no server-side
code, no analytics, no advertising pixel, no chatbot, no session replay, and no
third-party form.

- The vision-correction self-assessment asks lifestyle and preference questions
  only (age band, eyewear, activities, motivation). No symptoms, diagnoses,
  medical history, medications, or dates of birth. Answers live in browser
  memory on the page and are never stored or transmitted. The optional
  "callback" fields are front-end only: pressing the button shows a
  confirmation, saves nothing, and sends nothing, and the page says so.
- The only `<form>` element has no `action`, no `method`, and no submit handler
  that transmits data. Verified in a browser on 2026-10-01: the full
  self-assessment flow makes zero network requests.
- Scheduling is by phone. The one secure-system placeholder left,
  `/provider-referral/`, explains that production connects to an approved
  referral channel and collects nothing.

**This demo is not "HIPAA compliant" and does not claim to be.** HIPAA
compliance is a property of an organization's practices, agreements, and
safeguards, not of a website that collects nothing.

## Features that would involve PHI (or come close)

Any of these moves the project into compliance review before it is built:

- An appointment request form, even name plus reason for visit
- Any questionnaire that pairs identity (name, email, phone) with symptoms,
  conditions, or eyewear history
- Patient portal integration or single sign-on
- Online bill payment (patient account identifiers)
- Secure referral submission with patient details
- Any chat, callback, or contact form that invites free text about health
- Email capture tied to condition pages (interest in "cataract surgery"
  attached to an identity is sensitive)

Each of these runs only through a vendor that signs a Business Associate
Agreement (BAA). General-purpose site builders and form widgets usually don't.

## Standing rules for the production site

- **No advertising pixels or ad-network tags** (Meta, Google Ads, programmatic
  retargeting, cookie-sync pixels) on any page, and never on condition,
  procedure, form, portal, or billing pages.
  - Why, after the court ruling: in June 2024 a federal court (AHA v. Becerra)
    vacated the part of HHS's tracking guidance covering public,
    unauthenticated pages, and HHS dropped its appeal. The rule stands anyway.
  - Class actions over tracking on health websites continued after the ruling
    (for example, Duke settled for $3.7M in May 2026).
  - Authenticated pages and anything typed into a form are still PHI.
- **No PHI, form inputs, or identifiers in analytics.** If analytics are used
  at all, cookieless, aggregate page counts only.
- **Secure actions go only to verified, contracted, BAA-covered systems.**
- **URLs never encode anything about an individual.**
- **Embedded video uses privacy-enhanced mode** (youtube-nocookie.com).

## If AI features are added later (Stage 2)

- Patient-facing or PHI-touching AI runs only through a model provider under a
  BAA with zero data retention and US-only processing, or inside a vendor that
  already holds a BAA with the practice.
- Texas requires plain-language disclosure when AI is used in relation to
  health care service or treatment (TRAIGA, HB 149, effective 2026-01-01).
  SB 1188 adds disclosure and practitioner review when AI informs diagnosis,
  and requires health records to be stored in the US.
- Emergency symptoms are handled by fixed rules (call now, or go to the ER),
  never by a model alone.
- Agavi configures and integrates; it does not host or route PHI.

## Limits of this document

This is an engineering boundary description, not legal advice. The website is
only one part of the practice's compliance environment. Production launch
requires review by the practice and qualified healthcare compliance counsel.
