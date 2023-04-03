<script lang="ts">
	import { completeWeather } from '../../lib/store';

	/* what do the code below is to set and change the href of the <a> button alike, depending on the length of the 
		object or arr that it is wanted to show in the carousel, this is not the best implementation so maybe in other 
		project where I want to use a carousel I use another things */
	let leftId: string = '#slide';
	let rightId: string = '#slide';

	let obj = [];

	if ($completeWeather) {
		obj = [];
		console.log('objB', obj);
		for (let i = 0; i < 23; i += 4) obj.push($completeWeather.forecast.forecastday[0].hour[i]);
		console.log('objA', obj);
	}

	if ($completeWeather && leftId === '#slide' && rightId === '#slide') {
		leftId += $completeWeather.forecast.forecastday.length - 1;
		rightId += 1;
	}

	function changeCard(activeCardIndex: number, obj, direction: number) {
		let newActiveCardIndexLeft = activeCardIndex - 1;
		let newActiveCardIndexRight = activeCardIndex + 1;

		if (newActiveCardIndexLeft < 0) {
			newActiveCardIndexLeft = obj.length - 1;
		}
		if (newActiveCardIndexRight >= obj.length) {
			newActiveCardIndexRight = 0;
		}
		leftId = '#slide' + newActiveCardIndexLeft;
		rightId = '#slide' + newActiveCardIndexRight;
	}
</script>

<br />

<div id="mainDaily" class="sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-9">
	{#if $completeWeather}
		<!------full screen------>
		<!-- 		{#each $completeWeather.forecast.forecastday as days, i}
			<div class="hidden sm:flex sm:flex-col sm:gap-1" id="card{i}">
				<div class="sm:flex sm:flex-col sm:items-center">
					<p><strong>{days.date}</strong></p>
					<img
						class="sm:mx-auto sm:h-10 sm:w-auto"
						src={days.day.condition.icon}
						alt={days.day.condition.text}
					/>
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
		{/each} -->
		<!------mobile screen------>
		<div class="carousel w-full">
			{#each obj as hours, i}
				<div id="slide{i}" class="carousel-item relative w-full">
					<div class="w-full">
						<div class="flex w-full flex-col gap-1" id="card">
							<div class="flex flex-col items-center">
								<p><strong>{hours.time}</strong></p>
								<img
									class="sm:mx-auto sm:h-10 sm:w-auto"
									src={hours.condition.icon}
									alt={hours.condition.text}
								/>
								<p><strong>{hours.condition.text}</strong></p>
							</div>

							<div class="mx-auto h-0.5 w-3/5 bg-slate-500 sm:w-4/5" />

							<div class="flex w-full flex-col items-center">
								<p><strong>Temperature: </strong>{hours.temp_c}°C</p>
								<p><strong>Humidity: </strong>{hours.humidity}%</p>
								<p><strong>Change of Rain: </strong>{hours.chance_of_rain}%</p>
							</div>
						</div>
						<div
							class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
						>
							<a href={leftId} on:click={changeCard(i, obj, 1)} class="btn-circle btn">❮</a>
							<a href={rightId} on:click={changeCard(i, obj, 1)} class="btn-circle btn">❯</a>
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
