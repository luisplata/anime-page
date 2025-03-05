const CACHE_NAME = "animebell-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

// Instalar el Service Worker y almacenar en caché archivos esenciales
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Interceptar peticiones y servir desde caché si es posible
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Actualizar el caché cuando haya cambios
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
