<script lang="ts">
	import { validity } from '$lib/store';
	let trigger = false;

	const handleClick = () => {
		validity.set('true');
		trigger = false;
	};

	$: if ($validity === 'invalid') {
		trigger = true;
	}
</script>

{#if trigger === true}
	<div class="card absolute z-10 w-96 bg-neutral text-neutral-content">
		<div class="card-body items-center text-center">
			<h2 class="card-title">Error!</h2>
			{#if $validity === 'invalid'}
				<p>City name no valid.</p>
				<p>Please enter valid one.</p>
			{/if}
			<div class="card-actions justify-end">
				<button class="btn-primary btn" on:click={handleClick}>Accept</button>
			</div>
		</div>
	</div>
{/if}