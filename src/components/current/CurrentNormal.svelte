<script>
	import { currentWeatherStore } from '../../lib/store';

	let weather;

	currentWeatherStore.subscribe((value) => {
		weather = value;
	});
</script>

<div class="main mx-auto flex h-80 gap-20">
	<div class="flex flex-col items-center justify-around">
		<img
			class="h-60 object-fill"
			src={weather.current.condition.icon}
			alt="condition imagen {weather.current.condition.text}"
		/>
		<p class="text-xl"><strong>{weather.current.condition.text}</strong></p>
	</div>
	<div class="flex flex-col justify-evenly">
		<p class="text-xl"><strong>Temperature: </strong>{weather.current.temp_c} °C</p>
		<p class="text-xl"><strong>Feels Like: </strong>{weather.current.feelslike_c} °C</p>
		<p class="text-xl"><strong>Humidity: </strong>{weather.current.humidity}%</p>
		<p class="text-xl"><strong>Wind Speed: </strong>{weather.current.wind_kph} Kph</p>
		<p class="text-xl"><strong>Wind direction: </strong>{weather.current.wind_dir}</p>
		<p class="text-xl"><strong>Pressure: </strong>{weather.current.pressure_mb} mbar</p>
		<br />
		<p class="text-base">
			{weather.location.name}, {weather.location.region}, {weather.location.country}
		</p>
		<p class="text-base"><strong>Last Update: </strong>{weather.current.last_updated}</p>
	</div>
</div>

<style lang="postcss">
	div.main {
		max-width: 900px;
	}
</style>
