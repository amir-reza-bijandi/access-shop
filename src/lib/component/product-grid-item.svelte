<script lang="ts">
	import handleViewChange from '$lib/utility/handle-view-change';
	import { ShoppingBasket } from 'lucide-svelte';
	import { inview } from 'svelte-inview';
	import Button from './button.svelte';
	import Pattern from './pattern.svelte';
	import type { ProductInfo } from '$lib/data/products';
	import ProductIcon from './product-icon.svelte';

	type ProductProps = {
		info: ProductInfo;
	};

	const { info }: ProductProps = $props();
	const { id, nameFa, nameEn, description, imageSrc, deliveryTime, startingPrice } = info;
</script>

<div class="product" use:inview oninview_change={(e) => handleViewChange(e.detail)}>
	<div class="box rounded-lg">
		<article class="content">
			<!-- BODY -->
			<div class="body">
				<Pattern class="pattern" visibility="high" />
				<figure class="image">
					<ProductIcon src={imageSrc} class="icon" />
				</figure>
				<div>
					<h3 class="title">خرید {nameFa} <span class="subtitle">({nameEn})</span></h3>
					<p class="description">{description}</p>
				</div>
			</div>
			<!-- FOOTER -->
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
				<Button class="submit-order" as="a" href="/products/{id}" icon={ShoppingBasket}
					>ثبت سفارش</Button
				>
			</footer>
		</article>
	</div>
</div>

<style>
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
		color: var(--accent);
	}

	.image :global(.icon) {
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
			position: static;
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
