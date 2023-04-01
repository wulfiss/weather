<script>
	import { completeWeather } from '../../lib/store';
</script>

{#if $completeWeather}
	{#each $completeWeather.forecast.forecastday as days, i}
		<div id="main">
			<div id="card{i}">
				<p>{days.date}</p>
				<div>
					<img src={days.day.condition.icon} alt={days.day.condition.text} />
					<p><strong>{days.day.condition.text}</strong></p>
				</div>
				<p><strong>Max Temperature: </strong>{days.day.maxtemp_c}°C</p>
				<p><strong>Min Temperature: </strong>{days.day.mintemp_c}°C</p>
				<p><strong>Humidity: </strong>{days.day.avghumidity}%</p>
				<p><strong>Change of Rain: </strong>{days.day.daily_chance_of_rain}%</p>
			</div>
		</div>
	{/each}
{:else}
	<p>loading hello world</p>
{/if}

<style lang="postcss">
</style>
