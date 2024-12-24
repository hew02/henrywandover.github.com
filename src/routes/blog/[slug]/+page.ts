import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { page } from '$app/stores';

export const load: PageLoad = async ({ params, fetch }) => {

	const response = await fetch(`/posts/${params.slug}.htm`);

	if (response.ok) {
		const content = await response.text();

		if (params.slug === 'getting-links-up-and-running') {

			return {
				title: 'Getting Links Up and Running',
				date: 'December 23, 2024',
				abstract: 'A test article.',
				keywords: 'none',
				content: content
			};
		}
	}


	error(404, 'Post not found');
};