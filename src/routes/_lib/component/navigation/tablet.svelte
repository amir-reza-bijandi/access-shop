<script lang="ts">
	import { Check, Menu, X } from 'lucide-svelte';
	import type { NavigationProps, NavigationRoute } from '../../type/navigation';
	import Box from '$lib/component/box.svelte';
	import { getContext } from 'svelte';
	import { page, navigating } from '$app/stores';
	import detectOutsideClick from '$lib/action/detect-outside-click.svelte';

	const currentPath = $derived($navigating ? $navigating.to?.url.pathname : $page.url.pathname);
	let isMenuActive = $state(false);

	function toggleMenu() {
		isMenuActive = !isMenuActive;
	}

	function handleOutsideClick() {
		if (isMenuActive) {
			isMenuActive = false;
		}
	}
	const { routeList }: NavigationProps = getContext('navigationProps');
</script>

<nav class="navigation {isMenuActive ? 'active' : ''}" use:detectOutsideClick={handleOutsideClick}>
	<button class="btn" onclick={toggleMenu}>
		<span class="btn-icon open"><Menu /></span>
		<span class="btn-icon close"><X /></span>
	</button>
	<Box class="box">
		<ul class="list">
			{#each routeList as route}
				{@render item(route)}
			{/each}
		</ul>
	</Box>
</nav>

{#snippet item({ name, path }: NavigationRoute)}
	<li class="item {path === currentPath ? 'active' : ''}">
		<a class="link" href={path}>{name}</a>
		<span class="menu-icon"><Check /></span>
	</li>
{/snippet}

<style>
	.navigation {
		display: none;
		position: relative;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--fg-primary);
		width: 4rem;
		height: 4rem;
		background: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		position: relative;
	}

	.btn-icon {
		position: absolute;
		transition: transform var(--duration);
	}

	.navigation:not(.active) .btn-icon.close {
		transform: scale(0) rotate(360deg);
	}

	.navigation.active .btn-icon.close {
		transform: scale(1) rotate(0);
	}

	.navigation:not(.active) .btn-icon.open {
		transform: scale(1) rotate(0);
	}

	.navigation.active .btn-icon.open {
		transform: scale(0) rotate(-360deg);
	}

	.navigation :global(.box) {
		position: absolute;
		z-index: 9999;
		opacity: 0;
		pointer-events: none;
		top: calc(100% + 1.6rem);
		right: 0;
		left: unset;
		transform: translate(0, 1rem) scale(0.9);
		transition-property: opacity, transform;
		transition-duration: var(--duration);
		transform-origin: top right;
		width: 28rem;
	}

	.navigation.active :global(.box) {
		opacity: 1;
		transform: translate(0, 0) scale(1);
		pointer-events: all;
	}

	.list {
		flex-direction: column;
		gap: 0;
		display: flex;
		list-style: none;
	}

	.menu-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 50%;
		left: 1.6rem;
		transform: translateY(calc(-50% + 0.4rem)) scale(0);
		transition: transform var(--duration);
		color: var(--accent);
	}

	.item.active :global(.menu-icon) {
		transform: translateY(-50%) scale(1);
	}

	.item {
		display: flex;
		justify-content: space-between;
		height: 5.7rem;
		border-bottom: 1px solid var(--stroke);
		transition: background-color var(--duration);
		padding: 0;
		position: relative;
	}

	.item:hover {
		background: var(--bg-secondary);
	}

	.item:active {
		background: var(--bg-tertiary);
	}

	.item:last-of-type {
		border-bottom: none;
	}

	.link {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		padding-right: 1.6rem;
		position: relative;
		color: inherit;
		text-decoration: none;
		font-weight: 700;
	}

	.link::before {
		content: unset;
	}

	@media (max-width: 72rem) and (min-width: 32rem) {
		.navigation {
			display: block;
		}
	}
</style>
