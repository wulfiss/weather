<script>
	import '../app.css';
	import { getWeather } from '../lib/getData';

	let cityName = 'Malabrigo, Argentina';
</script>

<header class="mx-1 h-20 w-auto">
	<form action="" class="flex h-full flex-row items-center justify-center gap-2">
		<input
			type="text"
			placeholder="Enter a city"
			class="input-bordered input input-sm w-full max-w-xs"
			bind:value={cityName}
		/>
		<button on:click={getWeather(cityName)} class="md:btn-auto btn-sm btn mx-2 w-20 px-3 sm:btn-sm"
			>Search</button
		>
	</form>
</header>
<main class="flex h-fit w-full flex-col justify-center gap-6">
	<slot />
</main>

<style lang="postcss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	input[type='text'] {
		@apply pl-4;
	}
</style>
