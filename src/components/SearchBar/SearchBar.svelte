<script lang="ts">
	import { setLocalStorage, validateInput, getData } from '$lib/util';
	import { validity } from '$lib/store';

	let cityName: string;
	let valid: boolean = true;

	const handleClick = () => {
		if (!validateInput(cityName)) {
			valid = false;
			validity.set('invalid');
			cityName = '';
			return false;
		}

		getData(cityName);
		setLocalStorage(cityName, 'location');
		cityName = '';
		valid = true;
	};
</script>

<form id="findCity" action="" class="flex h-16 w-full flex-row items-center justify-center gap-1 sm:h-full sm:gap-2">
	<input
		type="text"
		placeholder="Enter a city and country"
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
