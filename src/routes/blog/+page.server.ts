import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const posts = import.meta.glob('/static/posts/*.htm', { as: 'raw' });

	const allPosts = await Promise.all(
		Object.entries(posts).map(async ([path, loader]) => {
			const content = await loader();
			const metadataMatch = content.match(/^---\n([\s\S]+?)\n---/);
			const metadata = metadataMatch
				? Object.fromEntries(
						metadataMatch[1].split('\n').map((line) => {
							const [key, ...rest] = line.split(':');
							return [key.trim(), rest.join(':').trim()];
						})
				  )
				: {};

			return {
				slug: path.split('/').pop()?.replace('.htm', ''),
				...metadata,
			};
		})
	);


    const sortedPosts = allPosts.sort((a, b) => {
        const dateA = new Date(a.date || 'unknown date');
        const dateB = new Date(b.date || 'unknown date');
        return dateB.getTime() - dateA.getTime();
    });

	return { posts: sortedPosts };
};
