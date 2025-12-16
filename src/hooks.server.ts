import { sequence } from '@sveltejs/kit/hooks'

// Custom locale middleware without complex routing to avoid cookie access errors
const customLocaleMiddleware = async ({ event, resolve }) => {
	// Set locale based on URL path or Accept-Language header
	const url = new URL(event.request.url);
	const pathSegments = url.pathname.split('/');
	const langFromPath = pathSegments[1];

	// Check if we have a lang in the URL path (en, fr, etc.)
	const supportedLangs = ['en', 'fr'];
	const detectedLang = supportedLangs.includes(langFromPath) ? langFromPath : 'en';

	// Set locale in event.locals for use in components
	event.locals.locale = detectedLang;

	// Continue with the request
	return resolve(event);
};

export const handle = sequence(
	customLocaleMiddleware,
	// Your other hooks
	async function({ event, resolve }) {
		return resolve(event)
	}
)