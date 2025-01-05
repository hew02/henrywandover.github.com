import { P as getContext, Q as head, R as store_get, S as stringify, T as slot, V as unsubscribe_stores, O as pop, K as push } from "../../chunks/index.js";
import "../../chunks/client.js";
import { a as attr } from "../../chunks/attributes.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let showSite = true;
  if (typeof window !== "undefined") {
    window.addEventListener("navigate-to", () => {
      showSite = !showSite;
    });
  }
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="stylesheet" href="/app.css"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet"> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"><\/script>`;
  });
  $$payload.out += `<div id="canvas-container"><script src="/sketch.js" type="module" async>
<\/script> <noscript></noscript></div> `;
  if (showSite == true && store_get($$store_subs ??= {}, "$page", page).url.pathname != "/sand") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="main-container"><div id="card"><nav><a href="/writing"${attr("class", `item ${stringify([
      store_get($$store_subs ??= {}, "$page", page).url.pathname == "/writing" ? "active" : ""
    ].filter(Boolean).join(" "))}`)}>WRITING</a> <a id="nav-home" href="/"${attr("class", `item ${stringify([
      store_get($$store_subs ??= {}, "$page", page).url.pathname == "/" ? "active" : ""
    ].filter(Boolean).join(" "))}`)}>HOME</a> <a href="/code"${attr("class", `item ${stringify([
      store_get($$store_subs ??= {}, "$page", page).url.pathname == "/code" ? "active" : ""
    ].filter(Boolean).join(" "))}`)}>CODE</a> <a href="/blog"${attr("class", `item ${stringify([
      store_get($$store_subs ??= {}, "$page", page).url.pathname == "/blog" ? "active" : ""
    ].filter(Boolean).join(" "))}`)} title="Blog posts">BLOG</a></nav> <!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
