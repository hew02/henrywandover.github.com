<script lang="ts">
		import { onMount } from 'svelte';
		import { page } from '$app/stores';
		import { base } from '$app/paths';
		onMount(() => {});
</script>

<svelte:head>
  <link rel="stylesheet" href="/app.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet"
    />
  <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>-->
  <script src="/js/nSlash/dist/nSlash.js" ></script>
  <script src="/js/sketch.js" type="module"></script>
</svelte:head>

{#if !$page.url.pathname.startsWith('/blog/') ||!$page.url.pathname.startsWith('/writing/') }
<div id="canvas-container">
  <noscript><p>Enable JavaScript for the background.</p></noscript>
</div>
{/if}

<div id="main-container">
		{#if $page.url.pathname.includes( '/sim' )}
				<slot />
		{:else}
				<div id="card">
						<!--
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
								href="/programming" class="item" class:active={$page.url.pathname == "/programming"}>
								Programming
							</a>
							<a
								href="/blog" class="item" class:active={$page.url.pathname == "/blog"}
								title="Blog posts">
								Blog
							</a>
						</nav>
						-->
						<slot />
				</div>
		{/if}

  <footer>
    <ul>
      <li>© 2025 Henry Wandover.</li>
    </ul>
  </footer>

</div>
