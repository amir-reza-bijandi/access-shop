<script lang="ts">
	import Card from '$lib/component/card.svelte';
	import Glow from '$lib/component/glow.svelte';
	import SectionHeader from '$lib/component/section-header.svelte';
	import { commentList, type Comment } from '$lib/data/comments';
	import formatCommentDate from '$lib/utility/format-comment-date';
</script>

<section class="testimonial">
	<SectionHeader
		title="نظرات مشتریان"
		subtitle="یادتون نره شما هم تجربه‌تون رو باهمون به اشتراک بذارین!"
	/>
	<div class="comments">
		<Glow class="container-glow" />
		{#each commentList as comment (comment.id)}
			{@render commentCard(comment)}
		{/each}
	</div>
</section>

{#snippet commentCard({ name, text, date, iconSrc, avatarSrc }: Comment)}
	<Card>
		<article class="comment">
			<header>
				<div class="info">
					<img class="avatar" src={avatarSrc} alt="عکس پروفایل {name}" />
					<div>
						<address>{name}</address>
						<time datetime={new Date(date).toISOString()}>{formatCommentDate(date)}</time>
					</div>
				</div>
				<img class="icon" src={iconSrc} alt="لوگوی یک سرویس هوش مصنوعی" />
			</header>
			<p class="text">{text}</p>
		</article>
	</Card>
{/snippet}

<style>
	.testimonial {
		margin-bottom: 19.2rem;
	}

	.comments {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(39.2rem, 1fr));
		gap: 2rem;
	}

	.comments :global(.container-glow) {
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

	header {
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

	address {
		font-size: 2rem;
		font-weight: 700;
		font-style: normal;
		margin-bottom: 0.8rem;
	}

	time {
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
</style>
