export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["DEPRECATED/app.css","Dobra-Black.ttf","Dobra-Black.woff","Dobra-Black.woff2","Resume.pdf","Written-By-Human-Not-By-AI-Badge-black.svg","Written-By-Human-Not-By-AI-Badge-white.svg","app.css","assets/vendor/prism.js","banner.png","favicon/android-chrome-512x512.png~","favicon/android-icon-144x144.png","favicon/android-icon-192x192.png","favicon/android-icon-36x36.png","favicon/android-icon-48x48.png","favicon/android-icon-72x72.png","favicon/android-icon-96x96.png","favicon/apple-icon-114x114.png","favicon/apple-icon-120x120.png","favicon/apple-icon-144x144.png","favicon/apple-icon-152x152.png","favicon/apple-icon-180x180.png","favicon/apple-icon-57x57.png","favicon/apple-icon-60x60.png","favicon/apple-icon-72x72.png","favicon/apple-icon-76x76.png","favicon/apple-icon-precomposed.png","favicon/apple-icon.png","favicon/browserconfig.xml","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon-96x96.png","favicon/favicon.ico","favicon/manifest.json","favicon/ms-icon-144x144.png","favicon/ms-icon-150x150.png","favicon/ms-icon-310x310.png","favicon/ms-icon-70x70.png","humans.txt","modules/hew.js","modules/p5ASCII.js","modules/physics.js","modules/pixel.js","modules/train.js","posts/books-read-in-2024.htm","posts/getting-links-up-and-running.htm","posts/gimp-scripts.htm","robots.txt","shaders/shader.frag","shaders/shader.vert","sina_nova.ttf","sketch.js","statue_sketch.js","style.css","themes/prism.css","vga8.woff"]),
	mimeTypes: {".css":"text/css",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".pdf":"application/pdf",".svg":"image/svg+xml",".js":"text/javascript",".png":"image/png",".xml":"text/xml",".json":"application/json",".txt":"text/plain",".htm":"text/html"},
	_: {
		client: {"start":"_app/immutable/entry/start.DpVvmuEs.js","app":"_app/immutable/entry/app.DHc-pxMs.js","imports":["_app/immutable/entry/start.DpVvmuEs.js","_app/immutable/chunks/entry.BIh-KAS6.js","_app/immutable/chunks/runtime.DlFo7mDq.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/index-client.F3P70AC7.js","_app/immutable/entry/app.DHc-pxMs.js","_app/immutable/chunks/runtime.DlFo7mDq.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.Bnv-OFkK.js","_app/immutable/chunks/svelte-head.u4a9YmdR.js","_app/immutable/chunks/template.CsLgkFsT.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/store.DUOL4G7C.js","_app/immutable/chunks/index-client.F3P70AC7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/american-labors-greatest-uprising",
				pattern: /^\/american-labors-greatest-uprising\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/code",
				pattern: /^\/code\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/leftover-parts",
				pattern: /^\/leftover-parts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/sand",
				pattern: /^\/sand\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
