<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	//import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../theme.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	//import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import type { Config } from '@sveltejs/adapter-vercel';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	export const config: Config = {
		runtime: 'edge'
	};
</script>

{@render children?.()}
