<script lang="ts">
	import { singleProduct, type Description } from '../data/single-product';

	const { fullDescription: descriptionList } = singleProduct;
</script>

<div class="full-description">
	{#each descriptionList as description}
		{@render section(description)}
	{/each}
</div>

{#snippet section({ title, body }: Description)}
	<section class="section">
		<h2 class="title">{title}</h2>
		{#if Array.isArray(body)}
			<ul class="list">
				{#each body as item}
					<li class="item">{item}</li>
				{/each}
			</ul>
		{:else}
			<p class="body">{body}</p>
		{/if}
	</section>
{/snippet}

<style>
	.section {
		margin-bottom: 2rem;
	}

	.title {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 0.8rem;
	}

	.body {
		line-height: var(--line-height);
	}

	.list {
		margin-top: 1rem;
		display: grid;
		gap: 0.4rem;
		padding-right: 2rem;
	}

	.item {
		line-height: var(--line-height);
	}

	@media (min-width: 48rem) {
		.full-description {
			animation: intro-right 1s ease backwards;
		}
	}
</style>
