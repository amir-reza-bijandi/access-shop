<script lang="ts">
	import type {
		HTMLButtonAttributes,
		HTMLAnchorAttributes,
		HTMLLabelAttributes
	} from 'svelte/elements';
	import { Icon as LucideIcon } from 'lucide-svelte';
	import rippleEffect from '$lib/action/ripple-effect.svelte';

	type ButtonProps = (
		| ({
				as?: 'button';
		  } & HTMLButtonAttributes)
		| ({
				as: 'a';
		  } & HTMLAnchorAttributes)
		| ({
				as: 'label';
		  } & HTMLLabelAttributes)
	) & {
		icon?: typeof LucideIcon;
		variant?: 'fill' | 'outline';
	};

	const {
		as = 'button',
		icon: Icon,
		variant = 'fill',
		children,
		class: className,
		...restOfProps
	}: ButtonProps = $props();
</script>

<svelte:element this={as} class="button {variant} {className}" {...restOfProps} use:rippleEffect>
	{@render children?.()}
	{#if Icon}
		<Icon strokeWidth={1.5} size={20} absoluteStrokeWidth />
	{/if}
</svelte:element>

<style>
	.button {
		--color: var(--accent);
		width: fit-content;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;
		padding: 1.4rem;
		height: 4.8rem;
		text-decoration: none;
		border-radius: 0.8rem;
		border: 1px solid transparent;
		outline: 0;
		transition-property: background-color, border-color, opacity;
		transition-duration: var(--duration);
	}

	.button:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.fill {
		--ripple-color: hsl(var(--base-gray-100) / 30%);
		color: var(--fg-primary);
		background-color: var(--color);
		border-color: var(--color);
	}

	.fill:hover {
		--color: var(--accent-tint);
	}

	.outline {
		background: var(--accent-5);
		color: var(--accent);
		border-color: var(--accent);
	}

	.outline:hover {
		background: var(--accent-10);
	}
</style>
