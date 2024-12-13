<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import ProductIcon from '$lib/component/product-icon.svelte';
	import Glow from '$lib/component/glow.svelte';
	import { cardInfoList, type CardInfo } from '../data/hero-cards';
	import { inview } from 'svelte-inview';

	/* --------------------------------- Events --------------------------------- */
	function handleViewChange({ node, inView }: ObserverEventDetails) {
		const cards = node.querySelectorAll<HTMLElement>('.card');
		if (inView) {
			cards.forEach((card) => {
				card.style.animationPlayState = 'running';
			});
		} else {
			cards.forEach((card) => {
				card.style.animationPlayState = 'paused';
			});
		}
	}
</script>

<div id="hero-cards" class="cards" use:inview oninview_change={(e) => handleViewChange(e.detail)}>
	<Glow --size="76.8rem" --top="50%" --left="50%" />
	<div class="wrapper">
		{#each cardInfoList as cardInfo}
			{@render card(cardInfo)}
		{/each}
	</div>
</div>

{#snippet card({ imageSrc, titleEn, titleFa, size }: CardInfo)}
	<div class="box card">
		<figure class="content {size}">
			<ProductIcon src={imageSrc} class="image" />
			<figcaption class="caption">
				<span class="text-en">{titleEn}</span>
				<span class="text-fa">{titleFa}</span>
			</figcaption>
		</figure>
	</div>
{/snippet}

<style>
	.cards {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
		animation: cards-intro 1s ease;
	}

	@keyframes cards-intro {
		0% {
			transform: scale(0.9) translateY(6.4rem);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}

	.card {
		position: relative;
	}

	.card:first-child {
		transform: rotate(15deg) translate(-0.6rem, 4.2rem);
		animation: showcase-right-large 6s ease infinite;
	}

	.card:last-child {
		transform: rotate(-15deg) translate(0.6rem, 4.2rem);
		animation: showcase-left-large 6s ease infinite;
	}

	.card:nth-child(2) {
		z-index: 2;
	}

	.card:nth-child(2) :global(.image) {
		animation: showcase-center-large 6s ease infinite;
		transform-origin: center center;
	}

	/* Desktop animations */
	@keyframes showcase-right-large {
		10% {
			transform: rotate(0) translate(1.6rem, 3rem);
		}
		25% {
			transform-origin: calc(50% + 1.6rem) calc(50% + 3rem);
			transform: rotateY(360deg) translate(1.6rem, 3rem);
		}
		40% {
			transform-origin: calc(50% + 1.6rem) calc(50% + 3rem);
			transform: rotateY(360deg) translate(1.6rem, 3rem);
		}
		100% {
			transform: rotate(15deg) translate(-0.6rem, 4.2rem);
		}
	}

	@keyframes showcase-left-large {
		10% {
			transform: rotate(0) translate(-1.6rem, 3rem);
		}
		25% {
			transform-origin: calc(50% + -1.6rem) calc(50% + 3rem);
			transform: rotateY(360deg) translate(-1.6rem, 3rem);
		}
		40% {
			transform-origin: calc(50% + 2rem) calc(50% + 3rem);
			transform: rotateY(360deg) translate(-1.6rem, 3rem);
		}
		100% {
			transform: rotate(-15deg) translate(0.6rem, 4.2rem);
		}
	}

	@keyframes showcase-center-large {
		10% {
			transform: rotate(720deg);
		}
		40% {
			transform: rotate(720deg);
		}
	}

	.content,
	.caption {
		display: flex;
		flex-direction: column;
	}

	.content {
		padding: 2.4rem;
	}

	.content :global(.image) {
		width: var(--size);
	}

	.content :global(.icon-glow) {
		position: absolute;
		width: 100%;
	}

	.caption {
		margin-top: 1.6rem;
		text-align: center;
		font-weight: 700;
		gap: 0.4rem;
	}

	.large {
		--size: 15.2rem;
	}

	.small {
		--size: 9.6rem;
	}

	.large :global(.text-en) {
		font-size: 2.4rem;
	}

	.large :global(.text-fa) {
		font-size: 2rem;
	}

	.small :global(.text-fa) {
		font-size: 1.6rem;
	}

	.small :global(.text-en) {
		font-size: 2rem;
	}

	/* 576px */
	@media (max-width: 36rem) {
		@keyframes cards-intro {
			0% {
				transform: scale(0.9) translateY(-6.4rem);
			}
			100% {
				transform: scale(1) translateY(0);
			}
		}

		.content {
			padding: 2rem;
		}

		.large {
			--size: 9.6rem;
		}

		.small {
			--size: 6.4rem;
		}

		.large :global(.text-en) {
			font-size: 2rem;
		}

		.large :global(.text-fa) {
			font-size: 1.6rem;
		}

		.small :global(.text-en) {
			font-size: 1.6rem;
		}

		.small :global(.text-fa) {
			font-size: 1.6rem;
			font-weight: 600;
		}

		.wrapper :global(.card:first-child) {
			transform: rotate(15deg) translate(-0.6rem, 2.2rem);
			animation: showcase-right-small 6s ease infinite;
		}

		.wrapper :global(.card:last-child) {
			transform: rotate(-15deg) translate(0.6rem, 2.2rem);
			animation: showcase-left-small 6s ease infinite;
		}

		.card:nth-child(2) :global(.image) {
			animation: showcase-center-small 6s ease infinite;
			transform-origin: center center;
		}

		/* Mobile animations */
		@keyframes showcase-right-small {
			10% {
				transform: rotate(0) translate(1rem, 1rem);
			}
			25% {
				transform-origin: calc(50% + 1rem) calc(50% + 1rem);
				transform: rotateY(360deg) translate(1rem, 1rem);
			}
			40% {
				transform-origin: calc(50% + 1rem) calc(50% + 1rem);
				transform: rotateY(360deg) translate(1rem, 1rem);
			}
			100% {
				transform: rotate(15deg) translate(-0.6rem, 2.2rem);
			}
		}

		@keyframes showcase-left-small {
			10% {
				transform: rotate(0) translate(-1rem, 1rem);
			}
			25% {
				transform-origin: calc(50% + -1rem) calc(50% + 1rem);
				transform: rotateY(360deg) translate(-1rem, 1rem);
			}
			40% {
				transform-origin: calc(50% + 2rem) calc(50% + 1rem);
				transform: rotateY(360deg) translate(-1rem, 1rem);
			}
			100% {
				transform: rotate(-15deg) translate(0.6rem, 2.2rem);
			}
		}

		@keyframes showcase-center-small {
			10% {
				transform: rotate(720deg);
			}
			40% {
				transform: rotate(720deg);
			}
		}
	}
</style>
