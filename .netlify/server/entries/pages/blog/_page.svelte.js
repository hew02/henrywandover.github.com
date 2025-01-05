import { W as ensure_array_like, Q as head, O as pop, K as push } from "../../../chunks/index.js";
import { s as sqlDate2Pretty } from "../../../chunks/hew.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.posts);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Blog Posts | Henry Wandover</title>`;
    $$payload2.out += `<meta name="title" content="Henry Wandover's"> <meta name="description" content="A personal site made by Henry Wandover, for Henry Wandover"> <meta name="keywords" content="Computer Science, Writing, Blog"> <meta name="author" content="Henry Wandover">`;
  });
  $$payload.out += `<h1>Blog</h1> <ol><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$payload.out += `<li class="blog-entry"><a${attr("href", `/blog/${post.slug}`)} target="_self" rel="noreferrer noopener"${attr("title", post.title)}>${escape_html(post.title)}</a> <p style="font-style:italic; opacity:0.8;">${escape_html(sqlDate2Pretty(post.date))}</p></li>`;
  }
  $$payload.out += `<!--]--></ol>`;
  pop();
}
export {
  _page as default
};
