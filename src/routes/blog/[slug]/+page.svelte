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

<h1>{@html data.title}</h1>
<h4 style="margin-bottom:2%;font-style:italic;">{@html sqlDate2Pretty(data.date)}</h4>
<div class="entry">{@html data.content}</div>
