<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Comment from '$lib/component/comment.svelte';
	import { commentList } from '$lib/data/comments';
	import type { FormEventHandler } from 'svelte/elements';

	const IS_USER_LOGGED_IN = true;

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
	};
</script>

<section class="comments">
	<h2 class="title">دیدگاه مشتریان</h2>
	<div class="content">
		<ul class="list">
			{#each commentList as comment (comment.id)}
				<li>
					<Comment data={comment} showProductIcon={false} size="small" viewAnimation={false} />
				</li>
			{/each}
		</ul>
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
		min-width: 30.2rem;
		height: 24.8rem;
		flex-shrink: 0;
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

	@media (max-width: 64rem) {
		.content {
			flex-direction: column;
			gap: 2rem;
		}

		.comment-form {
			order: 1;
		}

		.list {
			order: 2;
		}
	}

	@media (max-width: 56rem) {
		.content {
			flex-direction: row;
			gap: 2rem;
		}

		.comment-form {
			order: 2;
			min-width: 32rem;
		}

		.list {
			order: 1;
		}
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
