import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

if (process.env.GITHUB_PAGES) {
	config.kit.paths = {
		base: '/trandy-trash-svelte'
	};
	config.adapter = static_adapter({
		pages: 'docs',
		assets: 'docs',
	});
}

export default config;
