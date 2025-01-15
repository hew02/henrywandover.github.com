<script lang="ts">
 import {sqlDate2Pretty} from '$lib/hew.js';
 import type { PageData } from './$types';
 let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title} | Henry Wandover</title>
	<meta name="title" content="{data.title} | Henry Wandover" />
	<meta
		name="description"
		content={data.abstract}
	/>
	<meta name="keywords" content={data.keywords} />
	<meta name="author" content="Henry Wandover" />
</svelte:head>

<div class="content">
		<h2>{@html data.title}</h2>
		<p><i>{@html sqlDate2Pretty(data.date)}</i></p>
		<div>{@html data.content}</div>
</div>
