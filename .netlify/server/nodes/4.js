import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.y_KOQZA0.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.DlFo7mDq.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.Bnv-OFkK.js","_app/immutable/chunks/svelte-head.u4a9YmdR.js","_app/immutable/chunks/template.CsLgkFsT.js","_app/immutable/chunks/attributes.DuWDuqrm.js","_app/immutable/chunks/hew.BdOnUowQ.js"];
export const stylesheets = [];
export const fonts = [];
