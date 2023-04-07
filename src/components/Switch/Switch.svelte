<script lang="ts">
	import { units } from '$lib/store';

	let unit: boolean = true;
	console.log($units);
	$: if (unit) {
		let temp = { unit: 'metric' };
		units.set(temp);
		console.log('m', $units);
	}
	$: if (!unit) {
		let temp = { unit: 'imperial' };
		units.set(temp);
		console.log('i', $units);
	}
</script>

<div class="form-control">
	<label class="label w-12 cursor-pointer">
		{#if !unit}
			<span class="label-text">imperial</span>
		{:else}
			<span class="label-text">Metric</span>
		{/if}
		<input type="checkbox" class="toggle" bind:checked={unit} />
	</label>
</div>
