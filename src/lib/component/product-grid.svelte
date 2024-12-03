<script lang="ts">
	import Glow from '$lib/component/glow.svelte';
	import Title from '$lib/component/title.svelte';
	import { ArrowLeft } from 'lucide-svelte';
	import { type ProductInfo } from '$lib/data/products';
	import ProductGridItem from '$lib/component/product-grid-item.svelte';

	type ProductGridProps = {
		infoList: ProductInfo[];
		title?: {
			text: string;
			description: string;
		};
	};
	const { infoList, title }: ProductGridProps = $props();
</script>

<section class="products" id="products">
	{#if title}
		<Title text={title.text} description={title.description} />
	{/if}
	<div class="wrapper">
		<Glow class="container-glow" />
		{#each infoList as productInfo (productInfo.id)}
			<ProductGridItem info={productInfo} />
		{/each}
	</div>
	<a class="view-all" href="/products">
		مشاهدهٔ لیست کامل محصولات <ArrowLeft strokeWidth={1.5} absoluteStrokeWidth size={20} />
	</a>
</section>

<style>
	.products {
		display: flex;
		flex-direction: column;
		align-items: center;
		scroll-margin-top: 9.6rem;
	}

	.wrapper {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.wrapper :global(.container-glow) {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 128rem;
		z-index: -1;
	}

	.view-all {
		display: inline-flex;
		color: var(--accent);
		text-decoration: none;
		gap: 0.8rem;
		padding: 1.6rem;
		transition-property: color, filter;
		transition-duration: calc(var(--duration) * 2);
	}

	.view-all:hover {
		color: var(--accent-tint);
		filter: drop-shadow(0 0 12px var(--accent));
	}

	.view-all:active {
		color: var(--accent-shade);
	}

	.view-all :global(svg) {
		transition: transform calc(var(--duration) * 2);
	}

	.view-all:hover :global(svg) {
		transform: rotate(360deg) translateX(-0.6rem);
	}

	/* Tablet */
	@media (max-width: 68rem) {
		.wrapper {
			grid-template-columns: repeat(auto-fit, minmax(40.7rem, 1fr));
		}
	}

	@media (max-width: 38rem) {
		.wrapper {
			grid-template-columns: repeat(auto-fit, minmax(34.4rem, 1fr));
		}
	}
</style>
