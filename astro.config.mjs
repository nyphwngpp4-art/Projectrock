// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// Demo deployment URL placeholder. Swap for the production domain at launch.
export default defineConfig({
  site: 'https://abilene-eye-demo.pages.dev',
  output: 'static',
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
