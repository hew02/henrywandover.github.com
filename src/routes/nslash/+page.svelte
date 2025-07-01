<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Henry Wandover</title>
	<meta name="title" content="Henry Wandover" />
	<meta name="description" content="A personal site made by Henry Wandover, for Henry Wandover" />
	<meta name="keywords" content="Computer Science, Writing, Blog" />
	<meta name="author" content="Henry Wandover" />
</svelte:head>
<!--<a id="ai-badge" href="https://notbyai.fyi/" target="_blank" rel="noreferrer noopener"></a>-->

<div class="content">
	<h1 style="padding-bottom:0.4em;">&Slash.js</h1>
	<div style="overflow-x:auto;">
		<img src="/nSlash.png" alt="nSlash logo" width="200em" style="display:block;margin-left:auto;margin-right:auto;margin-top:6em;margin-bottom:3em;"  />

		<h3>&Slash is an ASCII rendering engine for the web. Of course some of the most basic functionality is shared by <a href="https://ondras.github.io/rot.js/hp/">ROT.js</a>, however, &Slash aims to provide an easy to use API for the creation of simulated environments—more akin to Dwarf Fortress rather than Rogue.</h3>
	</div>
</div>
