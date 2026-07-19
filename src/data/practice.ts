/**
 * Single source of truth for practice facts.
 * Every value carries a verification status; see CONTENT-VERIFICATION.md.
 * Values marked `verified: false` render with a review flag in docs and
 * must be confirmed with the practice before production.
 */

export const practice = {
  name: 'Abilene Eye Institute',
  legalNote: 'Concept demo prepared by Agavi AI LLC. Not the live site of Abilene Eye Institute.',

  // 325-695-2020 appears as the local number across the live site and every
  // public directory listing; treated as primary. Two other numbers
  // (855-463-5490, 800-692-2020) appear unlabeled on the live site and are
  // documented in CONTENT-VERIFICATION.md pending the practice's guidance.
  phone: {
    display: '(325) 695-2020',
    href: 'tel:+13256952020',
    verified: true,
  },
  tollFree: {
    display: '(800) 692-2020',
    href: 'tel:+18006922020',
    verified: false,
  },
  fax: {
    display: 'Fax number to be confirmed',
    verified: false,
  },

  address: {
    street: '2120 Antilley Rd',
    city: 'Abilene',
    state: 'TX',
    zip: '79606',
    verified: true,
  },

  // The live site shows both "since 1987" and "over 30 years"; 1987 is used
  // here pending reconciliation with the practice.
  foundingYear: 1987,
  foundingVerified: false,

  hours: [
    { days: 'Monday to Thursday', hours: '8:00 am to 5:00 pm' },
    { days: 'Friday', hours: '8:00 am to 12:00 pm, 1:00 pm to 5:00 pm' },
    { days: 'Saturday and Sunday', hours: 'Closed' },
  ],
  hoursVerified: false,

  serviceArea: [
    'Abilene',
    'Comanche',
    'Sweetwater',
    'Colorado City',
    'Eastland',
    'Breckenridge',
  ],
  serviceAreaVerified: true,

  // Secure external systems. Production URLs must come from the practice;
  // the demo routes to explanatory placeholder pages instead.
  links: {
    requestAppointment: '/request-appointment/',
    patientPortal: '/patient-portal/',
    payBill: '/pay-bill/',
    providerReferral: '/provider-referral/',
  },
} as const;
