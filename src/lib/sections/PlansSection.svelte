<script lang="ts">
	import callUrl from '$lib/data/bookacall.json';
	import price from '$lib/data/en-US_price.json';
	import GiveMoney from '$lib/assets/GiveMoney.svelte';
	import BookACall2 from '$lib/assets/BookACall2.svelte';

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

	export let plansSection: HTMLElement;
	export let content: any;
</script>

<section id="plans" bind:this={plansSection}>
	<h2>{content.plans.title}</h2>
	<h3 class="pb-48">{content.plans.subtitle}</h3>
	<div class="cards-container relative">
		<div class="absolute -top-20 left-5">
			<img src="/3lines.svg" alt="" class="h-10 w-10" />
			<div
				class="badge variant-filled-secondary -rotate-12 text-lg font-medium uppercase text-white"
			>
				{content.plans.mostPopular}
			</div>
		</div>
		<div class="card border-primary-900 bg-primary-200 hover:bg-primary-hover-token">
			<div class="top">
				<h4>{content.plans.monthly.title} <span>⚀</span></h4>
				<p class="h4-subtitle">{content.plans.monthly.subtitle}</p>
				<p class="price">{monthlyAsMonthly}/m</p>
				<p class="price-info">{content.plans.monthly.priceInfo}</p>
				<a class="btn" href="#plans">{content.plans.monthly.getStarted}</a>
				<a href={callUrl} class="cta-call">{content.plans.monthly.bookACall}</a>
			</div>
			<div class="bottom">
				<h5>{content.plans.monthly.includesTitle}</h5>
				<ul>
					<li>{content.plans.monthly.includes.oneRequest}</li>
					<li>{content.plans.monthly.includes.unlimitedProjects}</li>
					<li>{content.plans.monthly.includes.unlimitedTeamMembers}</li>
					<li>{content.plans.monthly.includes.easyPayments}</li>
					<li>{content.plans.monthly.includes.payOnly}</li>
					<li>{content.plans.monthly.includes.cancelAnytime}</li>
				</ul>
			</div>
		</div>
		<div class="card border-warning-900 bg-warning-200 hover:bg-warning-hover-token">
			<div class="top">
				<h4>{content.plans.quarterly.title} <span>⚃</span></h4>
				<p class="h4-subtitle">{content.plans.quarterly.subtitle}</p>
				<p class="price">{quarterlyAsMonthly}/m</p>
				<p class="price-info">
					{content.plans.quarterly.priceInfo} à {formatter.format(price.quarterly.price)}
				</p>
				<a class="btn" href="#plans">{content.plans.quarterly.getStarted}</a>
				<a href={callUrl} class="cta-call inline-block">{content.plans.quarterly.bookACall}</a>
			</div>
			<div class="bottom">
				<h5>{content.plans.quarterly.includesTitle}</h5>
				<ul>
					<li>{content.plans.quarterly.includes.oneRequest}</li>
					<li>{content.plans.quarterly.includes.unlimitedProjects}</li>
					<li>{content.plans.quarterly.includes.unlimitedTeamMembers}</li>
					<li>{content.plans.quarterly.includes.easyPayments}</li>
					<li>{content.plans.quarterly.includes.payOnly}</li>
					<li>{content.plans.quarterly.includes.cancelAnytime}</li>
				</ul>
			</div>
		</div>
		<div class="card border-success-900 bg-success-200 hover:bg-success-hover-token">
			<div class="top">
				<h4>{content.plans.yearly.title} <span>⚅ ⚅</span></h4>
				<p class="h4-subtitle">{content.plans.yearly.subtitle}</p>
				<p class="price">{yearlyAsMonthly}/m</p>
				<p class="price-info">
					{content.plans.yearly.priceInfo} à {formatter.format(price.yearly.price)}
				</p>
				<a class="btn" href="#plans">{content.plans.yearly.getStarted}</a>
				<a href={callUrl} class="cta-call">{content.plans.yearly.bookACall}</a>
			</div>
			<div class="bottom">
				<h5>{content.plans.yearly.includesTitle}</h5>
				<ul>
					<li>{content.plans.yearly.includes.oneRequest}</li>
					<li>{content.plans.yearly.includes.unlimitedProjects}</li>
					<li>{content.plans.yearly.includes.unlimitedTeamMembers}</li>
					<li>{content.plans.yearly.includes.easyPayments}</li>
					<li>{content.plans.yearly.includes.payOnly}</li>
					<li>{content.plans.yearly.includes.cancelAnytime}</li>
				</ul>
			</div>
		</div>
		<div class="card">
			<div class="top">
				<BookACall2 />
				<h7>{content.plans.call.title}</h7>
				<p>{content.plans.call.subtitle}</p>
				<a href={callUrl} target="_blank" class="cta-call">{content.plans.call.bookNow}</a>
			</div>
			<div class="bottom">
				<GiveMoney />
				<h7>{content.plans.referral.title}</h7>
				<p>{content.plans.referral.subtitle}</p>
				<a href="todo" class="cta-call">{content.plans.referral.joinNow}</a>
			</div>
		</div>
	</div>
	<div class="addon" id="addon">
		<div class="badge variant-filled text-lg font-medium uppercase text-white">
			{content.addon.title}
		</div>
		<div class="flex flex-col gap-6 pt-6">
			<h2 class="text-white">{content.addon.unlimitedCall.title}</h2>
			<p class="text-white">{content.addon.unlimitedCall.subtitle}</p>
			<p class="price text-white">
				<li class="badge variant-filled-secondary text-lg font-medium uppercase text-white">+</li>
				{addonAsMonthly}/m
			</p>
			<div class="bottom text-white">
				<h3>{content.addon.forWhom}</h3>
				<ul>
					<li>{content.addon.includes.direction}</li>
					<li>{content.addon.includes.hireTech}</li>
					<li>{content.addon.includes.prioritizeRequests}</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.bg-noise {
		background-image: var(--bg-noise-url);
		background-repeat: repeat;
		/* Add other properties if needed */
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
		@apply bg-noise;
		@media (min-aspect-ratio: 1/1) {
			@apply text-left;
		}

		.top {
			@apply relative pb-6;
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
		background: var(--bg-noise-url), #000;
		@apply mt-1 w-full bg-black p-8 text-center text-2xl;
		@apply bg-noise;
		@media (min-aspect-ratio: 1/1) {
			//@apply text-left;
		}
	}
</style>
