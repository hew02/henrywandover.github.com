export const index = 6;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import('../entries/pages/on-creating-a-surveillance-state/_page.svelte.js')
	).default);
export const imports = [
	'_app/immutable/nodes/6.CNr1xjKV.js',
	'_app/immutable/chunks/disclose-version.Bg9kRutz.js',
	'_app/immutable/chunks/legacy.DGZOYQDp.js',
	'_app/immutable/chunks/runtime.Cl3lITj1.js',
	'_app/immutable/chunks/template.0enpisfs.js',
	'_app/immutable/chunks/attributes.B5bRR8uy.js'
];
export const stylesheets = [];
export const fonts = [];
