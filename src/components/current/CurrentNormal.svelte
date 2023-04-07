<script lang="ts">
	import { completeWeather, units } from '$lib/store';
	import svg from '$lib/svgStore';
	import { formatDate } from '$lib/util';

	let resultOne;
	let resultTwo;

	//extract the route for the img because the api doesn't provide a code for the icons.
	$: if ($completeWeather) {
		const link = $completeWeather.current.condition.icon;
		const parts = link.split('/');
		const lastPart = parts[parts.length - 1].split('.');
		resultOne = parts[parts.length - 2];
		resultTwo = lastPart[0];
	}
	let temperature: string;
	let feelslike: string;
	let windVelocity: string;
	let tempUnit: string;
	let velocityUnit: string;
	let date: number;

	$: if ($units.unit === 'metric') {
		temperature = 'temp_c';
		feelslike = 'feelslike_c';
		windVelocity = 'wind_kph';
		tempUnit = '°C';
		velocityUnit = 'Kph';
		date = 1;
	}

	$: if ($units.unit === 'imperial') {
		temperature = 'temp_f';
		feelslike = 'feelslike_f';
		windVelocity = 'wind_mph';
		tempUnit = '°F';
		velocityUnit = 'Mph';
		date = 0;
	}
</script>

{#if $completeWeather}
	<div class="main grid grid-cols-1 gap-3 sm:mx-auto sm:flex sm:h-80 sm:gap-20">
		<div class="grid grid-cols-1 justify-items-center sm:flex sm:flex-col sm:items-center sm:justify-around">
			<h1 class="text-xl">
				<strong
					>{$completeWeather.location.name}, {$completeWeather.location.region}, {$completeWeather.location
						.country}</strong
				>
			</h1>
			<img
				class="h-36 object-fill sm:h-48"
				src={$svg[resultOne][resultTwo]}
				alt="condition imagen {$completeWeather.current.condition.text}"
			/>
			<p class="text-xl"><strong>{$completeWeather.current.condition.text}</strong></p>
		</div>
		<div class="ml-3 sm:flex sm:flex-col sm:justify-evenly">
			<p class="text-lg"><strong>Temperature: </strong>{$completeWeather.current[temperature]} {tempUnit}</p>
			<p class="text-lg"><strong>Feels Like: </strong>{$completeWeather.current[feelslike]} {tempUnit}</p>
			<p class="text-lg"><strong>Humidity: </strong>{$completeWeather.current.humidity}%</p>
			<p class="text-lg"><strong>Wind Speed: </strong>{$completeWeather.current[windVelocity]} {velocityUnit}</p>
			<p class="text-lg"><strong>Wind direction: </strong>{$completeWeather.current.wind_dir}</p>
			<p class="text-lg"><strong>Pressure: </strong>{$completeWeather.current.pressure_mb} hPa</p>
			<br />
			<p class="text-base"><strong>Last Update: </strong>{formatDate($completeWeather.current.last_updated)[date]}</p>
		</div>
	</div>
{:else}
	<p>Loading Data</p>
{/if}

<style lang="postcss">
	div.main {
		max-width: 900px;
	}
</style>
