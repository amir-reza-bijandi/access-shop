<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import type { FormEventHandler } from 'svelte/elements';
	import Button from '$lib/component/button.svelte';
	import Input from '$lib/component/input.svelte';
	import { fly } from 'svelte/transition';
	import type { AuthInternalContext } from '../../type/auth';
	import { getContext } from 'svelte';
	import type { UserContext } from '$lib/type/user';

	/* ---------------------------------- State --------------------------------- */
	const authInternalContext: AuthInternalContext = getContext('auth-internal');
	const userContext: UserContext = getContext('user');
	let fullName = $state('');

	/* --------------------------------- Events --------------------------------- */
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		authInternalContext.setSubmit(true);

		const input = document.getElementById('full-name-input');
		if (input) {
			input.blur();
		}

		await new Promise((resolve) => setTimeout(resolve, 2000));
		authInternalContext.setSubmit(false);
		authInternalContext.closeModal();
		userContext.isLoggedIn = true;
	};

	const handleInput = () => {
		authInternalContext.setError(null);
	};

	const handleInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		const input = e.currentTarget;
		e.preventDefault();
		if (input.validity.valueMissing) {
			authInternalContext.setError('نام و نام خانوادگی برای تکمیل ثبت نام الزامیست!');
		}
		if (input.validity.patternMismatch) {
			authInternalContext.setError('تنها استفاده از حروف فارسی مجاز است!');
		}
	};
</script>

<div
	class="content {authInternalContext.error ? 'form-error' : ''} {authInternalContext.isSubmiting
		? 'submitting'
		: ''}"
	in:fly={{ x: 492, duration: 400, opacity: 0, delay: 200 }}
	out:fly={{ x: -492, duration: 400, opacity: 0 }}
	bind:clientHeight={authInternalContext.contentHeight}
>
	<h2 class="title">نام و نام خانوادگی</h2>
	<form class="form" onsubmit={handleSubmit}>
		<Input
			id="full-name-input"
			placeholder="نام و نام خانوادگی خود را وارد کنید..."
			inputmode="text"
			pattern="^[\u0600-\u06FF\s]+$"
			title="تنها استفاده از حروف فارسی مجاز است"
			required
			autocomplete="name"
			oninput={handleInput}
			oninvalid={handleInvalid}
			bind:value={fullName}
		/>
		<div class="buttons">
			<Button id="submit" type="submit">تکمیل ثبت‌نام</Button>
			<Button type="button" variant="outline" onclick={authInternalContext.reset}>انصراف</Button>
		</div>
	</form>
	<div class="error-container">
		{#if authInternalContext.error}
			<span transition:fly={{ duration: 200, opacity: 0, y: -10 }} class="error-message">
				{authInternalContext.error}
			</span>
		{/if}
	</div>
	<small class="footer">
		ثبت‌نام در اکسس شاپ به منزلهٔ <a class="highlight" href="/tos" onclick={onclose}
			>پذیرفتن شرایط و قوانین</a
		> استفاده از خدمات سایت تلقی می‌شود.
	</small>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: var(--modal-padding);
		transition: opacity var(--duration);
		min-height: 27.2rem;
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
		margin-top: 4.4rem;
		margin-bottom: 2.4rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.buttons {
		display: flex;
		width: 100%;
		gap: 1.2rem;
	}

	.buttons :global(button) {
		flex: 1;
	}

	.content.form-error .error-container {
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

	@media (max-width: 28rem) {
		.title {
			margin-top: 3.4rem;
		}
	}
</style>
