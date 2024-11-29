<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Box from '$lib/component/box.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Pattern from '$lib/component/pattern.svelte';
	import Title from '$lib/component/title.svelte';
	import { ArrowLeft, ShoppingBasket } from 'lucide-svelte';
	import { productList, type Product } from '$lib/data/products';
</script>

<section class="products">
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
	<Box>
		<article class="product">
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
					<span>شروع قیمت از {startingPrice.toLocaleString('fa-IR')}</span>
					•
					<span>
						تحویل بین {deliveryTime[0].toLocaleString('fa-IR')} تا {deliveryTime[1].toLocaleString(
							'fa-IR'
						)} دقیقه
					</span>
				</small>
				<Button as="a" href="/{id}" icon={ShoppingBasket}>ثبت سفارش</Button>
			</footer>
		</article>
	</Box>
{/snippet}

<style>
	.products {
		margin-bottom: 19.2rem;
	}

	.wrapper {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(48rem, 1fr));
		gap: 2rem;
		margin-bottom: 4.6rem;
	}

	.wrapper :global(.container-glow) {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 128rem;
		z-index: -1;
	}

	.product {
		--icon-size: 16rem;
		display: flex;
		flex-direction: column;
		height: 31.2rem;
	}

	.product > * {
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
		display: flex;
		justify-content: center;
		align-items: center;
		color: hsl(var(--accent));
		text-decoration: none;
		gap: 0.8rem;
	}
</style>
