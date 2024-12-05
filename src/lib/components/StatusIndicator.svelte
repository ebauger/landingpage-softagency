<script lang="ts">
	interface Props {
		label?: string;
	}

	let { label = 'Online'}: Props = $props();
</script>

<div class="flex items-center gap-2">
	<div class="relative flex">
		<div class="h-3 w-3 rounded-full bg-error-500"></div>
		<div class="absolute -inset-1">
			<div class="h-full w-full animate-ping rounded-full bg-error-500 opacity-75"></div>
		</div>
	</div>
	{#if label}
		<span class="pl-1 text-xs font-semibold text-slate-600">{label}</span>
	{/if}
</div>

<style>
	@keyframes ping {
		75%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	.animate-ping {
		animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>