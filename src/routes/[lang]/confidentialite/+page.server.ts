import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    redirect(302, 'https://zbranch.notion.site/Politique-de-confidentialit-6a82e05250564ef69d22ccd70d964152?pvs=4');
}
