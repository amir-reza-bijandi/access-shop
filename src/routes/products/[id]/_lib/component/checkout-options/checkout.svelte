<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import { ArrowLeft } from 'lucide-svelte';
	import type { CheckoutContext } from '../../type/checkout';
	import { getContext } from 'svelte';
	import { singleProduct } from '../../data/single-product';

	const context: CheckoutContext = getContext('checkout');
	const subscription = $derived.by(() => {
		const type = singleProduct.plan.typeList.find((type) => type.id === context.typeId)!;
		const period = singleProduct.plan.periodList.find((period) => period.id === context.periodId)!;
		const userLimit = singleProduct.plan.userLimitList.find(
			(userLimit) => userLimit.id === context.userLimitId
		)!;
		return type.price + period.price + userLimit.price;
	});
	const discount = $derived((subscription / 100) * singleProduct.discount);
	const totalFee = $derived.by(() => {
		const accountFee = context.accountFee ? singleProduct.accountFee : 0;
		const fastDeliveryFee = context.fastDeliveryFee ? singleProduct.fastDeliveryFee : 0;
		return accountFee + fastDeliveryFee;
	});

	const total = $derived(subscription - discount - context.coupon + totalFee);
</script>

<form class="checkout box rounded-lg">
	<ul class="list">
		<li class="item">
			<span>هزینهٔ اشتراک</span>
			<span class="price">{subscription.toLocaleString('fa-IR')} <span>تومان</span></span>
		</li>
		<li class="item">
			<span>تخفیف اکسس شاپ</span>
			<span class="price">{discount.toLocaleString('fa-IR')} <span>تومان</span></span>
		</li>
		<li class="item">
			<span>کارمزد</span>
			<span class="price">{totalFee.toLocaleString('fa-IR')} <span>تومان</span></span>
		</li>
		<li class="item">
			<span>کد تخفیف</span>
			<span class="price">{context.coupon.toLocaleString('fa-IR')}<span>تومان</span></span>
		</li>
		<li class="item">
			<span>قابل پرداخت</span>
			<span class="price">{total.toLocaleString('fa-IR')} <span>تومان</span></span>
		</li>
	</ul>
	<Button class="submit" icon={ArrowLeft}>پرداخت سریع</Button>
</form>

<style>
	.checkout {
		padding-inline: 2rem;
	}

	.list {
		list-style: none;
	}

	.item {
		display: flex;
		justify-content: space-between;
		padding-block: 2rem;
		border-bottom: 1px solid var(--stroke);
	}

	.item:last-of-type {
		color: var(--accent-tint);
		font-weight: 700;
	}

	.checkout :global(.submit) {
		width: 100%;
		margin-bottom: 2rem;
	}

	.price {
		display: flex;
		gap: 0.4rem;
	}
</style>
