const CACHE_NAME = 'v1_cache_pwa'

var urlsToCache = [
  './',
  './css/styles.css',
  './img/favicon.png',
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
  './img/5.png',
  './img/6.png',
  './img/facebook.png',
  './img/instagram.png',
  './img/twitter.png',
  './img/favicon-1024.png',
  './img/favicon-512.png',
  './img/favicon-384.png',
  './img/favicon-256.png',
  './img/favicon-192.png',
  './img/favicon-128.png',
  './img/favicon-96.png',
  './img/favicon-64.png',
  './img/favicon-32.png',
  './img/favicon-16.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(urlsToCache).then(() => {
      self.skipWaiting();
    });
  }).catch( err => {
    console.log('No se ha podido registrar la cache', err);
  }));
});

self.addEventListener('activate', e => {
  const cacheWhiteList = [CACHE_NAME];
  e.waitUntil(caches.keys().then(cacheName => {
    if (cacheWhiteList.indexOf(cacheName) === -1) {
      return caches.delete(cacheName);
    }
  }).then(() => {
    self.clients.claim();
  }));
})
