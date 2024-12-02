<script lang="ts">
	import { getContext, onDestroy, onMount, setContext } from 'svelte';
	import { browser } from '$app/environment';
	import P5Canvas from '$lib/P5Canvas.svelte';
	import { get } from 'svelte/store';
	let sketch: void = $state(); // sketch is a function

	let parentElement: HTMLElement;
	let parentWidth, parentHeight: number;

	const handleResize = () => {
		parentWidth = parentElement.clientWidth;
		parentHeight = parentElement.clientHeight;
	};

	onMount(() => {
		console.log('init mounted');
		if (browser) {
			console.log('mounted');
			parentElement = getContext('parent');
			console.log('getContext', parentElement);
			parentWidth = parentElement.clientHeight;
			parentHeight = parentElement.clientHeight;
			console.log(parentElement);
			window.addEventListener('resize', handleResize);
		}
	});

	onDestroy(() => {
		console.log('init unmounted');
		if (browser) {
			console.log('unmounted');
			window.removeEventListener('resize', handleResize);
		}
	});

	if (browser) {
		sketch = function (p5: any) {
			let aNotionofTime: number;
			let aNotionofUnTime: number;
			let aMagnitudeofColor: number;

			p5.setup = () => {
				p5.createCanvas(parentElement.clientWidth, parentElement.clientHeight);
			};

			p5.draw = () => {
				//in which notions of time repeat
				aNotionofTime = p5.abs(p5.sin(p5.frameCount / 500));
				//in which notions of time cease
				aNotionofUnTime = p5.abs(p5.cos(p5.frameCount / 500));
				//where magnitudes of color are relative
				aMagnitudeofColor = p5.random(240 - 200 * aNotionofTime);
				//we loop in the finite and infinite
				for (let i = 0; i < 500; i++) {
					//finding points to touch
					let verticalExistence = p5.random(0, p5.height);
					//with creative contrasts of thought
					let bandsOfContrast = (verticalExistence * p5.abs(p5.sin(verticalExistence / 100))) / 3;
					p5.strokeWeight(p5.random(0.5, 5));
					p5.stroke(
						50 + aMagnitudeofColor - bandsOfContrast + 30 * aNotionofTime,
						50 + aMagnitudeofColor - bandsOfContrast - 30 * aNotionofTime,
						50 + aMagnitudeofColor * 2 - bandsOfContrast - 30 * aNotionofTime,
						10
					);
					//linear footprints in a euclidean space
					p5.line(
						p5.randomGaussian(0, p5.width),
						verticalExistence,
						p5.randomGaussian(0, p5.width),
						verticalExistence
					);
				}
				//beneath clouds of light
				for (let i = 0; i < 5; i++) {
					p5.push();
					p5.translate(0, (-p5.width / 2) * aNotionofUnTime);
					rock();
					p5.pop();
				}
			};
			//to remind ourselves
			function rock() {
				p5.fill(
					50 + 205 * aNotionofUnTime,
					50 + 205 * aNotionofUnTime,
					50 + 205 * aNotionofUnTime,
					2
				);
				p5.noStroke();
				let ephemeris = p5.createVector(
					p5.random(p5.width / 2 - 20, p5.width / 2),
					p5.random(p5.height / 2 - 20, p5.height / 2 + 20)
				);
				let aVolumeofSelf = p5.randomGaussian(10, 200);
				p5.circle(ephemeris.x, ephemeris.y, aVolumeofSelf);
			}
		};
	}
</script>

<P5Canvas {sketch} />
