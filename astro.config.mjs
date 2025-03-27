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
    // Asegura que los assets se pongan en una carpeta previsible
    assets: '_assets',
    // Usar rutas absolutas para todos los assets
    assetsPrefix: '/'
  },
  // Configuración para rutas absolutas
  base: '/',
  outDir: './dist',
  trailingSlash: 'always'
}); 