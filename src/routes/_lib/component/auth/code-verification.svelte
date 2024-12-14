<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import type { FormEventHandler } from 'svelte/elements';
	import type { AuthInternalContext } from '../../type/auth';
	import { fly } from 'svelte/transition';
	import { getContext } from 'svelte';
	import Button from '$lib/component/button.svelte';
	import InputOtp from './input-otp.svelte';
	import { MoveLeft } from 'lucide-svelte';
	import type { AuthExternalContext } from '$lib/type/auth';

	/* ---------------------------------- State --------------------------------- */
	let inputValue = $state('');
	const authInternalContext: AuthInternalContext = getContext('auth-internal');
	const authExternalContext: AuthExternalContext = getContext('auth-external');

	/* --------------------------------- Effect --------------------------------- */
	let containerElm: HTMLDivElement | undefined;

	function focusInputOtp() {
		if (containerElm) {
			containerElm.querySelectorAll('input')[0].focus();
		}
	}

	$effect(() => {
		focusInputOtp();
		authExternalContext.startCodeTimer();
	});

	/* --------------------------------- Events --------------------------------- */
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		authInternalContext.setSubmit(true);
		await new Promise((resolve) => setTimeout(resolve, 2000));
		authInternalContext.setSubmit(false);

		if (authExternalContext.operation === 'auth') {
			authInternalContext.setStep(2);
		} else {
			authExternalContext.operation = 'auth';
			authExternalContext.currentPhoneNumber = '';
			authInternalContext.reset();
		}
	};

	const handleInput = () => {
		authInternalContext.setError(null);
	};

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
		authExternalContext.resetCodeTimer();
		focusInputOtp();
	};
</script>

<div
	class="content {authInternalContext.error ? 'form-error' : ''} {authInternalContext.isSubmiting
		? 'submitting'
		: ''}"
	in:fly={{ x: 492, duration: 400, opacity: 0, delay: 200 }}
	out:fly={{ x: -492, duration: 400, opacity: 0 }}
	bind:clientHeight={authInternalContext.contentHeight}
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
			Number(authExternalContext.currentPhoneNumber).toLocaleString('fa-IR', {
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
		{#if authExternalContext.codeTimer > 0}
			<small class="timer"
				>ارسال مجدد کد تأیید تا <span class="timer-remain"
					>{authExternalContext.codeTimer.toLocaleString('fa-IR', {
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
			<Button type="button" variant="outline" onclick={authInternalContext.reset}>انصراف</Button>
		</div>
	</form>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		padding: var(--modal-padding);
		transition: opacity var(--duration);
		width: 100%;
		min-height: 27.9rem;
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
		margin-top: 4.1rem;
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

	/* 448px */
	@media (max-width: 28rem) {
		.header {
			margin-top: 1.1rem;
		}
	}
</style>
