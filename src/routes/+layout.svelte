<script>
	import '../app.css';
	import { getWeather } from '../lib/getData';
	import SearchBar from '../components/SearchBar/SearchBar.svelte';

	let cityName = 'Malabrigo, Argentina';
</script>

<header class="mx-1 h-20 w-auto">
	<SearchBar />
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
