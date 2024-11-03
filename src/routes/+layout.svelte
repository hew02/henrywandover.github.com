<script lang="js">
	import banner from '$lib/banner.png'
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
			<a href="{base}/">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src={banner}
				
				alt="banner image of apocalyptic proportions"
				class="logo" />
			</a>
	</div>
		<div id="left_container" class="font-libre">
			<h3 >Writings</h3>
			<ul class="left_list">
					<!--<a href="{base}/leftover-parts"> Spring '23 • Leftover Parts: The Real Issue Underlying the Cobalt Debate in Congo</a>-->
					<a href="{base}/on-creating-a-surveillance-state"> Fall '23 • On Creating a Surveillance State</a>
					<!--<a href="{base}/american-labors-greatest-uprising"> Fall '21 • American Labor's Greatest Uprising</a>-->
			</ul>

			<h3>Code</h3>
			<ul class="left_list">
						<a 
						href="https://yung-turabian.github.io/xtralib/"
						target="_blank"
						rel="noreferrer noopener"
						title="View Doxygen pages for my lib">
						xtralib (C/C++ header only libraries)</a>
			</ul>
			
			<h3>Blog</h3>
			<ul class="left_list">
					<a 
					href="{base}/blog"
					title="Blog posts">
					From 2024</a>
			</ul>

			<h3>About</h3>
			<p>Henry Wandover is a computer science student from Philadelphia.</p>
			<h3>Links</h3>
			<ul class="left_list">
				<li >
					<a href="mailto:henrywandover@gmail.com" rel="noreferrer noopener">email</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/henrywandover/" target="_blank" rel="noreferrer noopener">linkedin</a>
				</li>

				<li>
					<a href="https://github.com/yung-turabian" target="_blank" rel="noreferrer noopener">github</a>
				</li>
				<li>
					<a href="https://www.youtube.com/@tsarsalesman" target="_blank" rel="noreferrer noopener">youtube</a>
				</li>
			</ul>
		</div>
 
		<div id="center_container"></div>
		<div id="right_container"></div>
</div>


<slot />
