import { VERCEL_API_KEY } from '$env/static/private';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return {
		API_KEY: VERCEL_API_KEY
	};
}
