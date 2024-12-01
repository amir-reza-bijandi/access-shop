<script lang="ts">
	import { inview } from 'svelte-inview';
	import Accordion from './accordion.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Title from '$lib/component/title.svelte';
	import handleViewChange from '$lib/utility/handle-view-change';
	import faqList from '../data/faq';
</script>

<section class="faq">
	<Title class="section-title">
		{#snippet text()}
			<span class="title-text">سوالات متدوال</span>
		{/snippet}
		{#snippet description()}
			<span class="title-description">
				<span>دوست داری دربارهٔ ما بیشتر بدونی؟</span>
				<span>شاید جواب سوالت رو اینجا پیدا کنی...</span>
			</span>
			<span class="title-icon">?</span>
		{/snippet}
	</Title>
	<div class="wrapper">
		<Glow class="container-glow" />
		{#each faqList as { question, answer }, index}
			<div class="accordion" use:inview oninview_change={(e) => handleViewChange(e.detail)}>
				<Accordion title={question} {...index === 0 ? { open: true } : {}}>{answer}</Accordion>
			</div>
		{/each}
	</div>
</section>

<style>
	.faq {
		display: flex;
		align-items: center;
		gap: 9.6rem;
	}

	.faq :global(.section-title) {
		margin: 0;
	}

	.wrapper {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
	}

	.wrapper :global(.container-glow) {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 76.8rem;
		z-index: -1;
	}

	.title-text {
		display: block;
		font-size: 3.6rem;
		font-weight: 800;
		padding-bottom: 0.8rem;
		text-align: right;
	}

	.title-description {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-bottom: 3.2rem;
		text-align: right;
	}

	.title-icon {
		display: block;
		text-align: center;
		font-size: 12.8rem;
		margin-top: 2.4rem;
		transform-origin: bottom center;
		transform: rotate(15deg);
		animation: wobble 4s ease-in-out infinite;
	}

	@keyframes wobble {
		50% {
			transform: rotate(-15deg);
		}
	}

	/* Laptop */
	@media (max-width: 80rem) {
		.faq {
			gap: 4.8rem;
		}
	}

	/* Tablet */
	@media (max-width: 56rem) {
		.faq {
			flex-direction: column;
			gap: 0;
		}

		.faq :global(.section-title) {
			margin-bottom: 3.2rem;
		}

		.title-text {
			font-size: 3.2rem;
			font-weight: 700;
			text-align: center;
			padding-bottom: 0.2rem;
		}

		.title-description {
			align-items: center;
			margin: 0;
		}

		.title-icon {
			display: none;
		}
	}

	/* Mobile */
	@media (max-width: 32rem) {
		.faq :global(.section-title) {
			margin-bottom: 2.4rem;
		}
		.title-description {
			gap: 0;
		}
	}
</style>
