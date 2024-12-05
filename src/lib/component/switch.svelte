<script module>
	import type { HTMLInputAttributes } from 'svelte/elements';
	export type SwitchProps = Pick<HTMLInputAttributes, 'oninput'> & {
		label: string;
		class?: string;
		active?: boolean;
	};
</script>

<script lang="ts">
	let { label, active = $bindable(false), class: className = '', oninput }: SwitchProps = $props();
</script>

<label class="switch {className}">
	{label}
	<input class="input" type="checkbox" bind:checked={active} oninput={(e) => oninput?.(e)} />
	<div class="track"><span class="ball"></span></div>
</label>

<style>
	.switch {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		position: relative;
		font-weight: 700;
		user-select: none;
	}

	.input {
		display: none;
	}

	.input:checked + .track {
		background: var(--accent);
		border-color: hsl(var(--base-gray-100));
	}

	.input:checked + .track .ball {
		background: hsl(var(--base-gray-100));
		transform: translateX(
			calc(
				100% + (var(--track-width) - (var(--ball-size) * 2) - (var(--track-padding) * 2)) -
					(var(--track-border) * 2)
			)
		);
	}

	.track {
		--track-width: 4rem;
		--track-padding: 0.4rem;
		--track-border: 2px;
		display: flex;
		justify-content: end;
		align-items: center;
		border: var(--track-border) solid var(--stroke);
		border-radius: 9999px;
		width: var(--track-width);
		padding: var(--track-padding);
		transition: background-color var(--duration);
	}

	.ball {
		--ball-size: 1.2rem;
		width: var(--ball-size);
		height: var(--ball-size);
		background: hsl(var(--base-gray-400));
		border-radius: 50%;
		transition: transform var(--duration);
	}
</style>
