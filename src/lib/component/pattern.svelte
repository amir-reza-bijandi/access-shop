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
</script>

<img
	aria-hidden="true"
	src="/image/pattern.svg"
	alt="Background pattern with lines similar to a circuit board"
	class={['pattern', visibilityMap[visibility], className].join(' ')}
/>

<style>
	.pattern {
		pointer-events: none;
		width: 320px;
	}

	.visibility-low {
		opacity: 0.03;
	}

	.visibility-high {
		opacity: 0.05;
	}
</style>
