<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler, TransitionEventHandler } from 'svelte/elements';
	import Card from './card.svelte';
	import { ChevronUp } from 'lucide-svelte';

	type AccordionProps = {
		title: string;
		children: Snippet;
		open?: boolean;
	};
	const { title, children, open = false }: AccordionProps = $props();

	let isOpen = $state(open);
	let detailsElement: HTMLDetailsElement;

	const expand: MouseEventHandler<HTMLElement> = (e) => {
		e.preventDefault();
		detailsElement.classList.toggle('expanded');
		if (!isOpen) {
			isOpen = true;
		}
	};

	const collapse: TransitionEventHandler<HTMLElement> = (e) => {
		if (!detailsElement.classList.contains('expanded')) {
			isOpen = false;
		}
	};
</script>

<Card>
	<!-- 
      There is a bug in the Chrome browser that prevents the details element's
      animation from working with the first click. That's why i permently added
      the "open" attribute. 
  -->
	<details
		bind:this={detailsElement}
		{...isOpen ? { open: true } : {}}
		class={open ? 'expanded' : ''}
		open
	>
		<summary onclick={expand}>{title}<ChevronUp /></summary>
		<div class="content" ontransitionend={collapse}>
			<p>{@render children()}</p>
		</div>
	</details>
</Card>

<style>
	details {
		display: block;
		width: 100%;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary {
		display: flex;
		justify-content: space-between;
		cursor: pointer;
		padding: 2.4rem;
		font-size: 2rem;
		font-weight: 700;
		border-bottom: 1px solid transparent;
		transition: border calc(var(--duration) * 2);
		user-select: none;
		list-style: none;
	}

	.content {
		display: grid;
		overflow: hidden;
		grid-template-rows: 0fr;
		transition: grid-template-rows var(--duration);
		line-height: var(--line-height);
	}

	details :global(svg) {
		transition: transform var(--duration);
	}

	.content > p {
		min-height: 0;
		padding: 0;
		opacity: 0;
		transform: scale(0.75);
		transition-property: padding, opacity, transform;
		transition-duration: var(--duration);
	}

	details.expanded .content {
		grid-template-rows: 1fr;
	}

	details.expanded summary {
		border-color: var(--stroke);
	}

	details.expanded :global(svg) {
		transform: rotate(180deg);
	}

	details.expanded .content > p {
		padding: 2.4rem;
		opacity: 1;
		transform: scale(1);
	}
</style>
