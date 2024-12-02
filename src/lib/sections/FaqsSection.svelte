<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	interface Props {
		faqsSection: HTMLElement;
		content: any;
	}

	let { faqsSection = $bindable(), content }: Props = $props();
</script>

<section id="faqs" bind:this={faqsSection}>
	<h2>{content.faqs.title}</h2>
	<Accordion>
		{#each content.faqs.questions as question}
			<AccordionItem>
				{#snippet summary()}
							
						<p class="summary font-bold">{question.summary}</p>
					
							{/snippet}
				{#snippet content()}
							
						<p class="content">{question.content}</p>
					
							{/snippet}
			</AccordionItem>
		{/each}
	</Accordion>
</section>
