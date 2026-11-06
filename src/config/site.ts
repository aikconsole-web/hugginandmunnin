export const SITE = {
  name: 'Hrafn',
  tagline: 'The Raven Library',
  description: 'The ravens of the world — ten species, the gods who kept them, and the minds behind the black feathers. Every chapter cites its sources.',
  url: 'https://www.hrafn-library.com',
  ogImage: '/og-home.jpg',
  lastmod: '2026-11-06',
};

export function absolute(path: string): string {
  return `${SITE.url}${path}`;
}

export const ORG_ID  = `${SITE.url}/#org`;
export const SITE_ID = `${SITE.url}/#site`;
