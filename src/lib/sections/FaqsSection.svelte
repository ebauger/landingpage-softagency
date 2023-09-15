<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import t from '$lib/sections/en_translations.json';

	export let faqsSection: HTMLElement;
</script>

<section id="faqs" bind:this={faqsSection}>
	<h2>{t.faqs.title}</h2>
	<Accordion>
		{#each t.faqs.questions as question}
			<AccordionItem>
				<svelte:fragment slot="summary">
					<p class="summary">{question.summary}</p>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p class="content">{question.content}</p>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</section>
