<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler, TransitionEventHandler } from 'svelte/elements';
	import Box from './box.svelte';
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

<Box>
	<!-- 
      There is a bug in the Chrome browser that prevents the details element's
      animation from working with the first click. That's why i permently added
      the "open" attribute. 
  -->
	<details
		bind:this={detailsElement}
		{...isOpen ? { open: true } : {}}
		class="accordion {open ? 'expanded' : ''}"
		open
	>
		<summary class="title" onclick={expand}>{title}<ChevronUp /></summary>
		<div class="description" ontransitionend={collapse}>
			<p>{@render children()}</p>
		</div>
	</details>
</Box>

<style>
	.accordion {
		display: block;
		width: 100%;
	}

	.title::-webkit-details-marker {
		display: none;
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		padding: 2.4rem;
		font-size: 2rem;
		font-weight: 700;
		border-bottom: 1px solid transparent;
		transition: border calc(var(--duration) * 2);
		user-select: none;
		list-style: none;
	}

	.description {
		display: grid;
		overflow: hidden;
		grid-template-rows: 0fr;
		transition: grid-template-rows var(--duration);
		line-height: var(--line-height);
	}

	.accordion :global(svg) {
		transition: transform var(--duration);
	}

	.description > p {
		min-height: 0;
		padding: 0;
		opacity: 0;
		transform: scale(0.75);
		transition-property: padding, opacity, transform;
		transition-duration: var(--duration);
	}

	.accordion.expanded .description {
		grid-template-rows: 1fr;
	}

	.accordion.expanded summary {
		border-color: var(--stroke);
	}

	.accordion.expanded :global(svg) {
		transform: rotate(180deg);
	}

	.accordion.expanded .description > p {
		padding: 2.4rem;
		opacity: 1;
		transform: scale(1);
	}

	@media (max-width: 56rem) {
		.title {
			font-size: 1.8rem;
			padding: 2rem;
		}
	}

	@media (max-width: 32rem) {
		.title {
			font-size: 1.6rem;
			padding: 2rem;
		}

		.accordion.expanded .description > p {
			padding: 2rem;
		}
	}
</style>
