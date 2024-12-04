<script lang="ts">
	import type { FormEventHandler } from 'svelte/elements';
	import Button from '$lib/component/button.svelte';
	import Input from '$lib/component/input.svelte';
	import { fly } from 'svelte/transition';
	import type { AuthContext } from '../../type/auth';
	import { getContext } from 'svelte';

	const context: AuthContext = getContext('auth');
	let phoneNumber = $state('');
	const validationPattern = '^(09|۰۹)[\\d۰-۹]{9}$';

	// Logic for submitting the form
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		context.setSubmit(true);

		// Remove focus from the input
		const input = document.getElementById('phone-number-input');
		if (input) {
			input.blur();
		}

		await new Promise((resolve) => setTimeout(resolve, 2000));
		context.setSubmit(false);
		context.setPhoneNumber(phoneNumber);
		context.setStep(1);
	};

	// Remove error when user starts typing
	const handleInput = () => {
		context.setError(null);
	};

	// Validate user input
	const handleInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		const input = e.currentTarget;
		e.preventDefault();
		if (input.validity.patternMismatch) {
			context.setError('شمارهٔ موبایل صحیح نمی‌باشد!');
		}
		if (input.validity.valueMissing) {
			context.setError('شمارهٔ موبایل برای ثبت نام الزامیست!');
		}
		if (input.validity.tooShort) {
			context.setError('شمارهٔ موبایل باید حداقل ۱۱ رقم باشد!');
		}
	};
</script>

<div
	class="content {context.error ? 'error' : ''} {context.isSubmiting ? 'submitting' : ''}"
	in:fly={{ x: 492, duration: 400, opacity: 0, delay: 200 }}
	out:fly={{ x: -492, duration: 400, opacity: 0 }}
>
	<h2 class="title">ورود یا ثبت‌نام</h2>
	<form class="form" onsubmit={handleSubmit}>
		<Input
			id="phone-number-input"
			placeholder="شمارهٔ موبایل خود را وارد کنید..."
			inputmode="numeric"
			pattern={validationPattern}
			title="تنها استفاده از اعداد مجاز است"
			required
			maxlength={11}
			minlength={11}
			autocomplete="tel-national"
			oninput={handleInput}
			oninvalid={handleInvalid}
			bind:value={phoneNumber}
		/>
		<Button class="submit" type="submit">ادامه</Button>
	</form>
	<div class="error-container">
		{#if context.error}
			<span transition:fly={{ duration: 200, opacity: 0, y: -10 }} class="error-message">
				{context.error}
			</span>
		{/if}
	</div>
	<small class="footer">
		ورود یا ثبت‌نام در اکسس شاپ به منزلهٔ <a class="highlight" href="/tos" onclick={onclose}
			>پذیرفتن شرایط و قوانین</a
		> استفاده از خدمات سایت تلقی می‌شود.
	</small>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding: var(--modal-padding);
		transition: opacity var(--duration);
		height: 100%;
	}

	.content.submitting {
		pointer-events: none;
	}

	.content :global(.submit) {
		width: 100%;
	}

	.title {
		font-size: 2.4rem;
		font-weight: 700;
		margin-bottom: 2.4rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.content.error .error-container {
		min-height: 5.4rem;
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

	.footer {
		font-size: 1.4rem;
		line-height: 1.65;
	}

	.highlight {
		color: var(--accent);
	}
</style>
