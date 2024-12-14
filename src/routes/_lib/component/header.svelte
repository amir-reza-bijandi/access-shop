<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Glow from '$lib/component/glow.svelte';
	import Logo from '$lib/component/logo.svelte';
	import Navigation from './navigation.svelte';
	import type { NavigationRoute } from '../type/navigation';
	import { House, Newspaper, Phone, Scale, ShoppingBag } from 'lucide-svelte';
	import UserAccount from './account.svelte';

	/* -------------------------------- Constants ------------------------------- */
	const ROUTE_LIST: NavigationRoute[] = [
		{
			name: 'صحفهٔ اصلی',
			path: '/',
			icon: House
		},
		{
			name: 'محصولات',
			path: '/products',
			icon: ShoppingBag
		},
		{
			name: 'قوانین',
			path: '/tos',
			icon: Scale
		},
		{
			name: 'بلاگ',
			path: '/blog',
			icon: Newspaper
		},
		{
			name: 'تماس با ما',
			path: '/contact',
			icon: Phone
		}
	];
</script>

<header>
	<Glow --size="102.4rem" --top="50%" --right="0" />
	<div class="right-section">
		<Navigation routeList={ROUTE_LIST} />
		<Logo />
	</div>
	<UserAccount />
</header>

<style>
	header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	header :global(.glow) {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(50%, -50%);
		width: 1024px;
		z-index: -1;
	}

	.right-section {
		display: flex;
		gap: 1.2rem;
	}

	/* 1152px */
	@media (min-width: 72rem) {
		.right-section {
			/* Prevent navigation from causing padding */
			gap: 0;
		}
	}
</style>
