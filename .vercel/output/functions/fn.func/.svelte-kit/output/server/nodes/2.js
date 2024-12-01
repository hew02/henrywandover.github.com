export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/2.D9JzGq5O.js',
	'_app/immutable/chunks/disclose-version.Bg9kRutz.js',
	'_app/immutable/chunks/legacy.DGZOYQDp.js',
	'_app/immutable/chunks/runtime.Cl3lITj1.js',
	'_app/immutable/chunks/svelte-head.DR2xgcYk.js'
];
export const stylesheets = [];
export const fonts = [];
