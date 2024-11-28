<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	type CardProps = SvelteHTMLElements['div'];
	const { class: className = '', children, ...restOfProps }: CardProps = $props();
</script>

<div class={['card', className].join(' ')} {...restOfProps}>
	{@render children?.()}
</div>

<style>
	.card {
		border: 1px solid var(--stroke);
		border-radius: 1.6rem;
		background: hsl(var(--bg-primary) / 33%);
		backdrop-filter: blur(40px);
	}
</style>
