<script lang="ts">
	import { completeWeather } from '../../lib/store';

	/* what do the code below is to set and change the href of the <a> button alike, depending on the length of the 
		object or arr that it is wanted to show in the carousel, this is not the best implementation so maybe in other 
		project where I want to use a carousel I use another things */
	let leftIdMobile: string = '#slide';
	let rightIdMobile: string = '#slide';

	let obj = [];
	/*  $: means reactivity a little of black magic of svelte, so when 'completeWeather' gets updated it will execute the if again updating the obj with new info */
	$: if ($completeWeather) {
		obj = [];
		for (let i = 0; i < 23; i += 4) obj.push($completeWeather.forecast.forecastday[0].hour[i]);
		console.log('afterIF', obj);
		if (obj && leftIdMobile === '#slide' && rightIdMobile === '#slide') {
			leftIdMobile += obj.length - 1;
			rightIdMobile += 1;
		}
		console.log('IFL', leftIdMobile, 'IFR', rightIdMobile);
	}

	/* 	if ($completeWeather && leftIdMobile === '#slide' && rightIdMobile === '#slide') {
		leftIdMobile += obj.length - 1;
		rightIdMobile += 1;
	} */
	console.log('BL', leftIdMobile, 'BR', rightIdMobile);
	function changeCard(activeCardIndex: number, obj, direction: number) {
		let newActiveCardIndexLeft = activeCardIndex - direction;
		let newActiveCardIndexRight = activeCardIndex + direction;

		if (newActiveCardIndexLeft < 0) {
			newActiveCardIndexLeft = obj.length - 1;
		}
		if (newActiveCardIndexRight >= obj.length) {
			newActiveCardIndexRight = 0;
		}
		console.log('Bleft', leftIdMobile, 'Bright', rightIdMobile);
		leftIdMobile = '#slide' + newActiveCardIndexLeft;
		rightIdMobile = '#slide' + newActiveCardIndexRight;

		console.log('left', leftIdMobile, 'right', rightIdMobile);

		return false;
	}
</script>

<br />

<!-- <div id="mainDaily" class="sm:hidden"> -->
{#if $completeWeather}
	<!------full screen------>
	<div class="carousel w-full sm:hidden">
		{#each obj as hours, i}
			<div id="slideMobile{i}" name="slideMobile{i}" class="carousel-item relative w-full">
				<div class="w-full">
					<div class="flex w-full flex-col gap-1" id="card">
						<div class="flex flex-col items-center">
							<p><strong>{hours.time}</strong></p>
							<img class="sm:mx-auto sm:h-10 sm:w-auto" src={hours.condition.icon} alt={hours.condition.text} />
							<p><strong>{hours.condition.text}</strong></p>
						</div>

						<div class="mx-auto h-0.5 w-3/5 bg-slate-500 sm:w-4/5" />

						<div class="flex w-full flex-col items-center">
							<p><strong>Temperature: </strong>{hours.temp_c}°C</p>
							<p><strong>Humidity: </strong>{hours.humidity}%</p>
							<p><strong>Change of Rain: </strong>{hours.chance_of_rain}%</p>
						</div>
					</div>
					<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<!-- <a href={leftIdMobile} on:click={changeCard(i, obj, 1)} class="btn-circle btn">❮</a> -->
						<!-- <a href={rightIdMobile} on:click={changeCard(i, obj, 1)} class="btn-circle btn">❯</a> -->
						{#if i - 1 < 0}
							<a href="#slideMobile{obj.length - 1}" class="btn-circle btn">❮</a>
						{:else}
							<a href="#slideMobile{i - 1}" class="btn-circle btn">❮</a>
						{/if}

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

<!-- </div> -->

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
