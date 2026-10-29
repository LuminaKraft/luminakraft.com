import type { APIRoute } from 'astro';
import servers from '../data/servers.json';

// Sitemap estático generado en build (sin dependencias extra).
// Las páginas de autenticación quedan fuera a propósito (noindex).
const staticPaths = ['/', '/services/', '/privacy/', '/terms/'];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://luminakraft.com/').replace(/\/$/, '');
  const paths = [...staticPaths, ...servers.map((s) => `/servers/${s.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
