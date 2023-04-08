<script lang="ts">
	import { units } from '$lib/store';
	import { setLocalStorage } from '$lib/util';

	let unit: boolean;

	$: if ($units.unit === 'metric') {
		unit = true;
	}

	$: if ($units.unit === 'imperial') {
		unit = false;
	}

	$: if (unit) {
		let temp = { unit: 'metric' };
		units.set(temp);
	}
	$: if (!unit) {
		let temp = { unit: 'imperial' };
		units.set(temp);
	}

	const handleClickCheckbox = () => {
		if (unit === true) {
			unit = false;
			setLocalStorage('imperial', 'unit');
			return false;
		}
		if (unit === false) {
			unit = true;
			setLocalStorage('metric', 'unit');
			return false;
		}
	};
</script>

<div class="form-control w-full flex items-end">
	<label class="label w-fit h-7 cursor-pointer flex gap-2 justify-items-center items-center">
		{#if !unit}
			<span class="label-text">Imperial</span>
		{:else}
			<span class="label-text">Metric</span>
		{/if}
		<input type="checkbox" class="toggle toggle-sm" bind:checked={unit} on:click={handleClickCheckbox} />
	</label>
</div>
