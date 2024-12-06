<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Comment from '$lib/component/comment.svelte';
	import type { FormEventHandler, EventHandler } from 'svelte/elements';
	import { singleProduct } from '../data/single-product';
	import Status from '$lib/component/status.svelte';

	type Form = {
		status: 'error' | 'success' | null;
		message: string | null;
		isSubmitting: boolean;
	};
	const form: Form = $state({
		status: null,
		message: null,
		isSubmitting: false
	});

	const IS_USER_LOGGED_IN = true;

	const { commentList } = singleProduct;

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		form.status = null;
		form.message = null;
		form.isSubmitting = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		form.isSubmitting = false;
		form.status = 'success';
		form.message = 'دیدگاه شما با موفقیت ارسال شد!';
	};

	const handleInvalid: FormEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault();
		if (e.currentTarget.validity.valueMissing) {
			form.status = 'error';
			form.message = 'متن دیدگاه الزامیست!';
		}
	};

	const handleInput = () => {
		form.status = null;
		form.message = null;
	};
</script>

<section
	class="comments {!commentList.length ? 'no-comment' : ''} {form.isSubmitting ? 'submitting' : ''}"
>
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
			<form class="comment-form box rounded-lg" onsubmit={handleSubmit}>
				<div class="comment-form-wrapper">
					<textarea
						class="text"
						placeholder="دیدگاه خود را اینجا بنویسید..."
						title="متن دیدگاه"
						required
						oninvalid={handleInvalid}
						oninput={handleInput}
					></textarea>
					<Button type="submit" class="submit">ثبت دیدگاه</Button>
					<Status type={form.status} message={form.message} />
				</div>
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
		gap: 2rem;
	}

	.comment-form {
		padding: 2rem;
		position: sticky;
		top: 2rem;
		min-width: 32rem;
		min-height: 28rem;
		align-self: flex-start;
	}

	.comment-form-wrapper {
		display: flex;
		flex-direction: column;
		transition: opacity var(--duration);
	}

	.comments.submitting .comment-form-wrapper {
		opacity: 0.5;
		pointer-events: none;
	}

	.no-comment .comment-form {
		position: relative;
		top: 0;
		flex-shrink: 1;
		width: 100%;
	}

	.comment-form :global(.submit) {
		margin-top: 2rem;
		width: 100%;
	}

	.text {
		color: inherit;
		outline: 0;
		height: 100%;
		resize: none;
		width: 100%;
		background: transparent;
		border: 0;
		outline: 0;
		height: 17rem;
	}

	@media (max-width: 48rem) {
		.content {
			flex-direction: column;
		}

		.comment-form {
			position: relative;
			order: 1;
			top: 0;
			width: 100%;
		}

		.list {
			order: 2;
		}

		.title {
			display: none;
		}
	}
</style>
