export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set([
			'Dobra-Black.ttf',
			'Dobra-Black.woff',
			'Dobra-Black.woff2',
			'Sina Nova W01 Regular.ttf',
			'app.css',
			'banner.png',
			'favicon/android-chrome-512x512.png~',
			'favicon/android-icon-144x144.png',
			'favicon/android-icon-192x192.png',
			'favicon/android-icon-36x36.png',
			'favicon/android-icon-48x48.png',
			'favicon/android-icon-72x72.png',
			'favicon/android-icon-96x96.png',
			'favicon/apple-icon-114x114.png',
			'favicon/apple-icon-120x120.png',
			'favicon/apple-icon-144x144.png',
			'favicon/apple-icon-152x152.png',
			'favicon/apple-icon-180x180.png',
			'favicon/apple-icon-57x57.png',
			'favicon/apple-icon-60x60.png',
			'favicon/apple-icon-72x72.png',
			'favicon/apple-icon-76x76.png',
			'favicon/apple-icon-precomposed.png',
			'favicon/apple-icon.png',
			'favicon/browserconfig.xml',
			'favicon/favicon-16x16.png',
			'favicon/favicon-32x32.png',
			'favicon/favicon-96x96.png',
			'favicon/favicon.ico',
			'favicon/manifest.json',
			'favicon/ms-icon-144x144.png',
			'favicon/ms-icon-150x150.png',
			'favicon/ms-icon-310x310.png',
			'favicon/ms-icon-70x70.png',
			'sketch.js',
			'style.css'
		]),
		mimeTypes: {
			'.ttf': 'font/ttf',
			'.woff': 'font/woff',
			'.woff2': 'font/woff2',
			'.css': 'text/css',
			'.png': 'image/png',
			'.xml': 'text/xml',
			'.json': 'application/json',
			'.js': 'text/javascript'
		},
		_: {
			client: {
				start: '_app/immutable/entry/start.DNP07v8b.js',
				app: '_app/immutable/entry/app.DwlDMgrr.js',
				imports: [
					'_app/immutable/entry/start.DNP07v8b.js',
					'_app/immutable/chunks/entry.DdAGmUNQ.js',
					'_app/immutable/chunks/runtime.Cl3lITj1.js',
					'_app/immutable/entry/app.DwlDMgrr.js',
					'_app/immutable/chunks/runtime.Cl3lITj1.js',
					'_app/immutable/chunks/render.CqgfSQ4l.js',
					'_app/immutable/chunks/svelte-head.DR2xgcYk.js',
					'_app/immutable/chunks/template.0enpisfs.js',
					'_app/immutable/chunks/disclose-version.Bg9kRutz.js',
					'_app/immutable/chunks/if.bRO9PcOw.js',
					'_app/immutable/chunks/store.DVeq_r3n.js',
					'_app/immutable/chunks/index-client.CiwFr_-d.js'
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import('../output/server/nodes/0.js')),
				__memo(() => import('../output/server/nodes/1.js')),
				__memo(() => import('../output/server/nodes/2.js')),
				__memo(() => import('../output/server/nodes/3.js')),
				__memo(() => import('../output/server/nodes/4.js')),
				__memo(() => import('../output/server/nodes/5.js')),
				__memo(() => import('../output/server/nodes/6.js'))
			],
			routes: [
				{
					id: '/',
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 2 },
					endpoint: null
				},
				{
					id: '/american-labors-greatest-uprising',
					pattern: /^\/american-labors-greatest-uprising\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 3 },
					endpoint: null
				},
				{
					id: '/blog',
					pattern: /^\/blog\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 4 },
					endpoint: null
				},
				{
					id: '/leftover-parts',
					pattern: /^\/leftover-parts\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 5 },
					endpoint: null
				},
				{
					id: '/on-creating-a-surveillance-state',
					pattern: /^\/on-creating-a-surveillance-state\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 6 },
					endpoint: null
				}
			],
			matchers: async () => {
				return {};
			},
			server_assets: {}
		}
	};
})();
