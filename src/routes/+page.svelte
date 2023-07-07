<!-- <section id="hero" class="bg-fixed bg-local" style="background-image: url({men03})"> -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import viewport from '$actions/viewport';
	import { fly } from 'svelte/transition';
	import Sunset from '$lib/Sunset.svelte';
	import ProvinceOfQuebec from '$lib/assets/ProvinceOfQuebec.svelte';
	import ListMorph from '$lib/ListMorph.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import callUrl from '$lib/data/bookacall.json';
	import price from '$lib/data/en-US_price.json';
	import GiveMoney from '$lib/assets/GiveMoney.svelte';
	import BookACall from '$lib/assets/BookACall.svelte';
	import BookACall2 from '$lib/assets/BookACall2.svelte';
	import men03svg from '$lib/assets/founders/men/men03.svg';
	import men03png from '$lib/assets/founders/men/men03.png';
	import Outlinemen03 from '$lib/assets/Outlinemen03.svelte';
	import Logo from '$lib/assets/Logo.svelte';
	import Panel from '$lib/Panel.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	import brands from '$lib/data/brands.json';
	import HeroIllustration from '$lib/assets/illustration/HeroIllustration.svelte';

	let formatter = new Intl.NumberFormat(price.BCP47, {
		style: 'currency',
		currency: price.currency,
		currencyDisplay: 'code',
		minimumFractionDigits: 0
	});

	let monthlyAsMonthly = formatter.format(price.monthly.price);
	let quarterlyAsMonthly = formatter.format(price.quarterly.price / 4);
	let yearlyAsMonthly = formatter.format(price.yearly.price / 12);
	let addonAsMonthly = formatter.format(price.monthly.addon.price);
	let addonQuarterlyAsMonthly = formatter.format(price.monthly.addon.price / 4);
	let addonYearlyAsMonthly = formatter.format(price.monthly.addon.price / 12);
	let monthlyReferral = formatter.format(price.monthly.price * 0.05);

	let projectElement: HTMLElement;
	let translateXValue = 50;

	if (browser) {
		const updateTransform = () => {
			const rect = projectElement.getBoundingClientRect();

			// Check if element is in viewport
			console.log(rect.top, rect.bottom, window.innerHeight);
			if (rect.top >= 0 && rect.bottom <= window.innerHeight * 2) {
				// Calculate translateX value based on the scroll position
				translateXValue = window.scrollY * 0.5; // adjust multiplier as needed
			}
		};

		window.addEventListener('scroll', updateTransform);
	}
</script>

<Sunset />
<section id="hero" class="h-screen w-screen p-0">
	<div class="flex h-full w-full place-content-center bg-surface-100 bg-opacity-80">
		<div class="gap flex flex-col flex-wrap place-content-center items-center rounded-full">
			<Logo />
			<!-- <h1 class="font-extrabold italic md:text-6xl">We manage technology chaos.</h1> -->
			<h1 class="font-extrabold italic md:text-6xl">Ask for developing software ideas.</h1>
			<h3 class="text-5xl font-extrabold">
				Software engineering subscriptions to scale your organization.
			</h3>
			<a
				class="btn variant-filled-primary mx-auto my-8 w-max border-b-4 border-primary-900 text-2xl hover:translate-y-1"
				href="#plans">Start now</a
			>
			<span class="mt-4 text-center">You'll ❤ our craft.</span>
		</div>
	</div>
</section>
<!-- 
<section id="hero-bg" class="border-5 h-screen w-screen border border-black p-0">
	<div class="flex h-full w-full place-content-center bg-surface-100 bg-opacity-80">
		<div class="gap flex flex-col flex-wrap place-content-center items-center rounded-full">
			<Logo />
			<h1 class="font-extrabold italic md:text-6xl">Ask for developing software ideas.</h1>
			<h3 class="text-5xl font-extrabold">
				Software engineering subscriptions to scale your organization.
			</h3>
			<a
				class="btn variant-filled-primary mx-auto my-8 w-max border-b-4 border-primary-900 text-2xl hover:translate-y-1"
				href="#plans">Start now</a
			>
			<span class="mt-4 text-center">You'll ❤ our craft.</span>
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
		class="absolute left-48 z-10 w-[15%] -rotate-12"
	/>
	<div
		class="flex w-max flex-row gap-6 overflow-hidden pb-24 pt-24"
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
<section>
	<h2>Branch it's your partner of succeed</h2>
	<h3>Technology as you want it just arrived.</h3>
	<div class="flex flex-row flex-wrap place-content-center">
		<div>
			<svg />
			<p class="text-center">Subscribe and request <br /> unlimited features.</p>
		</div>
		<div>
			<svg />
			<p class="text-center">Receive your feature on <br /> next weeks during business days</p>
		</div>
		<div>
			<svg />
			<p class="text-center">We’ll tune up yours features <br /> until you’re 100% satisfied.</p>
		</div>
	</div>
</section>
<section class="bg-tertiary-50">
	<h2>You’ll never going back <br /> for going forward</h2>
	<h3 class="pb-8 text-lg sm:w-1/2">
		We are a branch of your core team. Share your request directly with an engineer.
	</h3>
	<div class="grid grid-cols-1 gap-6 border md:grid-cols-2">
		<div class="flex flex-col self-center bg-surface-50 p-4 md:px-12 md:py-12 lg:px-16 lg:py-16">
			<div class="flex flex-col gap-6">
				<div class="h-14 text-left text-9xl font-extrabold text-tertiary-500">’’</div>
				<cite class="text-left text-2xl font-semibold">
					I am satisfied with his expertise during the transition to our new platform and I
					recommend him.
				</cite>
				<div class="flex flex-row items-center gap-2">
					<Avatar src="/testimonials/serge.jpeg" width="w-8" />
					<p class="inline-block text-xs">
						Serge L'Heureux, <strong>ex Cercle K</strong>
					</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-4 border">
			<div>
				<h4 class="font-bold">Share Async</h4>
				<p class="">
					Simple design board. We nail the process of communication where you are on the glob.
				</p>
			</div>
			<div>
				<h4 class="font-bold">Bring your own stack</h4>
				<p class="">
					We enhance your own stack. If not, we'll handle the right one for your project.
				</p>
			</div>
			<div>
				<h4 class="font-bold">Unlimited team members</h4>
				<p class="">
					Invite all members of your team can submit requests and review their process.
				</p>
			</div>
		</div>
	</div>
</section>
<section id="benefits">
	<h2>Membership benefits</h2>
	<h3>We delevers results for your business challenges.</h3>
	<a>See plans</a>
	<div class="flex flex-row flex-wrap">
		<div>
			<h4>Design board</h4>
			<p>Unlimited feature requests to your board as you'd like</p>
		</div>
		<div>
			<h4>Quick delivery</h4>
			<p>Get results in days of your request.</p>
		</div>
		<div>
			<h4>Flat monthly rate</h4>
			<p>Manage your budget without surprise.</p>
		</div>
		<div>
			<h4>Top quality</h4>
			<p>Usable software and yours requirements respected.</p>
		</div>
		<div>
			<h4>Flexible and scalable</h4>
			<p>Extend, pay or cancel anytime your subscription.</p>
		</div>
		<div>
			<h4>Unique and all yours</h4>
			<p>All code and infrastructure it's 100% yours.</p>
		</div>
	</div>
</section>
<!-- <section>
	<h2>Recent works</h2>
	<h3>Best crafted software, and nothing else.</h3>
	<a>View recent work</a>
	<div class="brand">
		<p>chrome web store</p>
		<p>Les Dragons</p>
		<p>Product Hunt</p>
	</div>
</section> -->
<!-- <section>
	<h2>Open source projects we contribute</h2>
	<a>Check it out</a>
	<div class="brand">
		<p>SurrealDB</p>
		<p>Supabase</p>
		<p>SvelteKit</p>
		<p>Skeleton</p>
	</div>
</section> -->
<section id="scope">
	<h2>We helping crafting SaaS, eCommerce, API, QA, digital process SOP & more.</h2>
	<div class="grid grid-cols-3">
		<p>Mobile apps</p>
		<p>AI</p>
		<p>Large Language Models (LLM) integration</p>
		<p>SaaS</p>
		<p>Browser Extension</p>
		<p>Data Collecting</p>
		<p>Nocode/lowcode integration</p>
		<p>API integration</p>
		<p>API Design</p>
		<p>Deploy on the cloud</p>
		<p>Cloud migration</p>
		<p>Software Architecture</p>
		<p>Proof of Concept</p>
		<p>MVP</p>
		<p>Project Kickoff</p>
		<p>DevOps</p>
		<p>TDD</p>
		<p>API & tooling documentions</p>
		<p>Peer Review</p>
	</div>
</section>

<section id="plans">
	<h2>Memberships levels</h2>
	<h3 class="pb-48">Choose your convenient plan</h3>
	<!-- separator -->
	<!-- grid h-fit grid-flow-col grid-cols-1 grid-rows-4 gap-1 lg:grid-flow-row lg:grid-cols-4 lg:grid-rows-1 -->
	<div class="cards-container relative">
		<div class="absolute -top-20 left-5">
			<img src="/3lines.svg" alt="" class="h-10 w-10" />
			<div
				class="badge variant-filled-secondary -rotate-12 text-lg font-medium uppercase text-white"
			>
				most popular
			</div>
		</div>
		<div class="card border-primary-900 bg-primary-200 hover:bg-primary-hover-token">
			<div class="top">
				<h4>Monthly <span>⚀</span></h4>
				<p class="h4-subtitle">No minimum commitment. <br /> Pause or cancel anytime.</p>
				<p class="price">{monthlyAsMonthly}/m</p>
				<p class="price-info">Pause or cancel anytime</p>
				<a class="btn" href="#plans">Get started</a>
				<a href={callUrl} class="cta-call">Book a call</a>
			</div>
			<div class="bottom">
				<h5>What's included:</h5>
				<ul>
					<li>One request at a time</li>
					<li>Unlimited projects</li>
					<li>Unlimited team members</li>
					<li>Easy credit-card payments</li>
					<li>Pause and cancel anytime</li>
				</ul>
			</div>
		</div>
		<div class="card border-warning-900 bg-warning-200 hover:bg-warning-hover-token">
			<div class="top">
				<h4>Quarterly <span>⚃</span></h4>
				<p class="h4-subtitle">No minimum commitment. <br /> Pause or cancel anytime.</p>
				<p class="price">{quarterlyAsMonthly}/m</p>
				<p class="price-info">Paid quarterly</p>
				<a class="btn" href="#plans">Get started</a>
				<a href={callUrl} class="cta-call inline-block">Book a call</a>
			</div>
			<div class="bottom">
				<h5>What's included:</h5>
				<ul>
					<li>One request at a time</li>
					<li>Unlimited projects</li>
					<li>Unlimited team members</li>
					<li>Easy credit-card payments</li>
					<li>Pause and cancel anytime</li>
				</ul>
			</div>
		</div>
		<div class="card border-success-900 bg-success-200 hover:bg-success-hover-token">
			<div class="top">
				<h4>Yearly <span>⚅ ⚅</span></h4>
				<p class="h4-subtitle">
					Save {formatter.format(price.monthly.price - price.yearly.price / 12)} per month.
				</p>
				<p class="price">{yearlyAsMonthly}/m</p>
				<p class="price-info">Paid annually</p>
				<a class="btn" href="#plans">Get started</a>
				<a href={callUrl} class="cta-call">Book a call</a>
			</div>
			<div class="bottom">
				<h5>What's included:</h5>
				<ul>
					<li>One request at a time</li>
					<li>Unlimited projects</li>
					<li>Unlimited team members</li>
					<li>Easy credit-card payments</li>
					<li>Pause and cancel anytime</li>
				</ul>
			</div>
		</div>
		<div class="card">
			<div class="top">
				<!-- <BookACall /> -->
				<BookACall2 />
				<h7>Book a call</h7>
				<p>Learn more about how Branch <br /> works and how it can help you.</p>
				<a href={callUrl} target="_blank" class="cta-call">Book a call</a>
			</div>
			<div class="bottom">
				<GiveMoney />
				<h7>Refer a friend & earn</h7>
				<p>Earn {monthlyReferral} monthly recurring comissions for each referral.</p>
				<a href="todo" class="cta-call">Join now</a>
			</div>
		</div>
	</div>
	<div class="addon">
		<!-- <div class="mt-4 w-24 rounded-full bg-slate-700 text-white">+ add-on</div> -->
		<div class="badge variant-filled text-lg font-medium uppercase text-white">add-on</div>
		<div class="flex flex-col gap-6 pt-6">
			<h2 class="text-white">Unlimited call</h2>
			<p class="text-white">Get access to unlimited advisory services</p>
			<p class="price text-white">
				<span class="badge variant-filled-secondary text-lg font-medium uppercase text-white"
					>+</span
				>
				{addonAsMonthly}/m
			</p>
			<div class="text-white">
				<h3>For whom?</h3>
				<ul>
					<li>Need direction for the project and your team.</li>
					<li>For project kickoff.</li>
					<li>Priorites what requests have more value.</li>
					<li>Call with any person with your team.</li>
					<li>To define the next actions for your goal outcome.</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section id="faqs">
	<h2>FAQs</h2>
	<Accordion>
		<AccordionItem>
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<svelte:fragment slot="summary">
				<p class="summary">Why wouldn't I just hire a full time software engineer?</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<p class="content">
					You could, in but the reality it's difficult to hire a full-time senior-level software
					engineer. Actually, to entry salaries exceed $110 000, plus beneficts. The process for
					hiring one is long and costly. It cost thosands of dollars for just hiring someone without
					starting to work with your team.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<svelte:fragment slot="summary"><p class="summary">Really unlimited?</p></svelte:fragment>
			<svelte:fragment slot="content"
				><p>
					Once you have your membership, you can submit as many requests on our queue as you want.
					And we'll be delivery one by one. First in first out.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<svelte:fragment slot="summary"
				><p class="summary">How fast I will receive my request</p></svelte:fragment
			>
			<svelte:fragment slot="content"
				><p>
					On average, you'll receive your request in next few days for smaller scope of work: bug
					fix. For bigger scope of work. like a new feature, it can take up to 2 weeks. For new
					kickoff project, it can take up to weeks to months depending the complexity of the
					project. If the scope of work is too big, we'll split it in smaller scope of work for
					delivery faster where you can review and give feedback.
				</p>

				<p>
					If the complexity is about about kickoff a project and advisory, we recommand using the
					addon for unlimited call. We'll be able to help you to define the next actions for your
					goal outcome.
				</p>
				<p>
					Sometimes, the complexity of the project is too big for us. We'll let you know and we'll
					refund you.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<svelte:fragment slot="summary"
				><p class="summary">Who is the principal Software engineer?</p></svelte:fragment
			>
			<svelte:fragment slot="content"
				><p>
					ZBRANCH is actually a studio of one person. The founder, myself, will work directly with
					you. For bigger ou more complex request, like custom backend or particular tech expertise
					with senior level engineer, I'll work with our network of senior level engineer or third
					parties provider like AWS.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<svelte:fragment slot="summary"><p class="summary">What stack do you use?</p></svelte:fragment
			>
			<svelte:fragment slot="content"
				><p>
					For frontend, we use SvelteKit/Skeleton/Tailwind. For backend, we use Supabase or
					SurrealDB. For the infrastructure deploying we can deploy on AWS, Vercel, Netlify or
					Cloudflare or custom deployment with Kubernetes.
				</p>
				<p>
					If you already a custom stack like react or vue or any language like PHP, Python, Ruby. We
					can work with your stack.
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<svelte:fragment slot="summary"
				><p class="summary">What if I don't like the service?</p></svelte:fragment
			>
			<svelte:fragment slot="content"
				><p>
					We provide a high quality of service, there will be no refunds issued. You may cancel your
					membership on the portal.
				</p>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</section>

<footer class="flex flex-row bg-stone-950">
	<div class="flex flex-row">
		<!-- <svg id="logo" /> -->
		<ProvinceOfQuebec />

		<p class="mw inline self-center pl-4 text-xs text-white">
			Branch is headquartered in <br /> Montréal, Québec.
		</p>
	</div>
	<nav class="grid grid-flow-col grid-cols-3 text-white">
		<div>
			<div class="text-white">LEGALS</div>
			<a href="#" class="text-white">Privacy Policy</a>
			<a href="#">Terms & Conditions Terms & Conditions</a>
		</div>
	</nav>
</footer>
<div class="absolute">
	<div class="relative">
		<Logo />
	</div>
</div>

<nav role="navigation" class="border border-slate-800">
	<a href="#hero" class="bg-slate-800">⬆</a>
	<a href="#benefits">Benefits</a>
	<a href="#recent-works">Recent works</a>
	<a href="#scope">Scope of works</a>
	<a href="#plans">Pricing</a>
	<a href="#faqs">FAQs</a>
	<a href="#login" class="bg-slate-800">Login</a>
</nav>

<style lang="scss">
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
			@apply pointer-events-none absolute left-0 top-0 h-full w-full;
			@apply text-left text-9xl font-extrabold text-tertiary-500;
		} */
	}

	nav {
		@apply sm:visible;
		@apply fixed inset-x-0 bottom-1 mx-auto flex w-max flex-row items-center justify-center gap-0 rounded-full bg-black bg-opacity-90 px-1 py-1 text-white;

		a {
			@apply h-max rounded-full px-4 py-2 text-center text-sm font-bold;
			&:hover {
				@apply bg-white text-black;
			}
		}

		&[data-scroll='0'] {
			@apply hidden;
		}
	}
	.cards-container {
		@apply grid h-fit grid-flow-col grid-cols-1 grid-rows-4 gap-1;

		@media (min-aspect-ratio: 1/1) {
			@apply grid-flow-row grid-cols-4 grid-rows-1;
		}
	}

	.card {
		@apply flex flex-col gap-6 p-6;
		@apply text-center;

		@media (min-aspect-ratio: 1/1) {
			@apply text-left;
		}

		.top {
			@apply relative border-b-2 border-black pb-6;
		}
		h4 > span {
			@apply absolute -right-1 -top-1 text-3xl font-bold;
		}
		.h4-subtitle {
			@apply h-24  pb-8 text-sm;
		}

		.price {
			@apply pb-4 text-3xl font-bold;
		}

		.price-info {
			@apply pb-8 text-xs font-semibold text-slate-600;
		}

		.btn {
			@apply mx-auto my-8 inline-block w-max border-b-4 border-primary-900 bg-black text-2xl text-white hover:translate-y-1 hover:bg-opacity-80;
		}

		.cta-call {
			@apply mt-4 block font-medium text-black underline underline-offset-4 hover:font-semibold hover:text-black;
		}

		.bottom {
			@apply mt-6;
		}

		h5 {
			@apply mb-4 text-lg font-bold;
		}

		ul li {
			@apply mb-2 text-gray-500;
		}
	}

	.addon {
		@apply w-full bg-black p-8 text-center;
		@media (min-aspect-ratio: 1/1) {
			//@apply text-left;
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

	#hero {
		//background: url(/illustration.svg);
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
	/* 	#hero {
		@apply flex w-screen content-end border-black md:flex-row md:border-8 md:px-0 md:py-0;
		@apply md:px-20;
		background-color: rgba(255, 165, 0, 1);
	} 
// hero from Outlinemen03
	*/
	#ruban {
		@apply relative flex w-screen overflow-hidden;
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
</style>
