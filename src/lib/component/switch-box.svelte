<script lang="ts">
	import type { Snippet } from 'svelte';
	import Switch, { type SwitchProps } from '$lib/component/switch.svelte';

	type SwitchBoxProps = Pick<SwitchProps, 'label' | 'oninput' | 'active'> & {
		children?: Snippet;
		reverse?: boolean;
		expandable?: boolean;
	};
	let {
		children,
		reverse = false,
		expandable = true,
		label,
		oninput,
		active = $bindable(false)
	}: SwitchBoxProps = $props();

	const activeClass = $derived.by(() => {
		if (expandable) {
			if (reverse) {
				return !active ? 'expand' : '';
			} else {
				return active ? 'expand' : '';
			}
		} else {
			return '';
		}
	});
</script>

<div class="switch-box box rounded-lg {activeClass}">
	<Switch class="switch" {label} bind:active oninput={(e) => oninput?.(e)} />
	<div class="wrapper">
		<div class="content">{@render children?.()}</div>
	</div>
</div>

<style>
	.switch-box {
		transition: padding var(--duration);
	}

	.switch-box.expand {
		padding-bottom: 2rem;
	}

	.switch-box :global(.switch) {
		padding: 2rem;
	}

	.wrapper {
		display: grid;
		grid-template-rows: 0fr;
		overflow: hidden;
		min-height: 0;
		transition: grid-template-rows var(--duration);
	}

	.content {
		min-height: 0;
		padding-inline: 2rem;
	}

	.expand .wrapper {
		grid-template-rows: 1fr;
	}
</style>
