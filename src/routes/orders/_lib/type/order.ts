import type { Order } from '../data/orders';

export type OrderContext = {
	currentOrder: Order;
	currentPageIndex: number;
	contentHeight: number;
};
