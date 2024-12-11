<script lang="ts">
	import Page from '$lib/component/page.svelte';
	import { ArrowDownUp, ArrowDownWideNarrow, ArrowUp, LayoutGrid } from 'lucide-svelte';
	import { orderList, type Order, type OrderStatus } from './_lib/data/orders';
	import formatOrderDate from './_lib/utility/format-order-date';
	import Glow from '$lib/component/glow.svelte';
	import Button from '$lib/component/button.svelte';
	import Pagination from './_lib/component/pagination.svelte';
	import type { SortDirection, SortType } from './_lib/utility/sort-order-list';
	import sortOrderList from './_lib/utility/sort-order-list';
	import { fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { cubicOut } from 'svelte/easing';
	import Select from '$lib/component/select.svelte';
	import Details from './_lib/component/details.svelte';
	import getStatusColor from './_lib/utility/get-status-color';
	import getStatusIcon from './_lib/utility/get-status-icon';

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
	// svelte-ignore state_referenced_locally
	let selectedOrder = $state(currentOrderList[0]);
	let isOrderDetailsOpen = $state(false);

	const statusTextMap: Record<OrderStatus, string> = {
		pending: 'در حال انجام',
		delivered: 'انجام شده',
		canceled: 'لغو شده'
	};

	const handlePageChange = (page: number) => (currentPage = page);
	const handleSortChange = (type: SortType) => {
		if (type === sort.type) sort.direction = sort.direction === 'asc' ? 'desc' : 'asc';
		else sort.type = type;
	};
	const handleCloseOrderDetails = () => (isOrderDetailsOpen = !isOrderDetailsOpen);
	const handleOpenOrderDetails = (order: Order) => {
		selectedOrder = order;
		handleCloseOrderDetails();
	};
</script>

<Details order={selectedOrder} open={isOrderDetailsOpen} onclose={handleCloseOrderDetails} />
<Page introAnimation>
	{#if orderList.length > 0}
		<div class="sort-options">
			<Select
				itemList={[
					{ name: 'تاریخ ثبت', value: 'submitDate' },
					{ name: 'قیمت', value: 'price' },
					{ name: 'تاریخ تحویل', value: 'deliveryDate' },
					{ name: 'وضعیت', value: 'status' }
				]}
				variant="compact"
				icon={ArrowDownWideNarrow}
				label="مرتب‌سازی"
				bind:value={sort.type}
			/>
			<Select
				itemList={[
					{ name: 'صعودی', value: 'asc' },
					{ name: 'نزولی', value: 'desc' }
				]}
				variant="compact"
				icon={ArrowDownUp}
				label="ترتیب نمایش"
				menuOrigin="left"
				bind:value={sort.direction}
			/>
		</div>
	{/if}
	<div class="table-container">
		<Glow --size="102.4rem" --top="100%" --left="0" />
		<div style:--per-page={PER_PAGE} class="table-wrapper box rounded-lg blur-low">
			{#if orderList.length > 0}
				<table class={currentOrderList.length >= PER_PAGE ? 'extra' : ''}>
					<thead>
						<tr>
							<th><LayoutGrid size={32} strokeWidth={2} absoluteStrokeWidth /></th>
							<th class="product">محصول</th>
							{@render tableHeader('تاریخ ثبت', 'submit-date', 'submitDate')}
							{@render tableHeader('قیمت', 'price', 'price')}
							{@render tableHeader('تاریخ تحویل', 'delivery-date', 'deliveryDate')}
							{@render tableHeader('وضعیت', 'status', 'status')}
						</tr>
					</thead>
					<tbody>
						{#each currentOrderList as order, index (order.id)}
							{@const { product, submitDate, deliveryDate, status, price } = order}
							{@const Icon = getStatusIcon(status)}
							<tr
								onclick={() => handleOpenOrderDetails(order)}
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
										width="32rem"
										height="32rem"
									/>
								</td>
								<td class="product"
									><div class="product-description">
										<span>اشتراک {product.period.fa} - {product.name.fa} - {product.type.fa}</span
										><span style="direction: ltr;"
											>{product.period.en} - {product.name.en} - {product.type.en}</span
										>
									</div></td
								>
								<td class="submit-date">{formatOrderDate(submitDate)}</td>
								<td class="price">{price.toLocaleString('fa-IR')} تومان</td>
								<td class="delivery-date">
									{status === 'delivered' ? formatOrderDate(deliveryDate) : '-'}
								</td>
								<td class="status {getStatusColor(status)}">
									<span class="status-text">{statusTextMap[status]}</span>
									<span class="status-icon">
										<Icon size={16} strokeWidth={1.5} absoluteStrokeWidth />
									</span>
								</td>
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
</Page>

{#snippet tableHeader(label: string, className: string, sortType: SortType)}
	<th class={className} onclick={() => handleSortChange(sortType)}>
		<div class="header-label">
			{#if sort.type === sortType}
				<span
					class="sort-icon {sort.direction === 'asc' ? 'active' : ''}"
					in:scale={{ duration: 200, opacity: 0, easing: cubicOut }}
					><ArrowUp size={16} strokeWidth={2} absoluteStrokeWidth />
				</span>
			{/if}
			{label}
		</div>
	</th>
{/snippet}

<style>
	.page-title {
		font-size: 2.4rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3.2rem;
	}

	.sort-options {
		display: none;
		justify-content: end;
		gap: 0.4rem;
		margin-bottom: 0.8rem;
		margin-inline: 0.8rem;
	}

	.table-wrapper {
		--header-height: 8.5rem;
		--row-height: 8.1rem;
		min-height: calc(((var(--per-page)) * var(--row-height)) + var(--header-height));
		max-height: calc(((var(--per-page)) * var(--row-height)) + var(--header-height));
		overflow: hidden;
	}

	.table-container {
		position: relative;
		text-align: center;
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
		width: 100%;
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

	th:is(:nth-child(1), :nth-child(2)) {
		cursor: auto;
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

	.product-description {
		display: grid;
		gap: 0.8rem;
	}

	.product-description > * {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	tbody tr {
		cursor: pointer;
		transition: background-color var(--duration);
	}

	tbody tr:hover {
		background: var(--bg-secondary);
	}

	tbody tr:active {
		background: var(--bg-tertiary);
	}

	table.extra tbody tr:last-child {
		border-bottom-right-radius: 2.4rem;
		border-bottom-left-radius: 2.4rem;
	}

	.status-icon {
		display: none;
	}
	.status-text {
		display: flex;
	}

	.status-icon,
	.status-text {
		align-items: center;
		justify-content: center;
	}

	.header-label {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
	}

	.sort-icon {
		display: flex;
		color: var(--accent);
		transition: transform var(--duration);
	}

	.sort-icon.active {
		transform: rotate(180deg) scale(1);
	}

	@media (max-width: 64rem) {
		.page-title {
			margin-bottom: 2.4rem;
		}
	}

	@media (max-width: 60rem) {
		.sort-options {
			display: flex;
		}

		.warning .status-icon {
			animation: spin 2s linear infinite;
		}

		.status-icon {
			display: flex;
		}

		.status-text {
			display: none;
		}

		/* Hide columns */
		.submit-date,
		.delivery-date,
		.price {
			display: none;
		}

		/* Header table header */
		thead {
			display: none;
		}

		.table-wrapper {
			--header-height: 0px;
		}

		/* Make first and last column's width fit their content */
		:is(th, td):is(:first-child, :last-child) {
			width: 1%;
		}

		/* Disable sorting by table headers */
		th {
			pointer-events: none;
		}
	}

	@media (max-width: 38rem) {
		.sort-options {
			justify-content: space-between;
		}
	}

	@media (max-width: 32rem) {
		.page-title {
			margin-bottom: 2rem;
		}

		td:first-child {
			display: none;
		}

		td {
			padding: 2rem;
		}
	}
</style>
