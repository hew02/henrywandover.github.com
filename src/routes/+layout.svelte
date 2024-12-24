<script lang="ts">
 import { onMount } from 'svelte';
 import { page } from '$app/stores';
 import { base } from '$app/paths';
 import { goto } from '$app/navigation';
 import { fly } from 'svelte/transition';

 let sketchScriptLoaded = false;

 /*onMount(() => {
	const script = document.createElement('script');
	script.src = '/sketch.js';
	script.onload = () => {
	sketchScriptLoaded = true;
	// Initialize the p5.js sketch here
	};
	document.head.appendChild(script);
	});


	function preload(src) {
	return new Promise(function (resolve) {
	let img = new Image();
	img.onload = resolve;
	img.src = src;
	});
	}

	// Listen for the custom event from p5.js
	if (typeof window !== 'undefined') {
	window.addEventListener('navigate-to', () => {
	goto('/');
	});
	}*/
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

<!--<img src={banner} alt="Banner depicting a statuette 'chilling'." aria-label="Banner image that refreshes the page." class="logo" />-->

<!--<header>
	<div id="canvas-container">
		<script src="/sketch.js"></script>
		<noscript>
			<a href="/">
			<img src="/banner.png" alt="Banner art of a really chill guy.">
			</a>
		</noscript>
		 </div>
</header>-->


<div id="main-container">
    <div id="card">
		<nav>
			<a
				href="/writing">
				WRITING
			</a>
			<a  id="nav-home"
				href="/">
				HOME
			</a>
			<a
				href="/code">
				CODE
			</a>
			<a
				href="{base}/blog"
				title="Blog posts">
				BLOG
			</a>
		</nav>

		<slot />
    </div>
</div>
