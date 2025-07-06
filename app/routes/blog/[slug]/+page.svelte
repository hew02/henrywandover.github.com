<script lang="ts">
	import { sqlDate2Pretty } from '$lib/hew.js';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	import back_button from "$lib/imgs/back.png";
</script>

<svelte:head>
	<title>{data.title} | Henry Wandover</title>
	<meta name="title" content="{data.title} | Henry Wandover" />
	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.keywords} />
	<meta name="author" content="Henry Wandover" />
</svelte:head>

<div class="content">
	<a href="/" aria-label="back to home"><img src={back_button} alt="back to home" /></a>
	<h2>{@html data.title}</h2>
	<p>
		{@html sqlDate2Pretty(data.date)}
		{#if data.updated}
			<small style="font-size:0.7em;">(Updated {@html sqlDate2Pretty(data.updated)})</small>
		{/if}
	</p>
	<div>{@html data.content}</div>
</div>
