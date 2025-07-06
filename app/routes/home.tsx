import type { Route } from "./+types/home";
import { About } from "../home_page_modules/about";
import { Projects } from "../home_page_modules/projects";
import { Writing } from "../home_page_modules/writing";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Henry Wandover" },
    { name: "description", content: "A personal site made by Henry Wandover, for Henry Wandover" },
    { name: "keywords", content: "Computer Science, Writing, Blog" },
    { name: "author", content: "Henry Wandover" },
  ];
}

export default function Home() {
  return (
    <div className="content">
      <h1>The Home Page of Henry Wandover</h1>
      <div style={{ overflowX: "auto"}}>
        <table width="100%">
          <tbody>
            <tr>
            <td width="50%" valign="top">
              <About />
            </td>
            <td width="10%" valign="top">
            </td>
            <td width="40%" valign="top">
              <Projects />
              <br />
              <Writing />
              {/*<h2>Blog Posts</h2>
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
                    <small>{post.date}</small>
                  </li>
                {/each}
              </ol>*/}
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
