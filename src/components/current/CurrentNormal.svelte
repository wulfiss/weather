<script>
	import { completeWeather } from '../../lib/store';
</script>

{#if $completeWeather}
	<div class="main mx-auto flex h-80 gap-20">
		<div class="flex flex-col items-center justify-around">
			<img
				class="h-60 object-fill"
				src={$completeWeather.current.condition.icon}
				alt="condition imagen {$completeWeather.current.condition.text}"
			/>
			<p class="text-xl"><strong>{$completeWeather.current.condition.text}</strong></p>
		</div>
		<div class="flex flex-col justify-evenly">
			<p class="text-xl"><strong>Temperature: </strong>{$completeWeather.current.temp_c} °C</p>
			<p class="text-xl"><strong>Feels Like: </strong>{$completeWeather.current.feelslike_c} °C</p>
			<p class="text-xl"><strong>Humidity: </strong>{$completeWeather.current.humidity}%</p>
			<p class="text-xl"><strong>Wind Speed: </strong>{$completeWeather.current.wind_kph} Kph</p>
			<p class="text-xl"><strong>Wind direction: </strong>{$completeWeather.current.wind_dir}</p>
			<p class="text-xl"><strong>Pressure: </strong>{$completeWeather.current.pressure_mb} mbar</p>
			<br />
			<p class="text-base">
				{$completeWeather.location.name}, {$completeWeather.location.region}, {$completeWeather
					.location.country}
			</p>
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
