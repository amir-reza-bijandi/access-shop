import { Check, Loader, X, Icon } from 'lucide-svelte';
import type { OrderStatus } from '../data/orders';

const statusIconMap: Record<OrderStatus, typeof Icon> = {
	pending: Loader,
	delivered: Check,
	canceled: X
};

export default function getStatusIcon(status: OrderStatus) {
	return statusIconMap[status];
}
