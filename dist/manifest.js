export const manifest = {
	appDir: "_app",
	assets: new Set(["Fondo.jpg","Fondo.png","Fondo2.png","Fondo3.png","celular.png","correo.png","descri1.png","descri2.png","descri3.png","favicon.png","fondo_LR.jpg","intro1.png","logoD1.png","lupa.png","ovejaEscucha.png","servicio1.png","servicio2.png","servicio3.png","testim1.png","testim2.png","testim3.png","ubicacion.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"start-27b4d618.js","js":["start-27b4d618.js","chunks/index-2253cd81.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "database",
				pattern: /^\/database\/?$/,
				names: [],
				types: [],
				path: "/database",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/years",
				pattern: /^\/api\/years\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/years.ts.js')
			},
			{
				type: 'endpoint',
				id: "api/infoTabla",
				pattern: /^\/api\/infoTabla\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/infoTabla.ts.js')
			},
			{
				type: 'endpoint',
				id: "api/entries",
				pattern: /^\/api\/entries\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/entries.ts.js')
			},
			{
				type: 'endpoint',
				id: "api/countries",
				pattern: /^\/api\/countries\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/countries.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
