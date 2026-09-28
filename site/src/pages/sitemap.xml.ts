import type { APIRoute } from 'astro';
import { allRoutes } from '../data/content';

export const GET: APIRoute = () => {
  const entries = allRoutes.map((path) => `<url><loc>${new URL(path, 'https://nutralens.shop').href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
