import type { OrderStatus } from '../data/orders';

const statusColorMap: Record<OrderStatus, string> = {
	pending: 'warning',
	delivered: 'success',
	canceled: 'error'
};

export default function getStatusColor(status: OrderStatus) {
	return statusColorMap[status];
}
