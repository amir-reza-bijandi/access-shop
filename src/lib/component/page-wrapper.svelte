<script lang="ts">
	import type { Snippet } from 'svelte';

	type PageWrapperProps = {
		children: Snippet;
		as?: 'main' | 'div';
		introAnimation?: boolean;
	};
	const { as = 'main', introAnimation = false, children }: PageWrapperProps = $props();
</script>

<svelte:element this={as} class="page-wrapper {introAnimation ? 'intro' : ''}">
	{@render children()}
</svelte:element>

<style>
	.page-wrapper {
		padding-block: 6.4rem;
	}

	.page-wrapper.intro {
		animation: intro-up 1s ease backwards;
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
			padding-bottom: 9.6rem;
		}
	}
</style>
