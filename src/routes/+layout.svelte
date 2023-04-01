<script>
	import '../app.css';
	import SearchBar from '../components/SearchBar/SearchBar.svelte';
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
</style>
