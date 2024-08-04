<!-- Import element definition and auto-register -->
<script type="module" lang="ts">
		import MarkdownIt from "markdown-it";
		import markdownStyle from "markdown-it-style";
		const md = MarkdownIt({
				html:     true,
				linkify:  true,
				breaks:   false,
				typographer: true,
		});

		md.use(markdownStyle, {
				'h1': 'text-decoration:green dotted underline;font-size:48px;margin-left:35px;padding-bottom:15px',
				'h6': 'padding-left:45px;padding-top:35px;position:relative;bottom:-12px;opacity:0.65;italic;font-style:normal;font-size:14px',
				'p': 'font-size:15px;'
		})


		import example from "$lib/mds/example.md?raw";

</script>



<body>
<div id="right_container">
		<div class="blog_post">
				{@html md.render(example)}
		</div>
</div>
</body>
