import { completeWeather } from './store';

const getCurrentWeather = async (city = 'reconquista') => {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=0a29cac888c648b39b7161817232903&q=${city}&days=3&aqi=no&alerts=no`,
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
