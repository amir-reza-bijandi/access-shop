<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Input from '$lib/component/input.svelte';
	import type { FocusEventHandler, FormEventHandler, KeyboardEventHandler } from 'svelte/elements';

	/* ---------------------------------- Props --------------------------------- */
	type InputOtpProps = {
		value?: string;
		digits?: number;
		finalFocusTargetId?: string;
		oninput?: (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => void;
		oninvalid?: FormEventHandler<HTMLInputElement>;
	};
	let {
		value = $bindable(''),
		digits = 6,
		finalFocusTargetId,
		oninput,
		oninvalid
	}: InputOtpProps = $props();

	/* --------------------------------- Events --------------------------------- */
	let valueArray = Array(digits).fill('');
	let inputOtp: HTMLDivElement | null;

	const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
		e.currentTarget.setSelectionRange(0, e.currentTarget.value.length);
	};

	const handleInput = (
		e: Event & { currentTarget: EventTarget & HTMLInputElement },
		index: number
	) => {
		valueArray[index] = e.currentTarget.value;
		value = valueArray.join('');

		oninput?.(e);

		// Move focus to the next input
		if (e.currentTarget.value.length > 0) {
			if (inputOtp) {
				if (index < digits - 1) {
					inputOtp.querySelectorAll('input')[index + 1].focus();
				} else {
					if (finalFocusTargetId) {
						// Focus the final focus target
						const target = document.getElementById(finalFocusTargetId);
						if (target) {
							target.focus();
						}
					} else {
						// Blur the last input
						inputOtp.querySelectorAll('input')[index].blur();
					}
				}
			}
		}
	};

	// Clear the current input and move focus to the previous input
	const handleKeyDown = (e: KeyboardEvent, index: number) => {
		if (e.key === 'Backspace') {
			if ((e.currentTarget as HTMLInputElement).value.length === 0) {
				const prevIndex = index !== 0 ? index - 1 : 0;
				if (inputOtp) {
					inputOtp.querySelectorAll('input')[prevIndex].focus();
				}
			}
		}
	};

	// Call the oninvalid event
	const handleInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		oninvalid?.(e);
	};
</script>

<div class="input-otp" dir="ltr" bind:this={inputOtp}>
	{#each Array(digits) as _, index}
		<div class="wrapper">
			<Input
				class="input"
				inputmode="numeric"
				pattern="[0-9۰۱۲۳۴۵۶۷۸۹]*"
				placeholder=""
				title="تنها استفاده از اعداد مجاز است"
				onfocus={handleFocus}
				oninput={(e) => handleInput(e, index)}
				onkeydown={(e) => handleKeyDown(e, index)}
				oninvalid={handleInvalid}
				required
			/>
			<span class="carot"></span>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		position: relative;
	}

	.input-otp {
		display: flex;
		gap: 1.2rem;
		justify-content: center;
	}

	.input-otp :global(.input) {
		width: 6.4rem;
		height: 6.4rem;
		text-align: center;
		font-size: 3.2rem;
		font-weight: 700;
		caret-color: transparent;
		transition-property: border-color, background-color;
		transition-duration: var(--duration);
	}

	.input-otp :global(.input::selection) {
		background: transparent;
		color: inherit;
	}

	.input-otp :global(.input:focus-visible) {
		border-color: var(--accent);
	}

	.input-otp :global(.input:focus-visible:placeholder-shown ~ .carot) {
		animation: blink 1s infinite;
	}

	.carot {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		width: 0.2rem;
		height: 50%;
		border-radius: 9999px;
		background-color: var(--fg-primary);
		opacity: 0;
	}

	@keyframes blink {
		50% {
			opacity: 1;
		}
	}

	/* 576px */
	@media (max-width: 36rem) {
		.input-otp {
			gap: 0.8rem;
		}

		.input-otp :global(.input) {
			width: 5.6rem;
			height: 5.6rem;
			font-size: 2.4rem;
		}
	}

	/* 448px */
	@media (max-width: 28rem) {
		.input-otp :global(.input) {
			width: 4.5rem;
			height: 4.5rem;
			font-size: 2rem;
		}
	}
</style>
