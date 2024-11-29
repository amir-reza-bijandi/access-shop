<script lang="ts">
	import type { NavigationProps, NavigationRoute } from '$lib/type/navigation';
	import { getContext } from 'svelte';
	import { page, navigating } from '$app/stores';

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
	<li class="item {path === currentPath ? 'active' : ''}">
		<a class="link" href={path}>{name}</a>
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
		position: relative;
		display: inline-block;
		color: inherit;
		text-decoration: none;
		font-weight: 700;
	}

	.item {
		cursor: pointer;
		padding: 1.2rem;
	}

	.link::before {
		content: '';
		position: absolute;
		top: 100%;
		width: 100%;
		height: 0.4rem;
		border-radius: 9999px;
		background: hsl(var(--accent));
		opacity: 0;
		transform: translateY(1.2rem) scale(0.9);
		transition-property: opacity, transform;
		transition-duration: var(--duration);
	}

	.item:hover .link::before,
	.item.active .link::before {
		transform: translateY(0.8rem) scale(1);
	}

	.item:hover .link::before {
		opacity: 0.5;
	}

	.item.active .link::before {
		opacity: 1;
	}

	@media (min-width: 72rem) {
		.navigation {
			display: block;
		}
	}
</style>
