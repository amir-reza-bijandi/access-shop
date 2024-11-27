<script>
	import { BrainCircuit } from 'lucide-svelte';
</script>

<a class="logo" href="/">
	<div class="icon"><BrainCircuit strokeWidth={2.5} /></div>
	اکسس شاپ
</a>

<style>
	.logo {
		display: flex;
		align-items: center;
		color: inherit;
		text-decoration: none;
		font-weight: 600;
		font-size: 2rem;
		gap: 1rem;
	}

	.icon {
		background: var(--accent);
		padding: 0.8rem;
		border-radius: 0.8rem;
	}

	.icon :global(svg) {
		display: block;
	}
</style>
