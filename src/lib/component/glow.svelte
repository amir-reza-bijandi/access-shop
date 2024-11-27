<script lang="ts">
	type GlowProps = {
		class?: string;
	};
	const { class: className = '' }: GlowProps = $props();
</script>

<div class={['glow', className].join(' ')}></div>

<style>
	.glow {
		background: radial-gradient(circle, hsl(var(--accent)) 0%, transparent 75%);
		width: 256px;
		height: auto;
		aspect-ratio: 1 / 1;
		opacity: 0.08;
	}
</style>
