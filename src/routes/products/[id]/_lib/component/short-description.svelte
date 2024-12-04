<script lang="ts">
	import ProductIcon from '$lib/component/product-icon.svelte';
	import { singleProduct } from '../data/single-product';

	const { imageSrc, nameEn, nameFa, slogan, shortDescription: body } = singleProduct;
</script>

<section class="short-description">
	<header class="header">
		<div class="box"><ProductIcon src={imageSrc} /></div>
		<div>
			<h1 class="heading">خرید اشتراک {nameFa} ({nameEn})</h1>
			<span class="subheading">{slogan}</span>
		</div>
	</header>
	<div class="body">{body}</div>
</section>

<style>
	.header {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		margin-bottom: 1.6rem;
	}

	.header :global(.box) {
		padding: 1.2rem;
	}

	.heading {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1.2rem;
	}

	.subheading {
		display: block;
	}

	.body {
		line-height: var(--line-height);
	}
</style>
