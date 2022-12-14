export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\database.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"database": [[0, 2], [1]]
};