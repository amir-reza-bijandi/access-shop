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
	}

	a {
		position: relative;
		display: inline-block;
		color: inherit;
		text-decoration: none;
		font-weight: 700;
	}

	li {
		cursor: pointer;
		padding: 1.2rem;
	}

	li a::before {
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

	li:hover a::before,
	li.active a::before {
		transform: translateY(0.8rem) scale(1);
	}

	li:hover a::before {
		opacity: 0.5;
	}

	li.active a::before {
		opacity: 1;
	}
</style>
