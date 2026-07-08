import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const { lang } = params;

	if (!['en', 'fr'].includes(lang)) {
		error(404, 'Language not supported');
	}

	return { lang };
};
