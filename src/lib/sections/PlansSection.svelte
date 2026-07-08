<script lang="ts">
	import * as m from '$paraglide/messages.js';
	import callUrl from '$lib/data/bookacall.json';
	import price from '$lib/data/en-US_price.json';
	import GiveMoney from '$lib/assets/GiveMoney.svelte';
	import BookACall2 from '$lib/assets/BookACall2.svelte';
	import StatusIndicator from '$lib/components/StatusIndicator.svelte';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	const Plan = {
		Starter: 0,
		Premium: 1
	} as const;
	type Plan = (typeof Plan)[keyof typeof Plan];
	let value: Plan = $state(Plan.Starter);

	let formatter = new Intl.NumberFormat(price.BCP47, {
		style: 'currency',
		currency: price.currency,
		currencyDisplay: 'narrowSymbol',
		minimumFractionDigits: 2
	});
	const displayPrice = (number: number) => {
		const getCountryCodeFromLocale = (input: string) => input.split('-')[1];
		return `${formatter.format(number)}${getCountryCodeFromLocale(price.BCP47)}`;
	};
	let monthlyAsMonthly = displayPrice(price.monthly.price);
	let quarterlyAsMonthly = displayPrice(price.quarterly.price / 4);
	let yearlyAsMonthly = displayPrice(price.yearly.price / 12);
	let addonAsMonthly = displayPrice(price.monthly.addon.price);
	let addonQuarterlyAsMonthly = displayPrice(price.quarterly.addon.price / 4);
	let addonYearlyAsMonthly = displayPrice(price.yearly.addon.price / 12);

	interface Props {
		plansSection: HTMLElement;
	}

	let { plansSection = $bindable() }: Props = $props();
</script>

<section id="plans" bind:this={plansSection}>
	<h2>{m.plans_title()}</h2>
	<h3 class="mb-10">{m.plans_subtitle()}</h3>
	<div class="mb-6">
		<StatusIndicator label={m.availability()} />
	</div>
	<RadioGroup active="bg-black text-white font-bold" hover="hover:bg-gray-300" class="mb-20">
		<RadioItem class="text-xl" bind:group={value} name="Starter" value={Plan.Starter}
			>Démarrage</RadioItem
		>
		<RadioItem class="text-xl" bind:group={value} name="Premium" value={Plan.Premium}
			>Premium</RadioItem
		>
	</RadioGroup>
	{#if value}
		<div class="addon" id="addon">
			<div class="relative inline-block">
				<span class="badge-icon variant-filled-warning absolute -right-2 -top-2 z-10">+</span>
				<div class="badge variant-filled text-lg font-medium uppercase text-white">
					{m.addon_title()}
				</div>
			</div>
			<div class="flex flex-col gap-6 pt-6">
				<h2 class="text-white">{m.addon_unlimitedCall_title()}</h2>
				<p class="text-white">{m.addon_unlimitedCall_subtitle()}</p>
				<div class="bottom text-white">
					<h3>{m.addon_forWhom()}</h3>
					<ul>
						<li>{m.addon_includes_direction()}</li>
						<li>{m.addon_includes_hireTech()}</li>
						<li>{m.addon_includes_prioritizeRequests()}</li>
					</ul>
				</div>
			</div>
		</div>
	{/if}
	<div class="cards-container relative">
		<div class="absolute -top-20 left-5">
			<img src="/3lines.svg" alt="" class="h-10 w-10" />
			<div
				class="badge variant-filled-secondary -rotate-12 text-lg font-medium uppercase text-white"
			>
				{m.plans_mostPopular()}
			</div>
		</div>
		<div class="card border-primary-900 bg-primary-200 hover:bg-primary-hover-token">
			<div class="top">
				<h4>{m.plans_monthly_title()} <span>⚀</span></h4>
				<p class="h4-subtitle">{m.plans_monthly_subtitle()}</p>
				<p class="price">{value == Plan.Starter ? monthlyAsMonthly : addonAsMonthly}/m</p>
				<p class="price-info"></p>
				<a class="btn" href={value == Plan.Starter ? price.monthly.href : price.monthly.addon.href}
					>{m.plans_monthly_getStarted()}</a
				>
				<a href={callUrl} class="cta-call">{m.plans_monthly_bookACall()}</a>
			</div>
			<div class="bottom">
				<h5>{m.plans_monthly_includesTitle()}</h5>
				<ul>
					<li>{m.plans_monthly_includes_oneRequest()}</li>
					<li>{m.plans_monthly_includes_unlimitedProjects()}</li>
					<li>{m.plans_monthly_includes_unlimitedTeamMembers()}</li>
					<li>{m.plans_monthly_includes_easyPayments()}</li>
					<li>{m.plans_monthly_includes_payOnly()}</li>
					<li>{m.plans_monthly_includes_cancelAnytime()}</li>
				</ul>
			</div>
		</div>
		<div class="card border-warning-900 bg-warning-200 hover:bg-warning-hover-token">
			<div class="top">
				<h4>{m.plans_quarterly_title()} <span>⚃</span></h4>
				<p class="h4-subtitle">{m.plans_quarterly_subtitle()}</p>
				<p class="price">
					{value == Plan.Starter ? quarterlyAsMonthly : addonQuarterlyAsMonthly}/m
				</p>
				<p class="price-info">
					{m.plans_quarterly_priceInfo()}
					{value == Plan.Starter
						? displayPrice(price.quarterly.price)
						: displayPrice(price.quarterly.addon.price)}
				</p>
				<a
					class="btn"
					href={value == Plan.Starter ? price.quarterly.href : price.quarterly.addon.href}
					>{m.plans_quarterly_getStarted()}</a
				>
				<a href={callUrl} class="cta-call inline-block">{m.plans_quarterly_bookACall()}</a>
			</div>
			<div class="bottom">
				<h5>{m.plans_quarterly_includesTitle()}</h5>
				<ul>
					<li>{m.plans_quarterly_includes_oneRequest()}</li>
					<li>{m.plans_quarterly_includes_unlimitedProjects()}</li>
					<li>{m.plans_quarterly_includes_unlimitedTeamMembers()}</li>
					<li>{m.plans_quarterly_includes_easyPayments()}</li>
					<li>{m.plans_quarterly_includes_payOnly()}</li>
					<li>{m.plans_quarterly_includes_cancelAnytime()}</li>
				</ul>
			</div>
		</div>
		<div class="card border-success-900 bg-success-200 hover:bg-success-hover-token">
			<div class="top">
				<h4>{m.plans_yearly_title()} <span>⚅ ⚅</span></h4>
				<p class="h4-subtitle">{m.plans_yearly_subtitle()}</p>
				<p class="price">{value == Plan.Starter ? yearlyAsMonthly : addonYearlyAsMonthly}/m</p>
				<p class="price-info">
					{m.plans_yearly_priceInfo()}
					{value == Plan.Starter
						? displayPrice(price.yearly.price)
						: displayPrice(price.yearly.addon.price)}
				</p>
				<a class="btn" href={value == Plan.Starter ? price.yearly.href : price.yearly.addon.href}
					>{m.plans_yearly_getStarted()}</a
				>
				<a href={callUrl} class="cta-call">{m.plans_yearly_bookACall()}</a>
			</div>
			<div class="bottom">
				<h5>{m.plans_yearly_includesTitle()}</h5>
				<ul>
					<li>{m.plans_yearly_includes_oneRequest()}</li>
					<li>{m.plans_yearly_includes_unlimitedProjects()}</li>
					<li>{m.plans_yearly_includes_unlimitedTeamMembers()}</li>
					<li>{m.plans_yearly_includes_easyPayments()}</li>
					<li>{m.plans_yearly_includes_payOnly()}</li>
					<li>{m.plans_yearly_includes_cancelAnytime()}</li>
				</ul>
			</div>
		</div>
		<div class="card">
			<div class="top">
				<BookACall2 />
				<h7>{m.plans_call_title()}</h7>
				<p>{m.plans_call_subtitle()}</p>
				<a href={callUrl} target="_blank" class="cta-call">{m.plans_call_bookNow()}</a>
			</div>
			<div class="bottom">
				<GiveMoney />
				<h7>{m.plans_referral_title()}</h7>
				<p>{m.plans_referral_subtitle()}</p>
				<a href="#" class="cta-call">{m.plans_referral_joinNow()}</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.bg-noise {
		background-image: var(--bg-noise-url);
		background-repeat: repeat;
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
			@apply h-12 pb-8 text-sm;
		}

		.price {
			@apply pb-4 text-2xl font-bold xl:text-3xl;
		}

		.price-info {
			@apply h-12 pb-8 text-xs font-semibold text-slate-600;
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
		@apply mb-28 mt-1 w-full bg-black p-8 text-center text-2xl;
		@apply bg-noise;
		@media (min-aspect-ratio: 1/1) {
			//@apply text-left;
		}
	}
</style>
