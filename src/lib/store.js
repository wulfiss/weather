import { writable } from 'svelte/store';

const completeWeather = writable();
const units = writable({ unit: 'metric' });
const times = writable({ time: '24hours' });
const validity = writable('true');

export { completeWeather, units, times, validity };
