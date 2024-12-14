<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import type { NavigationProps, NavigationRoute } from '../../type/navigation';
	import { getContext } from 'svelte';
	import { page, navigating } from '$app/stores';

	/* ---------------------------------- State --------------------------------- */
	const currentPath = $derived($navigating ? $navigating.to?.url.pathname : $page.url.pathname);
	const { routeList }: NavigationProps = getContext('navigationProps');
</script>

<nav class="navigation">
	<ul class="list">
		{#each routeList as route}
			{@render item(route)}
		{/each}
	</ul>
</nav>

{#snippet item({ name, path }: NavigationRoute)}
	<li>
		<a class="link {path === currentPath ? 'active' : ''}" href={path}>
			<span class="link-content">{name}</span>
		</a>
	</li>
{/snippet}

<style>
	.navigation {
		display: none;
	}

	.list {
		display: flex;
		list-style: none;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 9999;
	}

	.link {
		padding: 1.2rem;
		color: inherit;
		text-decoration: none;
	}

	.link-content {
		position: relative;
		display: inline-block;
		font-weight: 700;
	}

	.link-content::before {
		content: '';
		position: absolute;
		top: 100%;
		width: 100%;
		height: 0.4rem;
		border-radius: 9999px;
		background: var(--accent);
		opacity: 0;
		transform: translateY(1.2rem) scale(0.9);
		transition-property: opacity, transform;
		transition-duration: var(--duration);
	}

	.link:hover :global(.link-content::before),
	.link.active :global(.link-content::before) {
		transform: translateY(0.8rem) scale(1);
	}

	.link:hover :global(.link-content::before) {
		opacity: 0.5;
	}

	.link.active :global(.link-content::before) {
		opacity: 1;
	}

	/* 1152px */
	@media (min-width: 72rem) {
		.navigation {
			display: block;
		}
	}
</style>
