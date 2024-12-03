<script lang="ts">
	import type { Snippet } from 'svelte';

	type PageWrapperProps = {
		children: Snippet;
		as?: 'main' | 'div';
	};
	const { as = 'main', children }: PageWrapperProps = $props();
</script>

<svelte:element this={as} class="page-wrapper">
	{@render children()}
</svelte:element>

<style>
	.page-wrapper {
		padding-block: 6.4rem;
	}

	@media (max-width: 72rem) {
		.page-wrapper {
			padding-block: 4.8rem;
		}
	}

	@media (max-width: 32rem) {
		.page-wrapper {
			/* Using a higher value to account for navigation on mobile */
			padding-top: 3.2rem;
			padding-bottom: 6.8rem;
		}
	}
</style>
