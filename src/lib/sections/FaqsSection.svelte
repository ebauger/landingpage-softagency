<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let faqsSection: HTMLElement;
	export let content: any;
</script>

<section id="faqs" bind:this={faqsSection}>
	<h2>{content.faqs.title}</h2>
	<Accordion>
		{#each content.faqs.questions as question}
			<AccordionItem>
				<svelte:fragment slot="summary">
					<p class="summary font-bold">{question.summary}</p>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<p class="content">{question.content}</p>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</section>
