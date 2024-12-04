<script lang="ts">
	import ProductIcon from './product-icon.svelte';
	import formatCommentDate from '$lib/utility/format-comment-date';
	import { inview } from 'svelte-inview';
	import handleViewChange from '$lib/utility/handle-view-change';
	import type { Comment } from '$lib/data/comments';

	type CommentProps = {
		data: Comment;
	};
	const { data }: CommentProps = $props();
	const { name, text, date, iconSrc, avatarSrc } = data;
</script>

<div class="comment" use:inview oninview_change={(e) => handleViewChange(e.detail)}>
	<article class="content box">
		<header class="header">
			<div class="info">
				<img class="avatar" src={avatarSrc} alt="عکس پروفایل {name}" />
				<div>
					<address class="name">{name}</address>
					<time class="date" datetime={new Date(date).toISOString()}>
						{formatCommentDate(date)}
					</time>
				</div>
			</div>
			<ProductIcon class="icon" src={iconSrc} />
		</header>
		<p class="text">{text}</p>
	</article>
</div>

<style>
	.box {
		height: 100%;
	}

	.content {
		padding: 2.4rem;
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.2rem;
	}

	.info {
		display: flex;
		align-items: center;
		gap: 1.6rem;
	}

	.name {
		font-size: 2rem;
		font-weight: 700;
		font-style: normal;
		margin-bottom: 0.8rem;
	}

	.date {
		font-size: 1.4rem;
	}

	.avatar {
		width: 6.4rem;
		height: 6.4rem;
		border: 1px solid var(--stroke);
		border-radius: 9999px;
	}

	.header :global(.icon) {
		width: 3.6rem;
	}

	.text {
		line-height: var(--line-height);
	}
</style>
