<script lang="ts">
	import Box from '$lib/component/box.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Title from '$lib/component/title.svelte';
	import { commentList, type Comment } from '$lib/data/comments';
	import formatCommentDate from '../utility/format-comment-date';
	import handleViewChange from '$lib/utility/handle-view-change';
	import { inview } from 'svelte-inview';
	import ProductIcon from '$lib/component/product-icon.svelte';
</script>

<section>
	<Title
		text="نظرات مشتریان"
		description="یادتون نره شما هم تجربه‌تون رو باهمون به اشتراک بذارین!"
	/>
	<div class="wrapper">
		<Glow class="container-glow" />
		{#each commentList as comment (comment.id)}
			{@render commentCard(comment)}
		{/each}
	</div>
</section>

{#snippet commentCard({ name, text, date, iconSrc, avatarSrc }: Comment)}
	<div class="comment" use:inview oninview_change={(e) => handleViewChange(e.detail)}>
		<Box class="box">
			<article class="content">
				<!-- HEADER -->
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
				<!-- TEXT -->
				<p class="text">{text}</p>
			</article>
		</Box>
	</div>
{/snippet}

<style>
	.comment :global(.box) {
		height: 100%;
	}

	.wrapper {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(39.2rem, 1fr));
		gap: 2rem;
	}

	.wrapper :global(.container-glow) {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 76.8rem;
		z-index: -1;
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

	@media (max-width: 32rem) {
		.wrapper {
			grid-template-columns: repeat(auto-fit, minmax(34.4rem, 1fr));
		}
	}
</style>
