<script lang="ts">
	import Glow from '$lib/component/glow.svelte';
	import Logo from '$lib/component/logo.svelte';
	import Navigation from './navigation.svelte';
	import type { NavigationRoute } from '../type/navigation';
	import { House, Newspaper, Phone, Scale, ShoppingBag, User } from 'lucide-svelte';
	import UserAccount from './account.svelte';

	const routeList: NavigationRoute[] = [
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
	<Glow class={'glow'} />
	<div class="right-section">
		<Navigation {routeList} />
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

	@media (min-width: 72rem) {
		.right-section {
			/* Prevent navigation from causing padding */
			gap: 0;
		}
	}
</style>
