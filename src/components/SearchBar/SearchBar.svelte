<script>
	import { getCurrentWeather } from '../../lib/getData';

	let cityName = 'Malabrigo, Argentina';
</script>

<form
	action=""
	class="flex h-20 w-full flex-row items-center justify-center gap-1 sm:h-full sm:gap-2"
>
	<input
		type="text"
		placeholder="Enter a city"
		class="input-bordered input input-sm h-10 w-64 max-w-xs sm:w-full"
		bind:value={cityName}
	/>
	<button on:click={getCurrentWeather(cityName)} class="md:btn-auto btn-sm btn mx-2 h-10 w-20 px-3"
		>Search</button
	>
</form>

<style lang="postcss">
	input[type='text'] {
		@apply pl-4;
	}
</style>
