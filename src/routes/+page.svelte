<script lang="ts">
	import CurrentNormal from '../components/current/CurrentNormal.svelte';
	import Daily from '../components/daily/Daily.svelte';
	import Hourly from '../components/hourly/Hourly.svelte';
	import { onMount } from 'svelte';
	import { getCurrentWeather } from '../lib/getData';

	onMount(() => {
		getCurrentWeather();
	});

	let current = 'daily';
</script>

<svelte:component this={CurrentNormal} />
<div class="btn-group flex h-16 w-full items-center justify-center">
	<button class={current === 'daily' ? 'selected' : 'unSelected'} on:click={() => (current = 'daily')}>Daily</button>
	<button class={current === 'hourly' ? 'selected' : 'unSelected'} on:click={() => (current = 'hourly')}>Hourly</button>
</div>
<!-- <svelte:component this={DailyNormal} /> -->
<svelte:component this={Hourly} />

<style lang="postcss">
	.selected {
		@apply btn-active btn h-7 w-20;
	}
	.unSelected {
		@apply btn h-7 w-20;
	}
</style>
