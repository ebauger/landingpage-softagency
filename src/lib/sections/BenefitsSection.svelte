<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import viewport from '$lib/actions/viewport';
	let once = false;

	export let benefitsSection: HTMLElement;
	export let content: any;
</script>

<section class="benefits" bind:this={benefitsSection}>
	<h2>{content.benefits.partnerForSuccess}</h2>
	<h3>{content.benefits.managingTech}</h3>
	<div class="benefit-grid">
		<div class="benefit-item">
			<img
				src="/animate/add.apng"
				alt="add"
				class="benefit-item-img fadeIn animation-delay-1"
				use:viewport={{ once }}
			/>
			<p class="text-center">{content.benefits.subscribeAndAsk}</p>
		</div>
		<div class="benefit-item">
			<img
				src="/animate/diamond.apng"
				alt="diamond"
				class="benefit-item-img fadeIn animation-delay-2"
				use:viewport={{ once }}
			/>
			<p class="text-center">{content.benefits.receiveChange}</p>
		</div>
		<div class="benefit-item">
			<img
				src="/animate/success.apng"
				alt="success"
				class="benefit-item-img fadeIn animation-delay-3"
				use:viewport={{ once }}
			/>
			<p class="text-center">{content.benefits.tuneUp}</p>
		</div>
		<div
			class="bg-noise slideInLeft relative col-span-3 flex flex-col items-center gap-6 bg-surface-300 p-6"
			use:viewport={{ once }}
		>
			<div class="h-14 text-left text-9xl font-extrabold text-tertiary-500">’’</div>
			<cite class="text-center text-2xl font-semibold">
				{content.benefits.testimonialText}
			</cite>
			<div class="flex flex-row items-center gap-4">
				<Avatar src="/testimonials/riel.jpeg" width="w-12" />
				<p class="inline-block text-base">
					{content.benefits.testimonialName}, <strong>{content.benefits.testimonialCompany}</strong>
				</p>
			</div>
			<img class="absolute -right-8 top-0 w-24" src="/blobSquareDots.svg" alt="blob" />
		</div>
	</div>
</section>

<style lang="scss">
	.benefits {
		p {
			@apply font-light;
		}
		.benefit-grid {
			@apply sm:grid sm:grid-cols-3 sm:gap-20;

			/* 			@media (min-aspect-ratio: 1/1) {
				@apply grid-flow-row sm:grid-cols-3;
			} */
		}

		.benefit-item {
			@apply flex h-full flex-col items-center justify-center text-center text-2xl;
			@apply mb-4;
		}

		.benefit-item-img {
			@apply h-24;
		}

		.benefit-item-text {
			@apply h-8;
		}
	}
</style>
