<script lang="ts">
	import type { Snippet } from 'svelte';

	type HeaderProps = {
		text: Snippet | string;
		description: Snippet | string;
	};
	const { text, description }: HeaderProps = $props();
</script>

<header class="title">
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
</style>
