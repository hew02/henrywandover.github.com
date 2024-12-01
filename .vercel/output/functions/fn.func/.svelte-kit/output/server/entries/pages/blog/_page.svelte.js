import { Z as ensure_array_like, S as pop, Q as push } from '../../../chunks/index.js';
import MarkdownIt from 'markdown-it';
import markdownStyle from 'markdown-it-style';
import 'js-yaml';
import { e as escape_html } from '../../../chunks/escaping.js';
function html(value) {
	var html2 = String(value ?? '');
	var open = '<!---->';
	return open + html2 + '<!---->';
}
function _page($$payload, $$props) {
	push();
	const md = MarkdownIt({
		html: true,
		linkify: true,
		breaks: false,
		typographer: true
	});
	md.use(markdownStyle, {
		p: "font-size:22px;font-family:'SinaNova',sans-serif"
	});
	let posts = [];
	$$payload.out += `<body><div id="right_container">`;
	if (posts.length > 0) {
		$$payload.out += '<!--[-->';
		const each_array = ensure_array_like(posts);
		$$payload.out += `<!--[-->`;
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let post = each_array[$$index];
			$$payload.out += `<div class="blog_post"><h6>${escape_html(post.date)}</h6> <h1>${html(post.title)}</h1> ${html(md.render(post.content))}</div>`;
		}
		$$payload.out += `<!--]-->`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<p>Loading posts...</p>`;
	}
	$$payload.out += `<!--]--></div></body>`;
	pop();
}
export { _page as default };
