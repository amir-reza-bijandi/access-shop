<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Glow from './glow.svelte';

	/* ---------------------------------- Props --------------------------------- */
	type ProductIconProps = {
		src: string;
		class?: string;
	};
	const { class: className = '', src }: ProductIconProps = $props();
</script>

<div class="product-icon {className}">
	<Glow --size="100%" --top="50%" --left="50%" />
	<img class="icon" {src} alt="لوگوی یک سرویس هوش مصنوعی" />
</div>

<style>
	.product-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 6.4rem;
		height: auto;
		aspect-ratio: 1 / 1;
		isolation: isolate;
	}

	.icon {
		width: 100%;
		height: 100%;
	}
</style>
