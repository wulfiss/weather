<script lang="ts">
	import { times } from '$lib/store';
	import { setLocalStorage } from '$lib/util';

	let time: boolean;

	$: if ($times.time === '24hours') {
		time = true;
	}

	$: if ($times.time === '12hours') {
		time = false;
	}

	$: if (time) {
		let temp = { time: '24hours' };
		times.set(temp);
	}
	$: if (!time) {
		let temp = { time: '12hours' };
		times.set(temp);
	}

	const handleClickCheckbox = () => {
		if (time === true) {
			time = false;
			setLocalStorage('12hours', 'time');
			return false;
		}
		if (time === false) {
			time = true;
			setLocalStorage('24hours', 'time');
			return false;
		}
	};
</script>

<div class="form-control flex w-full items-end">
	<label class="label flex h-7 w-fit cursor-pointer items-center justify-items-center gap-2">
		{#if !time}
			<span class="label-text">12 hours</span>
		{:else}
			<span class="label-text">24 hours</span>
		{/if}
		<input type="checkbox" class="toggle toggle-sm" bind:checked={time} on:click={handleClickCheckbox} />
	</label>
</div>
