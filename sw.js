// Wire service worker: no caching. Passes same-origin page loads straight to the network so the app is installable
// and always shows the latest build. API calls (github.com) are never touched.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin || e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="background:#0e1014;color:#e6e9ee;font:16px system-ui;padding:24px">The Wire needs an internet connection. Reconnect and reload.</body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
