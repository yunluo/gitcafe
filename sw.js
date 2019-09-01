'use strict';
importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
});
if (workbox) {
    console.log(`Yay! Workbox is loaded`);
} else {
    console.log(`Boo! Workbox didn't load`);
}

workbox.routing.registerRoute(
    new RegExp('https://gitcafe\.huashengls\.com/'),
    workbox.strategies.cacheFirst({
      cacheName: 'Gitcafe-Static',
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ],
    })
);