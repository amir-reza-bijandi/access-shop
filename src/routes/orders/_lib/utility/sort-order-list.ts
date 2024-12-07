import type { Order } from '../data/orders';

export type SortType = 'submitDate' | 'deliveryDate' | 'price' | 'status';
export type SortDirection = 'asc' | 'desc';

export default function sortOrderList(
	orderList: Order[],
	sortType: SortType,
	sortDirection: 'asc' | 'desc'
) {
	if (sortType === 'submitDate') {
		const newOrderList = [...orderList];
		newOrderList.sort((a, b) =>
			sortDirection === 'asc' ? a.submitDate - b.submitDate : b.submitDate - a.submitDate
		);
		return newOrderList;
	} else if (sortType === 'deliveryDate') {
		const deliveredOrderList = orderList.filter((order) => order.status === 'delivered');
		const canceledOrderList = orderList.filter((order) => order.status === 'canceled');
		deliveredOrderList.sort((a, b) =>
			sortDirection === 'asc' ? a.deliveryDate - b.deliveryDate : b.deliveryDate - a.deliveryDate
		);
		return [...deliveredOrderList, ...canceledOrderList];
	} else if (sortType === 'price') {
		const newOrderList = [...orderList];
		newOrderList.sort((a, b) => (sortDirection === 'asc' ? a.price - b.price : b.price - a.price));
		return newOrderList;
	} else {
		const pendingOrders = orderList.filter((order) => order.status === 'pending');
		const deliveredOrders = orderList.filter((order) => order.status === 'delivered');
		const canceledOrders = orderList.filter((order) => order.status === 'canceled');
		return sortDirection === 'asc'
			? [...pendingOrders, ...deliveredOrders, ...canceledOrders]
			: [...canceledOrders, ...deliveredOrders, ...pendingOrders];
	}
}
