<script lang="ts">
	import type { FormEventHandler } from 'svelte/elements';
	import Button from '$lib/component/button.svelte';
	import Input from '$lib/component/input.svelte';
	import { fly } from 'svelte/transition';
	import type { AuthContext } from '../../type/auth';
	import { getContext } from 'svelte';

	const context: AuthContext = getContext('auth');
	let fullName = $state('');

	// Logic for submitting the form
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		context.setSubmit(true);

		// Remove focus from the input
		const input = document.getElementById('full-name-input');
		if (input) {
			input.blur();
		}

		await new Promise((resolve) => setTimeout(resolve, 2000));
		context.setSubmit(false);
		context.closeModal();
	};

	// Remove error when user starts typing
	const handleInput = () => {
		context.setError(null);
	};

	// Validate user input
	const handleInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		const input = e.currentTarget;
		e.preventDefault();
		if (input.validity.valueMissing) {
			context.setError('نام و نام خانوادگی برای تکمیل ثبت نام الزامیست!');
		}
		if (input.validity.patternMismatch) {
			context.setError('تنها استفاده از حروف فارسی مجاز است!');
		}
	};
</script>

<div
	class="content {context.error ? 'error' : ''} {context.isSubmiting ? 'submitting' : ''}"
	in:fly|global={{ x: 492, duration: 400, opacity: 0, delay: 200 }}
	out:fly|global={{ x: -492, duration: 400, opacity: 0 }}
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
		<Button class="submit" type="submit">تکمیل ثبت‌نام</Button>
	</form>
	<div class="error-container">
		{#if context.error}
			<span transition:fly={{ duration: 200, opacity: 0, y: -10 }} class="error-message">
				{context.error}
			</span>
		{/if}
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 2rem;
		padding-top: 7.2rem;
		transition: opacity var(--duration);
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
</style>
