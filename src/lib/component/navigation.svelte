<script lang="ts">
	import type { NavigationRoute } from '$lib/type/general';
	import { page, navigating } from '$app/stores';

	type NavigationProps = {
		routeList: NavigationRoute[];
	};
	const { routeList }: NavigationProps = $props();

	const currentPath = $derived($navigating ? $navigating.to?.url.pathname : $page.url.pathname);
</script>

<nav>
	<ul>
		{#each routeList as route}
			{@render item(route)}
		{/each}
	</ul>
</nav>

{#snippet item({ name, path }: NavigationRoute)}
	<li class={path === currentPath ? 'active' : ''}><a href={path}>{name}</a></li>
{/snippet}

<style>
	nav ul {
		display: flex;
		list-style: none;
		gap: 2.4rem;
	}

	a {
		color: inherit;
		text-decoration: none;
		font-weight: 700;
	}

	li {
		position: relative;
	}

	li::before {
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

	li:hover::before,
	li.active::before {
		transform: translateY(0.8rem) scale(1);
	}

	li:hover::before {
		opacity: 0.5;
	}

	li.active::before {
		opacity: 1;
	}
</style>
