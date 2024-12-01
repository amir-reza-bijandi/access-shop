<script>
	import Pattern from '$lib/component/pattern.svelte';
	import Background from './_lib/component/background.svelte';
	import Header from './_lib/component/header.svelte';
	import '../app.css';
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

	@media (max-width: 72rem) {
		.container {
			padding: 2.4rem;
		}
	}

	@media (max-width: 32rem) {
		.container {
			padding: 1.6rem;
		}
	}
</style>
