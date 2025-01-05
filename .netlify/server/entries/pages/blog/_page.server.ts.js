import { e as error } from "../../../chunks/index2.js";
import "../../../chunks/client.js";
const prerender = true;
const load = async ({ params, fetch, locals }) => {
  try {
    const db = locals.db;
    const posts = await new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM blog_posts ORDER BY date DESC",
        (err, posts2) => {
          if (err) {
            console.error("SQL Error:", err.message);
            reject(err);
            return;
          } else {
            resolve(posts2);
          }
        }
      );
    });
    if (!posts) {
      throw error(404, "Blog posts not found");
    }
    return {
      posts
    };
  } catch (err) {
    console.error("Failed to load blog post:", err);
    throw error(500, "Failed to load blog posts");
  }
};
export {
  load,
  prerender
};
