<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import SwitchBox from '$lib/component/switch-box.svelte';
	import { getContext } from 'svelte';
	import type { CheckoutContext } from '../../type/checkout';
	import SwitchBoxInput from '../switch-box-input.svelte';
	import type { FormEventHandler } from 'svelte/elements';
	import Status from '$lib/component/status.svelte';

	type Form = {
		status: 'error' | 'success' | null;
		message: string | null;
		isSubmitting: boolean;
	};

	const context: CheckoutContext = getContext('checkout');
	const form: Form = $state({
		status: null,
		message: null,
		isSubmitting: false
	});

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		form.isSubmitting = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		context.coupon = 200_000;
		form.status = 'success';
		form.message = 'کد تخفیف با موفقیت اعمال شد';
		form.isSubmitting = false;
	};

	const handleInput = () => {
		form.status = null;
		form.message = null;
	};

	const handleInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		if (e.currentTarget.validity.valueMissing) {
			form.status = 'error';
			form.message = 'لطفا کد تخفیف را وارد کنید!';
		}
	};
</script>

<form class="discount-code {form.isSubmitting ? 'submit' : ''}" onsubmit={handleSubmit}>
	<div class="wrapper">
		<SwitchBox label="کد تخفیف">
			<SwitchBoxInput
				placeholder="کد تخفیف خود را وارد کنید..."
				title="کد تخفیف"
				oninput={handleInput}
				oninvalid={handleInvalid}
				required
			/>
			<Button type="submit" class="discount-code-button">ثبت</Button>
			<Status type={form.status} message={form.message} />
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
</style>
