<script>
	import { weather } from '../../lib/getData';
</script>

<div class="flex h-60 justify-around">
	<div>
		<img
			class="object-fill-none h-40"
			src={weather.current.condition.icon}
			alt="condition imagen {weather.current.condition.text}"
		/>
		<p>{weather.current.condition.text}</p>
	</div>
	<div>
		<p>Temperature: {weather.current.temp_c} °C</p>

		<p>Feels Like: {weather.current.feelslike_c} °C</p>
		<p>Humidity: {weather.current.humidity}%</p>

		<p>Wind Speed: {weather.current.wind_kph} Kph</p>

		<p>Wind direction: {weather.current.wind_dir}</p>
		<p>Pressure: {weather.current.pressure_mb} mbar</p>

		<p>{weather.location.name}, {weather.location.region}, {weather.location.country}</p>

		<p>{weather.current.last_updated}</p>
	</div>
</div>

<style lang="postcss">
</style>
