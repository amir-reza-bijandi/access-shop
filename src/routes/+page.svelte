<script lang="ts">
	import Faq from './_lib/component/faq.svelte';
	import Hero from './_lib/component/hero.svelte';
	import Products from './_lib/component/products.svelte';
	import Testimonial from './_lib/component/testimonial.svelte';
</script>

<Hero />
<div class="wrapper">
	<Products />
	<Testimonial />
	<Faq />
</div>

<style>
	.wrapper {
		--spacing: 19.2rem;
		display: flex;
		flex-direction: column;
		gap: var(--spacing);
		margin-block: var(--spacing);
	}

	/* Tablet */
	@media (max-width: 72rem) {
		.wrapper {
			--spacing: 12.8rem;
		}
	}

	/* Mobile */
	@media (max-width: 32rem) {
		.wrapper {
			--spacing: 6.4rem;
		}
	}
</style>
