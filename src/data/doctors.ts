/**
 * Physician and optometrist roster, in the order the practice's own
 * "Meet Our Doctors" page uses.
 *
 * Every biography line, degree, and credential carries its source. Only
 * facts the practice itself publishes (or has confirmed) render; directory
 * claims stay `pending` and appear only in CONTENT-VERIFICATION.md.
 * Personal details (family, hobbies) are left out on purpose.
 */
import { LIVE_SITE, pending, published, type Fact, type Sourced } from './sources.ts';

export interface Doctor extends Sourced {
  slug: string;
  name: string;
  degree: 'MD' | 'OD';
  role: string;
  focus: string[];
  /** Short plain-language line for cards. */
  cardLine: string;
  bio: Fact[];
  education: Fact[];
  credentials: Fact[];
  languages: Fact[];
  /** Headshot from the practice's current site (300x450 or larger). */
  image: { src: string; width: number; height: number };
}

const CDN = 'https://lirp.cdn-website.com/b1397486/dms3rep/multi/opt';
const DIRECTORY = 'directory listings (Doximity, WebMD, US News); not on the practice site';

export const doctors: Doctor[] = [
  {
    slug: 'mark-j-phelan-md',
    name: 'Mark J. Phelan',
    degree: 'MD',
    role: 'Ophthalmologist, Refractive and Cataract Surgeon',
    focus: ['Cataract surgery', 'LASIK and refractive surgery'],
    cardLine: 'Refractive and cataract surgeon with Abilene Eye Institute for more than two decades.',
    status: 'published',
    source: `${LIVE_SITE}/mark-j-phelan-m-d`,
    image: { src: `${CDN}/dr_phelan-1920w.jpg`, width: 300, height: 450 },
    bio: [
      published(
        'Dr. Phelan is a refractive and cataract surgeon who has practiced with Abilene Eye Institute for more than two decades. He grew up in Michigan and moved to Texas in 1994, where he began his career in ophthalmology.',
        '/mark-j-phelan-m-d'
      ),
      published(
        'Alongside his work at Abilene Eye Institute, he serves on staff at Abilene Regional Medical Center, Comanche Community Medical Center, Stephens Memorial, and Rolling Plains Memorial Hospital.',
        '/mark-j-phelan-m-d'
      ),
    ],
    education: [
      published('BS in Biology, University of Michigan', '/mark-j-phelan-m-d'),
      published('Medical degree, University of Michigan', '/mark-j-phelan-m-d'),
      published('Internship, St. Joseph Mercy Hospital, Ann Arbor', '/mark-j-phelan-m-d'),
      published('Residency, University of Michigan W.K. Kellogg Eye Center (Chief Resident, final year)', '/mark-j-phelan-m-d'),
    ],
    credentials: [
      published('Certified, American Board of Eye Surgeons', '/mark-j-phelan-m-d'),
      published(
        'Fellow, American Board of Ophthalmology',
        '/mark-j-phelan-m-d',
        'The ABO certifies diplomates rather than fellows; confirm the exact wording with Dr. Phelan'
      ),
      published('Fellow, American College of Surgeons', '/mark-j-phelan-m-d'),
      published('Member, American Academy of Ophthalmology', '/mark-j-phelan-m-d'),
      published('Member, American Society of Cataract and Refractive Surgery', '/mark-j-phelan-m-d'),
      published('Member, International Society of Refractive Surgery', '/mark-j-phelan-m-d'),
    ],
    languages: [],
  },
  {
    slug: 'rocky-mcadams-md',
    name: 'Rocky McAdams',
    degree: 'MD',
    role: 'Ophthalmologist',
    focus: [
      'Cataract surgery',
      'Refractive surgery',
      'Surgical treatment of glaucoma',
      'Diabetic eye care and macular degeneration',
      'General family ophthalmology',
    ],
    cardLine: 'Medical and surgical ophthalmologist focused on cataract, refractive, and glaucoma care.',
    status: 'published',
    source: `${LIVE_SITE}/rocky-mcadams-md`,
    image: { src: `${CDN}/dr_mcadams-1920w.jpg`, width: 300, height: 450 },
    bio: [
      published(
        'Dr. McAdams is an ophthalmologist whose special interests include cataract surgery, refractive surgery, general family ophthalmology, surgical treatment of glaucoma, and medical treatment of diabetic eye disease and age-related macular degeneration.',
        '/rocky-mcadams-md'
      ),
      published(
        'Raised in Sudan, Texas, he graduated summa cum laude from Hardin-Simmons University in Abilene, where he received the Julius Olsen Medal as the top scholar of his class.',
        '/rocky-mcadams-md'
      ),
      published(
        'He carries on the Abilene Eye Institute tradition of compassionate medical and surgical eye care.',
        '/rocky-mcadams-md'
      ),
    ],
    education: [
      published('Undergraduate studies, Hardin-Simmons University, Abilene', '/rocky-mcadams-md'),
      published('Medical degree, University of Texas Southwestern (2008)', '/rocky-mcadams-md'),
      published('Surgical and trauma internship, Methodist Hospital, Dallas', '/rocky-mcadams-md'),
      published('Residency, University of Texas Southwestern, Dallas', '/rocky-mcadams-md'),
    ],
    credentials: [pending('Board certified, American Board of Ophthalmology', DIRECTORY)],
    languages: [pending('Spanish', DIRECTORY)],
  },
  {
    slug: 'jessica-sumrall-od',
    name: 'Jessica Sumrall',
    degree: 'OD',
    role: 'Optometrist',
    focus: ['Comprehensive eye care for all ages'],
    cardLine: 'Comprehensive optometric care for patients of all ages.',
    status: 'published',
    source: `${LIVE_SITE}/jessica-sumrall-o-d`,
    image: { src: `${CDN}/Pic_Sumrall+%281%29-1920w.jpg`, width: 398, height: 497 },
    bio: [
      published(
        'Dr. Sumrall grew up in Olive Branch, Mississippi, and has practiced in many different settings, caring for patients of all ages. She moved to West Texas in 2017.',
        '/jessica-sumrall-o-d'
      ),
    ],
    education: [
      published('Undergraduate degree in Biological Sciences, Mississippi State University (2010)', '/jessica-sumrall-o-d'),
      published('Doctor of Optometry, Southern College of Optometry, Memphis (2014)', '/jessica-sumrall-o-d'),
    ],
    credentials: [],
    languages: [],
  },
  {
    slug: 'kerry-c-preston-od',
    name: 'Kerry C. Preston',
    degree: 'OD',
    role: 'Optometrist',
    focus: ['Eye care for children and adults'],
    cardLine: 'Caring for Abilene-area children and adults for more than 25 years.',
    status: 'published',
    source: `${LIVE_SITE}/kerry-c-preston-o-d`,
    note: 'On "Meet Our Doctors" but missing from the site-wide doctor menu; confirm he is still seeing patients',
    image: { src: `${CDN}/dr_preston-1920w.jpg`, width: 300, height: 450 },
    bio: [
      published(
        'Dr. Preston came to Abilene with the Air Force, serving three years as Chief of Optometric Services at Dyess Air Force Base, and made Abilene home. He joined Abilene Eye Institute more than 25 years ago and is dedicated to quality care for children and adults.',
        '/kerry-c-preston-o-d'
      ),
    ],
    education: [
      published("Bachelor's degree in chemistry, Southern Illinois University", '/kerry-c-preston-o-d'),
      published('Doctor of Optometry, Indiana University College of Optometry (1987)', '/kerry-c-preston-o-d'),
    ],
    credentials: [
      published('Member, American Optometric Association', '/kerry-c-preston-o-d'),
      published('Member, Texas Optometric Association', '/kerry-c-preston-o-d'),
    ],
    languages: [],
  },
  {
    slug: 'jeannie-clark-od',
    name: 'Jeannie Clark',
    degree: 'OD',
    role: 'Optometrist',
    focus: ['Comprehensive eye exams', 'Ocular disease', 'Low vision care'],
    cardLine: 'Comprehensive optometry informed by residency training in ocular disease and low vision.',
    status: 'published',
    source: `${LIVE_SITE}/jeannie-clark-od`,
    image: { src: `${CDN}/dr_clark-1920w.jpg`, width: 300, height: 450 },
    bio: [
      published(
        'Dr. Clark grew up in Orlando, Florida, and has practiced in many different settings, including pediatrics. She completed a one-year residency in ocular disease and low vision at the Lake City Veterans Hospital.',
        '/jeannie-clark-od'
      ),
    ],
    education: [
      published('Undergraduate studies, University of Florida', '/jeannie-clark-od'),
      published('Doctor of Optometry, Southern College of Optometry, Memphis (2010)', '/jeannie-clark-od'),
      published('Residency in ocular disease and low vision, Lake City Veterans Hospital', '/jeannie-clark-od'),
    ],
    credentials: [],
    languages: [],
  },
  {
    slug: 'logan-skrobarcek-od',
    name: 'Logan Skrobarcek',
    degree: 'OD',
    role: 'Optometrist',
    focus: ['Ocular disease', 'Surgical co-management', 'Retinal, corneal, and neurological conditions'],
    cardLine: 'Ocular disease care and co-management before and after surgery.',
    status: 'published',
    source: `${LIVE_SITE}/logan-skrobarcek-od`,
    image: { src: `${CDN}/1000023230-1920w.jpg`, width: 1920, height: 1758 },
    bio: [
      published(
        'A San Antonio native, Dr. Skrobarcek focuses on ocular disease and provides surgical co-management with the practice\'s ophthalmologists for pre- and post-operative exams. He specializes in the treatment and management of retinal, corneal, and neurological conditions.',
        '/logan-skrobarcek-od'
      ),
      published(
        'Before joining Abilene Eye Institute he was head optometrist and clinical director at one of the largest refractive surgery practices in Dallas. In optometry school he published research in ocular neurophysiology.',
        '/logan-skrobarcek-od'
      ),
    ],
    education: [
      published('Undergraduate degree in biology, minor in neuroscience, Texas A&M University', '/logan-skrobarcek-od'),
      published('Doctor of Optometry, University of the Incarnate Word Rosenberg School of Optometry', '/logan-skrobarcek-od'),
    ],
    credentials: [],
    languages: [],
  },
];

export const surgeons = doctors.filter((d) => d.degree === 'MD');
export const optometrists = doctors.filter((d) => d.degree === 'OD');
