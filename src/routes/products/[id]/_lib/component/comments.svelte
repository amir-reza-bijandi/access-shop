<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Comment from '$lib/component/comment.svelte';
	import type { FormEventHandler } from 'svelte/elements';
	import { singleProduct } from '../data/single-product';

	const IS_USER_LOGGED_IN = true;

	const { commentList } = singleProduct;

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
	};
</script>

<section class="comments {!commentList.length ? 'no-comment' : ''}">
	<h2 class="title">دیدگاه مشتریان</h2>
	<div class="content">
		{#if commentList.length > 0}
			<ul class="list">
				{#each commentList as comment (comment.id)}
					<li>
						<Comment data={comment} showProductIcon={false} size="small" viewAnimation={false} />
					</li>
				{/each}
			</ul>
		{/if}
		{#if IS_USER_LOGGED_IN}
			<form class="comment-form" onsubmit={handleSubmit}>
				<textarea class="text box rounded-lg" placeholder="دیدگاه خود را اینجا بنویسید..."
				></textarea>
				<Button type="submit" class="submit">ثبت دیدگاه</Button>
			</form>
		{/if}
	</div>
</section>

<style>
	.title {
		font-size: 2.4rem;
		font-weight: 700;
		margin-bottom: 2.4rem;
	}

	.list {
		display: grid;
		gap: 1.6rem;
		list-style: none;
	}

	.content {
		display: flex;
		gap: 1.6rem;
	}

	.comment-form {
		position: sticky;
		top: 2rem;
		min-width: 32rem;
		height: 28rem;
		flex-shrink: 0;
	}

	.no-comment .comment-form {
		position: relative;
		top: 0;
		flex-shrink: 1;
		width: 100%;
	}

	.comment-form :global(.submit) {
		position: absolute;
		width: auto;
		inset: auto 2rem 2rem 2rem;
	}

	.text {
		color: inherit;
		outline: 0;
		height: 100%;
		resize: none;
		padding: 2rem;
		width: 100%;
	}

	@media (max-width: 48rem) {
		.content {
			flex-direction: column;
		}

		.comment-form {
			position: relative;
			order: 1;
			top: 0;
		}

		.list {
			order: 2;
		}

		.title {
			display: none;
		}
	}
</style>
