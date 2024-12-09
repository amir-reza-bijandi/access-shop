<script lang="ts">
	import Modal, { type ModalProps } from '$lib/component/modal.svelte';
	import { setContext } from 'svelte';
	import { type Order } from '../data/orders';
	import OrderDetails from './order-details.svelte';
	import SubscriptionDetails from './subscription-details.svelte';
	import type { OrderContext } from '../type/order';

	type DetailsProps = Omit<ModalProps, 'children' | 'header'> & {
		order: Order;
	};
	const { order, open, onclose }: DetailsProps = $props();

	let orderContext: OrderContext = $state({
		currentPageIndex: 0
	});
	let contentHeight = $state(444);
	let headerHeight = $state(96);

	// svelte-ignore state_referenced_locally
	setContext('order', orderContext);

	const handleClose = () => {
		orderContext.currentPageIndex = 0;
		onclose?.();
	};
</script>

<Modal {open} onclose={handleClose} bind:headerHeight height={(contentHeight + headerHeight) / 10}>
	{#snippet header()}
		{@const product = order.product}
		<div class="header-wrapper">
			<img
				src={product.iconSrc}
				alt="لوگوی سرویس هوش مصنوعی {product.name.fa}"
				width="56rem"
				height="56rem"
			/>
			<div class="heading">
				اشتراک {product.period.fa} - {product.name.fa} - {product.type.fa}
				<span class="heading-en">
					{product.period.en} - {product.name.en} - {product.type.en}
				</span>
			</div>
		</div>
	{/snippet}
	{#if orderContext.currentPageIndex === 0}
		<OrderDetails {order} bind:height={contentHeight} />
	{:else if orderContext.currentPageIndex === 1}
		<SubscriptionDetails {order} bind:height={contentHeight} />
	{/if}
</Modal>

<style>
	.header-wrapper {
		display: flex;
		gap: 1.2rem;
	}

	.heading {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		gap: 0.8rem;
		font-size: 1.6rem;
		font-weight: 700;
	}

	.heading-en {
		direction: ltr;
	}

	@media (max-width: 34rem) {
		.header-wrapper > * {
			display: none;
			gap: 1.2rem;
		}
	}
</style>
