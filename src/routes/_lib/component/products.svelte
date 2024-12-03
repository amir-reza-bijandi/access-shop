<script>
	import ProductGrid from '$lib/component/product-grid.svelte';
	import { productInfoList } from '$lib/data/products';
</script>

<ProductGrid
	infoList={productInfoList}
	title={{
		text: 'محصولات اکسس شاپ',
		description: 'سفرت تو دنیای هوش مصنوعی از اینجا شروع می‌شه!'
	}}
	showViewAll={true}
/>
