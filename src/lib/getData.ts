import { weatherStore } from './store';

const getWeather = async (city = 'reconquista') => {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=0a29cac888c648b39b7161817232903&q=${city}&days=3&aqi=no&alerts=yes`,
			{ mode: 'cors' }
		);
		const data = await response.json();
		weatherStore.set(await data);
		console.log('inside', data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

/* const weather = await getWeather(); */
/* datas.set(await getWeather()); */
export { /* weather, */ getWeather };
