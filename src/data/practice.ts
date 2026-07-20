export const practice = {
  name: 'Abilene Eye Institute',
  legalNote: 'Concept demo prepared by Agavi AI LLC. Not the live site of Abilene Eye Institute.',
  phone: { display: '(325) 695-2020', href: 'tel:+13256952020' },
  fax: { display: '(325) 695-2326', href: 'tel:+13256952326' },
  address: { street: '2120 Antilley Rd', city: 'Abilene', state: 'TX', zip: '79606' },
  foundingYear: 1987,
  hours: [
    { days: 'Monday–Thursday', hours: '8:00 am–5:00 pm' },
    { days: 'Friday', hours: '8:00 am–1:00 pm; 1:30–5:00 pm' },
    { days: 'Saturday–Sunday', hours: 'Closed' },
  ],
  serviceArea: ['Abilene', 'Comanche', 'Sweetwater', 'Colorado City', 'Eastland', 'Breckenridge'],
  links: {
    requestAppointment: 'tel:+13256952020',
    patientPortal: '/patient-resources/',
    patientForms: 'https://www.abileneeyeinstitute.com/patient-forms',
    payBill: 'https://quickclick.com/r/go7aab3j3qarekw1gvk2mit7c3lw1o',
    financing: 'https://www.abileneeyeinstitute.com/financing',
    providerReferral: '/provider-referral/',
    reviews: 'https://www.abileneeyeinstitute.com/reviews',
  },
  assets: {
    logo: 'https://lirp.cdn-website.com/b1397486/dms3rep/multi/opt/new-logo-1920w.png',
    building: 'https://lirp.cdn-website.com/b1397486/dms3rep/multi/opt/building-570w.jpg',
    team: 'https://lirp.cdn-website.com/b1397486/dms3rep/multi/opt/image001-1920w.png',
  },
} as const;
