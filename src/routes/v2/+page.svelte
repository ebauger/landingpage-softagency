<!-- /src/routes/+page.svelte -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	/** Import Actions Animations */
	import viewport from '$lib/actions/viewport';
	let once = false;
	/** Import SVG assets */
	import ProvinceOfQuebec from '$lib/assets/ProvinceOfQuebec.svelte';

	/** Import Components */
	import { Avatar } from '@skeletonlabs/skeleton';

	import HeroSection from '$lib/sections/HeroSection.svelte';
	import BenefitsSection from '$lib/sections/BenefitsSection.svelte';
	import Benefits2Section from '$lib/sections/Benefits2Section.svelte';
	import PlansSection from '$lib/sections/PlansSection.svelte';

	/** Import Datas */
	import t from '$lib/sections/en_translations.json';

	import brands from '$lib/data/brands.json';

	/** Import Studio*/
	import * as core from '@theatre/core';
	import studio from '@theatre/studio';

	let projectElement: HTMLElement;
	let translateXValue = 50;

	function initTheatreStudio() {
		if (process.env.NODE_ENV === 'development') {
			studio.initialize();
			const project = core.getProject('Branch');
			const sheet = project.sheet('LandingPage');
			studio.ui.hide();
		}
	}

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

	import { setContext } from 'svelte';
	import CurrentTime from '$lib/utils/CurrentTime.svelte';
	import { bind } from 'svelte/internal';
	import MembershipSection from '$lib/sections/MembershipSection.svelte';
	import WhyWorkUsSection from '$lib/sections/WhyWorkUsSection.svelte';
	import FaqsSection from '$lib/sections/FaqsSection.svelte';
	import FloatingMenu from '$lib/sections/FloatingMenu.svelte';

	onMount(() => {
		if (browser) {
			initTheatreStudio();
			console.log('setContext', heroSection);
			setContext('parent', heroSection);
		}
	});

	let heroSection: HTMLElement;
	let benefitsSection: HTMLElement;
	let benefits2Section: HTMLElement;
	let membershipSection: HTMLElement;
	let whyWorkUsSection: HTMLElement;
	let plansSection: HTMLElement;
	let faqsSection: HTMLElement;
</script>

<HeroSection bind:heroSection />
<!-- 
<section id="hero-bg" class="border-5 h-screen w-screen border border-black p-0">
	<div class="flex h-full text-xl w-full text-xl place-content-center bg-surface-100 bg-opacity-80">
		<div class="gap flex flex-col flex-wrap place-content-center items-center rounded-full text-xl">
			<Logo />
			<h1 class="font-extrabold italic md:text-6xl">Ask for developing software ideas.</h1>
			<h3 class="text-5xl font-extrabold">
				Software engineering subscriptions to scale your organization.
			</h3>
			<a
				class="btn variant-filled-primary mx-auto my-8 w-max border-b-4 border-primary-900 text-2xl hover:translate-y-1"
				href="#plans">Start now</a
			>
			<li class="mt-4 text-center">You'll ❤ our craft.</li>
		</div>
	</div>
</section> 
-->
<!-- <Panel /> -->
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
		<img src="/SiboireDemo.jpg" alt="" sizes="" srcset="" class="animate-scaleUp h-96 w-96" />
	</div>
</div>
<div id="ruban">
	<div>
		{#each brands as brand}
			<img src={brand.imgUrl} width={brand.width} alt="" />
		{/each}
	</div>
	<div>
		{#each brands as brand}
			<img src={brand.imgUrl} width={brand.width} alt="" />
		{/each}
	</div>
</div>
<BenefitsSection bind:benefitsSection />
<Benefits2Section bind:benefits2Section />
<MembershipSection bind:membershipSection />
<WhyWorkUsSection bind:whyWorkUsSection />
<PlansSection bind:plansSection />
<FaqsSection bind:faqsSection />

<!-- <div class="wp-block-columns is-layout-flex wp-container-89 gap-8 lg:gap-5">
	<div class="wp-block-column is-layout-flow col-span-12 lg:col-span-4" style="flex-basis:33%">
		<figure class="wp-block-image size-full mb-3 ml-auto mr-auto">
			<img
				loading="lazy"
				width="301"
				height="75"
				src="https://workleap.com/wp-content/uploads/2023/05/workleap-logo-inverted.svg"
				alt="Workleap Logo Inverted"
				class="wp-image-381"
			/>
		</figure>
		<div
			class="wp-block-buttons is-style-small-buttons is-content-justification-center is-layout-flex wp-container-77"
		>
			<div class="wp-block-button is-inverted">
				<a class="wp-block-button__link wp-element-button" href="https://workleap.com/demo/"
					><span class="text-wrapper">Talk to an expert</span></a
				>
			</div>
		</div>
	</div>
	<div class="wp-block-column is-layout-flow col-span-12 lg:col-span-8">
		<div
			class="wp-block-columns breakpoint-sm breakpoint-sm is-layout-flex wp-container-87 gap-6 lg:gap-5"
		>
			<div class="wp-block-column is-layout-flow col-span-6 lg:col-span-3">
				<div class="wp-block-group is-layout-constrained">
					<p class="is-style-overline has-content-default-inverted-color has-text-color">Company</p>
					<ul class="has-sm-font-size">
						<li><a href="https://workleap.com/about/" data-type="URL">Who we are</a></li>
						<li>
							<a href="https://workleap.com/why-workleap/" data-type="page" data-id="358"
								>Why Workleap</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="wp-block-column is-layout-flow col-span-6 lg:col-span-3">
				<div class="wp-block-group is-layout-constrained">
					<p class="is-style-overline has-content-default-inverted-color has-text-color">Product</p>
					<ul class="has-sm-font-size">
						<li>
							<a href="https://workleap.com/pricing/" data-type="page" data-id="1243">Pricing</a>
						</li>
						<li>
							<a
								href="https://workleap.com/products/"
								data-type="URL"
								data-id="https://workleap.com/products/">Product overview</a
							>
						</li>
						<li>
							<a href="https://workleap.com/softstart/" data-type="page" data-id="522">Onboarding</a
							>
						</li>
						<li>
							<a href="https://workleap.com/officevibe/" data-type="page" data-id="523"
								>Officevibe</a
							>
						</li>
						<li>
							<a href="https://workleap.com/didacte/" data-type="page" data-id="521">Learning</a>
						</li>
						<li>
							<a href="https://workleap.com/talentscope/" data-type="page" data-id="518"
								>Talent Development</a
							>
						</li>
						<li>
							<a href="https://workleap.com/sharegate/" data-type="page" data-id="520">ShareGate</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="wp-block-column is-layout-flow col-span-6 lg:col-span-3">
				<div class="wp-block-group is-layout-constrained">
					<p class="is-style-overline has-content-default-inverted-color has-text-color">Careers</p>
					<ul class="has-sm-font-size">
						<li>
							<a href="https://workleap.com/careers/" data-type="page" data-id="1446"
								>Join the team</a
							>
						</li>
						<li>
							<a href="https://workleap.com/innovation-lab/" data-type="page" data-id="1271"
								>Innovation lab</a
							>
						</li>
						<li>
							<a
								href="https://workleap.com/careers-developers/"
								data-type="URL"
								data-id="https://workleap.com/careers-developers/">Being a Workleap dev</a
							>
						</li>
						<li>
							<a
								href="https://workleap.com/careers-internships/"
								data-type="URL"
								data-id="https://workleap.com/careers-internships/">Internship program</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="wp-block-column is-layout-flow col-span-6 lg:col-span-3">
				<div class="wp-block-group is-layout-constrained">
					<p class="is-style-overline has-content-default-inverted-color has-text-color">
						Resources
					</p>
					<ul class="has-sm-font-size">
						<li><a href="https://workleap.com/blog/" data-type="page" data-id="50">Blog</a></li>
						<li>
							<a href="https://workleap.com/contact/" data-type="page" data-id="1303">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div> -->

<footer id="footer" class="bg-noise flex flex-col bg-black text-white md:flex-row md:gap-6">
	<div class="flex flex-col md:col-span-2 md:flex-row md:justify-start md:gap-6">
		<ProvinceOfQuebec />
		<div>
			<div class="self-center text-white">{t.footer.location}</div>
			<div class="text-xs text-white"><CurrentTime /></div>
		</div>
	</div>
	<div class="mt-auto flex flex-col md:col-span-2 md:ml-auto md:flex-row md:justify-end md:gap-6">
		<div>
			<div class="mb-4 font-bold text-white">{t.footer.legals}</div>
			<ul class="">
				<li class="mb-3 list-none">
					<a href="#">{t.footer.legals.links[0].name}</a>
				</li>
				<li class="mb-3 list-none">
					<a href="#">{t.footer.legals.links[1].name}</a>
				</li>
			</ul>
		</div>
		<div>
			<div class="mb-4 font-bold text-white">{t.footer.shortcuts}</div>
			<ul class="">
				<li class="mb-3 list-none">
					<a href="https://billing.stripe.com/p/login/14k4iybRo2tz5BC288"
						>{t.footer.shortcuts.links[0].name}</a
					>
				</li>
				<li class="mb-3 list-none">
					<a href="#plans">{t.footer.shortcuts.links[1].name}</a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<!-- <footer
	class="bg-noise grid grid-flow-row grid-rows-6 bg-stone-950 md:grid-flow-col md:grid-cols-6"
>

	<div class="row-span-2 grid grid-flow-col items-center border md:col-span-2">
		<ProvinceOfQuebec />
		<div>
			<div class="self-center text-white">Montreal</div>
			<div class="text-xs text-white"><CurrentTime /></div>
		</div>

	</div>

	<div class="row-start-5 border text-white md:col-start-5">
		<div class="mb-4 font-bold text-white">LEGALS</div>
		<ul class="">
			<li class="mb-3 list-none">
				<a href="#">Privacy Policy</a>
			</li>
			<li class="mb-3 list-none">
				<a href="#">Terms & Conditions </a>
			</li>
		</ul>
	</div>
	<div class="row-start-6 border text-white md:col-start-6">
		<div class="mb-4 font-bold text-white">SHORTCUTS</div>
		<ul class="">
			<li class="mb-3 list-none">
				<a href="#">Customer Portal</a>
			</li>
			<li class="mb-3 list-none">
				<a href="#plans">Prices</a>
			</li>
		</ul>
	</div>
</footer> 
-->
<!-- <div class="absolute">
	<div class="relative">
		<Logo />
	</div>
</div> -->

<!-- <FloatingMenu /> -->

<style lang="scss">
	//@import "open-props/postcss/animations";

	.projects {
		--duration: 0.3s;
		transition: transform var(--duration) ease-out;
		img.animate-scaleUp {
			transform: scale(1);
			transition: transform var(--duration) ease-out, box-shadow var(--duration) ease-out;
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
		overflow: visible;

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
			width: 1568px; //1008px +  5 * 112px
			animation: slide 25s linear infinite;
		}
		> div:nth-child(2) {
			left: 2016px; //1008px +  9 * 112px
		}

		@keyframes slide {
			0% {
				transform: translate3d(0, 0, 0);
			}
			100% {
				transform: translate3d(-2016px, 0, 0); //1008px +  9 * 112px
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
