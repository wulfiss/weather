<script lang="ts">
	import { getCurrentWeather } from '../../lib/getData';
	import { setLocaStorage, validateInput } from '$lib/util';

	let cityName: string;

	const handleClick = () => {
		if (!validateInput(cityName)) {
			console.error('Enter a city');
			return false;
		}
		getCurrentWeather(cityName);
		setLocaStorage(cityName, 'location');
		cityName = '';
	};
</script>

<form id="findCity" action="" class="flex h-20 w-full flex-row items-center justify-center gap-1 sm:h-full sm:gap-2">
	<input
		type="text"
		placeholder="Enter a city"
		class="input-bordered input input-sm h-10 w-64 max-w-xs sm:w-full"
		bind:value={cityName}
	/>
	<button on:click={handleClick} class="md:btn-auto btn-sm btn mx-2 h-10 w-20 px-3">Search</button>
</form>

<style lang="postcss">
	input[type='text'] {
		@apply pl-4;
	}
</style>
