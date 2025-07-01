<script lang="ts">
	import { sqlDate2Pretty } from '$lib/hew.js';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	import AboutSection from '$lib/modules/about.svelte';
	import ProjectsSection from '$lib/modules/projects.svelte';
  import WritingSection from '$lib/modules/writing.svelte';
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
	<h1 style="padding-bottom:0.4em;">The Home Page of Henry Wandover</h1>
	<div style="overflow-x:auto;">
		<table>
			<tbody>
				<tr>
					<td width="50%" valign="top" style="padding-right: 1em;">
						<AboutSection />
					</td>
					<td width="50%" valign="top" style="float:right">
						<ProjectsSection />
					</td>
				</tr>
				<tr>
					<td width="50%" valign="top" style="padding-right: 1em;">
						<WritingSection />
					</td>
					<td width="50%" valign="top" style="float:right">
						<h2>Blog Posts</h2>
						<ol>
							{#each data.posts as post}
								<li class="post-item">
									<a
										href={`/blog/${post.slug}`}
										target="_self"
										rel="noreferrer noopener"
										class="post-title"
										title={post.title}
										data-sveltekit-preload-data
									>
										{post.title}
									</a>
									<br />
									<small>{sqlDate2Pretty(post.date)}</small>
								</li>
							{/each}
						</ol>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
