<script>
	import { getCurrentWeather } from '../../lib/getData';

	let cityName = 'Malabrigo, Argentina';
</script>

<form action="" class="flex h-full flex-row items-center justify-center gap-2">
	<input
		type="text"
		placeholder="Enter a city"
		class="input-bordered input input-sm w-full max-w-xs"
		bind:value={cityName}
	/>
	<button
		on:click={getCurrentWeather(cityName)}
		class="md:btn-auto btn-sm btn mx-2 w-20 px-3 sm:btn-sm">Search</button
	>
</form>

<style lang="postcss">
	input[type='text'] {
		@apply pl-4;
	}
</style>
