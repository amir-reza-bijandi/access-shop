<script lang="ts">
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
	import { Icon as LucideIcon } from 'lucide-svelte';

	type ButtonProps = (
		| ({
				as?: 'button';
		  } & HTMLButtonAttributes)
		| ({
				as: 'a';
		  } & HTMLAnchorAttributes)
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

<svelte:element this={as} class={['button', variant, className].join(' ')} {...restOfProps}>
	{@render children?.()}
	{#if Icon}
		<Icon strokeWidth={1.5} size={20} absoluteStrokeWidth />
	{/if}
</svelte:element>

<style>
	.button {
		--color: hsl(var(--accent));
		cursor: pointer;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;
		padding: 1.4rem;
		height: 4.8rem;
		text-decoration: none;
		border-radius: 0.8rem;
		border: 1px solid transparent;
		outline: 0;
		transition-property: background-color, border-color;
		transition-duration: var(--duration);
	}

	.fill {
		color: hsl(var(--fg-primary));
		background-color: var(--color);
		border-color: var(--color);
	}

	.fill:hover {
		--color: hsl(var(--accent-tint));
	}

	.fill:active {
		--color: hsl(var(--accent-shade));
	}

	.outline {
		background: hsl(var(--accent) / 5%);
		color: hsl(var(--accent));
		border-color: hsl(var(--accent));
	}

	.outline:hover {
		background: hsl(var(--accent) / 10%);
	}

	.outline:active {
		background: hsl(var(--accent) / 20%);
	}
</style>
