/**
 * Physician and optometrist roster.
 * Roster and focus areas come from the live site and public directories.
 * Anything not confirmed directly with the practice is marked unverified
 * and rendered with a "pending confirmation" note on profile pages.
 * No credentials, memberships, or biography details are invented.
 */

export interface Doctor {
  slug: string;
  name: string;
  degree: string;
  role: string;
  focus: string[];
  /** Short plain-language descriptor for cards. */
  cardLine: string;
  /** Verified biography facts only. Empty entries render a placeholder. */
  bio: string[];
  education: string[];
  credentials: string[];
  languages?: string[];
  verified: boolean;
}

export const doctors: Doctor[] = [
  {
    slug: 'mark-j-phelan-md',
    name: 'Mark J. Phelan',
    degree: 'MD',
    role: 'Ophthalmologist, Cataract and Refractive Surgeon',
    focus: ['Cataract surgery', 'LASIK and refractive surgery', 'Comprehensive ophthalmology'],
    cardLine: 'Cataract and refractive surgeon with decades of service to the Big Country.',
    bio: [
      'Dr. Phelan is a board-certified ophthalmologist and the senior surgeon at Abilene Eye Institute, where he has cared for patients from Abilene and the surrounding communities for decades.',
    ],
    education: ['Medical degree, University of Michigan'],
    credentials: [
      'Certified, American Board of Eye Surgeons',
      'Fellow, American Board of Ophthalmology',
      'Fellow, American College of Surgeons',
      'Member, American Academy of Ophthalmology',
      'Member, American Society of Cataract and Refractive Surgery',
      'Member, International Society of Refractive Surgery',
    ],
    verified: true,
  },
  {
    slug: 'rocky-mcadams-md',
    name: 'Rocky McAdams',
    degree: 'MD',
    role: 'Ophthalmologist, Cataract and Refractive Surgeon',
    focus: [
      'Cataract surgery',
      'Refractive surgery',
      'Surgical treatment of glaucoma',
      'Diabetic eye care and macular degeneration',
    ],
    cardLine: 'Cataract, refractive, and glaucoma surgeon caring for patients across the region.',
    bio: [
      'Dr. McAdams is a board-certified ophthalmologist practicing comprehensive medical and surgical eye care, with particular focus on cataract surgery, refractive procedures, and the surgical treatment of glaucoma.',
      'He sees patients in Abilene and in outreach communities across the region, and welcomes Spanish-speaking patients.',
    ],
    education: [
      'Medical degree, University of Texas Southwestern Medical School',
      'Ophthalmology residency, University of Texas Southwestern Medical Center',
    ],
    credentials: ['Board certified, American Board of Ophthalmology'],
    languages: ['English', 'Spanish'],
    verified: true,
  },
  {
    slug: 'jessica-sumrall-od',
    name: 'Jessica Sumrall',
    degree: 'OD',
    role: 'Optometrist',
    focus: ['Comprehensive eye exams', 'Pre- and post-operative care', 'Medical optometry'],
    cardLine: 'Optometrist providing comprehensive exams and surgical co-management.',
    bio: [],
    education: [],
    credentials: [],
    verified: false,
  },
  {
    slug: 'jeannie-clark-od',
    name: 'Jeannie Clark',
    degree: 'OD',
    role: 'Optometrist',
    focus: ['Comprehensive eye exams', 'Contact lens care', 'Medical optometry'],
    cardLine: 'Optometrist providing comprehensive exams and ongoing vision care.',
    bio: [],
    education: [],
    credentials: [],
    verified: false,
  },
  {
    slug: 'logan-skrobarcek-od',
    name: 'Logan Skrobarcek',
    degree: 'OD',
    role: 'Optometrist',
    focus: ['Comprehensive eye exams', 'Pre- and post-operative care', 'Medical optometry'],
    cardLine: 'Optometrist providing comprehensive exams and surgical co-management.',
    bio: [],
    education: [],
    credentials: [],
    verified: false,
  },
];
