<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>{data.title} ~ hw</title>
	<meta name="title" content={data.title} />
	<meta
		name="description"
		content={data.abstract}
	/>
	<meta name="keywords" content={data.keywords} />
	<meta name="author" content="Henry Wandover" />
</svelte:head>

<h1>{@html data.title}</h1>
<h4>{data.date}</h4>
<div class="entry">{@html data.content}</div>