<script lang="ts">
	import type { FormEventHandler } from 'svelte/elements';
	import type { AuthInternalContext } from '../../type/auth';
	import { fly } from 'svelte/transition';
	import { getContext } from 'svelte';
	import Button from '$lib/component/button.svelte';
	import InputOtp from './input-otp.svelte';
	import { MoveLeft } from 'lucide-svelte';
	import type { AuthExternalContext } from '$lib/type/auth';

	const INITIAL_TIMER = 10;

	const authInternalContext: AuthInternalContext = getContext('auth-internal');
	const authExternalContext: AuthExternalContext = getContext('auth-external');
	let inputValue = $state('');
	let timer = $state(INITIAL_TIMER);
	let containerElm: HTMLDivElement | null;

	function startTimer() {
		return setInterval(() => timer > 0 && (timer -= 1), 1000);
	}

	function focusInputOtp() {
		if (containerElm) {
			containerElm.querySelectorAll('input')[0].focus();
		}
	}
	// Focus the InputOtp component
	$effect(() => {
		focusInputOtp();
	});

	// Timer
	$effect(() => {
		let id = 0;
		if (timer > 0 && !id) {
			id = startTimer();
		} else {
			clearInterval(id);
		}
		return () => clearInterval(id);
	});

	// Logic for submitting the form
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		authInternalContext.setSubmit(true);
		await new Promise((resolve) => setTimeout(resolve, 2000));
		authInternalContext.setSubmit(false);
		// Check current operation
		if (authExternalContext.operation === 'auth') {
			authInternalContext.setStep(2);
		} else {
			authExternalContext.operation = 'auth';
			authExternalContext.phoneNumber = '';
			authInternalContext.cancel();
		}
	};

	// Remove error when user starts typing
	const handleInput = () => {
		authInternalContext.setError(null);
	};

	// Validate user input
	const handleInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		const input = e.currentTarget;
		e.preventDefault();
		if (input.validity.patternMismatch) {
			authInternalContext.setError('لطفا تنها از اعداد استفاده کنید!');
		}
		if (input.validity.valueMissing) {
			authInternalContext.setError('کد تأیید کامل نیست!');
		}
	};

	const handleBack = () => {
		authInternalContext.setStep(0);
	};

	const handleResetTimer = async () => {
		authInternalContext.setSubmit(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		authInternalContext.setSubmit(false);
		timer = INITIAL_TIMER;
		focusInputOtp();
	};
</script>

<div
	class="content {authInternalContext.error ? 'form-error' : ''} {authInternalContext.isSubmiting
		? 'submitting'
		: ''}"
	in:fly={{ x: 492, duration: 400, opacity: 0, delay: 200 }}
	out:fly={{ x: -492, duration: 400, opacity: 0 }}
	bind:this={containerElm}
>
	<div class="header">
		<h2 class="title">تأیید شمارهٔ موبایل</h2>
		<button class="back" onclick={handleBack}>
			تغییر شمارهٔ همراه <MoveLeft size={16} absoluteStrokeWidth strokeWidth={1.25} />
		</button>
	</div>
	<small class="description"
		>کد تایید به شماره موبایل {'۰' +
			Number(authExternalContext.phoneNumber).toLocaleString('fa-IR', {
				useGrouping: false
			})} ارسال شد.</small
	>
	<form class="form" onsubmit={handleSubmit}>
		<InputOtp
			finalFocusTargetId="submit"
			bind:value={inputValue}
			oninput={handleInput}
			oninvalid={handleInvalid}
		/>
		{#if timer > 0}
			<small class="timer"
				>ارسال مجدد کد تأیید تا <span class="timer-remain"
					>{timer.toLocaleString('fa-IR', {
						useGrouping: false
					})}</span
				> ثانیه دیگر</small
			>
		{:else}
			<button type="button" class="resend" onclick={handleResetTimer}>ارسال مجدد کد تأیید</button>
		{/if}
		<div class="error-container">
			{#if authInternalContext.error}
				<span transition:fly={{ duration: 200, opacity: 0, y: -10 }} class="error-message">
					{authInternalContext.error}
				</span>
			{/if}
		</div>
		<div class="buttons">
			<Button id="submit" type="submit">تأیید</Button>
			<Button type="button" variant="outline" onclick={authInternalContext.cancel}>انصراف</Button>
		</div>
	</form>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding: var(--modal-padding);
		transition: opacity var(--duration);
		width: 100%;
		height: 100%;
	}

	.content.submitting {
		pointer-events: none;
	}

	.buttons {
		display: flex;
		width: 100%;
		gap: 1.2rem;
	}

	.buttons :global(button) {
		flex: 1;
	}

	.header {
		margin-bottom: 2.4rem;
		display: flex;
		justify-content: space-between;
	}

	.back {
		color: var(--accent);
		font-size: 1.4rem;
		line-height: 1.65;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		transition: color var(--duration);
	}

	.back:hover {
		color: var(--accent-tint);
	}
	.back:active {
		color: var(--accent-shade);
	}

	.title {
		font-size: 2.4rem;
		font-weight: 700;
	}

	.description {
		font-size: 1.4rem;
		line-height: 1.65;
		margin-bottom: 1.2rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.timer,
	.resend {
		text-align: center;
		font-size: 1.4rem;
		line-height: 1.65;
		margin-top: 1.2rem;
	}

	.resend {
		width: fit-content;
		color: var(--accent);
		transition: color var(--duration);
	}

	.resend:hover {
		color: var(--accent-tint);
	}

	.resend:active {
		color: var(--accent-shade);
	}

	.timer-remain {
		color: var(--accent);
	}

	.content.form-error .error-container {
		min-height: 5.6rem;
	}

	.error-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 1.2rem;
		transition: min-height var(--duration);
	}

	.error-message {
		color: var(--error);
	}
</style>
