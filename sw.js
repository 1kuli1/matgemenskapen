const CACHE = 'matgemenskapen-shell-v1';
const SHELL = ['./', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-512-maskable.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  // Do not cache API/catalog/order responses. An offline app must never imply that a purchase was saved.
  if (url.pathname.includes('/api/') || url.pathname.endsWith('/checkout') || url.pathname.endsWith('/catalog')) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(async () => (await caches.match('./')) || new Response('Du är offline. Anslut till internet för att se aktuellt sortiment och lägga beställningar.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } })));
    return;
  }
  event.respondWith(fetch(request).catch(async () => (await caches.match(request)) || Response.error()));
});
