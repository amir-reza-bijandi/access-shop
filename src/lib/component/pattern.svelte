<script lang="ts">
	/* ---------------------------------- Props --------------------------------- */
	type PatternProps = {
		class?: string;
		variant?: 'barely-visible' | 'highly-visible';
	};
	const { class: className, variant = 'barely-visible' }: PatternProps = $props();

	/* ---------------------------------- State --------------------------------- */
	let isImageLoaded = $state(false);

	/* --------------------------------- Events --------------------------------- */
	function handleImageLoad() {
		isImageLoaded = true;
	}
</script>

<div class="pattern {variant} {className}">
	<img
		class="image"
		class:loaded={isImageLoaded}
		src="/image/pattern.svg"
		alt=""
		onload={handleImageLoad}
	/>
</div>

<style>
	.pattern {
		pointer-events: none;
		width: 41.2rem;
		height: 20.9rem;
	}

	.image {
		width: 100%;
		height: 100%;
		opacity: 0;
		transform: translateY(-6.4rem);
		transition-property: opacity, transform;
		transition-duration: 2s;
	}

	.barely-visible {
		opacity: 0.03;
	}

	.highly-visible {
		opacity: 0.05;
	}

	.image.loaded {
		opacity: 1;
		transform: translateY(0);
	}
</style>
