import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import dotenv from 'dotenv';
dotenv.config();

export const GET: RequestHandler = async ({ url }) => {
	const city = url.searchParams.get('city');

	if (!city) {
		throw error(400, 'Missing city parameter');
	}

	const API_KEY = process.env.VERCEL_API_KEY;
	const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

	const response = await fetch(API_URL, { mode: 'cors' });

	if (!response.ok) {
		throw error(response.status, response.statusText);
	}

	const data = await response.json();

	return new Response(JSON.stringify(data));
};

/* export async function GET({ query }: { query: URLSearchParams }) {
	console.log(query);
	const city = query.get('city');
	console.log(city);

	if (!city) {
		throw error(400, 'Missing city parameter');
	}

	const API_KEY = '0a29cac888c648b39b7161817232903';
	const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

	const response = await fetch(API_URL, { mode: 'cors' });

	if (!response.ok) {
		throw error(response.status, response.statusText);
	}

	const data = await response.json();

	return new Response(JSON.stringify(data));
} */
