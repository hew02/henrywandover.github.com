export const index = 4;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/4.BasCU_H6.js',
	'_app/immutable/chunks/disclose-version.Bg9kRutz.js',
	'_app/immutable/chunks/runtime.Cl3lITj1.js',
	'_app/immutable/chunks/render.CqgfSQ4l.js',
	'_app/immutable/chunks/svelte-head.DR2xgcYk.js',
	'_app/immutable/chunks/template.0enpisfs.js',
	'_app/immutable/chunks/if.bRO9PcOw.js',
	'_app/immutable/chunks/index-client.CiwFr_-d.js'
];
export const stylesheets = [];
export const fonts = [];
