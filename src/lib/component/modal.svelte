<script lang="ts">
	import { X } from 'lucide-svelte';
	import Portal from 'svelte-portal';
	import Box from './box.svelte';
	import type { Snippet } from 'svelte';
	import { trapFocus } from 'trap-focus-svelte';

	export type ModalProps = {
		children: Snippet;
		header: Snippet;
		open: boolean;
		height?: number;
		opacity?: number;
		onclose?: () => void;
	};
	const { children, header, open, opacity = 1, height = 38.4, onclose }: ModalProps = $props();

	$effect(() => {
		const cards = document.getElementById('hero-cards');
		if (open) {
			document.documentElement.style.overflowY = 'hidden';
			if (cards) {
				cards.classList.add('pause-animations');
			}
		}
		return () => {
			document.documentElement.style.overflowY = 'auto';
			if (cards) {
				cards.classList.remove('pause-animations');
			}
		};
	});
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && onclose?.()} />
<Portal target="body">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="overlay {open ? 'open' : ''}" onclick={onclose}></div>
	<!-- Since we are using Portal we can not pass custom css properties directly to component -->
	<section
		style:--modal-opacity={open ? opacity : 0}
		style:--modal-height={`${height}rem`}
		class="modal {open ? 'open' : ''}"
		use:trapFocus
	>
		<Box class="box">
			<header class="header">
				{@render header()}
				<button class="close" onclick={onclose}><X /></button>
			</header>
			<div class="body">{@render children()}</div>
		</Box>
	</section>
</Portal>

<style>
	.overlay {
		position: fixed;
		inset: 0;
		background: var(--bg-primary-33);
		backdrop-filter: blur(40px);
		z-index: 99999;
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--duration);
	}

	.modal {
		--modal-padding: 2rem;
		display: grid;
		grid-template-rows: 1fr;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.8);
		z-index: 99999;
		width: 100%;
		/* Add 4rem to account for padding */
		max-width: 53.2rem;
		padding-inline: var(--modal-padding);
		min-height: var(--modal-height);
		opacity: 0;
		pointer-events: none;
		transition-property: transform, opacity, min-height;
		transition-duration: var(--duration);
	}

	.modal :global(.box) {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.modal :global(.box > *) {
		transition: opacity var(--duration);
	}

	.modal.open :global(.box > *) {
		opacity: var(--modal-opacity);
	}

	.body {
		position: relative;
		flex: 1;
	}

	.overlay.open,
	.modal.open {
		pointer-events: all;
		opacity: 1;
	}

	.modal.open {
		transform: translate(-50%, -50%) scale(1);
	}

	.modal :global(.box) {
		background: var(--bg-primary);
	}

	.header {
		display: flex;
		justify-content: space-between;
		padding: var(--modal-padding);
	}

	.close {
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
	}

	/* Mobile */
	@media (max-width: 33.25rem) {
		.modal {
			max-width: 52.4rem;
			min-height: calc(var(--modal-height) - 2rem);
			--modal-padding: 1.6rem;
		}
	}
</style>
