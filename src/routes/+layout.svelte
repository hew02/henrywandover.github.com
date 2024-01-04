<script lang="js">
	import "../app.css";
	import banner from '$lib/banner.jpg'
	import { base } from '$app/paths';
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
		<h3>Writings</h3>
		<ul class="left_list">
			<li>
				<a href="{base}/paper1">How Liberal Capitalism Creates Industrial Servitude and Socialism Affords Freedom</a>
			</li>
			<li>
				<a href="{base}/paper2">On Creating a Surveillance State</a>
			</li>
		</ul>
		<h3>Code</h3>
		<ul class="left_list">

		</ul>
		<h3>About</h3>
		<p>Henry Wandover is a politics student from Philadelphia.</p>
		<h3>Contact</h3>
		<ul class="left_list">
			<li>
				<a href="mailto:henrywandover@gmail.com">email</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/henrywandover/">linkedin</a>
			</li>
			<li>
				<a href="https://github.com/tsarsalesman">github</a>
			</li>
		</ul>
	</div>

	<div id="center_container"></div>
	<!-- https://anton.vill.ee/under-construction-2/-->
	<div id="right_container">
		
	</div>
</div>


<slot />