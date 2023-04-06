<script>
	import { completeWeather } from '../../lib/store';
	let result;

	//extract the route for the img because the api doesn't provide a code for the icons.
	$: if ($completeWeather) {
		const link = $completeWeather.current.condition.icon;
		const parts = link.split('/');
		const lastPart = parts[parts.length - 1].split('.');
		result = parts[parts.length - 2] + '/' + lastPart[0];
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
				src="%sveltekit.assets%/img/{result}.svg"
				alt="condition imagen {$completeWeather.current.condition.text}"
			/>
			<p class="text-xl"><strong>{$completeWeather.current.condition.text}</strong></p>
		</div>
		<div class="ml-3 sm:flex sm:flex-col sm:justify-evenly">
			<p class="text-lg"><strong>Temperature: </strong>{$completeWeather.current.temp_c} °C</p>
			<p class="text-lg"><strong>Feels Like: </strong>{$completeWeather.current.feelslike_c} °C</p>
			<p class="text-lg"><strong>Humidity: </strong>{$completeWeather.current.humidity}%</p>
			<p class="text-lg"><strong>Wind Speed: </strong>{$completeWeather.current.wind_kph} Kph</p>
			<p class="text-lg"><strong>Wind direction: </strong>{$completeWeather.current.wind_dir}</p>
			<p class="text-lg"><strong>Pressure: </strong>{$completeWeather.current.pressure_mb} mbar</p>
			<br />
			<p class="text-base"><strong>Last Update: </strong>{$completeWeather.current.last_updated}</p>
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
