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
    /.*\.css/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'css-cache',
    })
);
workbox.routing.registerRoute(
    /.*\.js/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'js-cache',
    })
);
workbox.routing.registerRoute(
	/.*\.(jpg|png)/,
	workbox.strategies.staleWhileRevalidate({
		cacheName: 'img-cache',
	})
);
