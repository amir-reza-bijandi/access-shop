<script lang="ts">
	import Card from '$lib/component/card.svelte';
	import Glow from '$lib/component/glow.svelte';

	type CardInfo = {
		imageSrc: string;
		titleEn: string;
		titleFa: string;
		size: 'small' | 'large';
	};

	const cardInfoList: CardInfo[] = [
		{
			imageSrc: '/icon/claude.svg',
			titleEn: 'Cluade',
			titleFa: 'کلاد',
			size: 'small'
		},
		{
			imageSrc: '/icon/chatgpt.svg',
			titleEn: 'ChatGPT',
			titleFa: 'چت‌جی‌پی‌تی',
			size: 'large'
		},
		{
			imageSrc: '/icon/heygen.svg',
			titleEn: 'HeyGen',
			titleFa: 'هی‌جن',
			size: 'small'
		}
	];
</script>

<div class="hero-cards">
	<Glow class="container-glow" />
	<div class="cards">
		{#each cardInfoList as cardInfo}
			{@render card(cardInfo)}
		{/each}
	</div>
</div>

{#snippet card({ imageSrc, titleEn, titleFa, size }: CardInfo)}
	<Card class="card">
		<figure class="content {size}">
			<div class="image">
				<Glow class="icon-glow" />
				<img class="icon" src={imageSrc} alt="{titleEn} logo" />
			</div>
			<figcaption class="caption">
				<span class="en">{titleEn}</span>
				<span class="fa">{titleFa}</span>
			</figcaption>
		</figure>
	</Card>
{/snippet}

<style>
	.hero-cards {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cards {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}

	.hero-cards :global(.container-glow) {
		position: absolute;
		width: 768px;
	}

	.cards :global(.card) {
		position: relative;
	}

	.cards :global(.card:first-child) {
		transform: rotate(15deg) translate(-0.6rem, 4.2rem);
	}

	.cards :global(.card:last-child) {
		transform: rotate(-15deg) translate(0.6rem, 4.2rem);
	}

	.cards :global(.card:nth-child(2)) {
		z-index: 2;
	}

	.content,
	.caption {
		display: flex;
		flex-direction: column;
	}

	.content {
		padding: 2.4rem;
	}

	.image {
		position: relative;
	}

	.content :global(.icon-glow) {
		position: absolute;
		width: 100%;
	}

	.caption {
		text-align: center;
		font-weight: 700;
		gap: 0.4rem;
	}

	.icon {
		position: relative;
		width: var(--size);
		height: var(--size);
		margin-bottom: 1.6rem;
		z-index: 2;
	}

	.large {
		--size: 15.2rem;
	}

	.small {
		--size: 9.6rem;
	}

	.large .en {
		font-size: 2.4rem;
	}

	.large .fa {
		font-size: 2rem;
	}

	.small .fa {
		font-size: 1.6rem;
	}

	.small .en {
		font-size: 2rem;
	}
</style>
