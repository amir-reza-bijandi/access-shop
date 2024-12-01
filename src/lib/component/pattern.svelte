<script lang="ts">
	type PatternProps = {
		class?: string;
		visibility?: 'low' | 'high';
	};
	const { class: className, visibility = 'low' }: PatternProps = $props();

	const visibilityMap = {
		low: 'visibility-low',
		high: 'visibility-high'
	};

	let imgElement: HTMLImageElement | null;

	// Add intro animation when image is loaded
	function handleLoad() {
		if (imgElement) {
			imgElement.classList.add('loaded');
		}
	}
</script>

<div class="pattern {visibilityMap[visibility]} {className}">
	<img
		aria-hidden="true"
		src="/image/pattern.svg"
		alt="Background pattern with lines similar to a circuit board"
		class="image"
		bind:this={imgElement}
		onload={handleLoad}
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

	.visibility-low {
		opacity: 0.03;
	}

	.visibility-high {
		opacity: 0.05;
	}

	/* Animation */
	.image:global(.loaded) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
