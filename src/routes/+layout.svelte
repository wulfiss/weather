<script>
	import '../app.css';
	import SearchBar from '../components/SearchBar/SearchBar.svelte';
	import Footer from '../components/Footer/Footer.svelte';

	export let data;

	let key = data.API_KEY;
	import { onMount } from 'svelte';
	let weather;

	onMount(async () => {
		const response = await fetch('/api/weather?city=London');
		weather = await response.json();
	});
</script>

<header class="w-full flex-1 justify-center sm:mx-1 sm:h-20 sm:w-auto">
	<SearchBar {key} />
</header>
<main class="sm:flex sm:h-fit sm:w-full sm:flex-col sm:justify-center sm:gap-10">
	<slot />
</main>
<Footer />

{#if weather}
	<h1>Weather forecast for {weather.location.name}</h1>
	<ul>
		{#each weather.forecast.forecastday as day}
			<li>
				<img src={day.day.condition.icon} alt={day.day.condition.text} />
				<span>{day.date}</span>
				<span>{day.day.maxtemp_c}°C / {day.day.mintemp_c}°C</span>
			</li>
		{/each}
	</ul>
{:else}
	<p>Loading...</p>
{/if}

<style lang="postcss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
