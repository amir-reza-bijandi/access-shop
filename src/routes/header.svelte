<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Logo from '$lib/component/logo.svelte';
	import Navigation from '$lib/component/navigation.svelte';
	import type { NavigationRoute } from '$lib/type/general';
	import { LogIn } from 'lucide-svelte';

	const routeList: NavigationRoute[] = [
		{
			name: 'صحفهٔ اصلی',
			path: '/'
		},
		{
			name: 'محصولات',
			path: '/products'
		},
		{
			name: 'قوانین',
			path: '/tos'
		},
		{
			name: 'بلاگ',
			path: '/blog'
		},
		{
			name: 'تماس با ما',
			path: '/contact'
		}
	];
</script>

<header>
	<Logo />
	<Navigation {routeList} />
	<Button as="a" icon={LogIn} href="/login">ورود به حساب کاربری</Button>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
