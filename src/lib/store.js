import { writable } from 'svelte/store';

const completeWeather = writable();
const units = writable({ unit: 'metric' });

export { completeWeather, units };
