<script lang="ts">
	import Box from '$lib/component/box.svelte';
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

<div class="cards">
	<Glow class="container-glow" />
	<div class="wrapper">
		{#each cardInfoList as cardInfo}
			{@render card(cardInfo)}
		{/each}
	</div>
</div>

{#snippet card({ imageSrc, titleEn, titleFa, size }: CardInfo)}
	<Box class="card">
		<figure class="content {size}">
			<div class="image">
				<Glow class="icon-glow" />
				<img class="icon" src={imageSrc} alt="لوگوی {titleFa}" />
			</div>
			<figcaption class="caption">
				<span class="text-en">{titleEn}</span>
				<span class="text-fa">{titleFa}</span>
			</figcaption>
		</figure>
	</Box>
{/snippet}

<style>
	.cards {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cards :global(.container-glow) {
		position: absolute;
		width: 768px;
	}

	.wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}

	.wrapper :global(.card) {
		position: relative;
	}

	.wrapper :global(.card:first-child) {
		transform: rotate(15deg) translate(-0.6rem, 4.2rem);
	}

	.wrapper :global(.card:last-child) {
		transform: rotate(-15deg) translate(0.6rem, 4.2rem);
	}

	.wrapper :global(.card:nth-child(2)) {
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

	.large .text-en {
		font-size: 2.4rem;
	}

	.large .text-fa {
		font-size: 2rem;
	}

	.small .text-fa {
		font-size: 1.6rem;
	}

	.small .text-en {
		font-size: 2rem;
	}
</style>
