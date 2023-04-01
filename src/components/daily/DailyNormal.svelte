<script>
	import { completeWeather } from '../../lib/store';
</script>

<div id="mainDaily" class="mx-auto grid grid-cols-3 gap-9">
	{#if $completeWeather}
		{#each $completeWeather.forecast.forecastday as days, i}
			<div class="flex flex-col gap-1" id="card{i}">
				<div class="flex flex-col items-center">
					<p><strong>{days.date}</strong></p>
					<img
						class="mx-auto h-10 w-auto"
						src={days.day.condition.icon}
						alt={days.day.condition.text}
					/>
					<p><strong>{days.day.condition.text}</strong></p>
				</div>
				<div class="mx-auto h-0.5 w-4/5 bg-slate-500" />
				<div>
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
</div>

<style lang="postcss">
	p {
		@apply text-sm;
	}
</style>
