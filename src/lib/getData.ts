import { json } from '@sveltejs/kit';

async function getWeather(city = 'malabrigo,arg') {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9a76d82b7543318a55de755f2bc6b68d`,
			{ mode: 'cors' }
		);
		const data = await response.json();
		console.log('inside', data);
		return await json(data);
	} catch (error) {
		console.error(error);
	}
}

const weather = getWeather();
/* const getWeather = async (city = 'malabrigo,arg') => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9a76d82b7543318a55de755f2bc6b68d`,
		{ mode: 'cors' }
	);

	const weather = await response.json();
	return weather;
}; */

export { weather };
