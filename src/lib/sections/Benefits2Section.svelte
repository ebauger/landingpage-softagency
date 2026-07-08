<script lang="ts">
	import * as m from '$paraglide/messages.js';
	import { Avatar } from '@skeletonlabs/skeleton';
	import viewport from '$lib/actions/viewport';

	let once = false;
	interface Props {
		benefits2Section: HTMLElement;
	}

	let { benefits2Section = $bindable() }: Props = $props();
</script>

<section class="bg-tertiary-50" bind:this={benefits2Section}>
	<h2>{m.benefits2_neverGoingBack()}</h2>
	<h3 class="pb-8 text-lg sm:w-1/2">{m.benefits2_coreTeam()}</h3>
	<div class=" grid grid-cols-1 gap-6 border md:grid-cols-2">
		<div
			class="bg-noise slideInRight flex flex-col self-center bg-surface-50 p-4 md:px-12 md:py-12 lg:px-16 lg:py-16"
			use:viewport={{ once }}
		>
			<div class="flex flex-col gap-6">
				<div class="h-14 text-left text-9xl font-extrabold text-tertiary-500">’’</div>
				<cite class="text-left text-2xl font-semibold">{m.benefits2_testimonialText()}</cite>
				<div class="flex flex-row items-center gap-4">
					<Avatar src="/testimonials/serge.jpeg" width="w-12" />
					<p class="inline-block text-base">
						{m.benefits2_testimonialName()},
						<strong>{m.benefits2_testimonialCompany()}</strong>
					</p>
				</div>
			</div>
		</div>
		<div class="slideInLeft flex flex-col gap-4 border" use:viewport={{ once }}>
			<div>
				<h4 class="font-bold">{m.benefits2_shareAsync_title()}</h4>
				<p class="">{m.benefits2_shareAsync_description()}</p>
			</div>
			<div>
				<h4 class="font-bold">{m.benefits2_bringYourStack_title()}</h4>
				<p class="">{m.benefits2_bringYourStack_description()}</p>
			</div>
			<div>
				<h4 class="font-bold">{m.benefits2_unlimitedTeamMembers_title()}</h4>
				<p class="">{m.benefits2_unlimitedTeamMembers_description()}</p>
			</div>
		</div>
	</div>
</section>
