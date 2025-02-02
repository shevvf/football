// #if USE_DATA_CACHING
// const cacheName = "DefaultCompany-StartHeadSoccer-1.0";
// const contentToCache = [
//     "Build/Football.loader.js",
//     "Build/Football.framework.js.unityweb",
// #if USE_THREADS
//     "Build/",
// #endif
//     "Build/Football.data.unityweb",
//     "Build/Football.wasm.unityweb",
//     "TemplateData/style.css"

// ];
// #endif

// self.addEventListener('install', function (e) {
//     console.log('[Service Worker] Install');
    
// #if USE_DATA_CACHING
//     e.waitUntil((async function () {
//       const cache = await caches.open(cacheName);
//       console.log('[Service Worker] Caching all: app shell and content');
//       await cache.addAll(contentToCache);
//     })());
// #endif
// });

// #if USE_DATA_CACHING
// self.addEventListener('fetch', function (e) {
//     e.respondWith((async function () {
//       let response = await caches.match(e.request);
//       console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
//       if (response) { return response; }

//       response = await fetch(e.request);
//       const cache = await caches.open(cacheName);
//       console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
//       cache.put(e.request, response.clone());
//       return response;
//     })());
// });
// #endif
