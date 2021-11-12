import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

registerRoute(
	// Check to see if the request is a navigation to a new page
	({ request }) => request.mode === 'navigate',
	// Use a Network First caching strategy
	new NetworkFirst({
		// Put all cached files in a cache named 'pages'
		cacheName: 'pages',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200]
			})
		]
	})
);

registerRoute(
	// Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
	({ request }) =>
		request.destination === 'style' ||
		request.destination === 'script' ||
		request.destination === 'worker',
	// Use a Network First caching strategy
	new NetworkFirst({
		// Put all cached files in a cache named 'assets'
		cacheName: 'assets',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200]
			})
		]
	})
);

registerRoute(
	// Check to see if the request's destination is style for an image
	({ request }) => request.destination === 'image',
	// Use a Network First caching strategy
	new NetworkFirst({
		// Put all cached files in a cache named 'images'
		cacheName: 'images',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200]
			})
		]
	})
);

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});
