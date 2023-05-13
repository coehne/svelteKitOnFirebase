export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.296a6dcb.js","app":"_app/immutable/entry/app.a91229f0.js","imports":["_app/immutable/entry/start.296a6dcb.js","_app/immutable/chunks/index.2909a02b.js","_app/immutable/chunks/singletons.6702585d.js","_app/immutable/entry/app.a91229f0.js","_app/immutable/chunks/index.2909a02b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
