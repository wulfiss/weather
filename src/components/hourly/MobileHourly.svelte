<script lang="ts">
	import { completeWeather } from '../../lib/store';
	import svg from '$lib/svgStore';

	let obj = [];
	/*  $: means reactivity a little of black magic of svelte, so when 'completeWeather' gets updated it will execute the if again updating the obj with new info */
	$: if ($completeWeather) {
		obj = [];
		for (let i = 0; i < 23; i += 4) obj.push($completeWeather.forecast.forecastday[0].hour[i]);
	}

	let resultArrMSH = [];

	//extract the route for the img because the api doesn't provide a code for the icons.
	$: if ($completeWeather) {
		resultArrMSH = [];
		for (let i = 0; i < obj.length; i += 1) {
			const link = obj[i].condition.icon;
			const parts = link.split('/');
			const lastPart = parts[parts.length - 1].split('.');
			let tempA = parts[parts.length - 2];
			let tempB = lastPart[0];
			let tempC = [tempA, tempB];
			resultArrMSH.push(tempC);
		}
		console.log(resultArrMSH);
	}
</script>

{#if $completeWeather}
	<div class="carousel w-full sm:hidden">
		{#each obj as hours, i}
			<div id="slideMobile{i}" name="slideMobile{i}" class="carousel-item relative w-full">
				<div class="w-full">
					<div class="flex w-full flex-col gap-1" id="card">
						<div class="flex flex-col items-center">
							<p><strong>{hours.time}</strong></p>
							<img
								class="sm:mx-auto sm:h-10 sm:w-auto"
								src={$svg[resultArrMSH[i][0]][resultArrMSH[i][1]]}
								alt={hours.condition.text}
							/>
							<p><strong>{hours.condition.text}</strong></p>
						</div>

						<div class="mx-auto h-0.5 w-3/5 bg-slate-500 sm:w-4/5" />

						<div class="flex w-full flex-col items-center">
							<p><strong>Temperature: </strong>{hours.temp_c}°C</p>
							<p><strong>Humidity: </strong>{hours.humidity}%</p>
							<p><strong>Chance of Rain: </strong>{hours.chance_of_rain}%</p>
						</div>
					</div>
					<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<!-- href for the left arrow -->
						{#if i - 1 < 0}
							<a href="#slideMobile{obj.length - 1}" class="btn-circle btn">❮</a>
						{:else}
							<a href="#slideMobile{i - 1}" class="btn-circle btn">❮</a>
						{/if}
						<!-- href for the right arrow -->
						{#if i + 1 >= obj.length}
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

<style lang="postcss">
	p {
		@apply text-sm;
	}
</style>
