import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    throw redirect(302, 'https://zbranch.notion.site/Conditions-de-services-de-zbranch-5b830e4051664188bb80cab51ee767cc?pvs=4');
}
