<script>
	import Pattern from '$lib/component/pattern.svelte';
	import '$lib/style/main.css';
	import Header from './header.svelte';
	const { children } = $props();
</script>

<div class="container">
	<Pattern class="top-pattern" />
	<Header />
	{@render children()}
	<Pattern class="bottom-pattern" />
</div>

<style>
	.container {
		position: relative;
		max-width: 128rem;
		margin-inline: auto;
		padding: 3.2rem;
	}

	.container :global(.top-pattern),
	.container :global(.bottom-pattern) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		min-width: 1920px;
		z-index: -1;
	}

	.container :global(.top-pattern) {
		top: 0;
	}

	.container :global(.bottom-pattern) {
		bottom: 0;
		transform: translateX(-50%) rotate(180deg);
	}
</style>
