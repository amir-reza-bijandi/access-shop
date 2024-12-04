<script lang="ts">
	import PageWrapper from '$lib/component/page-wrapper.svelte';
	import SwitchBox from '$lib/component/switch-box.svelte';
	import Comments from './_lib/component/comments.svelte';
	import FullDescription from './_lib/component/full-description.svelte';
	import ProductBranding from './_lib/component/product-branding.svelte';
	import ShortDescription from './_lib/component/short-description.svelte';
	import Subscription from './_lib/component/subscription.svelte';
</script>

<PageWrapper as="div">
	<div class="content">
		<main class="main">
			<ShortDescription />
			<Subscription />
			<article>
				<ProductBranding />
				<FullDescription />
			</article>
			<Comments />
		</main>
		<aside class="sidebar"></aside>
	</div>
</PageWrapper>

<style>
	.content {
		display: grid;
		grid-template-columns: 1fr 32rem;
	}

	.main {
		display: grid;
		gap: 3.2rem;
	}
</style>
