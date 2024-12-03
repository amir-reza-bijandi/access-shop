<script lang="ts">
	import Glow from './glow.svelte';

	type ProductIconProps = {
		src: string;
		class?: string;
	};
	const { class: className = '', src }: ProductIconProps = $props();
</script>

<div class="product-icon {className}">
	<Glow class="glow" />
	<img class="icon" {src} alt="لوگوی یک سرویس هوش مصنوعی" />
</div>

<style>
	.product-icon {
		position: relative;
		width: 6.4rem;
		height: auto;
		aspect-ratio: 1 / 1;
		isolation: isolate;
	}

	.product-icon :global(.glow) {
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.icon {
		width: 100%;
		height: 100%;
	}
</style>
