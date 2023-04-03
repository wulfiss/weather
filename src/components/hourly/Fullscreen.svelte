<script lang="ts">
	import { completeWeather } from '../../lib/store';

	/* what do the code below is to set and change the href of the <a> button alike, depending on the length of the 
		object or arr that it is wanted to show in the carousel, this is not the best implementation so maybe in other 
		project where I want to use a carousel I use another things */
	let leftId: string = '#slide';
	let rightId: string = '#slide';

	let objFull = [];
	/*  $: means reactivity a little of black magic of svelte, so when 'completeWeather' gets updated it will execute the if again updating the obj with new info */
	$: if ($completeWeather) {
		objFull = [];
		let tempOne = [];
		let tempTwo = [];
		for (let i = 0; i < 9; i += 4) tempOne.push($completeWeather.forecast.forecastday[0].hour[i]);
		for (let i = 12; i < 23; i += 4) tempTwo.push($completeWeather.forecast.forecastday[0].hour[i]);
		objFull.push(tempOne, tempTwo);
	}

	if ($completeWeather && leftId === '#slide' && rightId === '#slide') {
		leftId += objFull.length - 1;
		rightId += 1;
	}

	function changeCard(activeCardIndex: number, obj, direction: number) {
		let newActiveCardIndexLeft = activeCardIndex - direction;
		let newActiveCardIndexRight = activeCardIndex + direction;

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

<div id="mainDaily" class="hidden sm:block">
	{#if $completeWeather}
		<!------full screen------>
		<div class="carousel w-full">
			{#each objFull as hours, i}
				<div id="slide{i}" class="carousel-item relative w-full">
					<div class="lala sm:mx-auto sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-9">
						<div class="sm:flex sm:flex-col sm:gap-1" id="card">
							<div class="sm:flex sm:flex-col sm:items-center">
								<p><strong>{hours[0].time}</strong></p>
								<img class="sm:mx-auto sm:h-10 sm:w-auto" src={hours[0].condition.icon} alt={hours[0].condition.text} />
								<p><strong>{hours[0].condition.text}</strong></p>
							</div>

							<div class="bg-slate-500 sm:mx-auto sm:h-0.5 sm:w-4/5" />
							<div class="mx-auto grid w-4/5 grid-rows-3 justify-center">
								<p><strong>Temperature: </strong>{hours[0].temp_c}°C</p>
								<p><strong>Humidity: </strong>{hours[0].humidity}%</p>
								<p><strong>Change of Rain: </strong>{hours[0].chance_of_rain}%</p>
							</div>
						</div>

						<div class="sm:flex sm:flex-col sm:gap-1" id="card">
							<div class="sm:flex sm:flex-col sm:items-center">
								<p><strong>{hours[1].time}</strong></p>
								<img class="sm:mx-auto sm:h-10 sm:w-auto" src={hours[1].condition.icon} alt={hours[1].condition.text} />
								<p><strong>{hours[1].condition.text}</strong></p>
							</div>

							<div class="bg-slate-500 sm:mx-auto sm:h-0.5 sm:w-4/5" />
							<div class="mx-auto grid w-4/5 grid-rows-3 justify-center">
								<p><strong>Temperature: </strong>{hours[1].temp_c}°C</p>
								<p><strong>Humidity: </strong>{hours[1].humidity}%</p>
								<p><strong>Change of Rain: </strong>{hours[1].chance_of_rain}%</p>
							</div>
						</div>

						<div class="sm:flex sm:flex-col sm:gap-1" id="card">
							<div class="sm:flex sm:flex-col sm:items-center">
								<p><strong>{hours[2].time}</strong></p>
								<img class="sm:mx-auto sm:h-10 sm:w-auto" src={hours[2].condition.icon} alt={hours[2].condition.text} />
								<p><strong>{hours[2].condition.text}</strong></p>
							</div>

							<div class="bg-slate-500 sm:mx-auto sm:h-0.5 sm:w-4/5" />
							<div class="mx-auto grid w-4/5 grid-rows-3 justify-center">
								<p><strong>Temperature: </strong>{hours[2].temp_c}°C</p>
								<p><strong>Humidity: </strong>{hours[2].humidity}%</p>
								<p><strong>Change of Rain: </strong>{hours[2].chance_of_rain}%</p>
							</div>
						</div>

						<div class="col-start-2 mx-auto flex w-full -translate-y-1/2 transform justify-around">
							<a href={leftId} on:click={changeCard(i, objFull, 1)} class="btn-circle btn">❮</a>
							<a href={rightId} on:click={changeCard(i, objFull, 1)} class="btn-circle btn col-end-11 justify-self-end"
								>❯</a
							>
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
	.lala {
		width: 900px;
	}
	.lalala {
		max-width: 900px;
	}
	p {
		@apply text-sm;
	}
</style>
