<script lang="ts">
	import { validity } from '$lib/store';
	import { setLocalStorage} from '$lib/util';
	let trigger = false;

	const handleClick = () => {
		validity.set('true');
		trigger = false;
	};

	$: if ($validity === 'invalid') {
		trigger = true;
	}

	$: if($validity === 'bad'){
		trigger = true;
		setLocalStorage('Reconquista', 'location');
	}
</script>

{#if trigger === true}
	<div class="card absolute z-10 w-72 md:w-96 bg-neutral text-neutral-content mx-auto left-0 right-0 top-96">
		<div class="card-body items-center text-center">
			<h2 class="card-title">Error!</h2>
			{#if $validity === 'invalid'}
				<p>City name no valid.</p>
				<p>Please enter a valid one.</p>
			{:else if $validity === 'bad'}
				<p>City not found.</p>
				<p>Please enter another city.</p>
			{/if}
			<div class="card-actions justify-end">
				<button class="btn-primary btn" on:click={handleClick}>Accept</button>
			</div>
		</div>
	</div>
{/if}