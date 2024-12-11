<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import type { Snippet } from 'svelte';
	import { X } from 'lucide-svelte';
	import { trapFocus } from 'trap-focus-svelte';
	import { fade, scale } from 'svelte/transition';

	/* ---------------------------------- Props --------------------------------- */
	export type ModalProps = {
		children: Snippet;
		header: Snippet;
		open: boolean;
		'--height'?: string;
		'--opacity'?: number;
		headerHeight?: number;
		onclose?: () => void;
	};
	let { children, header, open, headerHeight = $bindable(0), onclose }: ModalProps = $props();

	/* -------------------------------- Constants ------------------------------- */
	const TRANSITION_DURATION = 200;

	/* ---------------------------------- State --------------------------------- */
	let closeButton: HTMLButtonElement | undefined = $state();

	/* --------------------------------- Effect --------------------------------- */
	$effect(() => {
		// Pause hero cards animation while modal is open
		const cards = document.getElementById('hero-cards');
		if (open) {
			document.documentElement.style.overflowY = 'hidden';
			if (cards) {
				cards.classList.add('pause-animations');
			}
		}
		// Fix focus trap focusing the close button
		if (closeButton) {
			closeButton.blur();
		}
		return () => {
			document.documentElement.style.overflowY = 'auto';
			if (cards) {
				cards.classList.remove('pause-animations');
			}
		};
	});

	/* --------------------------------- Events --------------------------------- */
	const handleCloseModal = (e: MouseEvent) => {
		if (e.target === e.currentTarget) {
			onclose?.();
		}
	};
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && open && onclose?.()} />
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if open}
	<div
		class="overlay"
		onclick={handleCloseModal}
		transition:fade={{ duration: TRANSITION_DURATION }}
	>
		<section
			class="modal box rounded-lg"
			use:trapFocus
			transition:scale={{ duration: TRANSITION_DURATION, opacity: 0, start: 0.8 }}
		>
			<header class="header" bind:clientHeight={headerHeight}>
				{@render header()}
				<button class="close" onclick={onclose} bind:this={closeButton}><X /></button>
			</header>
			<div class="body">{@render children()}</div>
		</section>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		background: var(--bg-primary-33);
		backdrop-filter: blur(40px);
		z-index: 99999;
	}

	.modal {
		--modal-padding: 2rem;
		display: grid;
		grid-template-rows: auto 1fr;
		width: 100%;
		max-width: 49.2rem;
		height: var(--height);
		transition: height var(--duration);
		overflow: hidden;
		margin-inline: 2rem;
	}

	.modal > * {
		transition: opacity var(--duration);
		opacity: var(--opacity);
	}

	.body {
		position: relative;
		flex: 1;
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

	/* 532px */
	@media (max-width: 33.25rem) {
		.modal {
			max-width: calc(100vw - 4rem);
			--modal-padding: 1.6rem;
		}
	}
</style>
