<script lang="ts">
	import CurrentNormal from '../components/current/CurrentNormal.svelte';
	import Daily from '../components/daily/Daily.svelte';
	import Hourly from '../components/hourly/Hourly.svelte';
	import { onMount } from 'svelte';
	import { getCurrentWeather } from '../lib/getData';

	onMount(() => {
		getCurrentWeather();
	});
</script>

<svelte:component this={CurrentNormal} />
<!-- <svelte:component this={DailyNormal} /> -->
<svelte:component this={Hourly} />
