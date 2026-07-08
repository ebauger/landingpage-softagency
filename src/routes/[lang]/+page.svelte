<!-- /src/routes/+page.svelte -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, setContext } from 'svelte';

	/** Import Actions Animations */
	import viewport from '$lib/actions/viewport';
	let once = false;
	/** Import SVG assets */
	import ProvinceOfQuebec from '$lib/assets/ProvinceOfQuebec.svelte';

	/** Import Components */
	/* import { Avatar } from '@skeletonlabs/skeleton'; */
	import CurrentTime from '$lib/utils/CurrentTime.svelte';

	import HeroSection from '$lib/sections/HeroSection.svelte';
	import BenefitsSection from '$lib/sections/BenefitsSection.svelte';
	import Benefits2Section from '$lib/sections/Benefits2Section.svelte';
	import MembershipSection from '$lib/sections/MembershipSection.svelte';
	import WhyWorkUsSection from '$lib/sections/WhyWorkUsSection.svelte';
	import FaqsSection from '$lib/sections/FaqsSection.svelte';

	/** Import Datas */
	import brands from '$lib/data/brands.json';
	import * as m from '$paraglide/messages.js';

	let translateXValue = $state(50);
	if (browser) {
		const updateTransform = () => {
			const rect = projectElement.getBoundingClientRect();

			// Check if element is in viewport
			//console.log(rect.top, rect.bottom, window.innerHeight);
			if (rect.top >= 0 && rect.bottom <= window.innerHeight * 2) {
				// Calculate translateX value based on the scroll position
				translateXValue = window.scrollY * 0.5; // adjust multiplier as needed
			}
		};

		window.addEventListener('scroll', updateTransform);
	}

	onMount(() => {
		if (browser) {
			console.log('setContext', heroSection);
			setContext('parent', heroSection);
		}
	});

	let heroSection: HTMLElement = $state();
	let projectElement: HTMLElement = $state();
	let benefitsSection: HTMLElement = $state();
	let benefits2Section: HTMLElement = $state();
	let membershipSection: HTMLElement = $state();
	let whyWorkUsSection: HTMLElement = $state();
	let faqsSection: HTMLElement = $state();
</script>

<HeroSection bind:heroSection />
<div bind:this={projectElement} class="projects relative">
	<img
		loading="lazy"
		src="/latestrepos.svg"
		alt=""
		class="slideInRight absolute left-48 z-10 w-[15%] -rotate-12"
		use:viewport={{ once }}
	/>
	<div
		class="flex w-screen flex-row gap-6 overflow-hidden pb-24 pt-24"
		style="transform: translate3d(-{translateXValue}px, 0, 0)"
	>
		<img src="/ArchitectureDemo.jpg " alt="" sizes="" srcset="" class="animate-scaleUp h-96 w-96" />
		<img src="/HCWDemo.jpg" alt="" sizes="" srcset="" class="animate-scaleUp h-96 w-96" />
		<img src="/ShiftefyDemo.jpg " alt="" sizes="" srcset="" class="animate-scaleUp h-96 w-96" />
		<img src="/SiboireDemo.jpg" alt="" sizes="" srcset="" class="animate-scaleUp h-96 w-96" />
		<!-- <img src="/SiboireDemo.jpg" alt="" sizes="" srcset="" class="animate-scaleUp h-96 w-96" /> -->
	</div>
</div>
<div id="ruban">
	<div>
		{#each brands as brand (brand.imgUrl)}
			<img src={brand.imgUrl} width={brand.width} alt="" />
		{/each}
	</div>
	<div>
		{#each brands as brand (brand.imgUrl)}
			<img src={brand.imgUrl} width={brand.width} alt="" />
		{/each}
	</div>
</div>
<BenefitsSection bind:benefitsSection />
<Benefits2Section bind:benefits2Section />
<MembershipSection bind:membershipSection />
<WhyWorkUsSection bind:whyWorkUsSection />
<!-- <PlansSection bind:plansSection /> -->
<FaqsSection bind:faqsSection />

<footer
	id="footer"
	class="bg-noise flex flex-col items-center gap-6 bg-black text-white lg:flex-row lg:gap-6"
>
	<div class="flex flex-col items-center gap-6 lg:col-span-2 lg:flex-row lg:justify-start lg:gap-6">
		<img src="/Zbranch DarkBG.png" alt="logo Zbranch" width="150px" />
		<ProvinceOfQuebec />
		<div>
			<div class="text-white">{m.footer_location()}</div>
			<div class="text-xs text-white"><CurrentTime /></div>
		</div>
	</div>
	<div class="mt-auto flex flex-col lg:col-span-2 lg:ml-auto lg:flex-row lg:justify-end lg:gap-6">
		<div>
			<div class="mb-4 font-bold text-white">{m.footer_legals_name()}</div>
			<ul class="">
				<li class="mb-3 list-none">
					<a href={m.footer_legals_links_1_href()}>{m.footer_legals_links_1_name()}</a>
				</li>
				<li class="mb-3 list-none">
					<a href={m.footer_legals_links_2_href()}>{m.footer_legals_links_2_name()}</a>
				</li>
			</ul>
		</div>
		<div>
			<div class="mb-4 font-bold text-white">{m.footer_shortcuts_name()}</div>
			<ul class="">
				<li class="mb-3 list-none">
					<a href="https://billing.stripe.com/p/login/14k4iybRo2tz5BC288"
						>{m.footer_shortcuts_links_1_name()}</a
					>
				</li>
				<li class="mb-3 list-none">
					<a href="#plans">{m.footer_shortcuts_links_2_name()}</a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style lang="scss">
	//@import "open-props/postcss/animations";

	.projects {
		--duration: 0.3s;
		transition: transform var(--duration) ease-out;
		img.animate-scaleUp {
			transform: scale(1);
			transition:
				transform var(--duration) ease-out,
				box-shadow var(--duration) ease-out;
		}

		img:hover.animate-scaleUp {
			transform: scale(1.1);
			box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; // adjust as needed
		}
	}

	cite {
		//@apply p-8;

		/* 		&:before {
			content: '’’';
			@apply pointer-events-none absolute left-0 top-0 h-full text-xl w-full text-xl;
			@apply text-left text-9xl font-extrabold text-tertiary-500;
		} */
	}

	nav#floating-menu {
		font-family: var(--theme-font-family-heading);
		@apply invisible lg:visible;
		@apply fixed inset-x-0 bottom-1 mx-auto flex w-max flex-row items-center justify-center gap-0 rounded-full bg-black bg-opacity-90 p-5 text-2xl text-white;

		a {
			@apply h-max rounded-full px-4 py-2 text-center text-xl font-bold;
			&:hover {
				@apply bg-white text-black no-underline;
			}
		}
	}

	.summary {
		@apply font-bold;
	}
	.faqs {
		// summary slot
		// content slot
		.accordion-panel > p {
		}
	}

	@keyframes appear {
		0% {
			opacity: 0;
			transform: translate3d(0, -10px, 0);
		}

		50% {
			opacity: 0.5;
			//transform: translate3d(0, -5px, 0);
		}

		100% {
			opacity: 1;
			transform: none;
		}
	}
	#hero {
		//height: 100vh;
		//height: 100vh;
		//background: url(/illustration.svg);
		/* This makes the background image cover the entire div */
		//background-size: auto 100%;
		/* By default, background images will be positioned at the top-left corner of the div */
		//background-position: top center;
		/* This makes the background image not repeat */
		//background-repeat: no-repeat;
		/* Allow div to overflow */
		//overflow: visible;

		@media (min-aspect-ratio: 1/1) {
			//lg
			//background-size: 100% auto;
		}
		// linear
		/* 
			animation: 1200ms ease 0ms 1 normal backwards running gisjuz;
			animation: 1000ms ease 0s 1 normal backwards running gisjuz;
			animation: 1200ms ease 400ms 1 normal backwards running gisjuz;
			animation: 1200ms ease 800ms 1 normal backwards running gisjuz;

		*/
		:global(svg),
		img {
			animation: 1200ms ease 0ms 1 normal backwards running appear;
			backface-visibility: hidden;
		}
		.blob-left {
		}
		h1 {
			animation: 1000ms ease 0s 1 normal backwards running appear;
			@apply text-5xl md:text-7xl;
		}

		h2 {
			@apply inline pt-12 text-center font-medium;
			animation: 1200ms ease 400ms 1 normal backwards running appear;
		}

		.cta-zone {
			animation: 1200ms ease 800ms 1 normal backwards running appear;
		}
	}

	#hero-bg {
		background: url(/illustration.svg);
		/* This makes the background image cover the entire div */
		background-size: auto 100%;
		/* By default, background images will be positioned at the top-left corner of the div */
		background-position: top center;
		/* This makes the background image not repeat */
		background-repeat: no-repeat;
		/* Allow div to overflow */
		overflow: visible;

		@media (min-aspect-ratio: 1/1) {
			//lg
			background-size: 100% auto;
		}
	}

	#ruban {
		@apply relative flex w-screen max-w-full overflow-hidden;
		@apply h-24 bg-black;

		> div {
			@apply absolute flex items-center gap-28;
			width: 1568px; //1008px +  5 * 112px
			animation: slide 25s linear infinite;
		}
		> div:nth-child(2) {
			left: 2016px; //1008px +  9 * 112px
		}

		@keyframes slide {
			0% {
				transform: translate3d(0, 0, 0);
			}
			100% {
				transform: translate3d(-2016px, 0, 0); //1008px +  9 * 112px
			}
		}
	}

	footer {
		@media (min-aspect-ratio: 1/1) {
			//lg
			//background-size: 100% auto;
		}
	}
</style>
