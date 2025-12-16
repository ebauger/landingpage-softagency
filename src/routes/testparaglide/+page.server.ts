import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	// Redirect to English version by default
	throw redirect(307, '/testparaglide/en');
};