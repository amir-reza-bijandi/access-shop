<script>
	import Pattern from '$lib/component/pattern.svelte';
	import '$lib/style/main.css';
	import Background from './background.svelte';
	import Header from './header.svelte';
	const { children } = $props();
</script>

<div class="app">
	<Background />
	<div class="container">
		<Header />
		{@render children()}
	</div>
</div>

<style>
	.app {
		position: relative;
	}

	.container {
		max-width: 128rem;
		margin-inline: auto;
		padding: 3.2rem;
	}
</style>
