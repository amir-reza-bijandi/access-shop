<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler, TransitionEventHandler } from 'svelte/elements';
	import { ChevronUp } from 'lucide-svelte';

	type AccordionProps = {
		title: string;
		children: Snippet;
		open?: boolean;
	};
	const { title, children, open = false }: AccordionProps = $props();

	let isOpen = $state(open);
	let detailsElement: HTMLDetailsElement;

	// Expand the accordion on click
	const expand: MouseEventHandler<HTMLElement> = (e) => {
		e.preventDefault();
		detailsElement.classList.toggle('expanded');
		if (!isOpen) {
			isOpen = true;
		}
	};

	// Collapse the accordion on transition end
	const collapse: TransitionEventHandler<HTMLElement> = (e) => {
		if (!detailsElement.classList.contains('expanded')) {
			isOpen = false;
		}
	};
</script>

<div class="box rounded-lg">
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
			<div class="content">
				<p class="text">{@render children()}</p>
			</div>
		</div>
	</details>
</div>

<style>
	.accordion {
		display: block;
		width: 100%;
	}

	/*** TITLE ***/

	/* Hide the default chevron */
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

		/* Hide the default chevron */
		list-style: none;
	}

	.accordion :global(svg) {
		transition: transform var(--duration);
	}

	.accordion.expanded .title {
		border-color: var(--stroke);
	}

	.accordion.expanded :global(svg) {
		transform: rotate(180deg);
	}

	.description {
		display: grid;
		overflow: hidden;
		grid-template-rows: 0fr;
		transition: grid-template-rows var(--duration);
		line-height: var(--line-height);
	}

	.accordion.expanded .description {
		grid-template-rows: 1fr;
	}

	.content {
		min-height: 0;
	}

	.text {
		transition-property: transform;
		transition-duration: var(--duration);
		transform: scale(0.8);
		padding: 2.4rem;
	}

	.accordion.expanded .text {
		transform: scale(1);
	}

	/* Tablet */
	@media (max-width: 56rem) {
		.title {
			font-size: 1.8rem;
			padding: 2rem;
		}
	}

	/* Mobile */
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
