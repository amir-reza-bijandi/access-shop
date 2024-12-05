<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	type SwitchBoxInput = HTMLInputAttributes;
	let { class: className, value = $bindable(''), ...restOfProps }: SwitchBoxInput = $props();
</script>

<input class="switch-box-input {className}" {...restOfProps} bind:value />

<style>
	.switch-box-input {
		background: transparent;
		color: var(--fg-primary);
		border: 0;
		outline: 0;
		height: 4.8rem;
		width: 100%;
		caret-color: hsl(var(--base-gray-100));
	}

	.switch-box-input:first-of-type {
		border-top-right-radius: 0.8rem;
		border-top-left-radius: 0.8rem;
	}

	.switch-box-input:last-of-type {
		border-bottom-right-radius: 0.8rem;
		border-bottom-left-radius: 0.8rem;
	}

	.switch-box-input:-webkit-autofill,
	.switch-box-input:-webkit-autofill:hover,
	.switch-box-input:-webkit-autofill:focus {
		caret-color: hsl(var(--base-gray-100));
		border: 1px solid transparent;
		-webkit-text-fill-color: var(--accent);
		-webkit-box-shadow: 0 0 0px 1000px transparent inset;
		transition: background-color 5000s ease-in-out 0s;
	}
</style>
