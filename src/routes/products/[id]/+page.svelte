<script lang="ts">
	import PageWrapper from '$lib/component/page-wrapper.svelte';
	import Comments from './_lib/component/comments.svelte';
	import FullDescription from './_lib/component/full-description.svelte';
	import ProductBranding from './_lib/component/product-branding.svelte';
	import ShortDescription from './_lib/component/short-description.svelte';
	import Sidebar from './_lib/component/sidebar.svelte';
	import Subscription from './_lib/component/subscription.svelte';
	import type { CheckoutContext } from './_lib/type/checkout';
	import { singleProduct } from './_lib/data/single-product';
	import { setContext } from 'svelte';

	const checkoutContext: CheckoutContext = $state({
		accountFee: false,
		fastDeliveryFee: true,
		coupon: 0,
		typeId: singleProduct.plan.typeList[0].id,
		periodId: singleProduct.plan.periodList[0].id,
		userLimitId: singleProduct.plan.userLimitList[0].id
	});

	setContext('checkout', checkoutContext);
</script>

<PageWrapper as="div">
	<div class="content">
		<main class="main">
			<ShortDescription />
			<Subscription />
			<article>
				<ProductBranding />
				<FullDescription />
			</article>
			<Comments />
		</main>
		<Sidebar />
	</div>
</PageWrapper>

<style>
	.content {
		display: grid;
		grid-template-columns: 1fr 32rem;
		gap: 2.4rem;
	}

	.main {
		display: grid;
		gap: 3.2rem;
	}
</style>
