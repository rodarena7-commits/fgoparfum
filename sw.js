const CACHE_NAME = 'fgoparfum-cache-v6'; // Incremented to v6 to clear previous cache versions
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './products.js',
  './app.js',
  './manifest.json',
  './logotipo.jpeg'
];

// Install Service Worker and cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Clearing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch events: Network First, falling back to Cache if offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Let browser extensions or external APIs pass through
  if (!event.request.url.startsWith(self.location.origin) && !event.request.url.startsWith('https://dcdn-us.mitiendanube.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If request is successful, clone and put it in cache
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If offline or fetch fails, fallback to cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Offline fallback for HTML pages
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
