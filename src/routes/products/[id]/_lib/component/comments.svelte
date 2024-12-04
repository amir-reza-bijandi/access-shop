<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Comment from '$lib/component/comment.svelte';
	import { commentList } from '$lib/data/comments';
	import type { FormEventHandler } from 'svelte/elements';

	const IS_USER_LOGGED_IN = false;

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
		position: relative;
		width: 30.2rem;
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
</style>
