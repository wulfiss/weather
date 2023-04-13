import { writable } from 'svelte/store';

const completeWeather = writable();
const units = writable({ unit: 'metric' });
const times = writable({ time: '24hours' });

export { completeWeather, units, times };
