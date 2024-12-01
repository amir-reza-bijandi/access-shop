<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Logo from '$lib/component/logo.svelte';
	import Navigation from './navigation.svelte';
	import type { NavigationRoute } from '../type/navigation';
	import { House, LogIn, Newspaper, Phone, Scale, ShoppingBag, User } from 'lucide-svelte';
	import rippleEffect from '$lib/action/ripple-effect.svelte';

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
	<!-- Desktop -->
	<Button class="login-btn-desktop" icon={LogIn} variant="outline">ورود به حساب کاربری</Button>
	<!-- Mobile -->
	<button class="login-btn-mobile" use:rippleEffect={{ dynamicPositon: false }}><User /></button>
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

	.login-btn-mobile {
		display: none;
	}

	@media (max-width: 32rem) {
		header :global(.login-btn-desktop) {
			display: none;
		}

		.login-btn-mobile {
			--ripple-color: hsl(var(--gray-100) / 30%);
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1.2rem;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			color: inherit;
			border-radius: 0.8rem;
		}
	}
</style>
