<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Glow from '$lib/component/glow.svelte';
	import Title from '$lib/component/title.svelte';
	import { ArrowLeft } from 'lucide-svelte';
	import { type Product as ProductInfo } from '$lib/data/products';
	import Product from '$lib/component/product.svelte';

	/* ---------------------------------- Props --------------------------------- */
	type ProductListProps = {
		itemList: ProductInfo[];
		variant: 'home' | 'products';
	};
	const { itemList, variant }: ProductListProps = $props();

	/* ---------------------------------- Logic --------------------------------- */
	function getAnimationName(index: number) {
		return variant === 'products' ? ((index + 1) % 2 === 0 ? 'intro-left' : 'intro-right') : '';
	}
</script>

<section class="products" id="products">
	{#if variant === 'home'}
		<Title text="محصولات اکسس شاپ" description="سفرت تو دنیای هوش مصنوعی از اینجا شروع می‌شه!" />
	{/if}
	<div class="wrapper">
		<Glow --size="128rem" --top="50%" --left="50%" />
		{#each itemList as productInfo, index (productInfo.id)}
			<Product
				data={productInfo}
				{variant}
				--animation-index={index}
				--animation-name={getAnimationName(index)}
			/>
		{/each}
	</div>
	{#if variant === 'home'}
		<a class="view-all" href="/products">
			مشاهدهٔ لیست کامل محصولات <ArrowLeft strokeWidth={1.5} absoluteStrokeWidth size={20} />
		</a>
	{/if}
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
	}

	.view-all {
		display: inline-flex;
		color: var(--accent);
		text-decoration: none;
		gap: 0.8rem;
		padding: 1.6rem;
		transition-property: color, filter;
		transition-duration: calc(var(--duration) * 2);
		margin-top: 3.2rem;
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

	/* 1088px */
	@media (max-width: 68rem) {
		.wrapper {
			grid-template-columns: repeat(auto-fit, minmax(41.3rem, 1fr));
		}
		/* Because of the scrollbar size difference in firefox and chrome
		   we need to set a different min size for grid items */
		@supports (-moz-appearance: none) {
			.wrapper {
				grid-template-columns: repeat(auto-fit, minmax(41.45rem, 1fr));
			}
		}
	}

	/* 608px */
	@media (max-width: 38rem) {
		.wrapper {
			grid-template-columns: repeat(auto-fit, minmax(34.4rem, 1fr));
		}
	}
</style>
