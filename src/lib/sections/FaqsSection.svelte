<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import * as m from '$paraglide/messages.js';

	interface Props {
		faqsSection: HTMLElement;
	}

	let { faqsSection = $bindable() }: Props = $props();

	const questions = [
		{ summary: m.faqs_questions_1_summary, content: m.faqs_questions_1_content },
		{ summary: m.faqs_questions_2_summary, content: m.faqs_questions_2_content },
		{ summary: m.faqs_questions_3_summary, content: m.faqs_questions_3_content },
		{ summary: m.faqs_questions_4_summary, content: m.faqs_questions_4_content },
		{ summary: m.faqs_questions_5_summary, content: m.faqs_questions_5_content },
		{ summary: m.faqs_questions_6_summary, content: m.faqs_questions_6_content },
		{ summary: m.faqs_questions_7_summary, content: m.faqs_questions_7_content }
	];
</script>

<section id="faqs" bind:this={faqsSection}>
	<h2>{m.faqs_title()}</h2>
	<Accordion>
		{#each questions as question (question.summary)}
			<AccordionItem>
				{#snippet summary()}
					<p class="summary font-bold">{question.summary()}</p>
				{/snippet}
				{#snippet content()}
					<p class="content">{question.content()}</p>
				{/snippet}
			</AccordionItem>
		{/each}
	</Accordion>
</section>
