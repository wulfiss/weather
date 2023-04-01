<script>
	import { currentWeatherStore } from '../../lib/store';

	let weather;

	currentWeatherStore.subscribe((value) => {
		weather = value.forecast.forecastday;
	});

	console.log('daily', weather);
</script>

<div id="main">
	<div id="card1">
		<img src="" alt="" srcset="" />
	</div>
</div>

<style lang="postcss">
</style>
