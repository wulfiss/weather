<script lang="ts">
	import CurrentNormal from '../components/current/CurrentNormal.svelte';
	import DailyNormal from '../components/daily/DailyNormal.svelte';
	import { onMount } from 'svelte';
	import { getWeather } from '../lib/getData';

	onMount(() => {
		getWeather();
	});
</script>

<svelte:component this={CurrentNormal} />
<svelte:component this={DailyNormal} />
