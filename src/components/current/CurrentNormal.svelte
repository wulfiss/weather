<script>
	import { weather } from '../../lib/getData';
</script>

<p>{weather.location.name}, {weather.location.region}, {weather.location.country}</p>

<p>{weather.current.last_updated}</p>

<ul>
	<li>
		{weather.current.condition.text}
		<img
			src={weather.current.condition.icon}
			alt="condition imagen {weather.current.condition.text}"
		/>
	</li>
	<li>
		Temperature: {weather.current.temp_c} °C
	</li>
	<li>
		Feels Like: {weather.current.feelslike_c} °C
	</li>
	<li>
		Humidity: {weather.current.humidity}%
	</li>
	<li>
		<ul>
			<li>
				Wind Speed: {weather.current.wind_kph} Kph
			</li>
			<li>
				Wind direction: {weather.current.wind_dir}
			</li>
		</ul>
	</li>
	<li>
		Pressure: {weather.current.pressure_mb} mbar
	</li>
</ul>

<style lang="postcss">
	li {
		background-color: theme(colors.red.600);
	}
</style>
