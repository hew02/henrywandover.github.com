<script lang="ts">
import { onMount } from 'svelte';
import { page } from '$app/stores';
import { base } from '$app/paths';


let showSite = true;

onMount(() => {

				});


function preload(src) {
		return new Promise(function (resolve) {
						let img = new Image();
						img.onload = resolve;
						img.src = src;
						});
}

if (typeof window !== 'undefined') {
		window.addEventListener('navigate-to', () => {
						showSite = !showSite;
						});
}

</script>

<svelte:head>
<link rel="stylesheet" href="/app.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
rel="stylesheet"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>
</svelte:head>

{#if !$page.url.pathname.startsWith('/blog/')}
<div id="canvas-container">
<script src="/sketch.js" type="module" async>
</script>
<noscript>
</noscript>
</div>
{/if}

{#if showSite == true && $page.url.pathname != "/sand"}
<div id="main-container">
<div id="card">
<nav>
<a
href="/writing" class="item" class:active={$page.url.pathname == "/writing"}>
Writing
</a>
<a  id="nav-home"
href="/" class="item" class:active={$page.url.pathname == "/"}>
Home
</a>
<a
href="/code" class="item" class:active={$page.url.pathname == "/code"}>
Programming
</a>
<a
href="/blog" class="item" class:active={$page.url.pathname == "/blog"}
title="Blog posts">
Blog
</a>
</nav>

<slot />

</div>

<footer>
<ul>
<li>© 2025 Henry Wandover.</li>
</ul>
</footer>

</div>
{/if}



