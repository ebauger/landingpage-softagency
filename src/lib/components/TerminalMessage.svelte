<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		targetName?: string;
		message?: string;
		autoHide?: boolean;
		duration?: number;
	}

	let {
		targetName = 'recruteur',
		message = 'hello {target_name} !',
		autoHide = false,
		duration = 8000
	}: Props = $props();

	let visible: boolean = $state(false);
	let displayMessage: string = $state('');
	let showTerminated: boolean = $state(false);
	let showFinalPrompt: boolean = $state(false);

	onMount(() => {
		// Vérifier si déjà vu
		const hasSeen = localStorage.getItem('terminal-message-seen');
		if (!hasSeen) {
			visible = true;
			typewriterEffect();
			// Marquer comme vu
			localStorage.setItem('terminal-message-seen', 'true');
		}
	});

	function typewriterEffect() {
		// Animation de frappe
		const finalMessage = message.replace(/\[target_name\]/g, targetName);
		let i = 0;
		displayMessage = '';

		const interval = setInterval(() => {
			if (i < finalMessage.length) {
				displayMessage += finalMessage.charAt(i);
				i++;
			} else {
				clearInterval(interval);
				// Show terminated message after a brief pause
				setTimeout(() => {
					showTerminated = true;
					// Show final prompt after terminated message
					setTimeout(() => {
						showFinalPrompt = true;
						if (autoHide) {
							setTimeout(() => (visible = false), duration);
						}
					}, 1000);
				}, 500);
			}
		}, 80); // Vitesse de frappe
	}

	function close() {
		visible = false;
	}
</script>

{#if visible}
	<div class="terminal-message">
		<div class="terminal-header">
			<span class="terminal-title">~/.zbranch/talent-sourcing</span>
			<button class="terminal-close" onclick={close}>×</button>
		</div>
		<div class="terminal-content">
			<pre>$ <span class="typed-text" class:typing={!showTerminated}>{displayMessage}</span></pre>
			{#if showTerminated}
				<div class="terminal-result">
					Terminated
				</div>
			{/if}
			{#if showFinalPrompt}
				<div class="final-prompt">
					<span class="prompt-dollar">$</span>
					<span class="final-cursor"></span>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.terminal-message {
		position: fixed;
		top: 20px;
		right: 20px;
		width: 450px;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		border: 1px solid #444;
		border-radius: 8px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
		z-index: 9999;
		font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
		animation: slideInTerminal 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		backdrop-filter: blur(10px);
	}

	.terminal-header {
		background: linear-gradient(135deg, #333 0%, #444 100%);
		padding: 10px 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 8px 8px 0 0;
		border-bottom: 1px solid #555;
	}

	.terminal-title {
		color: #00ff88;
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.terminal-close {
		background: rgba(255, 0, 0, 0.2);
		border: 1px solid rgba(255, 0, 0, 0.3);
		color: #ff6b6b;
		font-size: 16px;
		cursor: pointer;
		padding: 2px 8px;
		border-radius: 4px;
		transition: all 0.2s ease;

		&:hover {
			background: rgba(255, 0, 0, 0.3);
			border-color: rgba(255, 0, 0, 0.5);
			transform: scale(1.1);
		}
	}

	.terminal-content {
		padding: 24px;
		color: #00ff41;
		font-size: 15px;
		line-height: 1.4;
		word-wrap: break-word;
		overflow-wrap: break-word;
		word-break: break-word;
		box-sizing: border-box;
	}

	.typed-text {
		color: #00ff41;
	}

	.typed-text.typing::after {
		content: '';
		display: inline-block;
		width: 8px;
		height: 16px;
		background-color: #00ff41;
		vertical-align: text-bottom;
		margin-left: 2px;
		animation: cursorBlink 1s infinite;
	}

	.terminal-content pre {
		margin: 0;
		padding: 0;
		white-space: pre-wrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
	}

	.terminal-result {
		margin-top: 8px;
		margin-bottom: 8px;
		font-size: 14px;
		color: #ff6b6b;
		font-weight: 500;
	}

	.final-prompt {
		margin-top: 0;
		font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
		font-size: 15px;
		color: #00ff41;
		display: flex;
		align-items: center;
	}

	.prompt-dollar {
		margin-right: 8px;
		color: #00ff41;
	}

	.final-cursor {
		display: inline-block;
		width: 8px;
		height: 16px;
		background-color: #00ff41;
		vertical-align: text-bottom;
		animation: cursorBlink 1s infinite;
	}

	@keyframes slideInTerminal {
		0% {
			transform: translateX(100%) translateY(-20px) rotate(2deg);
			opacity: 0;
			filter: blur(10px);
		}
		50% {
			transform: translateX(0) translateY(0) rotate(-1deg);
			opacity: 0.8;
		}
		100% {
			transform: translateX(0) translateY(0) rotate(0deg);
			opacity: 1;
			filter: blur(0);
		}
	}

	@keyframes cursorBlink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	// Responsive design
	@media (max-width: 768px) {
		.terminal-message {
			width: calc(100vw - 40px);
			right: 20px;
			left: 20px;
			top: 10px;
		}

		.terminal-content {
			padding: 16px;
			font-size: 14px;
		}

		.terminal-prompt {
			font-size: 14px;
		}
	}

	// Extra small screens
	@media (max-width: 480px) {
		.terminal-message {
			width: calc(100vw - 20px);
			right: 10px;
			left: 10px;
			top: 5px;
		}

		.terminal-content {
			padding: 12px;
			font-size: 13px;
			line-height: 1.3;
		}

		.terminal-prompt {
			font-size: 13px;
		}
	}
</style>
