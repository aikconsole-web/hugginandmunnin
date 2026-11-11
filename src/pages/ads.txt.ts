import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response('google.com, pub-9994903154267583, DIRECT, f08c47fec0942fa0', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
