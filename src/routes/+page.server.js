import { API_KEY } from '$env/static/private';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return {
		API_KEY: API_KEY
	};
}
