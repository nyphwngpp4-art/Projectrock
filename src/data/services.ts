/**
 * Services organized around patient needs, not a raw condition list.
 * Wording stays educational: what it addresses, why patients seek
 * evaluation, and the next step. No diagnosis, no outcome promises.
 */

export interface Service {
  title: string;
  href: string;
  icon: string;
  addresses: string;
  whyEvaluate: string;
  nextStep: string;
  verified: boolean;
}

export interface ServiceGroup {
  title: string;
  intro: string;
  services: Service[];
}

export const serviceGroups: ServiceGroup[] = [
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
        nextStep: 'Schedule a cataract evaluation.',
        verified: true,
      },
      {
        title: 'Lens Replacement Options',
        href: '/cataract-care/#lens-options',
        icon: 'ph:circles-three',
        addresses: 'Choosing the replacement lens that fits how you live, driving, reading, or both.',
        whyEvaluate: 'Your surgeon reviews your eyes and daily activities before discussing lens choices.',
        nextStep: 'Discuss options at your consultation.',
        verified: true,
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
        verified: true,
      },
      {
        title: 'Implantable Contact Lenses (ICL)',
        href: '/vision-correction/#icl',
        icon: 'ph:contactless-payment',
        addresses: 'Higher prescriptions or thinner corneas where LASIK may not be the best fit.',
        whyEvaluate: 'An evaluation shows whether an implantable lens is an appropriate alternative for your eyes.',
        nextStep: 'Ask about ICL at your consultation.',
        verified: true,
      },
      {
        title: 'Refractive Lens Exchange',
        href: '/vision-correction/#rle',
        icon: 'ph:swap',
        addresses: 'Adults who want clearer vision and are near the age when reading vision changes.',
        whyEvaluate: 'A consultation weighs lens replacement against laser options for your stage of life.',
        nextStep: 'Discuss at your consultation.',
        verified: true,
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
        verified: true,
      },
      {
        title: 'Diabetic Eye Care',
        href: '/medical-eye-care/#diabetes',
        icon: 'ph:heartbeat',
        addresses: 'Changes in the retina caused by diabetes.',
        whyEvaluate: 'Annual dilated exams catch diabetic changes before they threaten vision.',
        nextStep: 'Schedule your annual diabetic eye exam.',
        verified: true,
      },
      {
        title: 'Macular Degeneration',
        href: '/medical-eye-care/#macular-degeneration',
        icon: 'ph:target',
        addresses: 'Age-related changes to central vision used for reading and faces.',
        whyEvaluate: 'Early detection preserves options; monitoring tracks any progression.',
        nextStep: 'Schedule a retina evaluation.',
        verified: true,
      },
      {
        title: 'Dry Eye',
        href: '/medical-eye-care/#dry-eye',
        icon: 'ph:sun-horizon',
        addresses: 'Burning, gritty, or watery eyes, common in the West Texas climate.',
        whyEvaluate: 'Persistent dryness has treatable causes; an exam identifies yours.',
        nextStep: 'Schedule a dry eye evaluation.',
        verified: true,
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
        nextStep: 'Request an appointment.',
        verified: true,
      },
    ],
  },
];

export const featuredServices = [
  { title: 'Cataract Evaluation and Surgery', href: '/cataract-care/' },
  { title: 'LASIK', href: '/vision-correction/' },
  { title: 'Refractive Lens Exchange', href: '/vision-correction/#rle' },
  { title: 'Implantable Contact Lenses', href: '/vision-correction/#icl' },
  { title: 'Glaucoma Care', href: '/medical-eye-care/#glaucoma' },
  { title: 'Diabetic Eye Care', href: '/medical-eye-care/#diabetes' },
  { title: 'Macular Degeneration', href: '/medical-eye-care/#macular-degeneration' },
  { title: 'Dry Eye Treatment', href: '/medical-eye-care/#dry-eye' },
  { title: 'Comprehensive Eye Exams', href: '/services/#comprehensive' },
];
