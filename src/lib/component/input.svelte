<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	type InputProps = HTMLInputAttributes & {
		validateFeedback?: boolean;
	};
	let {
		validateFeedback = false,
		class: className,
		value = $bindable(''),
		...restOfProps
	}: InputProps = $props();
</script>

<input class="input {className} {validateFeedback ? 'validate' : ''}" {...restOfProps} bind:value />

<style>
	.input {
		color: inherit;
		outline: 0;
		border: 1px solid var(--stroke);
		border-radius: 0.8rem;
		background: transparent;
		width: 100%;
		height: 4.8rem;
		padding-inline: 1.6rem;
		transition-property: background-color, border-color;
		transition-duration: var(--duration);
	}

	.input:focus {
		background-color: var(--bg-secondary);
		border-color: var(--stroke-focus);
	}

	.input::placeholder {
		color: var(--fg-placeholder);
	}
</style>
