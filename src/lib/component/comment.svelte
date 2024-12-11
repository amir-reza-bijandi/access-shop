<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import ProductIcon from './product-icon.svelte';
	import formatCommentDate from '$lib/utility/format-comment-date';
	import { inview } from 'svelte-inview';
	import handleViewChange from '$lib/utility/handle-view-change';
	import type { Comment } from '$lib/data/comments';

	/* ---------------------------------- Props --------------------------------- */
	type CommentProps = {
		data: Comment;
		variant: 'home' | 'single-product';
	};
	const { data, variant }: CommentProps = $props();
	const { fullName, text, date, iconSrc, avatarSrc } = data;
</script>

<div
	class="comment"
	class:small={variant === 'single-product'}
	use:inview
	oninview_change={variant === 'home' ? (e) => handleViewChange(e.detail) : undefined}
>
	<article class="content box rounded-lg">
		<!-- HEADER -->
		<header class="header">
			<div class="info">
				<img class="avatar" src={avatarSrc} alt="عکس پروفایل {fullName}" />
				<div>
					<address class="full-name">{fullName}</address>
					<time class="date" datetime={new Date(date).toISOString()}>
						{formatCommentDate(date)}
					</time>
				</div>
			</div>
			{#if variant === 'home'}
				<ProductIcon class="icon" src={iconSrc} />
			{/if}
		</header>
		<!-- BODY -->
		<p class="text" class:line-clamp={variant === 'home'}>{text}</p>
	</article>
</div>

<style>
	.content {
		padding: 2.4rem;
		display: flex;
		flex-direction: column;
		height: 100%;
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

	.full-name {
		font-size: 2rem;
		font-weight: 700;
		font-style: normal;
		margin-bottom: 0.8rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		-moz-line-clamp: 1;
		line-clamp: 1;
		overflow: hidden;
		/* Prevent the hidden text from being visible */
		line-height: 1.2;
	}

	.small .full-name {
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

	.text.line-clamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		-moz-line-clamp: 4;
		line-clamp: 4;
		overflow: hidden;
	}
</style>
