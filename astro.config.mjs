import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    assets: '_astro'
  },
  // Configuración importante para las rutas de los activos
  site: 'https://luminakraft.com',  // Cambia esto por tu dominio real
  base: '/',
  trailingSlash: 'always'
}); 