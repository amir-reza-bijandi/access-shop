<script lang="ts">
	type GlowProps = {
		'--size'?: string;
		'--top'?: string;
		'--left'?: string;
		'--bottom'?: string;
		'--right'?: string;
	};
	const props: GlowProps = $props();
</script>

<div class="glow"></div>

<style>
	.glow {
		background: radial-gradient(circle, var(--accent) 0%, transparent 75%);
		position: absolute;
		top: var(--top, unset);
		left: var(--left, unset);
		bottom: var(--bottom, unset);
		right: var(--right, unset);
		width: var(--size, 25.6rem);
		transform: translate(-50%, -50%);
		aspect-ratio: 1 / 1;
		opacity: 0.08;
		pointer-events: none;
		z-index: -1;
	}
</style>
