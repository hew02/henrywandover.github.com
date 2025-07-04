<script lang="ts">
	import Back from '$lib/modules/back_button.svelte';
	import journey_to_the_ivory_tower from '$lib/docs/Journey_to_the_Ivory_Tower__Making_Links__Polymorphism_Ad_Hoc.pdf';
	import poster from '$lib/docs/JttIT-Poster.jpg';

</script>
<svelte:head>
	<title>Henry Wandover - My Work on Links</title>
	<meta name="title" content="My Work on Links" />
	<meta name="keywords" content="Computer Science, The Links Programming Language" />
	<meta name="author" content="Henry Wandover" />
</svelte:head>

<Back />

<div class="content">
	<h2>Senior Project (SPROJ) at Bard College</h2>

	<p> Check out my paper: 

		<a
		href={journey_to_the_ivory_tower}
		target="_blank"
		rel="noreferrer noopener"
		title="Bard Senior Project"
	>
		Journey to the Ivory Tower: Making Links' Polymorhpism Ad Hoc
	</a>.
	</p>

	<p>For the sake of archiving my work, I have also attached the poster I put together for the final presentation.</p>

</div>

<img 
	src={poster} 
	title="Journey to the Ivory Tower Poster"
	style="width:90%;height:90%;display:block;margin:auto;"
	alt="Poster for my senior project."

/>

