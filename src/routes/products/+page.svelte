<script lang="ts">
	import Page from '$lib/component/page.svelte';
	import ProductList from '$lib/component/product-list.svelte';
	import { productList } from '$lib/data/products';
</script>

<Page>
	<ProductList itemList={productList} variant="products" />
</Page>
