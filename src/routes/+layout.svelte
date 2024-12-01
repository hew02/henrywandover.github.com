<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	let sketchScriptLoaded = false;

	onMount(() => {
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
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="app.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>
</svelte:head>

<!--<img src={banner} alt="Banner depicting a statuette 'chilling'." aria-label="Banner image that refreshes the page." class="logo" />-->

<header>
	<div id="canvas-container">
		<script src="/sketch.js"></script>
	</div>
</header>

<div id="flex-container">
	<aside class="font-libre">
		<h3>Writings</h3>
		<ul class="left_list">
			<li><a href="{base}/on-creating-a-surveillance-state">Fall '23 • <em>On Creating a Surveillance State</em></a></li>
      <li><a href="{base}/the-final-fumes-of-the-rutgers-teachers-strike">Spring '23 • <em>The Final Fumes of the Rutgers Teachers Strike</em></a></li>
		</ul>

		<h3>Code</h3>
		<ul class="left_list">
			<li>
				<a
					href="https://yung-turabian.github.io/xtralib/"
					target="_blank"
					rel="noreferrer noopener"
					title="View Doxygen pages for my lib">xtralib (C/C++ header only libraries)</a
				>
			</li>
			<li>
				<a
					href="https://github.com/yung-turabian/hasktan/"
					target="_blank"
					rel="noreferrer noopener"
					title="Git repository">hasktan (mini functional lang)</a
				>
			</li>
		</ul>

		<h3>About</h3>
		<p>Henry Wandover is a computer science student from Philadelphia.</p>

		<h3>Blog</h3>
		<ul class="left_list">
			<li><a href="{base}/blog" title="Blog posts">From 2024</a></li>
		</ul>

		<h3>Links</h3>
		<ul class="left_list">
			<li>
				<a href="/Resume.pdf" hreflang="en" target="_blank" rel="noreferrer noopener" type="application/pdf">Resume</a>
			</li>
		</ul>
	</aside>

	<slot />
</div>

<footer>
	<ul>
		<li><p style="margin-top:1px;margin-right:20px;">© 2024 Henry Wandover.</p></li>

		<li>
			<p>
				<a
					aria-label="Social media link"
					href="mailto:henrywandover@gmail.com"
					rel="noopener noreferrer"
					title="Email"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-envelope-at-fill"
						viewBox="0 0 16 18"
					>
						<path
							d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"
						/>
						<path
							d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"
						/>
					</svg>
				</a>

				<a
					aria-label="Social media link"
					href="https://www.linkedin.com/in/henrywandover/"
					target="_blank"
					rel="noreferrer noopener"
					title="LinkedIn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-linkedin"
						viewBox="0 0 16 18"
					>
						<path
							d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
						/>
					</svg>
				</a>

				<a
					aria-label="Social media link"
					href="https://github.com/yung-turabian"
					target="_blank"
					rel="noreferrer noopener"
					title="GitHub"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-github"
						viewBox="0 0 16 18"
					>
						<path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
						/>
					</svg>
				</a>

				<a
					aria-label="Social media link"
					href="https://www.youtube.com/@yungturabian"
					target="_blank"
					rel="noreferrer noopener"
					title="YouTube"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-youtube"
						viewBox="0 0 16 18"
					>
						<path
							d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
						/>
					</svg>
				</a>
			</p>
		</li>
	</ul>
</footer>
