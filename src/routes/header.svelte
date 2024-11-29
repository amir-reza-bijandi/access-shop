<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Logo from '$lib/component/logo.svelte';
	import Navigation from '$lib/component/navigation.svelte';
	import type { NavigationRoute } from '$lib/type/navigation';
	import { House, LogIn, Newspaper, Phone, Scale, ShoppingBag } from 'lucide-svelte';

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
	<Button as="a" icon={LogIn} href="/login" variant="outline">ورود به حساب کاربری</Button>
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
</style>
