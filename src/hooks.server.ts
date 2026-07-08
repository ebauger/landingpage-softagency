import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$paraglide/server.js';

const localizedPath = /^\/(en|fr)(\/|$)/;

export const handle: Handle = ({ event, resolve }) => {
	// Non-localized paths (/, assets) bypass paraglide entirely
	if (!localizedPath.test(event.url.pathname)) {
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', 'en')
		});
	}

	// paraglideMiddleware scopes the locale per request (AsyncLocalStorage),
	// so m.*() calls during SSR resolve to the locale of the URL
	return paraglideMiddleware(event.request, ({ request, locale }) => {
		event.locals.locale = locale;
		return resolve(
			{ ...event, request },
			{
				transformPageChunk: ({ html }) => html.replace('%lang%', locale)
			}
		);
	});
};
