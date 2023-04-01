import { writable } from 'svelte/store';

const currentWeatherStore = writable({
	location: {
		country: '...',
		region: '...',
		name: '...'
	},
	current: {
		condition: {
			icon: '...',
			text: '...'
		},
		temp_c: '...',
		feelslike_c: '...',
		humidity: '...',
		wind_kph: '...',
		wind_dir: '...',
		pressure_mb: '...',
		last_updated: '...'
	},
	forecast: {
		forecastday: {
			0: {
				date: '',
				day: {
					condition: {
						icon: '',
						text: ''
					},
					avghumidity: '',
					daily_chance_of_rain: '',
					maxtemp_c: '',
					mintemp_c: ''
				},
				hour: {}
			},
			1: {
				date: '',
				day: {
					condition: {
						icon: '',
						text: ''
					},
					avghumidity: '',
					daily_chance_of_rain: '',
					maxtemp_c: '',
					mintemp_c: ''
				},
				hour: {}
			},
			2: {
				date: '',
				day: {
					condition: {
						icon: '',
						text: ''
					},
					avghumidity: '',
					daily_chance_of_rain: '',
					maxtemp_c: '',
					mintemp_c: ''
				},
				hour: {}
			}
		}
	}
});

const completeWeather = writable();

export { currentWeatherStore, completeWeather };
