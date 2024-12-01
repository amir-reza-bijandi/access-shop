<script lang="ts">
	import type { Snippet } from 'svelte';
	import { inview } from 'svelte-inview';
	import handleViewChange from '$lib/utility/handle-view-change';

	type HeaderProps = {
		text: Snippet | string;
		description: Snippet | string;
		class?: string;
	};
	const { text, description, class: className = '' }: HeaderProps = $props();
</script>

<header class="title {className}" use:inview oninview_change={(e) => handleViewChange(e.detail)}>
	<h2 class="text">
		{#if typeof text === 'string'}
			{text}
		{:else}
			{@render text()}
		{/if}
	</h2>
	<p class="description">
		{#if typeof description === 'string'}
			{description}
		{:else}
			{@render description()}
		{/if}
	</p>
</header>

<style>
	.title {
		text-align: center;
		margin-bottom: 6.4rem;
	}

	.text {
		font-size: 3.2rem;
		font-weight: 700;
		margin-bottom: 1.2rem;
	}

	.description {
		font-size: 2rem;
	}

	/* Tablet */
	@media (max-width: 72rem) {
		.title {
			margin-bottom: 3.2rem;
		}
	}

	/* Mobile */
	@media (max-width: 32rem) {
		.title {
			margin-bottom: 2.4rem;
		}

		.text {
			font-size: 2.4rem;
			font-weight: 700;
			margin-bottom: 0.6rem;
		}

		.description {
			font-size: 1.6rem;
			line-height: 1.5;
		}
	}
</style>
