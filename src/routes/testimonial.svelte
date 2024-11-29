<script lang="ts">
	import Box from '$lib/component/box.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Title from '$lib/component/title.svelte';
	import { commentList, type Comment } from '$lib/data/comments';
	import formatCommentDate from '$lib/utility/format-comment-date';
</script>

<section class="testimonial">
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
	<Box>
		<article class="comment">
			<header class="header">
				<div class="info">
					<img class="avatar" src={avatarSrc} alt="عکس پروفایل {name}" />
					<div>
						<address class="name">{name}</address>
						<time class="date" datetime={new Date(date).toISOString()}
							>{formatCommentDate(date)}</time
						>
					</div>
				</div>
				<img class="icon" src={iconSrc} alt="لوگوی یک سرویس هوش مصنوعی" />
			</header>
			<p class="text">{text}</p>
		</article>
	</Box>
{/snippet}

<style>
	.testimonial {
		margin-bottom: 19.2rem;
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

	.comment {
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

	.icon {
		width: 3.6rem;
		height: 3.6rem;
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
