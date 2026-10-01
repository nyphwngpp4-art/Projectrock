/**
 * Services organized around patient needs, not a raw condition list.
 * Wording stays educational: what it addresses, why patients seek
 * evaluation, and the next step. No diagnosis, no outcome promises.
 * Every service is one the practice's current site describes; see `source`.
 */
import { LIVE_SITE, shown, type Sourced } from './sources.ts';

export interface Service extends Sourced {
  title: string;
  href: string;
  icon: string;
  addresses: string;
  whyEvaluate: string;
  nextStep: string;
}

export interface ServiceGroup {
  title: string;
  intro: string;
  services: Service[];
}

const on = (page: string): Sourced => ({ status: 'published', source: `${LIVE_SITE}${page}` });

/** Every service with its provenance, including any still pending. Used by the register. */
export const allServiceGroups: ServiceGroup[] = [
  {
    title: 'Cataract and Lens Care',
    intro: 'Care for the clouding of vision that many people notice with age, from first evaluation through surgery and recovery.',
    services: [
      {
        title: 'Cataract Evaluation and Surgery',
        href: '/cataract-care/',
        icon: 'ph:eye',
        addresses: 'Cloudy, dim, or glare-sensitive vision caused by cataracts.',
        whyEvaluate: 'An evaluation shows whether a cataract explains your vision changes and whether surgery would help.',
        nextStep: 'Call to schedule a cataract evaluation.',
        ...on('/cataract'),
      },
      {
        title: 'Laser-Assisted Cataract Surgery',
        href: '/cataract-care/#laser-assisted',
        icon: 'ph:crosshair',
        addresses: 'Cataract surgery in which a laser performs certain steps.',
        whyEvaluate: 'Your surgeon explains whether a laser-assisted approach suits your eyes and your lens choice.',
        nextStep: 'Ask about it at your cataract consultation.',
        ...on('/laser-assisted-cataract-surgery'),
      },
      {
        title: 'Lens Replacement Options',
        href: '/cataract-care/#lens-options',
        icon: 'ph:circles-three',
        addresses: 'Choosing the replacement lens that fits how you live: driving, reading, or both.',
        whyEvaluate: 'Your surgeon reviews your eyes and daily activities before discussing lens choices.',
        nextStep: 'Discuss options at your consultation.',
        ...on('/cataract'),
      },
    ],
  },
  {
    title: 'Vision Correction',
    intro: 'Options for adults who want to depend less on glasses or contact lenses.',
    services: [
      {
        title: 'LASIK',
        href: '/vision-correction/',
        icon: 'ph:sparkle',
        addresses: 'Nearsightedness, farsightedness, and astigmatism in suitable candidates.',
        whyEvaluate: 'A consultation determines whether your eyes are suited to LASIK or whether another option fits better.',
        nextStep: 'Take the two-minute self-assessment or call for a consultation.',
        ...on('/lasik'),
      },
      {
        title: 'Implantable Contact Lenses (ICL)',
        href: '/vision-correction/#icl',
        icon: 'ph:contactless-payment',
        addresses: 'Higher prescriptions or thinner corneas where LASIK may not be the best fit.',
        whyEvaluate: 'An evaluation shows whether an implantable lens is an appropriate alternative for your eyes.',
        nextStep: 'Ask about ICL at your consultation.',
        ...on('/visian-icl'),
      },
      {
        title: 'Refractive Lens Exchange',
        href: '/vision-correction/#rle',
        icon: 'ph:swap',
        addresses: 'Adults who want clearer vision and are near the age when reading vision changes.',
        whyEvaluate: 'A consultation weighs lens replacement against laser options for your stage of life.',
        nextStep: 'Discuss at your consultation.',
        ...on('/refractive-lens-exchange'),
      },
    ],
  },
  {
    title: 'Medical Eye Conditions',
    intro: 'Ongoing medical care for conditions that can affect sight over time, managed by physicians close to home.',
    services: [
      {
        title: 'Glaucoma',
        href: '/medical-eye-care/#glaucoma',
        icon: 'ph:drop',
        addresses: 'Elevated eye pressure and optic nerve changes that can quietly narrow vision.',
        whyEvaluate: 'Glaucoma often has no early symptoms; regular monitoring protects your remaining sight.',
        nextStep: 'Schedule a pressure check and evaluation.',
        ...on('/glaucoma'),
      },
      {
        title: 'Diabetic Eye Care',
        href: '/medical-eye-care/#diabetes',
        icon: 'ph:heartbeat',
        addresses: 'Changes in the retina caused by diabetes.',
        whyEvaluate: 'Annual dilated exams catch diabetic changes before they threaten vision.',
        nextStep: 'Schedule your annual diabetic eye exam.',
        ...on('/diabetes'),
      },
      {
        title: 'Macular Degeneration',
        href: '/medical-eye-care/#macular-degeneration',
        icon: 'ph:target',
        addresses: 'Age-related changes to central vision used for reading and faces.',
        whyEvaluate: 'Early detection preserves options; monitoring tracks any progression.',
        nextStep: 'Schedule a retina evaluation.',
        ...on('/macular-degeneration'),
      },
      {
        title: 'Dry Eye',
        href: '/medical-eye-care/#dry-eye',
        icon: 'ph:sun-horizon',
        addresses: 'Burning, gritty, or watery eyes, common in the West Texas climate.',
        whyEvaluate: 'Persistent dryness has treatable causes; an exam identifies yours.',
        nextStep: 'Schedule a dry eye evaluation.',
        ...on('/dry-eyes'),
      },
      {
        title: 'Corneal Crosslinking',
        href: '/medical-eye-care/#crosslinking',
        icon: 'ph:shield-check',
        addresses: 'Keratoconus, in which the cornea gradually thins and changes shape.',
        whyEvaluate: 'An evaluation shows whether the cornea is changing and whether crosslinking is appropriate.',
        nextStep: 'Call to schedule a corneal evaluation.',
        ...on('/corneal-crosslinking'),
      },
    ],
  },
  {
    title: 'Comprehensive Eye Care',
    intro: 'Routine exams and everyday vision care for adults and families.',
    services: [
      {
        title: 'Comprehensive Eye Exams',
        href: '/services/#comprehensive',
        icon: 'ph:list-checks',
        addresses: 'Routine vision checks, glasses and contact lens prescriptions, and general eye health.',
        whyEvaluate: 'A full exam checks more than sharpness; it screens for conditions that develop without symptoms.',
        nextStep: 'Call to schedule an exam.',
        ...on('/meet-our-doctors (optometrist bios)'),
      },
    ],
  },
];

/** What pages render: pending services never appear. */
export const serviceGroups: ServiceGroup[] = allServiceGroups.map((group) => ({
  ...group,
  services: shown(group.services),
}));

export const featuredServices = serviceGroups
  .flatMap((group) => group.services)
  .filter((service) => service.title !== 'Lens Replacement Options')
  .map(({ title, href }) => ({ title, href }));
