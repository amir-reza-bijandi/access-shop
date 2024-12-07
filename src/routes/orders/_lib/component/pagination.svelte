<script lang="ts">
	import rippleEffect from '$lib/action/ripple-effect.svelte';
	import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	type PaginationProps = {
		currentPage: number;
		totalPages: number;
		onPageChange: (newPage: number) => void;
	};
	const { currentPage, totalPages, onPageChange }: PaginationProps = $props();

	let prevPage = $state<number>(0);

	const handlePageChange = (page: number) => {
		prevPage = currentPage;
		onPageChange(page);
	};
</script>

{#if totalPages > 1}
	<div class="pagination">
		{#if totalPages > 2}
			<button
				class="btn"
				use:rippleEffect={{ sizeMultiplier: 2 }}
				disabled={currentPage === totalPages}
				onclick={() => handlePageChange(totalPages)}
				><ChevronsRight strokeWidth={1.5} absoluteStrokeWidth /></button
			>
		{/if}
		<button
			class="btn"
			use:rippleEffect={{ sizeMultiplier: 2 }}
			disabled={currentPage === totalPages}
			onclick={() => handlePageChange(currentPage + 1)}
			><ChevronRight strokeWidth={1.5} absoluteStrokeWidth /></button
		>
		<span class="current-page">
			{#key currentPage}
				<span
					class="number"
					in:fly={{ duration: 200, y: 20 * (currentPage - prevPage > 0 ? 1 : -1), opacity: 0 }}
					out:fly={{ duration: 200, y: -20 * (currentPage - prevPage > 0 ? 1 : -1), opacity: 0 }}
				>
					{currentPage.toLocaleString('fa-IR')}
				</span>
			{/key}
		</span>
		<button
			class="btn"
			use:rippleEffect={{ sizeMultiplier: 2 }}
			disabled={currentPage === 1}
			onclick={() => handlePageChange(currentPage - 1)}
			><ChevronLeft strokeWidth={1.5} absoluteStrokeWidth /></button
		>
		{#if totalPages > 2}
			<button
				class="btn"
				use:rippleEffect={{ sizeMultiplier: 2 }}
				disabled={currentPage === 1}
				onclick={() => handlePageChange(1)}
				><ChevronsLeft strokeWidth={1.5} absoluteStrokeWidth /></button
			>
		{/if}
	</div>
{/if}

<style>
	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
		margin-top: 2.4rem;
		user-select: none;
	}

	.current-page {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		border: 1px solid var(--stroke);
		border-radius: 0.8rem;
		background: var(--bg-primary);
		overflow: hidden;
	}

	.number {
		position: absolute;
	}

	.pagination > * {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 4rem;
		height: 4rem;
	}

	.btn {
		transition-property: background-color, border-color, opacity;
		transition-duration: var(--duration);
		border: 1px solid transparent;
		border-radius: 50%;
	}

	.btn:hover {
		/* background: var(--bg-secondary); */
		border-color: var(--stroke);
	}

	.btn:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
