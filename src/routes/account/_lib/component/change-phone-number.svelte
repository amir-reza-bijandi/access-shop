<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import { userInfo } from '$lib/data/user-info';
	import type { AuthExternalContext } from '$lib/type/auth';
	import { getContext } from 'svelte';
	import type { FormEventHandler } from 'svelte/elements';
	import digitsToEnglish from '../utility/digits-to-english';
	import Input from '$lib/component/input.svelte';
	import Button from '$lib/component/button.svelte';
	import { Smartphone } from 'lucide-svelte';
	import Status from '$lib/component/status.svelte';

	/* -------------------------------- Constants ------------------------------- */
	const PHONE_NUMBER_PATTERN = '^(09|۰۹)[\\d۰-۹]{9}$';

	/* ---------------------------------- State --------------------------------- */
	type PhoneNumberForm = {
		status: 'error' | 'success' | null;
		message: string | null;
	};

	const initialPhoneNumber =
		'۰' + userInfo.phoneNumber.toLocaleString('fa-IR', { useGrouping: false });
	let phoneNumber = $state(initialPhoneNumber);

	const phoneNumberForm = $state<PhoneNumberForm>({
		status: null,
		message: ''
	});

	const authExternalContext: AuthExternalContext = getContext('auth-external');

	/* --------------------------------- Events --------------------------------- */
	const handlePhoneNumberChange: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		authExternalContext.isAuthActive = true;
		authExternalContext.operation = 'change-phone-number';
		authExternalContext.setPhoneNumber(digitsToEnglish(phoneNumber));
		authExternalContext.currentStep = 1;
	};

	const handleClearPhoneNumberStatus = () => {
		phoneNumberForm.status = null;
		phoneNumberForm.message = '';
	};

	const handlePhoneNumberInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		if (e.currentTarget.validity.patternMismatch) {
			phoneNumberForm.status = 'error';
			phoneNumberForm.message = 'شماره موبایل معتبر نیست!';
		}
	};
</script>

<div class="box rounded-lg section phone-number-wrapper">
	<form class="phone-number" onsubmit={handlePhoneNumberChange}>
		<label class="input-wrapper">
			<span class="label">شمارهٔ همراه</span>
			<Input
				class="input"
				name="phoneNumber"
				placeholder="شمارهٔ موبایل خود را وارد کنید..."
				inputmode="numeric"
				pattern={PHONE_NUMBER_PATTERN}
				title="تنها استفاده از اعداد مجاز است"
				required
				maxlength={11}
				minlength={11}
				autocomplete="off"
				oninput={handleClearPhoneNumberStatus}
				oninvalid={handlePhoneNumberInvalid}
				bind:value={phoneNumber}
			/>
		</label>
		<Button
			class="submit-btn"
			type="submit"
			variant="outline"
			icon={Smartphone}
			disabled={initialPhoneNumber === phoneNumber || phoneNumber.length !== 11}
		>
			تغییر شمارهٔ همراه
		</Button>
	</form>
	<Status message={phoneNumberForm.message} type={phoneNumberForm.status} />
</div>

<style>
	.section {
		padding: 2rem;
	}

	.phone-number {
		display: flex;
		gap: 1.2rem;
		width: 100%;
		align-items: end;
	}

	.phone-number-wrapper {
		grid-column: span 2;
		animation: intro-up 1s ease 200ms backwards;
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		flex-grow: 1;
	}

	.label {
		flex-shrink: 0;
		font-weight: 700;
	}

	/* 768px */
	@media (max-width: 48rem) {
		.input-wrapper {
			flex-direction: column;
			align-items: start;
		}
	}

	/* 640px */
	@media (max-width: 40rem) {
		.phone-number-wrapper {
			grid-column: span 1;
		}

		.phone-number {
			flex-direction: column;
		}

		.phone-number :global(.submit-btn) {
			width: 100%;
		}

		.input-wrapper {
			width: 100%;
		}
	}
</style>
