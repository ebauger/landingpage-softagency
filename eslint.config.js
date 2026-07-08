import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import svelteConfig from './svelte.config.js';

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		rules: {
			// links are locale-prefixed strings from paraglide messages, external
			// urls, or #anchors — this app doesn't use resolve()-based routing
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.svelte'],
				svelteConfig
			}
		}
	},
	{
		ignores: [
			'.svelte-kit/',
			'.vercel/',
			'build/',
			'dist/',
			'node_modules/',
			'src/paraglide/',
			'static/'
		]
	}
);
