<script>
	import '../app.css';
	import SearchBar from '../components/SearchBar/SearchBar.svelte';
	import Footer from '../components/Footer/Footer.svelte';
</script>

<header class="w-full flex-1 justify-center sm:mx-1 sm:h-20 sm:w-auto">
	<SearchBar />
</header>
<main class="sm:flex sm:h-fit sm:w-full sm:flex-col sm:justify-center sm:gap-10">
	<slot />
</main>
<Footer />

<style lang="postcss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
