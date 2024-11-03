<!-- Import element definition and auto-register -->
<script type="module" lang="ts">
  import { onMount } from "svelte";
  import MarkdownIt from "markdown-it";
  import markdownStyle from "markdown-it-style";
  import yaml from "js-yaml";

  const md = MarkdownIt({
    html: true,
    linkify: true,
    breaks: false,
    typographer: true,
  });

  md.use(markdownStyle, {
    p: "font-size:22px;font-family:'SinaNova',sans-serif",
  });

  let posts = [];

  onMount(async () => {
    try {
      const files = import.meta.glob("/static/blog-posts/*.md", { query: "?raw" });

      posts = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const module = await resolver();
          const content = module.default;

          // Extract YAML and Markdown content
          const match = content.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
          
          if (!match) {
            console.error(`YAML front matter not found in file: ${path}`);
            return { title: "Untitled", date: "Unknown Date", content: "No content available", timestamp: new Date(0) };
          }

          const [, yamlContent, markdownContent] = match;
          const metadata = yamlContent ? yaml.load(yamlContent) : {};
          const { title = "Untitled", date = "Unknown Date" } = metadata;

          // Render title with MarkdownIt to parse any Markdown syntax
          const renderedTitle = md.renderInline(title); 

          // Convert date to timestamp for sorting
          const timestamp = new Date(date);

          return { title: renderedTitle, date, content: markdownContent || "", timestamp };
        })
      );

      posts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  });</script>


<body>
<div id="right_container">
  {#if posts.length > 0}
    {#each posts as post}
      <div class="blog_post">
        <h6>{post.date}</h6>
        <h1>{@html post.title}</h1>
        {@html md.render(post.content)}
      </div>
    {/each}
  {:else}
    <p>Loading posts...</p>
  {/if}
</div>
</body>
