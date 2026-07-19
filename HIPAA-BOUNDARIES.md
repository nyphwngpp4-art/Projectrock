# HIPAA Boundaries

## What this demo is

A static marketing website. It collects **no protected health information and
no personal information of any kind**. There is no database, no server-side
code, no analytics, no advertising pixel, no chatbot, no session replay, and no
third-party form.

Specifically:

- The vision-correction self-assessment asks lifestyle and preference questions
  only (age band, eyewear use, activities, motivation). No symptoms, diagnoses,
  medical history, medications, or dates of birth. Answers live in browser
  memory on the page and are never stored or transmitted. The optional
  "callback" fields are front-end only: pressing the button shows a
  confirmation and nothing is saved or sent, which the page states outright.
- The only `<form>` element on the site has no `action`, no `method`, and no
  submit handler that transmits data. Verified against the built output.
- Placeholder routes (/request-appointment/, /patient-portal/, /pay-bill/,
  /provider-referral/) explain that production connects to approved secure
  systems, and collect nothing.

**This demo is not "HIPAA compliant" and does not claim to be.** HIPAA
compliance is a property of an organization's practices, agreements, and
safeguards, not of a website that merely collects nothing.

## Future features that WOULD involve PHI (or come close)

Any of these moves the project into compliance-review territory before build:

- A real appointment-request form (even name + reason for visit)
- Patient portal integration or single sign-on
- Online bill payment (patient account identifiers)
- Secure referral submission with patient details
- Any chat, callback, or contact form that invites free-text about health
- Email capture tied to condition-specific pages (interest in "cataract
  surgery" attached to an identity is sensitive)

## Integrations that require a BAA and compliance review

Scheduling vendors, portal vendors, payment processors handling patient
accounts, referral platforms, transactional email/SMS providers, hosting for
any PHI-touching component, and any analytics processing identifiable data.

## Standing rules for the production site

- No advertising pixels (Meta, Google Ads, TikTok, etc.) on any page, and
  categorically never on condition, procedure, portal, or billing pages.
  Regulators have treated pixel data on health pages as a breach vector.
- No PHI, form inputs, or identifiers may ever enter analytics. If analytics
  are used at all, privacy-conscious aggregate measurement only (e.g.,
  cookieless, IP-anonymized page counts).
- Secure actions route only to verified, contracted, BAA-covered systems.
- URL structure should avoid encoding anything about an individual.

## Limits of this document

This is an engineering boundary description, not legal advice, and it makes no
legal guarantees. The website is only one part of the practice's compliance
environment. Production launch requires review by the practice and qualified
healthcare compliance counsel.
