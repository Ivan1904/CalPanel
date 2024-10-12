const CACHE_NAME = "calPanel";
const urlsToCache = [
  "/",
  "/index.html",
  "/estilos.css",  // Cambia esto por el nombre real de tu archivo CSS
  "/app.js",   // Cambia esto por el nombre real de tu archivo JS
  "/manifest.json",
  "/logo192.png",  // Ruta de tu icono de 192x192
  "/logo512.png"   // Ruta de tu icono de 512x512
];
 
// Instalación del Service Worker y almacenamiento en caché
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Archivos cacheados correctamente");
      return cache.addAll(urlsToCache);
    })
  );
});
 
// Manejo de las solicitudes de red, respondiendo desde caché cuando sea posible
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
 
// Actualización del Service Worker y eliminación de cachés antiguos
self.addEventListener("activate", function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});