<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Card from '$lib/component/card.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Pattern from '$lib/component/pattern.svelte';
	import SectionHeader from '$lib/component/section-header.svelte';
	import { ArrowLeft, ShoppingBasket } from 'lucide-svelte';
	import { productList, type Product } from '$lib/data/products';
</script>

<section class="product-showcase">
	<SectionHeader
		title="محصولات اکسس شاپ"
		subtitle="سفرت تو دنیای هوش مصنوعی از اینجا شروع می‌شه!"
	/>
	<div class="products">
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
	<Card>
		<article class="product">
			<div class="body">
				<Pattern class="pattern" visibility="high" />
				<figure>
					<Glow class="icon-glow" />
					<img class="icon" src={imageSrc} alt="لوگوی {nameFa}" />
				</figure>
				<div class="content">
					<h3 class="title">خرید {nameFa} <span class="title-en">({nameEn})</span></h3>
					<p class="description">{description}</p>
				</div>
			</div>
			<footer>
				<small>
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
	</Card>
{/snippet}

<style>
	.product-showcase {
		margin-bottom: 19.2rem;
	}

	.products {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(48rem, 1fr));
		gap: 2rem;
		margin-bottom: 4.6rem;
	}

	.products :global(.container-glow) {
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

	footer {
		border-top: 1px solid var(--stroke);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	small {
		font-size: 1.6rem;
		font-weight: 700;
		color: hsl(var(--accent));
	}

	.icon {
		width: var(--icon-size);
		height: var(--icon-size);
	}

	figure {
		position: relative;
	}

	figure :global(.icon-glow) {
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

	.title-en {
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
