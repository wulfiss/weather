<script lang="ts">
	import { completeWeather } from '../../lib/store';
</script>

<div id="mainDaily" class="sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-9">
	{#if $completeWeather}
		<!------full screen------>
		{#each $completeWeather.forecast.forecastday as days, i}
			<div class="hidden sm:flex sm:flex-col sm:gap-1" id="card{i}">
				<div class="sm:flex sm:flex-col sm:items-center">
					<p><strong>{days.date}</strong></p>
					<img class="sm:mx-auto sm:h-10 sm:w-auto" src={days.day.condition.icon} alt={days.day.condition.text} />
					<p><strong>{days.day.condition.text}</strong></p>
				</div>
				<div class="bg-slate-500 sm:mx-auto sm:h-0.5 sm:w-4/5" />
				<div>
					<p><strong>Max Temperature: </strong>{days.day.maxtemp_c}°C</p>
					<p><strong>Min Temperature: </strong>{days.day.mintemp_c}°C</p>
					<p><strong>Humidity: </strong>{days.day.avghumidity}%</p>
					<p><strong>Change of Rain: </strong>{days.day.daily_chance_of_rain}%</p>
				</div>
			</div>
		{/each}
	{:else}
		<p>loading</p>
	{/if}
</div>

<style lang="postcss">
	p {
		@apply text-sm;
	}
</style>
