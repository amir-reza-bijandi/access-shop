<script lang="ts">
	import ProductGrid from '$lib/component/product-grid.svelte';
	import { productInfoList } from '$lib/data/products';
</script>

<main>
	<ProductGrid infoList={productInfoList} />
</main>

<style>
	main {
		padding-block: 6.4rem;
	}

	@media (max-width: 72rem) {
		main {
			padding-block: 4.8rem;
		}
	}

	@media (max-width: 32rem) {
		main {
			/* Using a higher value to account for navigation on mobile */
			padding-top: 3.2rem;
			padding-bottom: 6.8rem;
		}
	}
</style>
