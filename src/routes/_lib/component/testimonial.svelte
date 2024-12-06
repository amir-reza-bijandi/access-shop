<script lang="ts">
	import Comment from '$lib/component/comment.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Title from '$lib/component/title.svelte';
	import { commentList } from '$lib/data/comments';
</script>

<section>
	<Title
		text="نظرات مشتریان"
		description="یادتون نره شما هم تجربه‌تون رو باهمون به اشتراک بذارین!"
	/>
	<div class="wrapper">
		<Glow class="container-glow" />
		{#each commentList as comment (comment.id)}
			<Comment data={comment} lineClamp={true} />
		{/each}
	</div>
</section>

<style>
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

	@media (max-width: 32rem) {
		.wrapper {
			grid-template-columns: repeat(auto-fit, minmax(34.4rem, 1fr));
		}
	}
</style>
