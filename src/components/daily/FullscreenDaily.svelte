<script lang="ts">
	import { completeWeather, units, times } from '../../lib/store';
	import svg from '$lib/svgStore';
	import { formatDate, dateParts } from '$lib/util';

	let resultArrFS = [];

	//extract the route for the img because the api doesn't provide a code for the icons.
	$: if ($completeWeather) {
		resultArrFS = [];
		for (let i = 0; i < $completeWeather.forecast.forecastday.length; i += 1) {
			const link = $completeWeather.forecast.forecastday[i].day.condition.icon;
			const parts = link.split('/');
			const lastPart = parts[parts.length - 1].split('.');
			let tempA = parts[parts.length - 2];
			let tempB = lastPart[0];
			let tempC = [tempA, tempB];
			resultArrFS.push(tempC);
		}
	}

	let temperatureMax: string;
	let temperatureMin: string;
	let tempUnit: string;
	let dateDF: number;

	$: if ($times.time === '24hours') {
		dateDF = 1;
	}

	$: if ($times.time === '12hours') {
		dateDF = 0;
	}

	$: if ($units.unit === 'metric') {
		temperatureMax = 'maxtemp_c';
		temperatureMin = 'mintemp_c';
		tempUnit = '°C';
	}

	$: if ($units.unit === 'imperial') {
		temperatureMax = 'maxtemp_f';
		temperatureMin = 'mintemp_f';
		tempUnit = '°F';
	}
</script>

<div id="mainDaily" class="sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-9">
	{#if $completeWeather}
		<!------full screen------>
		{#each $completeWeather.forecast.forecastday as days, i}
			<div class="hidden sm:flex sm:flex-col sm:gap-1" id="card{i}">
				<div class="gap-3 sm:flex sm:flex-col sm:items-center">
					<p><strong>{dateParts(formatDate(days.date)[dateDF], 'date')}</strong></p>
					<img
						class="sm:mx-auto sm:h-10 sm:w-auto"
						src={$svg[resultArrFS[i][0]][resultArrFS[i][1]]}
						alt={days.day.condition.text}
					/>
					<p><strong>{days.day.condition.text}</strong></p>
				</div>
				<div class="bg-slate-500 sm:mx-auto sm:h-0.5 sm:w-4/5" />
				<div>
					<p><strong>Max Temperature: </strong>{days.day[temperatureMax]} {tempUnit}</p>
					<p><strong>Min Temperature: </strong>{days.day[temperatureMin]} {tempUnit}</p>
					<p><strong>Humidity: </strong>{days.day.avghumidity}%</p>
					<p><strong>Chance of Rain: </strong>{days.day.daily_chance_of_rain}%</p>
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
