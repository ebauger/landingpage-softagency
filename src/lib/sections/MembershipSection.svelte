<script lang="ts">
	import * as m from '$paraglide/messages.js';
	import viewport from '$lib/actions/viewport';

	let once = false;
	interface Props {
		membershipSection: HTMLElement;
	}

	let { membershipSection = $bindable() }: Props = $props();
</script>

<section class="benefits" bind:this={membershipSection}>
	<h2>{m.membership_title()}</h2>
	<h3>{m.membership_subtitle()}</h3>
	<a
		class="btn variant-filled-primary mx-auto my-8 w-max border-b-4 border-primary-900 text-2xl hover:translate-y-1"
		href="#plans">{m.membership_startNow()}</a
	>
	<div class="benefit-grid fadeIn" use:viewport={{ once }}>
		<div class="benefit-item">
			<img src="/animate/edit.apng" alt="edit" class="benefit-item-img" />
			<h4>{m.membership_benefits_requestsBoard_title()}</h4>
			<p class="benefit-item-text">{m.membership_benefits_requestsBoard_description()}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/calendar.apng" alt="calendar" class="benefit-item-img" />
			<h4>{m.membership_benefits_quickDelivery_title()}</h4>
			<p class="benefit-item-text">{m.membership_benefits_quickDelivery_description()}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/analysis.apng" alt="analysis" class="benefit-item-img" />
			<h4>{m.membership_benefits_flatRate_title()}</h4>
			<p class="benefit-item-text">{m.membership_benefits_flatRate_description()}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/guarantee.apng" alt="guarantee" class="benefit-item-img" />
			<h4>{m.membership_benefits_topQuality_title()}</h4>
			<p class="benefit-item-text">{m.membership_benefits_topQuality_description()}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/pause.apng" alt="" class="benefit-item-img" />
			<h4>{m.membership_benefits_flexible_title()}</h4>
			<p class="benefit-item-text">{m.membership_benefits_flexible_description()}</p>
		</div>
		<div class="benefit-item">
			<img src="/animate/fingerprint.apng" alt="fingerprint" class="benefit-item-img" />
			<h4>{m.membership_benefits_uniqueAndYours_title()}</h4>
			<p class="benefit-item-text">{m.membership_benefits_uniqueAndYours_description()}</p>
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
