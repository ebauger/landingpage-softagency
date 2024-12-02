import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    redirect(302, 'https://zbranch.notion.site/Conditions-d-utilisation-des-services-de-Zbranch-eba-expert-b11fdaa429314406be9a57fd3bd30272?pvs=4');
}
