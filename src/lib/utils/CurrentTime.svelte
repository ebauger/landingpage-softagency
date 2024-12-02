<script lang="ts">
	import { run } from 'svelte/legacy';

	import { readable } from 'svelte/store';

	interface Props {
		local?: boolean;
	}

	let { local = false }: Props = $props();
	// create a readable store that updates every second
	const currentTime = readable(new Date(), function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 60000); //every minute

		return function stop() {
			clearInterval(interval);
		};
	});

	let torontoTime: string = $state();
	let localTime: string = $state();

	run(() => {
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
	});
</script>

{#if local}
	{localTime}
{:else}
	{torontoTime}
{/if}
