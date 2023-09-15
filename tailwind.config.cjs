// @ts-check
import { join } from 'path'

/* addons */
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
/* end addons */

import { skeleton } from '@skeletonlabs/tw-plugin';

import { myCustomTheme } from './zbranch-theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [forms, typography, skeleton({
		themes: {
			custom: [myCustomTheme]
		}
	})
	],
}
