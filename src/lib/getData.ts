const getWeather = async (city = 'malabrigo') => {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=0a29cac888c648b39b7161817232903&q=${city}&days=3&aqi=no&alerts=yes`,
			{ mode: 'cors' }
		);
		const data = await response.json();
		console.log('inside', data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

const weather = await getWeather();

export { weather };
