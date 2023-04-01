import { writable } from 'svelte/store';

export const weatherStore = writable({
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
	location: {
		country: '...',
		region: '...',
		name: '...'
	}
});
