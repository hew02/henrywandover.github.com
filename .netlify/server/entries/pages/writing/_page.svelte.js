import { Q as head } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
const document = "/_app/immutable/assets/How_to_Create_a_Surveillance_State__And_How_Librarians_Attempted_to_Dismantle_It.DmesesiH.pdf";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>My Writing | Henry Wandover</title>`;
    $$payload2.out += `<meta name="title" content="Henry Wandover's Writing"> <meta name="description" content="A personal site made by Henry Wandover, for Henry Wandover"> <meta name="keywords" content="Computer Science, Writing, Blog"> <meta name="author" content="Henry Wandover">`;
  });
  $$payload.out += `<h1>My writing (essays/poetry/articles)</h1> <ol class="none"><li class="entry"><a href="https://henrywandover.substack.com/p/some-poems" target="_blank" rel="noreferrer noopener" title="Substack article" dir="rtl">כמה שירים (Some Poems)</a> <p>Winter '24</p></li> <li class="entry"><a href="https://henrywandover.substack.com/p/the-final-fumes-of-the-rutgers-teachers" target="_blank" rel="noreferrer noopener" title="Substack article">The Final Fumes of the Rutgers Teachers Strike</a> <p>Spring '23</p></li> <li class="entry"><a${attr("href", document)} target="_blank" rel="noreferrer noopener" title="PDF attachment">On Creating a Surveillance State</a> <p>Fall '23</p></li></ol>`;
}
export {
  _page as default
};
