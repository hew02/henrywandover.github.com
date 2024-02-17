<script lang="js">
	import "../app.css";
	import banner from '$lib/banner.jpg'
	import { base } from '$app/paths'
	import { fly } from 'svelte/transition'

	function preload(src) {
		return new Promise(function(resolve) {
			let img = new Image()
			img.onload = resolve
			img.src = src
		})
	}
	let src = banner
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<div id="main_container">
	<div id="header">
		{#await preload(src) then _}
			<a href="{base}/">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src={banner}
				in:fly
				alt="banner image of apocalyptic proportions"
				class="logo" />
			</a>
		{/await}
	</div>
	{#await preload(src) then _}
		<div id="left_container" class="font-libre">
			<h3 in:fly>Writings</h3>
			<ul class="left_list">
				<li in:fly>
					<a href="{base}/leftover-parts"> Spring '23 • Leftover Parts: The Real Issue Underlying the Cobalt Debate in Congo</a>
				</li>
				<li in:fly>
					<a href="{base}/on-creating-a-surveillance-state"> Fall '23 • On Creating a Surveillance State</a>
				</li>
				<li in:fly>
					<a href="{base}/american-labors-greatest-uprising"> Fall '21 • American Labor's Greatest Uprising</a>
				</li>
			</ul>
			
			<h3 in:fly>Scribbles</h3>
			<ul class="left_list">
				<li in:fly>
					<a href="{base}/scribbles-one">Scribbles #1</a>
				</li>
			</ul>

			<h3 in:fly>About</h3>
			<p in:fly>Henry Wandover is a politics student from Philadelphia.</p>
			<h3 in:fly>Contact</h3>
			<ul class="left_list">
				<li in:fly>
					<a href="mailto:henrywandover@gmail.com" rel="noreferrer noopener">email</a>
				</li>
				<li in:fly>
					<a href="https://www.linkedin.com/in/henrywandover/" target="_blank" rel="noreferrer noopener">linkedin</a>
				</li>
			</ul>

			<h3 in:fly>Links</h3>
			<ul class="left_list">
				<li in:fly>
					<a href="https://github.com/tsarsalesman" target="_blank" rel="noreferrer noopener">github</a>
				</li>
				<li in:fly>
					<a href="https://www.youtube.com/@tsarsalesman" target="_blank" rel="noreferrer noopener">youtube</a>
				</li>
			</ul>
		</div>
 
		<div id="center_container"></div>
		<!-- https://anton.vill.ee/under-construction-2/-->
		<div id="right_container"></div>
	{/await}
</div>


<slot />