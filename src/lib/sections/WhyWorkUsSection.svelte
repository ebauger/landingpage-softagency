<script lang="ts">
	import viewport from '$lib/actions/viewport';

	let once = false;

	export let whyWorkUsSection: HTMLElement;
	export let content: any;
</script>

<section class="scope" id="scope" bind:this={whyWorkUsSection}>
	<h2>{content.whyWorkUs.title}</h2>
	<ul class="max-w-10/12 m-4 text-center">
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=1"
		>
			{content.whyWorkUs.reasons.webApp}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=2"
		>
			{content.whyWorkUs.reasons.aiIntegration}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=3"
		>
			{content.whyWorkUs.reasons.browserExtension}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=4"
		>
			{content.whyWorkUs.reasons.collectData}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=5"
		>
			{content.whyWorkUs.reasons.shopifyBoutique}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=6"
		>
			{content.whyWorkUs.reasons.reliableBackend}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=7"
		>
			{content.whyWorkUs.reasons.cloudMigration}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full"
			use:viewport={{ once }}
			style="--animation-step=8"
		>
			{content.whyWorkUs.reasons.reinforceTeam}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full px-6 py-3"
			use:viewport={{ once }}
			style="--animation-step=9"
		>
			{content.whyWorkUs.reasons.mvpDevelopment}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full px-6 py-3"
			use:viewport={{ once }}
			style="--animation-step=9"
		>
			{content.whyWorkUs.reasons.ctoReplacement}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full px-6 py-3"
			use:viewport={{ once }}
			style="--animation-step=9"
		>
			{content.whyWorkUs.reasons.hiringHelp}
		</li>
		<li
			class="fadeIn badge variant-filled mb-6 rounded-full px-6 py-3"
			use:viewport={{ once }}
			style="--animation-step=9"
		>
			{content.whyWorkUs.reasons.ctoLeaveReplacement}
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
