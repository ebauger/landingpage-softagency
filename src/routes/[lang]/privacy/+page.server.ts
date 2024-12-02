import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    redirect(302, 'https://zbranch.notion.site/Privacy-Policy-1469184a339d80869114d82146ae849e');
}
