<script lang="ts">
	import { readable } from 'svelte/store';

	export let local = false;
	// create a readable store that updates every second
	const currentTime = readable(new Date(), function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 60000); //every minute

		return function stop() {
			clearInterval(interval);
		};
	});

	let torontoTime: string;
	let localTime: string;

	$: {
		torontoTime = new Intl.DateTimeFormat([], {
			timeZone: 'America/Toronto',
			hour: 'numeric',
			minute: 'numeric'
		}).format($currentTime);

		localTime = new Intl.DateTimeFormat([], {
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			hour: 'numeric',
			minute: 'numeric'
		}).format($currentTime);
	}
</script>

{#if local}
	{localTime}
{:else}
	{torontoTime}
{/if}
