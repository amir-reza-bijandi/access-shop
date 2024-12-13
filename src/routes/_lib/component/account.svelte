<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import detectOutsideClick from '$lib/action/detect-outside-click.svelte';
	import rippleEffect from '$lib/action/ripple-effect.svelte';
	import Button from '$lib/component/button.svelte';
	import { ChevronDown, LogIn, LogOut, ShoppingCart, User } from 'lucide-svelte';
	import { getContext } from 'svelte';
	import type { UserContext } from '$lib/type/user';
	import type { AuthExternalContext } from '$lib/type/auth';

	/* ---------------------------------- State --------------------------------- */
	const userContext: UserContext = getContext('user');
	const authExternalContext: AuthExternalContext = getContext('auth-external');
	let isMenuActive = $state(false);

	/* --------------------------------- Events --------------------------------- */
	function toggleMenu() {
		isMenuActive = !isMenuActive;
	}

	function openAuth() {
		authExternalContext.currentStep = 0;
		authExternalContext.currentPhoneNumber = '';
		authExternalContext.operation = 'auth';
		authExternalContext.isAuthActive = true;
	}
</script>

<div class="account" use:detectOutsideClick={() => (isMenuActive = false)}>
	{#if userContext.isLoggedIn}
		<!-- Button -->
		<div class="box btn-box">
			<button class="btn" use:rippleEffect onclick={toggleMenu}>
				<span class="icon {isMenuActive ? 'active' : ''}">
					<ChevronDown size={16} absoluteStrokeWidth strokeWidth={2} />
				</span>
				<span class="name">امیررضا بیجندی</span>
				<img class="avatar" src="/image/avatar/1.png" alt="عکس پروفایل شما" />
			</button>
		</div>
		<!-- Menu -->
		<div class="box menu-box {isMenuActive ? 'active' : ''}">
			<div>
				<div class="header">
					<img class="bg" src="/image/avatar/1.png" alt="عکس پروفایل شما" />
					<span class="welcome">خوش اومدی!</span>
				</div>
				<ul class="list">
					<li class="item">
						<a href="/account" class="link" onclick={toggleMenu}>
							<User size={20} strokeWidth={1.5} absoluteStrokeWidth />
							ویرایش حساب کاربری
						</a>
					</li>
					<li class="item">
						<a href="/orders" class="link" onclick={toggleMenu}>
							<ShoppingCart size={20} strokeWidth={1.5} absoluteStrokeWidth />
							سفارش‌ها
						</a>
					</li>
					<li class="item">
						<a href="/" class="link" onclick={toggleMenu}>
							<LogOut size={20} strokeWidth={1.5} absoluteStrokeWidth />
							خروج از حساب
						</a>
					</li>
				</ul>
			</div>
		</div>
	{:else}
		<Button class="login-btn-desktop" icon={LogIn} variant="outline" onclick={openAuth}>
			ورود به حساب کاربری
		</Button>
		<button
			class="login-btn-mobile"
			use:rippleEffect={{ dynamicPositon: false }}
			onclick={openAuth}
		>
			<User />
		</button>
	{/if}
</div>

<style>
	.account {
		position: relative;
	}

	.account :global(.btn-box) {
		cursor: pointer;
		border-radius: 9999px;
		overflow: hidden;
		user-select: none;
	}

	.account :global(.menu-box) {
		overflow: hidden;
		opacity: 0;
		transform: translateY(1rem);
		pointer-events: none;
		transition-property: opacity, transform;
		transition-duration: var(--duration);
		position: absolute;
		top: calc(100% + 1.2rem);
		left: -1.9rem;
		width: 22.3rem;
		z-index: 9999;
	}

	.account :global(.menu-box.active) {
		opacity: 1;
		transform: translateY(0);
		pointer-events: all;
	}

	.list {
		list-style: none;
	}

	.item {
		border-bottom: 1px solid var(--stroke);
	}

	.item:first-of-type {
		border-top: 1px solid var(--stroke);
	}

	.item:last-of-type {
		border-bottom: 0;
	}

	.link {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		color: inherit;
		padding: 1.6rem;
		text-decoration: none;
		transition: background-color var(--duration);
	}

	.link:hover {
		background: var(--bg-secondary);
	}

	.btn {
		display: flex;
		align-items: center;
		padding: 0.4rem;
		padding-right: 0.8rem;
		gap: 0.8rem;
		transition: background-color var(--duration);
		background: transparent;
		color: inherit;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.btn:hover {
		background: var(--bg-secondary);
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform var(--duration);
	}

	.icon.active {
		transform: rotate(-180deg);
	}

	.name {
		font-size: 1.6rem;
		font-weight: 700;
	}

	.avatar {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		border: 1px solid var(--stroke);
		object-fit: cover;
	}

	.header {
		position: relative;
		height: 8rem;
		overflow: hidden;
	}

	.bg {
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* Use filter instead of backdrop-filter to pervent flash in firefox */
		filter: blur(15px);
	}

	.welcome {
		font-size: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: var(--bg-primary-33);
	}

	.login-btn-mobile {
		--ripple-color: hsl(var(--base-gray-100) / 30%);
		display: none;
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

	/* 1330px */
	@media (max-width: 83.125rem) {
		.account :global(.menu-box) {
			left: -0.8rem;
		}
	}

	/* 512px */
	@media (max-width: 32rem) {
		.account :global(.login-btn-desktop) {
			display: none;
		}
		.login-btn-mobile {
			display: flex;
		}
		.name {
			display: none;
		}
		.icon {
			display: none;
		}
		.avatar {
			margin: 0;
		}
		.btn {
			padding: 0;
		}
		.account :global(.btn-box) {
			border: none;
			background: none;
		}
	}
</style>
