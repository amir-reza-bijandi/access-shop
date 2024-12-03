<script lang="ts">
	import Faq from './_lib/component/faq.svelte';
	import Hero from './_lib/component/hero.svelte';
	import ProductGrid from '../lib/component/product-grid.svelte';
	import Testimonial from './_lib/component/testimonial.svelte';
	import { productInfoList } from '$lib/data/products';
</script>

<Hero />
<div class="wrapper">
	<ProductGrid
		infoList={productInfoList}
		title={{
			text: 'محصولات اکسس شاپ',
			description: 'سفرت تو دنیای هوش مصنوعی از اینجا شروع می‌شه!'
		}}
	/>
	<Testimonial />
	<Faq />
</div>

<style>
	.wrapper {
		--spacing: 19.2rem;
		display: flex;
		flex-direction: column;
		gap: var(--spacing);
		margin-block: var(--spacing);
	}

	/* Tablet */
	@media (max-width: 72rem) {
		.wrapper {
			--spacing: 12.8rem;
		}
	}

	/* Mobile */
	@media (max-width: 32rem) {
		.wrapper {
			--spacing: 6.4rem;
		}
	}
</style>
