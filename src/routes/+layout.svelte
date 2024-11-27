<script>
	import '$lib/style/main.css';
	import Header from './header.svelte';
	const { children } = $props();
</script>

<div class="container">
	<Header />
	{@render children()}
</div>

<style>
	.container {
		max-width: 128rem;
		margin-inline: auto;
		padding: 3.2rem;
	}
</style>
