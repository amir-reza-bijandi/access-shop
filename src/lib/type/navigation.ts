import type { Icon as LucideIcon } from 'lucide-svelte';

export type NavigationRoute = {
	name: string;
	path: string;
	icon: typeof LucideIcon;
};

export type NavigationProps = {
	routeList: NavigationRoute[];
};
