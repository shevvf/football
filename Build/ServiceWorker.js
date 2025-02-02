// #if USE_DATA_CACHING
// const cacheName = "DefaultCompany-Testing-1.0";
// const contentToCache = [
//     "Build/Build.loader.js",
//     "Build/Build.framework.js.unityweb",
// #if USE_THREADS
//     "Build/",
// #endif
//     "Build/Build.data.unityweb",
//     "Build/Build.wasm.unityweb",
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
