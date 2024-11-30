<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Box from '$lib/component/box.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Pattern from '$lib/component/pattern.svelte';
	import Title from '$lib/component/title.svelte';
	import { ArrowLeft, ShoppingBasket } from 'lucide-svelte';
	import { productList, type Product } from '$lib/data/products';
	import { inview } from 'svelte-inview';
	import handleViewChange from '$lib/utility/handle-view-change';
</script>

<section class="products" id="products">
	<Title text="محصولات اکسس شاپ" description="سفرت تو دنیای هوش مصنوعی از اینجا شروع می‌شه!" />
	<div class="wrapper">
		<Glow class="container-glow" />
		{#each productList as product (product.id)}
			{@render prodcutCard(product)}
		{/each}
	</div>
	<a class="view-all" href="/products"
		>مشاهدهٔ لیست کامل محصولات <ArrowLeft strokeWidth={1.5} absoluteStrokeWidth size={20} /></a
	>
</section>

{#snippet prodcutCard({
	id,
	nameEn,
	nameFa,
	description,
	imageSrc,
	deliveryTime,
	startingPrice
}: Product)}
	<div class="product" use:inview oninview_change={(e) => handleViewChange(e.detail)}>
		<Box class="box">
			<article class="content">
				<div class="body">
					<Pattern class="pattern" visibility="high" />
					<figure class="image">
						<Glow class="icon-glow" />
						<img class="icon" src={imageSrc} alt="لوگوی {nameFa}" />
					</figure>
					<div>
						<h3 class="title">خرید {nameFa} <span class="subtitle">({nameEn})</span></h3>
						<p class="description">{description}</p>
					</div>
				</div>
				<footer class="footer">
					<small class="info">
						<span>شروع قیمت از {startingPrice.toLocaleString('fa-IR')} تومان</span>
						•
						<span>
							تحویل بین {deliveryTime[0].toLocaleString('fa-IR')} تا {deliveryTime[1].toLocaleString(
								'fa-IR'
							)} دقیقه
						</span>
					</small>
					<Button class="submit-order" as="a" href="/{id}" icon={ShoppingBasket}>ثبت سفارش</Button>
				</footer>
			</article>
		</Box>
	</div>
{/snippet}

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

	.product :global(.box) {
		height: 100%;
	}

	.content {
		--icon-size: 16rem;
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 31.2rem;
		align-content: stretch;
		height: 100%;
	}

	.content > * {
		padding: 2rem;
	}

	.body {
		position: relative;
		display: flex;
		align-items: center;
		gap: 2rem;
		overflow: hidden;
		flex: 1;
	}

	.body :global(.pattern) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(180deg);
		width: 102.4rem;
		height: 51.9rem;
	}

	.footer {
		border-top: 1px solid var(--stroke);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.info {
		font-size: 1.6rem;
		font-weight: 700;
		color: hsl(var(--accent));
	}

	.icon {
		width: var(--icon-size);
		height: var(--icon-size);
	}

	.image {
		position: relative;
	}

	.image :global(.icon-glow) {
		position: absolute;
		width: var(--icon-size);
	}

	.title {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1.2rem;
	}

	.subtitle {
		font-size: 1.6rem;
	}

	.description {
		line-height: var(--line-height);
	}

	.view-all {
		display: inline-flex;
		color: hsl(var(--accent));
		text-decoration: none;
		gap: 0.8rem;
		padding: 1.6rem;
		transition-property: color, filter;
		transition-duration: calc(var(--duration) * 2);
	}

	.view-all:hover {
		color: hsl(var(--accent-tint));
		filter: drop-shadow(0 0 12px hsl(var(--accent)));
	}

	.view-all:active {
		color: hsl(var(--accent-shade));
	}

	.view-all :global(svg) {
		transition: transform calc(var(--duration) * 2);
	}

	.view-all:hover :global(svg) {
		transform: rotate(360deg) translateX(-0.6rem);
	}

	/* Laptop */
	@media (max-width: 72rem) {
		.footer {
			flex-direction: column;
			gap: 1.6rem;
		}

		.footer :global(.submit-order) {
			width: 100%;
		}
	}

	/* Tablet */
	@media (max-width: 68rem) {
		.wrapper {
			grid-template-columns: repeat(auto-fit, minmax(40.7rem, 1fr));
		}

		.image {
			position: absolute;
			left: 2rem;
			top: 50%;
			transform: translateY(-50%);
			opacity: 0.25;
		}

		.content {
			--icon-size: 12rem;
			min-height: 28.8rem;
		}

		.footer {
			flex-direction: column;
		}
	}

	@media (max-width: 56rem) {
		.image {
			position: unset;
			transform: translateY(0);
			opacity: 1;
		}

		.content {
			--icon-size: 16rem;
		}

		.footer {
			flex-direction: row;
		}

		.footer :global(.submit-order) {
			width: unset;
		}
	}

	@media (max-width: 40rem) {
		.footer {
			flex-direction: column;
		}

		.footer :global(.submit-order) {
			width: 100%;
		}
	}

	@media (max-width: 38rem) {
		.wrapper {
			grid-template-columns: repeat(auto-fit, minmax(34.4rem, 1fr));
		}

		.image {
			position: absolute;
			left: 2rem;
			top: 50%;
			transform: translateY(-50%);
			opacity: 0.25;
		}

		.content {
			--icon-size: 12rem;
		}
	}

	/* Mobile */
	@media (max-width: 32rem) {
		.body {
			flex-direction: column;
			gap: 1.6rem;
			padding: 1.6rem;
		}

		.description {
			text-align: center;
		}

		.title {
			justify-content: center;
		}

		.footer {
			padding: 1.6rem;
		}

		.info {
			font-size: 1.4rem;
		}

		.image {
			position: unset;
			opacity: 1;
			transform: translateY(0);
		}

		.content {
			--icon-size: 12.8rem;
			min-height: 0;
		}
	}
</style>
