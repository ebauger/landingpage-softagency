<script lang="ts">
	//import p5 from 'p5';
	import { onMount, onDestroy } from 'svelte';
	export let sketch: any;
	let canvasDiv: HTMLElement;
	let p5instance: p5;
	onMount(async function () {
		if (sketch) {
			const p5 = (await import('p5')).default;
			p5instance = new p5(sketch, canvasDiv);
		}
	});

	onDestroy(() => {
		if (p5instance) {
			p5instance.remove();
		}
	});
</script>

<div bind:this={canvasDiv} />
