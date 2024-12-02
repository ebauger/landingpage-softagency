<script lang="ts">
	import { onMount } from 'svelte';

	//import { text } from '@sveltejs/kit';

	let text1: HTMLSpanElement = $state();
	let text2: HTMLSpanElement = $state();
	const texts = [
		'crafting',
		'kickoff',
		'advice',
		'ehance',
		'improve',
		'migrate',
		'scale',
		'maintain',
		'optimize'
	];

	const morphTime = 1;
	const cooldownTime = 0.25;

	let textIndex = texts.length - 1;
	let time = new Date();
	let morph = 0;
	let cooldown = cooldownTime;

	onMount(() => {
		text1.textContent = texts[textIndex % texts.length];
		text2.textContent = texts[(textIndex + 1) % texts.length];

		function doMorph() {
			morph -= cooldown;
			cooldown = 0;

			let fraction = morph / morphTime;

			if (fraction > 1) {
				cooldown = cooldownTime;
				fraction = 1;
			}

			setMorph(fraction);
		}

		function setMorph(fraction: number) {
			text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
			text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

			fraction = 1 - fraction;
			text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
			text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

			text1.textContent = texts[textIndex % texts.length];
			text2.textContent = texts[(textIndex + 1) % texts.length];
		}

		function doCooldown() {
			morph = 0;

			text2.style.filter = '';
			text2.style.opacity = '100%';

			text1.style.filter = '';
			text1.style.opacity = '0%';
		}

		function animate() {
			requestAnimationFrame(animate);

			let newTime = new Date();
			let shouldIncrementIndex = cooldown > 0;
			let dt = (newTime.getTime() - time.getTime()) / 1000;
			time = newTime;

			cooldown -= dt;

			if (cooldown <= 0) {
				if (shouldIncrementIndex) {
					textIndex++;
				}

				doMorph();
			} else {
				doCooldown();
			}
		}

		animate();
	});
</script>

<div>
	<span bind:this={text1}></span>
	<span bind:this={text2}></span>
</div>

<svg id="filters">
	<defs>
		<filter id="threshold">
			<feColorMatrix
				in="SourceGraphic"
				type="matrix"
				values="1 0 0 0 0
						0 1 0 0 0
						0 0 1 0 0
						0 0 0 255 -100"
			/>
		</filter>
	</defs>
</svg>

<style lang="scss">
	div {
		@apply relative inline w-10;
		filter: url(#threshold) blur(0.6px);
	}
	span {
		@apply absolute;
	}
	svg {
		@apply inline inline hidden;
	}
</style>
