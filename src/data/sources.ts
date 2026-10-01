/**
 * Provenance for every fact the site publishes.
 *
 *  - confirmed: confirmed directly with the practice
 *  - published: stated on the practice's own current website
 *    (abileneeyeinstitute.com); fine for the demo, confirm before launch
 *  - pending:   from directories or not yet sourced; never rendered
 *
 * CONTENT-VERIFICATION.md is generated from the data files that use these
 * types (`npm run content:register`), and `astro build` fails if it drifts.
 */
export type Status = 'confirmed' | 'published' | 'pending';

export interface Sourced {
  status: Status;
  /** Where the fact comes from, e.g. a page on the practice's current site. */
  source: string;
  /** Anything to resolve on the confirmation call. Shown only in the register. */
  note?: string;
}

export interface Fact extends Sourced {
  text: string;
}

export const LIVE_SITE = 'abileneeyeinstitute.com';

/** A fact stated on the practice's current website. */
export const published = (text: string, page: string, note?: string): Fact => ({
  text,
  status: 'published',
  source: `${LIVE_SITE}${page}`,
  note,
});

/** A fact not yet sourced from the practice. Kept for the register, never rendered. */
export const pending = (text: string, source: string, note?: string): Fact => ({
  text,
  status: 'pending',
  source,
  note,
});

/** Only the facts that may appear on a page. */
export const shown = <T extends Sourced>(items: readonly T[]): T[] =>
  items.filter((item) => item.status !== 'pending');
