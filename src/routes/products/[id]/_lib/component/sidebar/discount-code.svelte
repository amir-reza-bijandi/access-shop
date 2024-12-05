<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import SwitchBox from '$lib/component/switch-box.svelte';
	import { getContext } from 'svelte';
	import type { CheckoutContext } from '../../type/checkout';
	import SwitchBoxInput from '../switch-box-input.svelte';
	import type { FormEventHandler } from 'svelte/elements';

	type Form = {
		status: {
			ok: boolean | null;
			msg: string | null;
		};
		isSubmitting: boolean;
	};

	const context: CheckoutContext = getContext('checkout');
	const form: Form = $state({
		status: {
			ok: null,
			msg: null
		},
		isSubmitting: false
	});

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		form.isSubmitting = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		context.coupon = 200_000;
		form.status = {
			msg: 'کد تخفیف با موفقیت اعمال شد',
			ok: true
		};
		form.isSubmitting = false;
	};

	const handleInput = () => {
		form.status = {
			msg: null,
			ok: null
		};
	};

	const handleInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		if (e.currentTarget.validity.valueMissing) {
			form.status = {
				ok: false,
				msg: 'لطفا کد تخفیف را وارد کنید!'
			};
		}
	};
</script>

<form
	class="discount-code {form.status.ok === false ? 'error' : ''} {form.status.ok === true
		? 'success'
		: ''} {form.isSubmitting ? 'submit' : ''}"
	onsubmit={handleSubmit}
>
	<div class="wrapper">
		<SwitchBox label="کد تخفیف">
			<SwitchBoxInput
				placeholder="کد تخفیف خود را وارد کنید..."
				oninput={handleInput}
				oninvalid={handleInvalid}
				required
			/>
			<Button type="submit" class="discount-code-button">ثبت</Button>
			<span class="message"><span class="text">{form.status.msg}</span></span>
		</SwitchBox>
	</div>
</form>

<style>
	.discount-code :global(.discount-code-button) {
		width: 100%;
		margin-top: 1.6rem;
	}

	.wrapper {
		transition: opacity var(--duration);
	}

	.discount-code.submit .wrapper {
		opacity: 0.5;
		pointer-events: none;
	}

	.message {
		display: flex;
		align-items: end;
		justify-content: center;
		transition-property: height, transform, opacity;
		transition-duration: var(--duration);
		overflow: hidden;
		height: 0;
		opacity: 0;
		transform: translateY(-10);
	}

	.discount-code.error .message {
		color: var(--error);
	}

	.discount-code.success .message {
		color: var(--success);
	}

	.discount-code.error .message,
	.discount-code.success .message {
		height: 3.6rem;
		transform: translateY(0);
		opacity: 1;
	}

	.text {
		height: 1em;
	}
</style>
