<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type BoxProps = SvelteHTMLElements['div'] & {
		blur?: 'low' | 'high';
	};

	const blurMap = {
		low: 'blur-low',
		high: 'blur-high'
	};
	const { blur = 'high', class: className = '', children, ...restOfProps }: BoxProps = $props();
</script>

<div class="box {blurMap[blur]} {className}" {...restOfProps}>
	{@render children?.()}
</div>

<style>
	.box {
		border: 1px solid var(--stroke);
		border-radius: 1.6rem;
		background: var(--bg-primary-33);
	}

	.blur-low {
		backdrop-filter: blur(20px);
	}

	.blur-high {
		backdrop-filter: blur(40px);
	}
</style>
