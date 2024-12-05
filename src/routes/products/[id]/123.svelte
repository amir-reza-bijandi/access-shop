<script lang="ts">
	import PageWrapper from '$lib/component/page-wrapper.svelte';
	import Comments from './_lib/component/comments.svelte';
	import FullDescription from './_lib/component/full-description.svelte';
	import ProductBranding from './_lib/component/product-branding.svelte';
	import ShortDescription from './_lib/component/short-description.svelte';
	import CheckoutOptions from './_lib/component/checkout-options.svelte';
	import Subscription from './_lib/component/subscription.svelte';
	import type { CheckoutContext } from './_lib/type/checkout';
	import { singleProduct } from './_lib/data/single-product';
	import { setContext } from 'svelte';
	import Checkout from './_lib/component/checkout-options/checkout.svelte';
	import NewAccount from './_lib/component/checkout-options/new-account.svelte';
	import FastDelivary from './_lib/component/checkout-options/fast-delivary.svelte';
	import DiscountCode from './_lib/component/checkout-options/discount-code.svelte';
	import Note from './_lib/component/checkout-options/note.svelte';

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
	<div class="desktop">
		<div class="content">
			<ShortDescription />
			<Subscription />
			<article>
				<ProductBranding />
				<FullDescription />
			</article>
			<Comments />
		</div>
		<CheckoutOptions />
	</div>
	<div class="tablet">
		<div class="short-description">
			<ShortDescription />
		</div>
		<div class="right-column">
			<Subscription />
			<ProductBranding />
			<FullDescription />
		</div>
		<div class="left-column">
			<div class="left-column-content">
				<Checkout />
				<NewAccount />
				<FastDelivary />
				<DiscountCode />
				<Note />
			</div>
		</div>
		<div class="comments">
			<Comments />
		</div>
	</div>
</PageWrapper>

<style>
	.desktop {
		display: grid;
		grid-template-columns: 1fr 32rem;
		gap: 2.4rem;
	}

	.tablet {
		display: none;
		gap: 2rem;
	}

	.content {
		display: grid;
		gap: 3.2rem;
	}

	@media (max-width: 56rem) {
		.desktop {
			display: none;
		}

		.tablet {
			display: grid;
			grid-template-columns: 1fr 32rem;
		}

		.short-description {
			grid-column: span 2;
		}

		.right-column {
			display: grid;
			gap: 2rem;
			align-content: start;
		}

		.left-column-content {
			display: flex;
			flex-direction: column;
			gap: 2rem;
			position: sticky;
			top: 2rem;
			align-self: start;
		}

		.comments {
			grid-column: span 2;
		}
	}
</style>
