<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Order } from '../data/orders';
	import Input from '$lib/component/input.svelte';
	import Button from '$lib/component/button.svelte';
	import { getContext } from 'svelte';
	import type { OrderContext } from '../type/order';
	import type { MouseEventHandler } from 'svelte/elements';

	type SubscriptionDetailsProps = {
		order: Order;
		height: number;
	};
	let { order, height = $bindable(0) }: SubscriptionDetailsProps = $props();

	const context: OrderContext = getContext('order');

	const handleGoToOrder = () => {
		context.currentPageIndex = 0;
	};

	const handleSelectAll: MouseEventHandler<HTMLInputElement> = (e) => {
		e.currentTarget.setSelectionRange(0, e.currentTarget.value.length);
	};
</script>

<section
	class="content"
	in:fly={{ x: 492, duration: 400, opacity: 0, delay: 200 }}
	out:fly={{ x: -492, duration: 400, opacity: 0 }}
	bind:clientHeight={height}
>
	<h3 class="heading">
		اطلاعات اشتراک
		<span class="subheading">از اطلاعات اشتراک خود محافظت کنید</span>
	</h3>

	<div class="subscription-details">
		{#if 'code' in order.product.subscription}
			<label class="label">
				کد اشتراک
				<Input readonly value={order.product.subscription.code} onclick={handleSelectAll} />
			</label>
		{:else}
			<label class="label">
				{#if 'username' in order.product.subscription}
					نام کاربری
				{:else if 'phone' in order.product.subscription}
					شماره موبایل
				{:else}
					آدرس ایمیل
				{/if}
				<Input readonly value={order.product.subscription.user} onclick={handleSelectAll} />
			</label>
			<label class="label">
				کلمه عبور
				<Input readonly value={order.product.subscription.pass} onclick={handleSelectAll} />
			</label>
		{/if}
	</div>

	<div class="actions">
		<Button class="back" variant="outline" onclick={handleGoToOrder}>بازگشت</Button>
	</div>
</section>

<style>
	.content {
		position: absolute;
		width: 100%;
		display: grid;
		grid-template-rows: auto auto auto;
		align-content: end;
		height: 36.5rem;
	}

	.heading {
		display: grid;
		place-items: center;
		place-content: center;
		gap: 0.8rem;
		font-size: 2.4rem;
		font-weight: 700;
		margin-bottom: 3.2rem;
	}

	.subheading {
		font-size: 1.6rem;
		font-weight: 600;
	}

	.subscription-details {
		display: grid;
		gap: 1.2rem;
		padding-inline: 2rem;
	}

	.label {
		display: grid;
		gap: 0.8rem;
	}

	.actions {
		padding: 2rem;
	}

	.content :global(.back) {
		width: 100%;
	}

	@media (max-width: 34rem) {
		.content {
			height: 34.5rem;
		}
	}
</style>
