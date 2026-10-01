// Regenerates the register block in CONTENT-VERIFICATION.md from src/data.
// Usage: npm run content:register [-- --check]
// Requires Node 22.18+ (imports the TypeScript data files directly).
import { readFileSync, writeFileSync } from 'node:fs';
import { applyRegister } from '../src/data/register.ts';

const file = new URL('../CONTENT-VERIFICATION.md', import.meta.url);
const current = readFileSync(file, 'utf8');
const next = applyRegister(current);

if (process.argv.includes('--check')) {
  if (next !== current) {
    console.error('CONTENT-VERIFICATION.md is out of date with src/data. Run: npm run content:register');
    process.exit(1);
  }
  console.log('CONTENT-VERIFICATION.md matches src/data.');
} else {
  writeFileSync(file, next);
  console.log(next === current ? 'Register already up to date.' : 'Register updated from src/data.');
}
