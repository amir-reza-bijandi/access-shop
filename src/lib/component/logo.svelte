<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import { BrainCircuit } from 'lucide-svelte';

	/* ---------------------------------- Props --------------------------------- */
	type LogoProps = {
		interactive?: boolean;
	};
	const { interactive = true }: LogoProps = $props();
</script>

<a class="logo" class:interactive href="/">
	<div class="icon"><BrainCircuit strokeWidth={2.5} /></div>
	اکسس شاپ
</a>

<style>
	.logo {
		display: flex;
		align-items: center;
		color: inherit;
		text-decoration: none;
		font-weight: 700;
		font-size: 2rem;
		gap: 1rem;
		pointer-events: none;
	}

	.logo.interactive {
		pointer-events: all;
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
