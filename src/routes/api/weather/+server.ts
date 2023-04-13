import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { VERCEL_API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ url }) => {
	const city = url.searchParams.get('city');

	if (!city) {
		throw error(400, 'Missing city parameter');
	}

	/* const API_KEY = VERCEL_API_KEY; */

	const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${VERCEL_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

	const response = await fetch(API_URL, { mode: 'cors' });

	if (!response.ok) {
		throw error(response.status, response.statusText);
	}

	const data = await response.json();

	return new Response(JSON.stringify(data));
};

/* ```js
// This module defines a GET handler for the /api/weather endpoint
// It uses the weatherapi.com service to fetch weather data for a given city
// It requires an environment variable VERCEL_API_KEY that contains the API key for weatherapi.com

import { error } from '@sveltejs/kit'; // import the error helper from SvelteKit
import type { RequestHandler } from './$types'; // import the RequestHandler type from SvelteKit
import dotenv from 'dotenv'; // import the dotenv module to load environment variables from .env file
dotenv.config(); // load the .env file

export const GET: RequestHandler = async ({ url }) => {
  // define a GET handler that takes a url parameter and returns a Response object
  const city = url.searchParams.get('city'); // get the city parameter from the query string

  if (!city) {
    // check if city is valid
    throw error(400, 'Missing city parameter'); // throw an error with status code 400 and message 'Missing city parameter'
  }

  const API_KEY = process.env.VERCEL_API_KEY; // get the API key from environment variable
  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`; // construct the API URL with the API key and city

  const response = await fetch(API_URL, { mode: 'cors' }); // fetch the data from the API with cors mode

  if (!response.ok) {
    // check if the response is ok
    throw error(response.status, response.statusText); // throw an error with the response status code and status text
  }

  const data = await response.json(); // parse the JSON data

  return new Response(JSON.stringify(data)); // return the data as JSON
};

// This function takes a city name as a parameter and fetches the weather data from the /api/weather endpoint.
// It then updates the completeWeather store with the weather data.
const getData = async (city: string) => {
	const response = await fetch(`/api/weather?city=${city}`);
	const weather = await response.json();
	completeWeather.set(await weather);
};
``` */
