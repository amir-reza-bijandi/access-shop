<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import type { HTMLInputAttributes } from 'svelte/elements';

	/* ---------------------------------- Props --------------------------------- */
	type InputProps = HTMLInputAttributes;
	let { class: className, value = $bindable(''), ...restOfProps }: InputProps = $props();
</script>

<input class="input {className}" {...restOfProps} bind:value />

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
