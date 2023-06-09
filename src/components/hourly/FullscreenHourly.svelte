<script lang="ts">
	import { completeWeather, units, times } from '../../lib/store';
	import svg from '$lib/svgStore';
	import { formatDate, dateParts } from '$lib/util';

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

	let resultArrFSH = [];

	//extract the route for the img because the api doesn't provide a code for the icons. '//cdn.weatherapi.com/weather/64x64/night/143.png' ==> night/143, so i can use it as a route for other icons
	$: if ($completeWeather) {
		resultArrFSH = [[], []];
		for (let i = 0; i < objFull.length; i += 1) {
			for (let j = 0; j < objFull[i].length; j += 1) {
				const link = objFull[i][j].condition.icon;
				const parts = link.split('/');
				const lastPart = parts[parts.length - 1].split('.');
				let tempA = parts[parts.length - 2];
				let tempB = lastPart[0];
				let tempC = [tempA, tempB];
				resultArrFSH[i].push(tempC);
			}
		}
	}

	let temperature: string;
	let tempUnit: string;
	let dateHF: number;

	$: if ($times.time === '24hours') {
		dateHF = 1;
	}

	$: if ($times.time === '12hours') {
		dateHF = 0;
	}

	$: if ($units.unit === 'metric') {
		temperature = 'temp_c';
		tempUnit = '°C';
	}

	$: if ($units.unit === 'imperial') {
		temperature = 'temp_f';
		tempUnit = '°F';
	}
</script>

<div id="mainDaily" class="hidden sm:block">
	{#if $completeWeather}
		<!------full screen------>
		<div class="carousel w-full">
			{#each objFull as hours, i}
				<div id="slideFull{i}" name="slideFull{i}" class="carousel-item relative w-full">
					<div class="sm:mx-auto sm:grid sm:w-11/12 sm:grid-cols-3 sm:grid-rows-1 sm:gap-9">
						<div class="sm:flex sm:flex-col sm:gap-1" id="card">
							<div class="gap-3 sm:flex sm:flex-col sm:items-center">
								<p><strong>{dateParts(formatDate(hours[0].time)[dateHF], 'time')}</strong></p>
								<img
									class="sm:mx-auto sm:h-10 sm:w-auto"
									src={$svg[resultArrFSH[i][0][0]][resultArrFSH[i][0][1]]}
									alt={hours[0].condition.text}
								/>
								<p><strong>{hours[0].condition.text}</strong></p>
							</div>

							<div class="bg-slate-500 sm:mx-auto sm:h-0.5 sm:w-4/5" />
							<div class="mx-auto grid w-4/5 grid-rows-3 justify-center">
								<p><strong>Temperature: </strong>{hours[0][temperature]} {tempUnit}</p>
								<p><strong>Humidity: </strong>{hours[0].humidity}%</p>
								<p><strong>Chance of Rain: </strong>{hours[0].chance_of_rain}%</p>
							</div>
						</div>

						<div class="sm:flex sm:flex-col sm:gap-1" id="card">
							<div class="gap-3 sm:flex sm:flex-col sm:items-center">
								<p><strong>{dateParts(formatDate(hours[1].time)[dateHF], 'time')}</strong></p>
								<img
									class="sm:mx-auto sm:h-10 sm:w-auto"
									src={$svg[resultArrFSH[i][1][0]][resultArrFSH[i][1][1]]}
									alt={hours[1].condition.text}
								/>
								<p><strong>{hours[1].condition.text}</strong></p>
							</div>

							<div class="bg-slate-500 sm:mx-auto sm:h-0.5 sm:w-4/5" />
							<div class="mx-auto grid w-4/5 grid-rows-3 justify-center">
								<p><strong>Temperature: </strong>{hours[1][temperature]} {tempUnit}</p>
								<p><strong>Humidity: </strong>{hours[1].humidity}%</p>
								<p><strong>Chance of Rain: </strong>{hours[1].chance_of_rain}%</p>
							</div>
						</div>

						<div class="sm:flex sm:flex-col sm:gap-1" id="card">
							<div class="gap-3 sm:flex sm:flex-col sm:items-center">
								<p><strong>{dateParts(formatDate(hours[2].time)[dateHF], 'time')}</strong></p>
								<img
									class="sm:mx-auto sm:h-10 sm:w-auto"
									src={$svg[resultArrFSH[i][2][0]][resultArrFSH[i][2][1]]}
									alt={hours[2].condition.text}
								/>
								<p><strong>{hours[2].condition.text}</strong></p>
							</div>

							<div class="bg-slate-500 sm:mx-auto sm:h-0.5 sm:w-4/5" />
							<div class="mx-auto grid w-4/5 grid-rows-3 justify-center">
								<p><strong>Temperature: </strong>{hours[2][temperature]} {tempUnit}</p>
								<p><strong>Humidity: </strong>{hours[2].humidity}%</p>
								<p><strong>Chance of Rain: </strong>{hours[2].chance_of_rain}%</p>
							</div>
						</div>

						<div class="col-start-2 mx-auto flex w-full -translate-y-1/2 transform justify-around">
							{#if i - 1 < 0}
								<a href="#slideFull{objFull.length - 1}" class="btn-circle btn">❮</a>
							{:else}
								<a href="#slideFull{i - 1}" class="btn-circle btn">❮</a>
							{/if}

							{#if i + 1 >= objFull.length}
								<a href="#slideFull{0}" class="btn-circle btn">❯</a>
							{:else}
								<a href="#slideFull{i + 1}" class="btn-circle btn">❯</a>
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
