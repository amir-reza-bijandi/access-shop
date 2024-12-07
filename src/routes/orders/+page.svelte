<script lang="ts">
	import PageWrapper from '$lib/component/page-wrapper.svelte';
	import { ArrowUp, ChevronUp, LayoutGrid, MoveUp } from 'lucide-svelte';
	import { orderList } from './_lib/data/orders';
	import formatOrderDate from '$lib/utility/format-order-date';
	import rippleEffect from '$lib/action/ripple-effect.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Button from '$lib/component/button.svelte';
	import Pagination from './_lib/component/pagination.svelte';
	import type { SortDirection, SortType } from './_lib/utility/sort-order-list';
	import sortOrderList from './_lib/utility/sort-order-list';
	import { fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { cubicOut } from 'svelte/easing';

	const PER_PAGE = 8;

	type Sort = {
		type: SortType;
		direction: SortDirection;
	};

	let sort: Sort = $state({ type: 'submitDate', direction: 'desc' });

	let sortedOrderList = $derived(sortOrderList(orderList, sort.type, sort.direction));

	let currentPage = $state(1);
	let currentOrderList = $derived(
		sortedOrderList.slice(PER_PAGE * (currentPage - 1), PER_PAGE * currentPage)
	);
	const totalPages = $derived(Math.ceil(orderList.length / PER_PAGE));

	const statusDisplayMap = {
		pending: 'در حال انجام',
		delivered: 'انجام شده',
		canceled: 'لغو شده'
	};

	const statusColorMap = {
		pending: 'warning',
		delivered: 'success',
		canceled: 'error'
	};

	const handlePageChange = (page: number) => (currentPage = page);
	const handleSortChange = (type: SortType) => {
		if (type === sort.type) sort.direction = sort.direction === 'asc' ? 'desc' : 'asc';
		else sort.type = type;

		console.log(sort.direction);
	};
</script>

<PageWrapper>
	{#if orderList.length > 0}
		<h1 class="page-title">سفارش‌ها</h1>
	{/if}
	<div class="table-container">
		<Glow class="glow" />
		<div style:--per-page={PER_PAGE} class="table-wrapper box rounded-lg blur-low">
			{#if orderList.length > 0}
				<table class={currentOrderList.length >= PER_PAGE ? 'extra' : ''}>
					<thead>
						<tr>
							<th><LayoutGrid size={32} strokeWidth={2} absoluteStrokeWidth /></th>
							<th class="product">محصول</th>
							{@render tableHeader('تاریخ ثبت', 'submitDate')}
							{@render tableHeader('قیمت', 'price')}
							{@render tableHeader('تاریخ تحویل', 'deliveryDate')}
							{@render tableHeader('وضعیت', 'status')}
						</tr>
					</thead>
					<tbody>
						{#each currentOrderList as { id, product, submitDate, deliveryDate, status, price }, index (id)}
							<tr
								use:rippleEffect
								in:fly={{
									y: -80,
									opacity: 0,
									duration: 200,
									delay: 50 * index,
									easing: cubicOut
								}}
								animate:flip={{ duration: 200, easing: cubicOut }}
							>
								<td>
									<img
										src={product.iconSrc}
										alt="لوگوی سرویس هوش مصنوعی {product.name.fa}"
										width="32"
										height="32"
									/>
								</td>
								<td class="product"
									><div class="description">
										<span>اشتراک {product.period.fa} - {product.name.fa} - {product.type.fa}</span
										><span style="direction: ltr;"
											>{product.period.en} - {product.name.en} - {product.type.en}</span
										>
									</div></td
								>
								<td>{formatOrderDate(submitDate)}</td>
								<td>{price.toLocaleString('fa-IR')} تومان</td>
								<td>{status === 'delivered' ? formatOrderDate(deliveryDate) : '-'}</td>
								<td class={statusColorMap[status]}>{statusDisplayMap[status]}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{:else}
				<section class="no-order">
					<h2 class="title">
						<span class="heading">سفارشی ثبت نشده!</span>
						<span class="subheading">می‌تونی اولین محصولت رو از اینجا سفارش بدی...</span>
					</h2>
					<Button as="a" href="/products" variant="outline">مشاهدهٔ محصولات</Button>
				</section>
			{/if}
		</div>
		<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
	</div>
</PageWrapper>

{#snippet tableHeader(label: string, sortType: SortType)}
	<th onclick={() => handleSortChange(sortType)}>
		<div class="label">
			{#if sort.type === sortType}
				<span
					class="icon {sort.direction === 'asc' ? 'active' : ''}"
					in:scale={{ duration: 200, opacity: 0, easing: cubicOut }}
					><ArrowUp size={16} strokeWidth={2} absoluteStrokeWidth />
				</span>
			{/if}
			{label}
		</div>
	</th>
{/snippet}

<style>
	.label {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
	}

	.icon {
		display: flex;
		color: var(--accent);
		transition: transform var(--duration);
	}

	.icon.active {
		transform: rotate(180deg) scale(1);
	}

	.page-title {
		font-size: 2.4rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3.2rem;
	}

	.table-wrapper {
		height: calc(((var(--per-page)) * 8.5rem) + 7.7rem);
		overflow: hidden;
	}

	.table-container {
		position: relative;
		text-align: center;
	}

	.table-container :global(.glow) {
		position: absolute;
		width: 120.4rem;
		top: 100%;
		left: 0%;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}

	.no-order {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2.4rem;
	}

	.no-order .title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.2rem;
	}

	.no-order .heading {
		font-size: 2.4rem;
		font-weight: 700;
	}

	.no-order .subheading {
		font-size: 1.6rem;
		font-weight: 600;
	}

	table {
		width: 100%;
		border-spacing: 0;
		user-select: none;
		overflow: clip;
	}

	table.extra {
		border-radius: 2.4rem;
	}

	thead {
		position: relative;
		z-index: 2;
		background: var(--bg-primary);
	}

	th,
	td {
		padding-block: 2rem;
		padding-left: 2rem;
		border-bottom: 1px solid var(--stroke);
	}

	th {
		padding-block: 2.4rem;
	}

	:is(th, td):first-child {
		padding-right: 2rem;
	}

	th {
		font-weight: 700;
		cursor: pointer;
	}

	table.extra tbody tr:last-child :is(th, td) {
		border-bottom: none;
	}

	td {
		text-align: center;
	}

	:is(td, th).product {
		text-align: right;
	}

	.description {
		display: grid;
		gap: 0.8rem;
	}

	tbody tr {
		cursor: pointer;
		transition: background-color var(--duration);
	}

	tbody tr:hover {
		background: var(--bg-secondary);
	}

	table.extra tbody tr:last-child {
		border-bottom-right-radius: 2.4rem;
		border-bottom-left-radius: 2.4rem;
	}

	.warning {
		color: var(--warning);
	}

	.success {
		color: var(--success);
	}

	.error {
		color: var(--error);
	}
</style>
