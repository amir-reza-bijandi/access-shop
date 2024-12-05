<script lang="ts">
	import detectOutsideClick from '$lib/action/detect-outside-click.svelte';
	import rippleEffect from '$lib/action/ripple-effect.svelte';
	import { Check, ChevronDown } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	type Item = {
		name: string;
		value: number;
	};
	type SelectProps = {
		itemList: Item[];
		value: number;
		class?: string;
		oninput?: (value: number) => void;
	};
	let { itemList, value: currentValue = $bindable(0), class: className }: SelectProps = $props();

	let isSelectActive = $state(false);

	const handleSelect = (value: number) => {
		currentValue = value;
		isSelectActive = false;
	};

	const handleToggle = () => {
		isSelectActive = !isSelectActive;
	};
</script>

<div
	class="select {className} {isSelectActive ? 'active' : ''}"
	use:detectOutsideClick={() => (isSelectActive = false)}
>
	<button type="button" class="menu-btn" onclick={handleToggle} use:rippleEffect>
		{itemList.find((item) => item.value === currentValue)?.name}
		<div class="chevron-icon">
			<ChevronDown size={16} strokeWidth={1.5} absoluteStrokeWidth />
		</div>
	</button>
	{#if isSelectActive}
		<ul class="menu" transition:fly={{ duration: 200, opacity: 0, y: 8 }}>
			{#each itemList as { name, value } (value)}
				<li class="item">
					<button class="item-btn" type="button" onclick={() => handleSelect(value)}>
						{name}
						{#if currentValue === value}
							<div class="check-icon">
								<Check size={16} strokeWidth={1.5} absoluteStrokeWidth />
							</div>
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.select {
		position: relative;
	}

	.menu-btn {
		width: 100%;
		position: relative;
		display: flex;
		justify-content: start;
		align-items: center;
		padding: 1.6rem;
		border-radius: 0.8rem;
		border: 1px solid var(--stroke);
		transition-property: background-color, border-color;
		transition-duration: var(--duration);
	}

	.menu-btn:hover,
	.select.active .menu-btn {
		background: var(--bg-secondary);
		border-color: var(--stroke-focus);
	}

	.chevron-icon {
		display: flex;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 1.6rem;
		transition: transform var(--duration);
	}

	.select.active .chevron-icon {
		transform: translateY(-50%) rotate(-180deg);
	}

	.menu {
		width: 100%;
		position: absolute;
		top: 100%;
		margin-top: 0.8rem;
		list-style: none;
		border: 1px solid var(--stroke-focus);
		border-radius: 0.8rem;
		background: var(--bg-primary);
		/* There is bug in Chrome that prevents nested backdrop-filter */
		/* backdrop-filter: blur(40px); */
		z-index: 2;
	}

	.item {
		border-bottom: 1px solid var(--stroke);
	}

	.item:last-of-type {
		border: 0;
	}

	.item-btn {
		display: flex;
		justify-content: start;
		width: 100%;
		position: relative;
		padding: 1.6rem;
		transition: background-color var(--duration);
		background: var(--bg-secondary);
	}

	.item-btn:hover {
		background: var(--bg-tertiary);
	}

	.check-icon {
		display: flex;
		position: absolute;
		left: 1.6rem;
		top: 50%;
		transform: translateY(-50%);
		color: var(--accent);
	}
</style>
