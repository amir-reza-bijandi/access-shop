<script lang="ts">
	import ProductList from '$lib/component/product-list.svelte';
	import Faq from './_lib/component/faq.svelte';
	import Hero from './_lib/component/hero.svelte';
	import Testimonial from './_lib/component/testimonial.svelte';
	import { productList } from '$lib/data/products';
</script>

<Hero />
<div class="wrapper">
	<ProductList itemList={productList} variant="home" />
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

	/* 1152px */
	@media (max-width: 72rem) {
		.wrapper {
			--spacing: 12.8rem;
		}
	}

	/* 512px */
	@media (max-width: 32rem) {
		.wrapper {
			--spacing: 6.4rem;
			/* Use a higher margin to account for navigation on mobile devices */
			margin-bottom: 10rem;
		}
	}
</style>
