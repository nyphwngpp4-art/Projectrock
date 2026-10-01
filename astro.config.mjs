// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { applyRegister } from './src/data/register.ts';

/**
 * Fails the production build when CONTENT-VERIFICATION.md no longer matches
 * src/data, so the published register can't drift from what the site shows.
 * @returns {import('astro').AstroIntegration}
 */
function contentRegister() {
  /** @type {URL} */
  let root;
  return {
    name: 'content-register',
    hooks: {
      'astro:config:done': ({ config }) => {
        root = config.root;
      },
      'astro:build:start': () => {
        const doc = readFileSync(new URL('CONTENT-VERIFICATION.md', root), 'utf8');
        if (applyRegister(doc) !== doc) {
          throw new Error('CONTENT-VERIFICATION.md is out of date with src/data. Run: npm run content:register');
        }
      },
    },
  };
}

// Cloudflare Pages project "abilene-eye-demo"; swap for the production domain at launch.
export default defineConfig({
  site: 'https://abilene-eye-demo.pages.dev',
  output: 'static',
  integrations: [contentRegister(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
