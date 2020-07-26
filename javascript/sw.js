let CACHE_NAME = "my-cache";
var urlsToCache = ["/", "/sw.js"];

console.log("start registration");
self.addEventListener("install", function (event) {
  console.log("event = ", event);
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((ex) => {
        console.log("ex = ", ex);
      })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
