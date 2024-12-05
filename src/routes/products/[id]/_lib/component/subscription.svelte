<script lang="ts">
	import Glow from '$lib/component/glow.svelte';
	import Select from '$lib/component/select.svelte';
	import formatPlanTypeName from '../utility/format-plan-type-name';
	import { singleProduct } from '../data/single-product';
	import { getContext } from 'svelte';
	import type { CheckoutContext } from '../type/checkout';

	const { plan } = singleProduct;
	const context: CheckoutContext = getContext('checkout');

	const planTypeList = plan.typeList.map((type) => ({
		name: formatPlanTypeName(type),
		value: type.id
	}));

	let planPeriodList = plan.periodList
		.filter((period) => period.typeId === context.typeId || period.typeId === 0)
		.map((period) => ({ name: period.nameFa, value: period.id }));

	let planUserLimitList = plan.userLimitList
		.filter((userLimit) => userLimit.periodId === context.periodId || userLimit.periodId === 0)
		.map((userLimit) => ({ name: userLimit.nameFa, value: userLimit.id }));

	const selectedType = $derived(plan.typeList.find((type) => type.id === context.typeId)!);
</script>

<div class="subscription">
	<div class="box rounded-lg">
		<div class="content">
			<div class="options">
				<div class="select-wrapper">
					<span class="label">نوع اشتراک</span>
					<Select class="select" itemList={planTypeList} bind:value={context.typeId} />
				</div>
				<div class="select-wrapper">
					<span class="label">بازهٔ زمانی</span>

					<Select class="select" itemList={planPeriodList} bind:value={context.periodId} />
				</div>
				<div class="select-wrapper">
					<span class="label">تعداد کاربران</span>
					<Select class="select" itemList={planUserLimitList} bind:value={context.userLimitId} />
				</div>
			</div>
			<section class="description">
				<Glow class="glow" />
				<h3 class="title">{formatPlanTypeName(selectedType)}</h3>
				<p class="body">{selectedType.description}</p>
			</section>
		</div>
	</div>
</div>

<style>
	.content {
		--subscription-padding: 2rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding: var(--subscription-padding);
	}

	.options {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.6rem;
		padding-left: var(--subscription-padding);
	}

	.options .select-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.2rem;
	}

	.options :global(.select) {
		width: 100%;
	}

	.label {
		font-weight: 700;
		min-width: 8.3rem;
	}

	.description {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-right: 1px solid var(--stroke);
		padding-right: var(--subscription-padding);
	}

	.title {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 0.8rem;
	}

	.body {
		line-height: var(--line-height);
	}

	.description :global(.glow) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	@media (max-width: 68rem) {
		.content {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(2, auto);
			gap: var(--subscription-padding);
		}

		.description {
			border-right: 0;
			padding: 0;
		}

		.options {
			padding: 0;
		}

		.options .select-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: start;
			flex-direction: column;
			gap: 1.2rem;
		}
	}
</style>
