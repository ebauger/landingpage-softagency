import type { PageServerLoad } from './$types';
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	// Dev-only page: not exposed in production builds
	if (!dev) {
		error(404, 'Not found');
	}

	const { lang, targetName } = params;

	// Load the appropriate language content locally
	const modules = import.meta.glob('./*.ts');

	if (!modules[`./${lang}.ts`]) {
		error(404, 'Language not supported for this page');
	}

	const module = (await modules[`./${lang}.ts`]()) as typeof import('./fr.ts');
	const { content } = module;

	// Use targetName from URL if provided, otherwise use default from content
	const finalTargetName = targetName || content.sourcingTalents.terminalMessage.targetName;

	return {
		content: {
			...content,
			sourcingTalents: {
				...content.sourcingTalents,
				terminalMessage: {
					...content.sourcingTalents.terminalMessage,
					targetName: finalTargetName
				}
			}
		},
		lang
	};
};
