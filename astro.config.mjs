import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://luminakraft.com',
  integrations: [tailwind()],
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  redirects: {
    '/discord': 'https://discord.gg/UJZRrcUFMj'
  },
  devToolbar: { enabled: false }
});