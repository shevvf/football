const cacheName = "DefaultCompany-StartHeadSoccer-1.0";
const contentToCache = [
    "Build/Football.loader.js",
    "Build/Football.framework.js.unityweb",
    "Build/Football.data.unityweb",
    "Build/Football.wasm.unityweb",
    "TemplateData/style.css"
];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    e.waitUntil((async function () {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

self.addEventListener('activate', function (e) {
    console.log('[Service Worker] Activate');
    e.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cachedName) {
                    if (cachedName !== cacheName) {
                        console.log('[Service Worker] Deleting old cache:', cachedName);
                        return caches.delete(cachedName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
        try {
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
            cache.put(e.request, response.clone());
            return response;
        } catch (error) {
            console.log(`[Service Worker] Fetch failed; falling back to cache: ${e.request.url}`);
            return caches.match(e.request);
        }
    })());
});

self.addEventListener('controllerchange', function () {
    console.log('[Service Worker] Controller changed, reloading page...');
    window.location.reload();
});
