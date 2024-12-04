<script lang="ts">
	import Glow from '$lib/component/glow.svelte';
	import Pattern from '$lib/component/pattern.svelte';
	import { singleProduct } from '../data/single-product';

	const { nameEn, nameFa, imageSrc } = singleProduct;
</script>

<header class="box product-branding">
	<Glow class="glow" />
	<Pattern class="pattern" visibility="high" />
	<figure class="content">
		<img class="icon" src={imageSrc} alt="{nameFa} لوگوی سرویس هوش مصنوعی" />
		<figcaption class="name">
			<span class="name-en">{nameEn}</span>
			<span class="name-fa">{nameFa}</span>
		</figcaption>
	</figure>
</header>

<style>
	.product-branding {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		aspect-ratio: 109/60;
		overflow: hidden;
		margin-bottom: 2.4rem;
	}

	.product-branding :global(.pattern) {
		position: absolute;
		width: 120rem;
		height: 60.8rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(180deg);
	}

	.product-branding :global(.glow) {
		position: absolute;
		width: 76.8rem;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.content {
		display: flex;
		gap: 1.6rem;
		align-items: center;
	}

	.icon {
		width: 19.4rem;
	}

	.name {
		display: flex;
		flex-direction: column;
		font-weight: 700;
	}

	.name-en {
		font-size: 6.4rem;
	}

	.name-fa {
		font-size: 4.8rem;
	}
</style>
