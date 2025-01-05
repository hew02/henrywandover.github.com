import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { page } from '$app/stores';

export const load: PageLoad = async ({ params, fetch }) => {

	const response = await fetch(`/posts/${params.slug}.htm`);

	if (response.ok) {
		const rawContent = await response.text();

		const match = rawContent.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);

		if (!match) {
			throw error(500, 'Invalid file format');
		}

		const [, frontmatter, content] = match;

		// Parse frontmatter as YAML
		const metadata = Object.fromEntries(
			frontmatter.split('\n').map((line) => {
				const [key, ...rest] = line.split(':');
				return [key.trim(), rest.join(':').trim()];
			})
		);

		return {
			...metadata,
			content,
		};
	}


	error(404, 'Post not found');
};
