import { Q as head, O as pop, S as stringify, K as push } from "../../../../chunks/index.js";
import { s as sqlDate2Pretty } from "../../../../chunks/hew.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.title)} | Henry Wandover</title>`;
    $$payload2.out += `<meta name="title"${attr("content", `${stringify(data.title)} | Henry Wandover`)}> <meta name="description"${attr("content", data.abstract)}> <meta name="keywords"${attr("content", data.keywords)}> <meta name="author" content="Henry Wandover">`;
  });
  $$payload.out += `<h1>${html(data.title)}</h1> <h4 style="margin-bottom:2%;font-style:italic;">${html(sqlDate2Pretty(data.date))}</h4> <div class="entry">${html(data.content)}</div>`;
  pop();
}
export {
  _page as default
};
