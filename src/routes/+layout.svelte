<script>
	import '../app.css';
</script>

<header class="mx-1 h-14 w-auto">
	<form action="" class="flex h-full flex-row items-center justify-center gap-2">
		<input
			type="text"
			placeholder="Enter a city"
			class="input-bordered input input-sm w-full max-w-xs"
		/>
		<button class="md:btn-auto btn-sm btn mx-2 w-20 px-3 sm:btn-sm">Search</button>
	</form>
</header>
<main class="mx-1 h-fit w-auto">
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
