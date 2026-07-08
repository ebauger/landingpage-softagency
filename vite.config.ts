import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/',
					localized: [
						['en', '/en'],
						['fr', '/fr']
					]
				},
				{
					pattern: '/:path(.*)?',
					localized: [
						['en', '/en/:path(.*)?'],
						['fr', '/fr/:path(.*)?']
					]
				}
			]
		}),
		sveltekit()
	],
	resolve: {
		alias: {
			$actions: '/src/lib/actions'
		}
	},
	css: {
		lightningcss: {
			// skeleton v2's tw-plugin emits an invalid ::file-selector-button rule
			// that the vite 8 css minifier rejects; drop once on skeleton/tailwind 4
			errorRecovery: true
		}
	}
});
