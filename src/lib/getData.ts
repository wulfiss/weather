import { completeWeather } from '$lib/store';

const getCurrentWeather = async (city = 'reconquista', key: string) => {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&aqi=no&alerts=no`,
			{ mode: 'cors' }
		);
		const data = await response.json();
		completeWeather.set(await data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export { getCurrentWeather };
