<script lang="ts">
	import CurrentNormal from '../components/current/CurrentNormal.svelte';
	import DailyMain from '../components/daily/DailyMain.svelte';
	import HourlyMain from '../components/hourly/HourlyMain.svelte';
	import AlertCard from '../components/AlertCard/AlertCard.svelte';
	import { onMount } from 'svelte';
	import { units, times } from '$lib/store';
	import { checkElExistLocalStorageReturnIt, validateInput, getData } from '$lib/util';

	onMount(async () => {
		let unitCheck: string = checkElExistLocalStorageReturnIt('unit', 'metric');
		let tempUnit = { unit: unitCheck };
		units.set(tempUnit);

		let timeCheck: string = checkElExistLocalStorageReturnIt('time', '24hours');
		let tempTime = { time: timeCheck };
		times.set(tempTime);

		let city: string = checkElExistLocalStorageReturnIt('location', 'Reconquista, Argentina');

		if (!validateInput(city)) {
			city = 'Reconquista';
		}

		getData(city);
	});

	let current = 'daily';
	let action = DailyMain;
</script>

<svelte:component this={CurrentNormal} />
<svelte:component this={AlertCard} />

<div class="btn-group flex h-16 w-full items-center justify-center">
	<button
		class={current === 'daily' ? 'selected' : 'unSelected'}
		on:click={() => (action = DailyMain)}
		on:click={() => (current = 'daily')}
		>Daily
	</button>
	<button
		class={current === 'hourly' ? 'selected' : 'unSelected'}
		on:click={() => (action = HourlyMain)}
		on:click={() => (current = 'hourly')}
		>Hourly
	</button>
</div>

<svelte:component this={action} />

<style lang="postcss">
	.selected {
		@apply btn-active btn h-7 w-20;
	}
	.unSelected {
		@apply btn h-7 w-20;
	}
</style>
