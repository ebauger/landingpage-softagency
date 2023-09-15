<script lang="ts">
	import viewport from '$lib/actions/viewport';
	import t from '$lib/sections/en_translations.json';

	let once = false;
	export let membershipSection: HTMLElement;
</script>

<section class="benefits" bind:this={membershipSection}>
	<h2>{t.membership.title}</h2>
	<h3>{t.membership.subtitle}</h3>
	<a
		class="btn variant-filled-primary mx-auto my-8 w-max border-b-4 border-primary-900 text-2xl hover:translate-y-1"
		href="#plans">{t.membership.startNow}</a
	>
	<div class="benefit-grid fadeIn" use:viewport={{ once }}>
		<div class="benefit-item">
			<img src="/animate/edit.apng" alt="edit" class="benefit-item-img" />
			<h4>{t.membership.benefits.requestsBoard.title}</h4>
			<p class="benefit-item-text">{t.membership.benefits.requestsBoard.description}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/calendar.apng" alt="calendar" class="benefit-item-img" />
			<h4>{t.membership.benefits.quickDelivery.title}</h4>
			<p class="benefit-item-text">{t.membership.benefits.quickDelivery.description}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/analysis.apng" alt="analysis" class="benefit-item-img" />
			<h4>{t.membership.benefits.flatRate.title}</h4>
			<p class="benefit-item-text">{t.membership.benefits.flatRate.description}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/guarantee.apng" alt="guarantee" class="benefit-item-img" />
			<h4>{t.membership.benefits.topQuality.title}</h4>
			<p class="benefit-item-text">{t.membership.benefits.topQuality.description}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/pause.apng" alt="" class="benefit-item-img" />
			<h4>{t.membership.benefits.flexible.title}</h4>
			<p class="benefit-item-text">{t.membership.benefits.flexible.description}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/fingerprint.apng" alt="fingerprint" class="benefit-item-img" />
			<h4>{t.membership.benefits.uniqueAndYours.title}</h4>
			<p class="benefit-item-text">{t.membership.benefits.uniqueAndYours.description}</p>
		</div>
	</div>
</section>

<style lang="scss">
	.benefits {
		p {
			@apply font-light;
		}
		.benefit-grid {
			@apply grid grid-cols-1 gap-20;

			@media (min-aspect-ratio: 1/1) {
				@apply grid-flow-row grid-cols-3;
			}
		}

		.benefit-item {
			@apply flex h-full flex-col items-center justify-center text-center text-2xl;
		}

		.benefit-item-img {
			@apply h-24;
		}

		.benefit-item-text {
			@apply h-8;
		}
	}
</style>
