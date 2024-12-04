<script lang="ts">
	import type { NavigationProps, NavigationRoute } from '../../type/navigation';
	import { getContext } from 'svelte';
	import { page, navigating } from '$app/stores';

	const currentPath = $derived($navigating ? $navigating.to?.url.pathname : $page.url.pathname);

	const { routeList }: NavigationProps = getContext('navigationProps');
</script>

<nav class="navigation">
	<div class="box blur-low">
		<ul class="list">
			{#each routeList as route}
				{@render item(route)}
			{/each}
		</ul>
	</div>
</nav>

{#snippet item({ icon: Icon, path }: NavigationRoute)}
	<li>
		<a class="link {path === currentPath ? 'active' : ''}" href={path}><Icon /></a>
	</li>
{/snippet}

<style>
	.navigation {
		display: none;
		position: fixed;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 9999;
	}

	.navigation :global(.box) {
		padding: 1.6rem;
	}

	.list {
		list-style: none;
		display: flex;
		gap: 1.6rem;
	}

	.link {
		display: flex;
		position: relative;
		color: inherit;
		padding: 0.8rem;
	}

	.link::before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--accent);
		border-radius: 0.8rem;
		z-index: -1;
		opacity: 0;
		transform: scale(0);
		transition-property: transform, opacity;
		transition-duration: var(--duration);
	}

	.link.active::before {
		opacity: 1;
		transform: scale(1);
	}

	@media (max-width: 32rem) {
		.navigation {
			display: block;
		}
	}
</style>
