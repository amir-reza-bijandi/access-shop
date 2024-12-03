<script lang="ts">
	import PageWrapper from '$lib/component/page-wrapper.svelte';
	import ProductGrid from '$lib/component/product-grid.svelte';
	import { productInfoList } from '$lib/data/products';
</script>

<PageWrapper>
	<ProductGrid infoList={productInfoList} />
</PageWrapper>
