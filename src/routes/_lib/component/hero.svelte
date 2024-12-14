<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Button from '$lib/component/button.svelte';
	import { fade } from 'svelte/transition';
	import Cards from './cards.svelte';
	import { ArrowDown, ChevronsDown } from 'lucide-svelte';

	/* ---------------------------------- State --------------------------------- */
	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<section class="hero">
	<div class="right-section">
		<h1 class="title">
			دسترسی به دنیای هوش مصنوعی
			<span class="subtitle">تنها با یک کلیک...</span>
		</h1>
		<p class="description">
			با پلتفرم ما، دنیای بی‌کران هوش مصنوعی را کشف کنید. از مدل‌های پیشرفته زبان طبیعی تا ابزارهای
			قدرتمند یادگیری ماشین، همه آنچه برای نوآوری نیاز دارید، در یک جا جمع شده است. بدون نیاز به
			دانش فنی، به سادگی به ابزارهای هوش مصنوعی دسترسی پیدا کنید و ایده‌های خود را به واقعیت تبدیل
			کنید. با ما، هوش مصنوعی را دم‌دست خود داشته باشید.
		</p>
		<Button as="a" href="#products" variant="fill" icon={ArrowDown}>مشاهدهٔ محصولات</Button>
	</div>
	<Cards />
	<!-- Hide the scroll indicator arrow when the user has scrolled from the top -->
	{#if scrollY === 0}
		<div class="arrow" transition:fade>
			<ChevronsDown size={32} absoluteStrokeWidth strokeWidth={2} />
		</div>
	{/if}
</section>

<style>
	.hero {
		display: flex;
		position: relative;
		margin-block: 25.6rem;
	}

	.hero :global(> *) {
		flex: 1;
	}

	.right-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		animation: section-intro 1s ease;
	}

	@keyframes section-intro {
		0% {
			transform: translateX(6.4rem);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.title {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		font-size: 3.6rem;
		font-weight: 800;
		margin-bottom: 2.4rem;
	}

	.subtitle {
		display: block;
		font-size: 2.4rem;
		font-weight: 700;
	}

	.description {
		line-height: var(--line-height);
		margin-bottom: 3.2rem;
	}

	.arrow {
		display: none;
	}

	/* 1152px & 960px */
	@media (min-width: 72rem) and (max-height: 60rem) {
		.hero {
			margin-block: 0;
			min-height: calc(100vh - 4.8rem - 9.6rem);
		}

		.arrow {
			display: block;
			position: fixed;
			left: 50%;
			bottom: 3.2rem;
			transform: translate(-50%, 0);
			opacity: 0.5;
			animation: bounce 1s linear infinite;
		}
	}

	@keyframes bounce {
		0%,
		100% {
			opacity: 0.5;
			transform: translate(-50%, -25%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			opacity: 0;
			transform: translate(-50%, 0);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}

	/* 1152px */
	@media (max-width: 72rem) {
		.hero {
			flex-direction: column;
			justify-content: center;
			gap: 5.2rem;
			margin-block: 12.8rem;
		}

		.right-section {
			max-width: 64rem;
			text-align: center;
			align-items: center;
			order: 1;
			margin: auto;
		}
	}

	/* 576px */
	@media (max-width: 36rem) {
		.title {
			font-size: 2.8rem;
		}
	}

	/* 512px */
	@media (max-width: 32rem) {
		.title {
			font-size: 2.4rem;
		}

		.subtitle {
			font-size: 2rem;
		}

		@keyframes section-intro {
			0% {
				transform: translateY(6.4rem);
				opacity: 0;
			}
			100% {
				transform: translateY(0);
				opacity: 1;
			}
		}
	}
</style>
