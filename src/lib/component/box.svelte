<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	type BoxProps = SvelteHTMLElements['div'];
	const { class: className = '', children, ...restOfProps }: BoxProps = $props();
</script>

<div class="box {className}" {...restOfProps}>
	{@render children?.()}
</div>

<style>
	.box {
		border: 1px solid var(--stroke);
		border-radius: 1.6rem;
		background: hsl(var(--bg-primary) / 33%);
		backdrop-filter: blur(40px);
	}
</style>
