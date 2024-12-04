<script lang="ts">
	import ProductIcon from './product-icon.svelte';
	import formatCommentDate from '$lib/utility/format-comment-date';
	import { inview } from 'svelte-inview';
	import handleViewChange from '$lib/utility/handle-view-change';
	import type { Comment } from '$lib/data/comments';

	type CommentProps = {
		data: Comment;
		showProductIcon?: boolean;
		size?: 'small' | 'large';
		viewAnimation?: boolean;
	};
	const {
		data,
		showProductIcon = true,
		size = 'large',
		viewAnimation = true
	}: CommentProps = $props();
	const { name, text, date, iconSrc, avatarSrc } = data;
</script>

<div
	class="comment {size === 'small' ? 'small' : ''}"
	use:inview
	oninview_change={viewAnimation ? (e) => handleViewChange(e.detail) : undefined}
>
	<article class="content box rounded-lg">
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
			{#if showProductIcon}
				<ProductIcon class="icon" src={iconSrc} />
			{/if}
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

	.small .info {
		gap: 0.8rem;
	}

	.name {
		font-size: 2rem;
		font-weight: 700;
		font-style: normal;
		margin-bottom: 0.8rem;
	}

	.small .name {
		font-size: 1.6rem;
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

	.small .avatar {
		width: 4.8rem;
		height: 4.8rem;
	}

	.header :global(.icon) {
		width: 3.6rem;
	}

	.text {
		line-height: var(--line-height);
	}
</style>
