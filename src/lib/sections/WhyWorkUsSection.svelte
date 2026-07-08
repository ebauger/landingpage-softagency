<script lang="ts">
	import * as m from '$paraglide/messages.js';
	import viewport from '$lib/actions/viewport';

	let once = false;

	interface Props {
		whyWorkUsSection: HTMLElement;
	}

	let { whyWorkUsSection = $bindable() }: Props = $props();
</script>

<section class="scope" id="scope" bind:this={whyWorkUsSection}>
	<h2>{m.whyWorkUs_title()}</h2>
	<ul class="max-w-10/12 m-4 text-center">
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=1"
		>
			{m.whyWorkUs_reasons_webApp()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=2"
		>
			{m.whyWorkUs_reasons_aiIntegration()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=3"
		>
			{m.whyWorkUs_reasons_browserExtension()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=4"
		>
			{m.whyWorkUs_reasons_collectData()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=5"
		>
			{m.whyWorkUs_reasons_shopifyBoutique()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=6"
		>
			{m.whyWorkUs_reasons_reliableBackend()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=7"
		>
			{m.whyWorkUs_reasons_cloudMigration()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=8"
		>
			{m.whyWorkUs_reasons_reinforceTeam()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full px-6 py-3"
			use:viewport={{ once }}
			style="--animation-step=9"
		>
			{m.whyWorkUs_reasons_mvpDevelopment()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full px-6 py-3"
			use:viewport={{ once }}
			style="--animation-step=9"
		>
			{m.whyWorkUs_reasons_ctoReplacement()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full px-6 py-3"
			use:viewport={{ once }}
			style="--animation-step=9"
		>
			{m.whyWorkUs_reasons_hiringHelp()}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full px-6 py-3"
			use:viewport={{ once }}
			style="--animation-step=9"
		>
			{m.whyWorkUs_reasons_ctoLeaveReplacement()}
		</li>
	</ul>
</section>

<style lang="scss">
	/* 	ul {
		@apply flex flex-wrap justify-center;
	}
	li {
		@apply mb-4;
	} */
	.scope {
		li {
			text-wrap: balance;

			font-size: clamp(0.7rem, 3vw, 1.5rem);
			line-height: clamp(1.5rem, 2.5vw, 1.75rem);
			padding: clamp(0.5rem, 2vw, 0.8rem) clamp(0.5rem, 2vw, 1rem);
		}
	}
</style>
