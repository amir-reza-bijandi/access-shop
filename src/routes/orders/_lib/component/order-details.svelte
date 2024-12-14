<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import { getContext } from 'svelte';
	import type { Order, OrderStatus } from '../data/orders';
	import getStatusColor from '../utility/get-status-color';
	import type { DetailsContext } from '../type/order';
	import getStatusIcon from '../utility/get-status-icon';
	import formatOrderDate from '../utility/format-order-date';
	import Button from '$lib/component/button.svelte';
	import { fly } from 'svelte/transition';
	import { Icon as LucideIcon } from 'lucide-svelte';

	/* ---------------------------------- Props --------------------------------- */
	type OrderDetailsProps = {
		order: Order;
	};
	const { order }: OrderDetailsProps = $props();

	/* -------------------------------- Constants ------------------------------- */
	const STATUS_TEXT_MAP: Record<OrderStatus, string> = {
		pending: 'سفارش در حال انجام می‌باشد',
		delivered: 'سفارش انجام شد',
		canceled: 'سفارش لغو شد'
	};

	const STATUS_DESCRIPTION_MAP: Record<OrderStatus, string> = {
		pending: 'لطفا صبور باشید',
		delivered: 'می‌توانید اشتراک خود را از پایین صفحه مشاهده کنید',
		canceled: 'برای پیگیری با پشتیبانی تماس بگیرید'
	};

	/* ---------------------------------- State --------------------------------- */
	const context: DetailsContext = getContext('order');

	/* --------------------------------- Events --------------------------------- */
	const handleGoToSubscription = () => {
		context.currentPageIndex = 1;
	};
</script>

{#snippet icon(Icon: typeof LucideIcon)}
	<Icon strokeWidth={3} absoluteStrokeWidth />
{/snippet}

<div
	class="content"
	in:fly={{ x: 492, duration: 400, opacity: 0, delay: 401 }}
	out:fly={{ x: -492, duration: 400, opacity: 0 }}
	bind:clientHeight={context.contentHeight}
>
	<section class="status {getStatusColor(order.status)}">
		<h3 class="status-heading">
			<span class="status-icon">{@render icon(getStatusIcon(order.status))}</span>{STATUS_TEXT_MAP[
				order.status
			]}
		</h3>
		<p class="status-description">{STATUS_DESCRIPTION_MAP[order.status]}</p>
	</section>
	<div class="product-details">
		اشتراک {order.product.period.fa} - {order.product.name.fa} - {order.product.type.fa}
		<span class="product-details-en">
			{order.product.period.en} - {order.product.name.en} - {order.product.type.en}
		</span>
	</div>
	<ul class="order-details">
		<li class="item">
			شمارهٔ سفارش: <span
				>{order.id.toLocaleString('fa-IR', {
					useGrouping: false
				})}</span
			>
		</li>
		<li class="item">
			مبلغ پرداختی: <span>{order.price.toLocaleString('fa-IR')} تومان</span>
		</li>
		<li class="item">تاریخ ثبت: <span>{formatOrderDate(order.submitDate)}</span></li>
		<li class="item">تاریخ تحویل: <span>{formatOrderDate(order.deliveryDate)}</span></li>
	</ul>
	<div class="actions">
		<Button onclick={handleGoToSubscription}>مشاهدهٔ اشتراک</Button>
		<Button as="a" href="/products/{order.product.id}#comments" variant="outline" onclick={onclose}
			>ثبت دیدگاه</Button
		>
	</div>
</div>

<style>
	.content {
		position: absolute;
		width: 100%;
		display: grid;
		grid-template-rows: 1fr auto;
		height: 44.4rem;
	}

	.product-details {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		gap: 0.8rem;
		font-size: 1.6rem;
		font-weight: 700;
	}

	.product-details-en {
		direction: ltr;
	}

	.product-details {
		display: none;
	}

	.status {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 2rem;
	}

	.status-heading {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 0.4rem;
	}

	.status-description {
		line-height: var(--line-height);
		text-align: center;
	}

	.status-icon {
		display: flex;
	}

	.warning .status-icon {
		animation: spin 2s linear infinite;
	}

	.order-details {
		position: relative;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		list-style: none;
		padding: 2rem;
		row-gap: 0.8rem;
		column-gap: 4rem;
		border-top: 1px solid var(--stroke);
		border-bottom: 1px solid var(--stroke);
	}

	.order-details::before {
		content: '';
		position: absolute;
		top: 2rem;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		width: 0.1rem;
		background-color: var(--stroke);
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.4rem;
	}

	.actions {
		display: flex;
		gap: 1.2rem;
		padding: 2rem;
	}

	.actions :global(> *) {
		width: 100%;
	}

	/* 544px */
	@media (max-width: 34rem) {
		.content {
			grid-template-rows: 1fr auto auto;
			align-content: end;
		}

		.status-heading {
			flex-direction: column;
			gap: 1.2rem;
		}

		.status-icon :global(svg) {
			width: 4.8rem;
			height: 4.8rem;
		}

		.product-details {
			display: flex;
			align-items: center;
			padding-block: 2.4rem;
		}

		.order-details {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(4, auto);
			border: 0;
			padding-block: 0;
		}

		.order-details::before {
			display: none;
		}
	}

	/* 480px */
	@media (max-width: 30rem) {
		.content {
			height: 50rem;
		}

		.actions {
			flex-direction: column;
		}
	}
</style>
