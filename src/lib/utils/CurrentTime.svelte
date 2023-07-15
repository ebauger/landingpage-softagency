<script lang="ts">
	import { readable } from 'svelte/store';

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

	$: {
		torontoTime = new Intl.DateTimeFormat([], {
			timeZone: 'America/Toronto',
			hour: 'numeric',
			minute: 'numeric'
		}).format($currentTime);
	}
</script>

{torontoTime}
