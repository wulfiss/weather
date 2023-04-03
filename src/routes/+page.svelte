<script lang="ts">
	import CurrentNormal from '../components/current/CurrentNormal.svelte';
	import Daily from '../components/daily/Daily.svelte';
	import Hourly from '../components/hourly/hourly.svelte';
	import { onMount } from 'svelte';
	import { getCurrentWeather } from '../lib/getData';

	let tabs = [
		{ id: 0, a: 'Daily', name: 'Calculadora Rápida' },
		{ id: 1, a: 'Hourly', name: 'Calculadora' }
	];

	const actions = [Daily, Hourly];

	let action = actions[0];

	function handleActionClicked(id: number): any {
		console.log('A', action);
		action = actions[id];
		console.log('b', action);
	}

	onMount(() => {
		getCurrentWeather();
	});

	let current = 'daily';
</script>

<svelte:component this={CurrentNormal} />
<div class="btn-group flex h-16 w-full items-center justify-center">
	<button
		class={current === 'daily' ? 'selected' : 'unSelected'}
		on:click={handleActionClicked(0)}
		on:click={() => (current = 'daily')}>Daily</button
	>
	<button
		class={current === 'hourly' ? 'selected' : 'unSelected'}
		on:click={handleActionClicked(1)}
		on:click={() => (current = 'hourly')}>Hourly</button
	>
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
