<script lang="ts">
    import {sqlDate2Pretty} from '$lib/hew.js';

 	  import type { PageData } from './$types';
		let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Blog Posts | Henry Wandover</title>
    <meta name="title" content="Henry Wandover's" />
    <meta
        name="description"
        content="A personal site made by Henry Wandover, for Henry Wandover"
    />
    <meta name="keywords" content="Computer Science, Writing, Blog" />
    <meta name="author" content="Henry Wandover" />
</svelte:head>

<h1>Blog</h1>

<ol>
		{#each data.posts as post}
			<li id="blog-list-entry">
				<a
					href={`/blog/${post.slug}`}
					target="_self"
					rel="noreferrer noopener"
					title={post.title}
				>
					{post.title}
				</a>
				<p style="font-style:italic; opacity:0.8;">{sqlDate2Pretty(post.date)}</p>
			</li>
		{/each}
</ol>
