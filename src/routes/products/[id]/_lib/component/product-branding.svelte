<script lang="ts">
	import Glow from '$lib/component/glow.svelte';
	import Pattern from '$lib/component/pattern.svelte';
	import { singleProduct } from '../data/single-product';

	const { nameEn, nameFa, imageSrc } = singleProduct;
</script>

<header class="box rounded-lg product-branding">
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
		margin-bottom: 1.2rem;
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
		width: 88%;
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

	@media (min-width: 48rem) {
		.product-branding {
			animation: intro-right 1s ease backwards;
		}
	}

	@media (max-width: 72rem) {
		.icon {
			width: 16rem;
		}

		.name-en {
			font-size: 5.6rem;
		}

		.name-fa {
			font-size: 4rem;
		}
	}

	@media (max-width: 64rem) {
		.icon {
			width: 12.8rem;
		}

		.name-en {
			font-size: 3.8rem;
		}

		.name-fa {
			font-size: 3.2rem;
		}
	}

	@media (max-width: 54rem) {
		.icon {
			width: 11.2rem;
		}

		.name-en {
			font-size: 3.4rem;
		}

		.name-fa {
			font-size: 2.8rem;
		}
	}

	@media (max-width: 48rem) {
		.icon {
			width: 16rem;
		}

		.name-en {
			font-size: 5.6rem;
		}

		.name-fa {
			font-size: 4rem;
		}
	}

	@media (max-width: 44rem) {
		.icon {
			width: 12.8rem;
		}

		.name-en {
			font-size: 3.8rem;
		}

		.name-fa {
			font-size: 3.2rem;
		}
	}

	@media (max-width: 34rem) {
		.icon {
			width: 11.2rem;
		}

		.name-en {
			font-size: 3.4rem;
		}

		.name-fa {
			font-size: 2.8rem;
		}
	}

	@media (max-width: 34rem) {
		.icon {
			width: 11.2rem;
		}

		.name-en {
			font-size: 3.4rem;
		}

		.name-fa {
			font-size: 2.8rem;
		}
	}
	@media (max-width: 28rem) {
		.icon {
			width: 9.6rem;
		}

		.name-en {
			font-size: 3.2rem;
		}

		.name-fa {
			font-size: 2.4rem;
		}
	}
</style>
