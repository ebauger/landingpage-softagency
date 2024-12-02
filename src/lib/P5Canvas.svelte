<script lang="ts">
	//import p5 from 'p5';
	import { onMount, onDestroy } from 'svelte';
	interface Props {
		sketch: any;
	}

	let { sketch }: Props = $props();
	let canvasDiv: HTMLElement = $state();
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

<div bind:this={canvasDiv}></div>

<style lang="scss">
	div {
		@apply absolute left-0 top-0 -z-10 h-full w-full;
		/* 		.p5Canvas {
			@apply h-full w-full;
		} */
	}
</style>
