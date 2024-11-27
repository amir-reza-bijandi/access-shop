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
	};

	const {
		as = 'button',
		icon: Icon,
		children,
		class: className,
		...restOfProps
	}: ButtonProps = $props();
</script>

<svelte:element this={as} class={['button', className].join(' ')} {...restOfProps}>
	{@render children?.()}
	{#if Icon}
		<Icon strokeWidth={1.5} size={20} absoluteStrokeWidth />
	{/if}
</svelte:element>

<style>
	.button {
		cursor: pointer;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;
		padding: 1.4rem;
		height: 4.8rem;
		background: hsl(var(--accent) / 0.05);
		color: hsl(var(--accent));
		text-decoration: none;
		border-radius: 0.8rem;
		border: 1px solid hsl(var(--accent));
		outline: 0;
		transition: background-color var(--duration);
	}

	.button:hover {
		background: hsl(var(--accent) / 0.1);
	}

	.button:active {
		background: hsl(var(--accent) / 0.2);
	}
</style>
