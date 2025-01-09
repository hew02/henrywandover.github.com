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

<div class="content">
<h2>Blog</h2>

<ol>
		{#each data.posts as post}
			<li class="post-item">
				<a
					href={`/blog/${post.slug}`}
					target="_self"
					rel="noreferrer noopener"
					class="post-title"
					title={post.title}
				>
					{post.title}
				</a>
				<div class="post-date">
				<i>{sqlDate2Pretty(post.date)}</i>
				</div>
			</li>
		{/each}
</ol>
</div>
