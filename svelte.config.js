import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter({
			fallback: '200.html' // may differ from host to host
		})
	}
};
