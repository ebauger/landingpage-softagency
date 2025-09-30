import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { lang, targetName } = params;

	// Load the appropriate language content locally
	const modules = import.meta.glob('./*.ts');

	if (!modules[`./${lang}.ts`]) {
		throw new Error('Language not supported for this page');
	}

	const module = await modules[`./${lang}.ts`]() as { content: any; DataType?: any };
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