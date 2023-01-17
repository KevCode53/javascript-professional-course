const VERSION = "v1";
self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  //get
  if (request.method !== "GET") {
    return;
  }
  // Buscar en cache
  event.respondWith(cachedResponse(request));

  // Actualizarcache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    // "/",
    // "/src/index.html",
    // "/src/assets/js/index.js",
    // "/src/assets/js/MediaPlayer.js",
    // "/src/assets/js/useUsers.js",
    // "/src/assets/js/plugins/AutoPause.js",
    // "/src/assets/js/plugins/AutoPlay.js",
    // "/src/assets/video/ControlPedi2.mp4",
    // "/src/assets/css/_reset.css",
    // "/src/assets/css/main.css",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
