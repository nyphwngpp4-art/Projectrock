/**
 * Single source of truth for practice facts.
 *
 * `practice` holds what pages render. `practiceFacts` records where each fact
 * comes from, including facts that stay off the site until the practice
 * confirms them. CONTENT-VERIFICATION.md is generated from this file (see
 * src/data/sources.ts).
 */
import { LIVE_SITE, type Fact } from './sources.ts';

// Practice photography is hotlinked from the current site's image host until
// the practice supplies originals; see ASSET-INVENTORY.md. The logo is white
// on transparent and only works on dark backgrounds.
const CDN = 'https://lirp.cdn-website.com/b1397486/dms3rep/multi/opt';

const phone = { display: '(325) 695-2020', href: 'tel:+13256952020' };
const fax = { display: '(325) 695-2326' };
const address = { street: '2120 Antilley Rd', city: 'Abilene', state: 'TX', zip: '79606' };
const geo = { latitude: 32.3731823, longitude: -99.7493545 };
const foundingYear = 1987;
const hours = [
  { days: 'Monday to Thursday', hours: '8:00 am to 5:00 pm', opens: '08:00', closes: '17:00', dayCodes: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'] },
  { days: 'Friday', hours: '8:00 am to 1:00 pm, 1:30 to 5:00 pm', opens: '08:00', closes: '17:00', dayCodes: ['Friday'] },
  { days: 'Saturday and Sunday', hours: 'Closed', opens: null, closes: null, dayCodes: [] },
];
const serviceArea = ['Abilene', 'Comanche', 'Sweetwater', 'Colorado City', 'Eastland', 'Breckenridge'];

export const practice = {
  name: 'Abilene Eye Institute',
  legalNote: 'Concept demo prepared by Agavi AI LLC. Not the live site of Abilene Eye Institute.',
  phone,
  fax,
  address,
  geo,
  foundingYear,
  hours,
  serviceArea,
  links: {
    // Stage 1 is call-first: there is no online scheduling or patient portal today.
    call: phone.href,
    patientForms: 'https://www.abileneeyeinstitute.com/patient-forms',
    payBill: 'https://quickclick.com/r/go7aab3j3qarekw1gvk2mit7c3lw1o',
    financing: 'https://www.abileneeyeinstitute.com/financing',
    reviews: 'https://www.abileneeyeinstitute.com/reviews',
    providerReferral: '/provider-referral/',
    directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `Abilene Eye Institute, ${address.street}, ${address.city}, ${address.state} ${address.zip}`
    )}`,
  },
  profiles: [
    'https://www.facebook.com/AbileneEyeInstitute/',
    'https://yelp.com/biz/abilene-eye-institute-cataract-and-lasik-surgery-center-abilene',
    'https://www.bbb.org/us/tx/abilene/profile/ophthalmology/abilene-eye-institute-cataract-and-refractive-surgery-center-0795-22534',
  ],
  assets: {
    logoOnDark: { src: `${CDN}/new-logo-1920w.png`, width: 631, height: 142, alt: 'Abilene Eye Institute, Cataract and LASIK Surgery Center' },
    building: { src: `${CDN}/building-1920w.jpg`, width: 1440, height: 810, alt: 'The Abilene Eye Institute Cataract and LASIK Surgery Center building at 2120 Antilley Road' },
    team: { src: `${CDN}/image001-1920w.png`, width: 800, height: 530, alt: 'Physicians and optometrists of Abilene Eye Institute in the clinic' },
  },
};

const live = (page: string) => `${LIVE_SITE}${page}`;

export const practiceFacts: (Fact & { label: string })[] = [
  { label: 'Primary phone', text: phone.display, status: 'published', source: live(' (tel: link on every page)') },
  { label: 'Fax', text: fax.display, status: 'published', source: live('/contact-us') },
  { label: 'Address', text: `${address.street}, ${address.city}, ${address.state} ${address.zip}`, status: 'published', source: live('/contact-us') },
  { label: 'Map coordinates', text: `${geo.latitude}, ${geo.longitude}`, status: 'published', source: live(' (Google Maps link in the site footer)') },
  { label: 'Founding year', text: String(foundingYear), status: 'published', source: live('/contact-us ("since 1987")'), note: 'The home page also says "over 30 years"; both fit 1987' },
  ...hours.map((h): Fact & { label: string } => ({
    label: `Hours, ${h.days}`,
    text: h.hours,
    status: 'published',
    source: live('/contact-us (hours block)'),
    note: h.days === 'Friday' ? 'Body text on the same page says Monday to Friday 8 to 5; confirm which is current' : undefined,
  })),
  { label: 'Service area', text: serviceArea.join(', '), status: 'published', source: live('/ and /about-us') },
  { label: 'Bill pay', text: 'QuickClick', status: 'published', source: live(' ("Make A Payment" link)') },
  { label: 'Financing partners', text: 'CareCredit, First Financial Bank', status: 'published', source: live('/financing') },
  { label: 'On-site surgery center', text: 'Ambulatory surgical center in the clinic building', status: 'published', source: live('/about-us'), note: 'AmSurg lists it as "Abilene Cataract and Refractive Surgery Center"; agree the name to use' },
  { label: '(855) 463-5490', text: 'Shown unlabeled in the live header', status: 'pending', source: live(' (header on every page)'), note: 'What is this number? Not shown on the demo' },
  { label: '(800) 692-2020', text: 'Shown under "Call Us" on four pages', status: 'pending', source: live('/, /about-us, /lasik, /cataract'), note: 'Still active? Not shown on the demo' },
  { label: 'Patient portal', text: 'None linked on the live site', status: 'pending', source: live(' (no portal link on any page)'), note: 'Does the practice have one?' },
  { label: 'Online scheduling', text: 'None; every call to action is a phone link', status: 'pending', source: live(''), note: 'Any plans? The demo stays call-first' },
];
