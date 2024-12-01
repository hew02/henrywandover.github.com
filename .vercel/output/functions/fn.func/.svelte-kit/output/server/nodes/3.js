export const index = 3;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import('../entries/pages/american-labors-greatest-uprising/_page.svelte.js')
	).default);
export const imports = [
	'_app/immutable/nodes/3.COOetjGF.js',
	'_app/immutable/chunks/disclose-version.Bg9kRutz.js',
	'_app/immutable/chunks/legacy.DGZOYQDp.js',
	'_app/immutable/chunks/runtime.Cl3lITj1.js',
	'_app/immutable/chunks/template.0enpisfs.js'
];
export const stylesheets = [];
export const fonts = [];
