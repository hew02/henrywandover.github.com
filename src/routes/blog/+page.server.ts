import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { page } from '$app/stores';

import type { BlogPost } from '$lib/types.ts';

export const prerender = true;


export const load: PageServerLoad = async ({ params, fetch, locals }) => {
		try {

				const db = locals.db;

				const posts: BlogPost[] | undefined = await new Promise((resolve, reject) => {
				db.all<BlogPost>(
						"SELECT * FROM blog_posts ORDER BY date DESC",
								(err: Error|null, posts: BlogPost[]) => {
									if(err) {
										console.error('SQL Error:', err.message);
										reject(err);
										return;
									} else {
										resolve(posts)
									}
								}
						);
				});


				if (!posts) {
					throw error(404, 'Blog posts not found');
				}

				return {
					posts
				};

		} 
		catch (err) {
				console.error('Failed to load blog post:', err);
				throw error(500, 'Failed to load blog posts');
		}
}
