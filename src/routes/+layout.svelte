<script>
	import '../app.css';
</script>

<header class="mx-1 h-14 w-auto">
	<form action="" class="flex h-full flex-row items-center justify-center gap-2">
		<input
			type="text"
			placeholder="Enter a city"
			class="input-bordered input input-sm w-full max-w-xs px-10"
		/>
		<button class="btn-sm btn mx-2 w-40 px-3">Search</button>
	</form>
</header>

<slot />

<style lang="postcss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
