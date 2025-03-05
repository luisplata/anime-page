self.addEventListener("install", (event) => {
    console.log("Service Worker instalado.");
    event.waitUntil(
        caches.open("app-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/favicon.ico",
                "/manifest.json",
                "/logo192.png",
                "/logo512.png",
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
