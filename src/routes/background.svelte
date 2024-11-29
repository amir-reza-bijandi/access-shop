<script>
	import Pattern from '$lib/component/pattern.svelte';
</script>

<div class="background">
	<Pattern />
	<Pattern />
</div>

<style>
	.background {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		z-index: -1;
		display: flex;
		flex-direction: column;
	}

	.background :global(> *) {
		width: 192rem;
		height: 97.4rem;
	}

	.background :global(:last-of-type) {
		margin-top: auto;
		transform: rotate(180deg);
	}
</style>
