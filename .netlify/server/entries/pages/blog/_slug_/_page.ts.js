import { e as error } from "../../../../chunks/index2.js";
import "../../../../chunks/client.js";
const load = async ({ params, fetch }) => {
  const response = await fetch(`/posts/${params.slug}.htm`);
  if (response.ok) {
    const rawContent = await response.text();
    const match = rawContent.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
    if (!match) {
      throw error(500, "Invalid file format");
    }
    const [, frontmatter, content] = match;
    const metadata = Object.fromEntries(
      frontmatter.split("\n").map((line) => {
        const [key, ...rest] = line.split(":");
        return [key.trim(), rest.join(":").trim()];
      })
    );
    return {
      ...metadata,
      content
    };
  }
  error(404, "Post not found");
};
export {
  load
};
