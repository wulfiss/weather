<script>
	import { completeWeather } from '../../lib/store';
</script>

{#if $completeWeather}
	<div class="main sm:mx-auto sm:flex sm:h-80 sm:gap-20">
		<div class="sm:flex sm:flex-col sm:items-center sm:justify-around">
			<h1 class="text-xl">
				<strong
					>{$completeWeather.location.name}, {$completeWeather.location.region}, {$completeWeather
						.location.country}</strong
				>
			</h1>
			<img
				class="sm:h-48 sm:object-contain"
				src={$completeWeather.current.condition.icon}
				alt="condition imagen {$completeWeather.current.condition.text}"
			/>
			<p class="text-xl"><strong>{$completeWeather.current.condition.text}</strong></p>
		</div>
		<div class="sm:flex sm:flex-col sm:justify-evenly">
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
