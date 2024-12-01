export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/0.CyNbAkL7.js',
	'_app/immutable/chunks/disclose-version.Bg9kRutz.js',
	'_app/immutable/chunks/runtime.Cl3lITj1.js',
	'_app/immutable/chunks/svelte-head.DR2xgcYk.js',
	'_app/immutable/chunks/template.0enpisfs.js',
	'_app/immutable/chunks/attributes.B5bRR8uy.js',
	'_app/immutable/chunks/index-client.CiwFr_-d.js',
	'_app/immutable/chunks/entry.DdAGmUNQ.js'
];
export const stylesheets = [];
export const fonts = [];
