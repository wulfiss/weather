<script lang="ts">
	import { completeWeather } from '../../lib/store';
</script>

<div id="mainDaily" class="sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-9">
	{#if $completeWeather}
		<div class="carousel w-full sm:hidden">
			{#each $completeWeather.forecast.forecastday as days, i}
				<div id="slideMobile{i}" name="slideMobile{i}" class="carousel-item relative w-full">
					<div class="w-full">
						<div class="flex w-full flex-col gap-1" id="card">
							<div class="flex flex-col items-center">
								<p><strong>{days.date}</strong></p>
								<img class="sm:mx-auto sm:h-10 sm:w-auto" src={days.day.condition.icon} alt={days.day.condition.text} />
								<p><strong>{days.day.condition.text}</strong></p>
							</div>

							<div class="mx-auto h-0.5 w-3/5 bg-slate-500 sm:w-4/5" />

							<div class="flex w-full flex-col items-center">
								<p><strong>Max Temperature: </strong>{days.day.maxtemp_c}°C</p>
								<p><strong>Min Temperature: </strong>{days.day.mintemp_c}°C</p>
								<p><strong>Humidity: </strong>{days.day.avghumidity}%</p>
								<p><strong>Chance of Rain: </strong>{days.day.daily_chance_of_rain}%</p>
							</div>
						</div>
						<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							{#if i - 1 < 0}
								<a href="#slideMobile{$completeWeather.forecast.forecastday.length - 1}" class="btn-circle btn">❮</a>
							{:else}
								<a href="#slideMobile{i - 1}" class="btn-circle btn">❮</a>
							{/if}

							{#if i + 1 >= $completeWeather.forecast.forecastday.length}
								<a href="#slideMobile{0}" class="btn-circle btn">❯</a>
							{:else}
								<a href="#slideMobile{i + 1}" class="btn-circle btn">❯</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p>loading</p>
	{/if}
</div>

<style lang="postcss">
	p {
		@apply text-sm;
	}
</style>
