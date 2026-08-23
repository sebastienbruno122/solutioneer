// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update to the final custom domain once one is chosen/purchased.
  // This value drives canonical URLs, the sitemap, and OG/Twitter tags —
  // getting it right matters for SEO correctness.
  site: 'https://solutioneer.onrender.com',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  redirects: {
    '/': '/fr/',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
