<script lang="ts">
	import PageWrapper from '$lib/component/page-wrapper.svelte';
	import Comments from './_lib/component/comments.svelte';
	import FullDescription from './_lib/component/full-description.svelte';
	import ProductBranding from './_lib/component/product-branding.svelte';
	import ShortDescription from './_lib/component/short-description.svelte';
	import Subscription from './_lib/component/subscription.svelte';
	import type { CheckoutContext } from './_lib/type/checkout';
	import { singleProduct } from './_lib/data/single-product';
	import { setContext } from 'svelte';
	import Checkout from './_lib/component/checkout-options/checkout.svelte';
	import NewAccount from './_lib/component/checkout-options/new-account.svelte';
	import FastDelivary from './_lib/component/checkout-options/fast-delivary.svelte';
	import DiscountCode from './_lib/component/checkout-options/discount-code.svelte';
	import Note from './_lib/component/checkout-options/note.svelte';

	const { plan, commentList } = singleProduct;
	const checkoutContext: CheckoutContext = $state({
		accountFee: false,
		fastDeliveryFee: true,
		coupon: 0,
		typeId: plan.typeList[0].id,
		periodId: plan.periodList[0].id,
		userLimitId: plan.userLimitList[0].id
	});

	setContext('checkout', checkoutContext);
</script>

<PageWrapper as="div">
	<main class="main">
		<div class="short-description-tablet">
			<ShortDescription />
		</div>
		<div class="short-description-desktop">
			<ShortDescription />
		</div>
		<Subscription />
		<ProductBranding />
		<FullDescription />

		<div class="sidebar">
			<div class="sidebar-content">
				<Checkout />
				<NewAccount />
				<FastDelivary />
				<DiscountCode />
				<Note />
			</div>
		</div>
		<div class="comments {!commentList.length ? 'no-comment' : ''}">
			<Comments />
		</div>
	</main>
</PageWrapper>

<style>
	.main {
		display: grid;
		grid-template-columns: 1fr 32rem;
		gap: 2rem;
		grid-template-rows: min-content;
	}

	.sidebar {
		grid-area: 1/2/5/3;
	}

	.sidebar-content {
		position: sticky;
		top: 2rem;
		display: grid;
		gap: 2rem;
	}

	.short-description-tablet {
		display: none;
		animation: intro-down 1s ease backwards;
	}

	.short-description-desktop {
		animation: intro-right 1s ease backwards;
	}

	@media (min-width: 48rem) {
		.sidebar {
			animation: intro-left 1s ease backwards;
		}
	}

	@media (max-width: 68rem) {
		.comments:not(.no-comment) {
			grid-column: span 2;
		}
	}

	@media (max-width: 56rem) {
		.short-description-desktop {
			display: none;
		}

		.short-description-tablet {
			display: block;
			grid-column: span 2;
		}

		.sidebar {
			grid-area: 2/2/5/3;
		}
	}

	@media (max-width: 48rem) {
		.main {
			display: grid;
			grid-template-columns: 1fr;
			gap: 2rem;
			grid-template-rows: min-content;
			animation: intro-up 1s ease backwards;
		}

		.short-description-tablet {
			display: block;
			grid-column: span 1;
			animation: none;
		}

		.sidebar {
			grid-area: 3/1/6/2;
		}

		.sidebar-content {
			position: sticky;
			top: 2rem;
			display: grid;
			gap: 2rem;
		}

		.comments:not(.no-comment) {
			grid-column: span 1;
		}
	}
</style>
