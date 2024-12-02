import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
    const acceptLanguage = request.headers.get('accept-language');

    if (acceptLanguage) {
        const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0];

        if (preferredLanguage === 'en') {
            redirect(302, '/en');
        }
    }

    redirect(302, '/fr');
};