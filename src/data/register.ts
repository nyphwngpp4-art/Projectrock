/**
 * Builds the generated part of CONTENT-VERIFICATION.md from the data files,
 * so the register can never disagree with what the site renders.
 *
 *   npm run content:register          rewrite the register block
 *   npm run content:register -- --check   fail if it is out of date
 *
 * `astro build` runs the same check (see astro.config.mjs).
 */
import { doctors } from './doctors.ts';
import { practiceFacts } from './practice.ts';
import { allServiceGroups } from './services.ts';
import type { Fact, Status } from './sources.ts';

export const REGISTER_START = '<!-- register:start -->';
export const REGISTER_END = '<!-- register:end -->';

const STATUS: Record<Status, string> = {
  confirmed: 'Confirmed by practice',
  published: 'On practice site',
  pending: 'Pending, not shown',
};

const cell = (value = '') => value.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const row = (...cells: string[]) => `| ${cells.map(cell).join(' | ')} |`;
const clip = (text: string, max = 90) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text);

function factRows(kind: string, facts: Fact[], clipText = false) {
  return facts.map((f) => row(kind, clipText ? clip(f.text) : f.text, STATUS[f.status], f.source, f.note ?? ''));
}

export function buildRegister(): string {
  const lines: string[] = [];

  lines.push('### Practice facts', '');
  lines.push(row('Fact', 'Value', 'Status', 'Source', 'To confirm'), '|---|---|---|---|---|');
  for (const f of practiceFacts) lines.push(row(f.label, f.text, STATUS[f.status], f.source, f.note ?? ''));

  lines.push('', '### Doctors', '');
  for (const d of doctors) {
    lines.push(`#### ${d.name}, ${d.degree} (${STATUS[d.status]})`, '');
    if (d.note) lines.push(`To confirm: ${d.note}`, '');
    lines.push(row('Item', 'Fact', 'Status', 'Source', 'To confirm'), '|---|---|---|---|---|');
    lines.push(
      ...factRows('Bio', d.bio, true),
      ...factRows('Education', d.education),
      ...factRows('Credential', d.credentials),
      ...factRows('Language', d.languages)
    );
    lines.push('');
  }

  lines.push('### Services', '');
  lines.push(row('Group', 'Service', 'Status', 'Source'), '|---|---|---|---|');
  for (const group of allServiceGroups) {
    for (const s of group.services) lines.push(row(group.title, s.title, STATUS[s.status], s.source));
  }

  return lines.join('\n');
}

/** Returns the document with its register block replaced by a fresh build. */
export function applyRegister(doc: string): string {
  const start = doc.indexOf(REGISTER_START);
  const end = doc.indexOf(REGISTER_END);
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`CONTENT-VERIFICATION.md must contain ${REGISTER_START} and ${REGISTER_END}`);
  }
  return `${doc.slice(0, start + REGISTER_START.length)}\n${buildRegister()}\n${doc.slice(end)}`;
}
