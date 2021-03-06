var cacheName = 'qaz-pwa';
var filesToCache = [
  '/qaz/',
  '/qaz/index.html',
  '/qaz/css/style.css',
  '/qaz/js/main.js',
  '/qaz/pages/about.html',
  '/qaz/pages/form.html',
  '/qaz/framework7/js/framework7.bundle.js',
  '/qaz/framework7/css/framework7.bundle.css'
];

/* Start the service worker and cache all of the apps content */
self.addEventListener('install', function(e) {
  console.log('Start the service worker and cache all of the apps content')
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  console.log('Serve cached content when offline')
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
