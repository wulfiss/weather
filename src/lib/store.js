import { writable } from 'svelte/store';

const completeWeather = writable();
const units = writable();

export { completeWeather, units };
