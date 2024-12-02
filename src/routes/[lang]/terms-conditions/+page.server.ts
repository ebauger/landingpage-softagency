import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    redirect(302, 'https://zbranch.notion.site/Terms-of-Use-for-Zbranch-Services-1469184a339d80b69d01e798408f95ab?pvs=4');
}
