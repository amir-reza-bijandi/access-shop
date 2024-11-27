<script>
	import Pattern from '$lib/component/pattern.svelte';
	import '$lib/style/main.css';
	import Header from './header.svelte';
	const { children } = $props();
</script>

<div class="container">
	<Pattern class="background-pattern" />
	<Header />
	{@render children()}
</div>

<style>
	.container {
		max-width: 128rem;
		margin-inline: auto;
		padding: 3.2rem;
	}

	.container :global(.background-pattern) {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		min-width: 1920px;
		z-index: -1;
	}
</style>
