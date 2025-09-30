<!-- /src/routes/[lang]/sourcing-talents/+page.svelte -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import viewport from '$lib/actions/viewport';

	// Import components
	import StatusIndicator from '$lib/components/StatusIndicator.svelte';
	import TerminalMessage from '$lib/components/TerminalMessage.svelte';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();

	let heroSection: HTMLElement = $state();
	let advantagesSection: HTMLElement = $state();
	let benefitsSection: HTMLElement = $state();
	let processSection: HTMLElement = $state();
	let ctaSection: HTMLElement = $state();

	let once = false;

	onMount(() => {
		if (browser) {
			// Initialize any browser-specific logic
		}
	});
</script>

<svelte:head>
	<title>Sourcez les meilleurs talents - Zbranch</title>
	<meta
		name="description"
		content="Transformez un poste ouvert en opportunité flexible avec des experts qualifiés"
	/>
</svelte:head>

<!-- Video Hero Section -->
<section id="hero" class="relative h-screen w-full overflow-hidden" bind:this={heroSection}>
	<!-- TV Static Effect Layers -->
	<div class="tv-static tv-static-layer-1"></div>
	<div class="tv-static tv-static-layer-2"></div>
	<div class="tv-static tv-static-layer-3"></div>
	<div class="tv-static tv-glitch"></div>
	<div class="tv-static tv-static-layer-4"></div>

	<!-- Video Background Container -->
	<div class="absolute inset-0 bg-black">
		<!-- Video placeholder - you can replace this with actual YouTube embed -->
		<div
			class="flex h-full w-full items-center justify-center bg-white"
		>
			<div class="text-center text-gray-900">
				<div class="mb-8 text-2xl font-light opacity-80">
					{data.content.sourcingTalents.hero.videoPlaceholder}
				</div>
				<div
					class="inline-flex items-center justify-center rounded-full bg-primary-100 p-8 backdrop-blur-sm"
				>
					<svg class="h-16 w-16 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>

	<!-- Overlay Content -->
	<div class="relative z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-30">
		<div class="max-w-4xl px-6 text-center text-gray-900">
			<h1 class="title-glitch mb-6 text-5xl font-bold leading-tight md:text-7xl">
				{data.content.sourcingTalents.hero.title}
			</h1>
			<p class="mb-8 text-xl font-light md:text-2xl">
				{data.content.sourcingTalents.hero.subtitle}
			</p>
			<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
				<a
					href={data.content.sourcingTalents.hero.cta1Href}
					class="btn variant-filled-primary w-full border-b-4 border-primary-600 bg-primary-600 px-8 py-4 text-lg font-semibold text-white hover:bg-primary-700 sm:w-auto"
				>
					{data.content.sourcingTalents.hero.cta1}
				</a>
				<a
					href="#advantages"
					class="btn bg-initial w-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-black sm:w-auto"
				>
					{data.content.sourcingTalents.hero.cta2}
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
		<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>
	</div>
</section>

<!-- Advantages Section -->
<section id="advantages" class="py-20" bind:this={advantagesSection}>
	<div class="container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
				{data.content.sourcingTalents.advantages.title}
			</h2>
			<p class="text-xl text-gray-600">
				{data.content.sourcingTalents.advantages.subtitle}
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each data.content.sourcingTalents.advantages.items as item}
				<div class="rounded-lg bg-white p-8 shadow-lg slideInUp" use:viewport={{ once }}>
					<div class="mb-4 text-{item.iconType}-600">
						<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{#if item.iconType === 'primary'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							{:else if item.iconType === 'success'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							{:else if item.iconType === 'surface'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							{:else if item.iconType === 'error'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							{:else if item.iconType === 'warning'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							{:else if item.iconType === 'tertiary'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							{/if}
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-gray-900">
						{item.title}
					</h3>
					<p class="text-gray-600">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="bg-gray-50 py-20" bind:this={benefitsSection}>
	<div class="container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
				{data.content.sourcingTalents.benefits.title}
			</h2>
			<p class="text-xl text-gray-600">
				{data.content.sourcingTalents.benefits.subtitle}
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			{#each data.content.sourcingTalents.benefits.items as item}
				<div class="text-center slideInUp" use:viewport={{ once }}>
					<div class="mb-6 inline-flex items-center justify-center rounded-full bg-{item.iconType}-100 p-4">
						<svg class="h-8 w-8 text-{item.iconType}-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{#if item.iconType === 'blue'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
								/>
							{:else if item.iconType === 'green'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							{:else if item.iconType === 'purple'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							{/if}
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-bold text-gray-900">
						{item.title}
					</h3>
					<p class="text-gray-600">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-20" bind:this={processSection}>
	<div class="container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
				{data.content.sourcingTalents.process.title}
			</h2>
			<p class="text-xl text-gray-600">
				{data.content.sourcingTalents.process.subtitle}
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each data.content.sourcingTalents.process.items as item}
				<div class="text-center slideInUp" use:viewport={{ once }}>
					<div
						class="mb-6 inline-flex items-center justify-center rounded-full bg-{item.iconType}-600 text-white text-2xl font-bold h-16 w-16"
					>
						{item.stepNumber}
					</div>
					<h3 class="mb-3 text-xl font-bold text-gray-900">
						{item.title}
					</h3>
					<p class="text-gray-600">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section
	class="bg-gradient-to-r from-primary-600 to-surface-500 py-20 text-white"
	bind:this={ctaSection}
>
	<div class="container mx-auto px-6 text-center">
		<h2 class="mb-4 text-4xl font-bold md:text-5xl">
			{data.content.sourcingTalents.cta.title}
		</h2>
		<p class="mb-8 text-xl opacity-90">
			{data.content.sourcingTalents.cta.subtitle}
		</p>
		<a
			href={data.content.sourcingTalents.cta.buttonHref}
			class="btn variant-filled-primary inline-block border-2 border-white bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-gray-100"
		>
			{data.content.sourcingTalents.cta.button}
		</a>
	</div>
</section>

<!-- Terminal Message -->
<TerminalMessage
	targetName={data.content.sourcingTalents.terminalMessage.targetName}
	message={data.content.sourcingTalents.terminalMessage.message}
/>

<style lang="scss">
	@keyframes appear {
		0% {
			opacity: 0;
			transform: translate3d(0, -10px, 0);
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes slideInUp {
		0% {
			opacity: 0;
			transform: translate3d(0, 30px, 0);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}

	// TV Static Animations
	@keyframes static-flicker {
		0% { opacity: 0.1; }
		25% { opacity: 0.3; }
		50% { opacity: 0.05; }
		75% { opacity: 0.2; }
		100% { opacity: 0.1; }
	}

	@keyframes static-shift {
		0% { transform: translate3d(0, 0, 0) scale(1); }
		25% { transform: translate3d(-2px, 2px, 0) scale(1.02); }
		50% { transform: translate3d(2px, -2px, 0) scale(0.98); }
		75% { transform: translate3d(-1px, -1px, 0) scale(1.01); }
		100% { transform: translate3d(0, 0, 0) scale(1); }
	}

	@keyframes static-zoom {
		0% { transform: scale(1); }
		50% { transform: scale(1.1); }
		100% { transform: scale(1); }
	}

	@keyframes scanlines {
		0% { transform: translateY(-100%); }
		100% { transform: translateY(100%); }
	}

	@keyframes glitch {
		0% { clip-path: inset(0 0 0 0); }
		10% { clip-path: inset(20% 0 30% 0); }
		20% { clip-path: inset(50% 0 20% 0); }
		30% { clip-path: inset(10% 0 60% 0); }
		40% { clip-path: inset(80% 0 5% 0); }
		50% { clip-path: inset(5% 0 80% 0); }
		60% { clip-path: inset(30% 0 40% 0); }
		70% { clip-path: inset(60% 0 20% 0); }
		80% { clip-path: inset(15% 0 70% 0); }
		90% { clip-path: inset(70% 0 15% 0); }
		100% { clip-path: inset(0 0 0 0); }
	}

	@keyframes rgb-shift {
		0% { filter: hue-rotate(0deg) saturate(1); }
		25% { filter: hue-rotate(90deg) saturate(1.2); }
		50% { filter: hue-rotate(180deg) saturate(0.8); }
		75% { filter: hue-rotate(270deg) saturate(1.1); }
		100% { filter: hue-rotate(360deg) saturate(1); }
	}

	@keyframes noise-pulse {
		0% { opacity: 0.03; }
		50% { opacity: 0.08; }
		100% { opacity: 0.03; }
	}

	// Text Glitch Animations
	@keyframes text-glitch-1 {
		0% {
			transform: translateX(0);
			filter: hue-rotate(0deg);
		}
		20% {
			transform: translateX(-1px);
			filter: hue-rotate(90deg);
		}
		40% {
			transform: translateX(1px);
			filter: hue-rotate(180deg);
		}
		60% {
			transform: translateX(-2px);
			filter: hue-rotate(270deg);
		}
		80% {
			transform: translateX(1px);
			filter: hue-rotate(360deg);
		}
		100% {
			transform: translateX(0);
			filter: hue-rotate(0deg);
		}
	}

	@keyframes text-glitch-2 {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		15% {
			transform: translateY(-1px);
			opacity: 0.98;
		}
		30% {
			transform: translateY(1px);
			opacity: 0.99;
		}
		45% {
			transform: translateY(-2px);
			opacity: 0.97;
		}
		60% {
			transform: translateY(1px);
			opacity: 0.99;
		}
		75% {
			transform: translateY(-1px);
			opacity: 0.98;
		}
		90% {
			transform: translateY(0.5px);
			opacity: 0.99;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes text-shadow-glitch {
		0% {
			text-shadow:
				2px 0 rgba(255, 0, 0, 0.7),
				-2px 0 rgba(0, 255, 255, 0.7),
				0 0 10px rgba(255, 255, 255, 0.3);
		}
		25% {
			text-shadow:
				-1px 0 rgba(255, 0, 0, 0.8),
				1px 0 rgba(0, 255, 255, 0.8),
				0 0 15px rgba(255, 255, 255, 0.4);
		}
		50% {
			text-shadow:
				1px 0 rgba(255, 0, 0, 0.6),
				-1px 0 rgba(0, 255, 255, 0.6),
				0 0 8px rgba(255, 255, 255, 0.2);
		}
		75% {
			text-shadow:
				-2px 0 rgba(255, 0, 0, 0.9),
				2px 0 rgba(0, 255, 255, 0.9),
				0 0 12px rgba(255, 255, 255, 0.5);
		}
		100% {
			text-shadow:
				2px 0 rgba(255, 0, 0, 0.7),
				-2px 0 rgba(0, 255, 255, 0.7),
				0 0 10px rgba(255, 255, 255, 0.3);
		}
	}

	.slideInUp {
		animation: slideInUp 0.6s ease-out forwards;
		opacity: 0;
	}

	#hero {
		p {
			animation: appear 1000ms ease 200ms 1 normal backwards running;
		}
	}

	// TV Static Effect Classes
	.tv-static {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 1;
	}

	.tv-static-layer-1 {
		background: url('/noise.png') center/cover;
		animation: static-flicker 0.1s infinite, static-shift 3s infinite;
		mix-blend-mode: multiply;
		opacity: 0.1;
		filter: contrast(2) brightness(1.2) hue-rotate(20deg);
	}

	.tv-static-layer-2 {
		background: url('/noise-2.png') center/cover;
		animation: static-flicker 0.15s infinite reverse, static-shift 4s infinite;
		mix-blend-mode: overlay;
		opacity: 0.08;
		filter: contrast(1.5) brightness(0.8) saturate(0.8);
	}

	.tv-static-layer-3 {
		background: url('/noise-3.png') center/cover;
		animation: static-flicker 0.2s infinite, static-zoom 5s infinite;
		mix-blend-mode: screen;
		opacity: 0.06;
		filter: contrast(1.8) brightness(1.1) sepia(0.2);
	}

	.tv-scanlines {
		background: repeating-linear-gradient(
			to bottom,
			transparent 0px,
			transparent 1px,
			rgba(0, 0, 0, 0.1) 1px,
			rgba(0, 0, 0, 0.1) 2px
		);
		animation: scanlines 8s linear infinite;
		pointer-events: none;
		z-index: 2;
	}

	.tv-glitch {
		background: linear-gradient(
			45deg,
			transparent 30%,
			rgba(255, 255, 255, 0.1) 50%,
			transparent 70%
		);
		animation: glitch 2s infinite;
		mix-blend-mode: overlay;
		opacity: 0.5;
	}

	.tv-static-layer-4 {
		background: url('/noise-4.png') center/cover;
		animation: noise-pulse 0.3s infinite, rgb-shift 8s infinite;
		mix-blend-mode: color-dodge;
		opacity: 0.04;
		filter: contrast(3) brightness(0.9) saturate(1.5);
	}

	.title-glitch {
		animation:
			appear 1000ms ease 0s 1 normal backwards running,
			text-glitch-1 3s infinite 2s,
			text-glitch-2 2.5s infinite 2.5s,
			text-shadow-glitch 4s infinite 3s;
		position: relative;
		z-index: 10;
	}

	// Performance optimizations for mobile
	@media (max-width: 768px) {
		.tv-static-layer-1,
		.tv-static-layer-2,
		.tv-static-layer-3,
		.tv-static-layer-4 {
			animation-duration: 0.5s, 6s;
		}

		.tv-static-layer-4 {
			display: none; // Remove most intensive effect on mobile
		}

		.tv-glitch {
			animation-duration: 4s; // Slow down glitch on mobile
		}

		.title-glitch {
			animation:
				appear 1000ms ease 0s 1 normal backwards running,
				text-glitch-1 6s infinite 4s, // Slower glitch on mobile
				text-glitch-2 5s infinite 5s,
				text-shadow-glitch 8s infinite 6s;
		}
	}

	// Reduced motion support
	@media (prefers-reduced-motion: reduce) {
		.tv-static-layer-1,
		.tv-static-layer-2,
		.tv-static-layer-3,
		.tv-static-layer-4,
		.tv-glitch,
		.title-glitch {
			animation: none;
		}

		.title-glitch {
			// Keep only the initial appear animation for accessibility
			animation: appear 1000ms ease 0s 1 normal backwards running;
		}
	}
</style>