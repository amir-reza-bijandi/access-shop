<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Button from '$lib/component/button.svelte';
	import Input from '$lib/component/input.svelte';
	import Status from '$lib/component/status.svelte';
	import { userInfo } from '$lib/data/user-info';
	import type { FormEventHandler } from 'svelte/elements';
	import InputDate from './input-date.svelte';
	import { Check } from 'lucide-svelte';

	/* -------------------------------- Constants ------------------------------- */
	const FULL_NAME_PATTERN = '^[ء-ي\\u0600-\\u06FF\\s]+$';
	const NUMBER_PATTERN = '[0-9۰۱۲۳۴۵۶۷۸۹]*';

	/* ---------------------------------- State --------------------------------- */
	type ProfileForm = {
		status: 'error' | 'success' | null;
		message: string | null;
		isSubmitting: boolean;
	};

	const profileForm = $state<ProfileForm>({
		isSubmitting: false,
		status: null,
		message: ''
	});

	const initialCitizenId = userInfo.citizenId
		? userInfo.citizenId.toLocaleString('fa-IR', { useGrouping: false })
		: '';

	let fullName = $state(userInfo.fullName);
	let birthDate = $state(userInfo.birthDate);
	let citizenId = $state(initialCitizenId);

	let isProfileDataChanged = $derived(
		userInfo.fullName !== fullName ||
			userInfo.birthDate.year !== birthDate.year ||
			userInfo.birthDate.month !== birthDate.month ||
			userInfo.birthDate.day !== birthDate.day ||
			initialCitizenId !== citizenId
	);

	/* --------------------------------- Events --------------------------------- */
	const handleFullnameInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		if (e.currentTarget.validity.patternMismatch) {
			profileForm.status = 'error';
			profileForm.message = 'نام و نام خانوادگی باید فارسی باشد!';
		} else if (e.currentTarget.validity.valueMissing) {
			profileForm.status = 'error';
			profileForm.message = 'نام و نام خانوادگی نمی‌تواند خالی باشد!';
		}
	};

	const handleCitizenIdInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		if (e.currentTarget.validity.patternMismatch) {
			profileForm.status = 'error';
			profileForm.message = 'کد ملی باید عدد باشد!';
		} else if (e.currentTarget.validity.valueMissing) {
			profileForm.status = 'error';
			profileForm.message = 'کد ملی نمی‌تواند خالی باشد!';
		}
	};

	const handleProfileSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		// Validate birth date
		if (birthDate) {
			profileForm.isSubmitting = true;
			profileForm.status = null;
			profileForm.message = '';
			await new Promise((resolve) => setTimeout(resolve, 1000));
			profileForm.isSubmitting = false;
			profileForm.status = 'success';
			profileForm.message = 'اطلاعات با موفقیت ذخیره شد';

			setTimeout(() => {
				profileForm.status = null;
				profileForm.message = '';
			}, 2000);
		} else {
			profileForm.status = 'error';
			profileForm.message = 'تاریخ تولد معتبر نیست!';
		}
	};

	const handleClearProfileStatus = () => {
		profileForm.status = null;
		profileForm.message = '';
	};
</script>

<div class="box rounded-lg section profile-wrapper">
	<form class:submit={profileForm.isSubmitting} class="profile" onsubmit={handleProfileSubmit}>
		<label class="input-wrapper">
			<span class="label">نام و نام خانوادگی</span>
			<Input
				name="fullName"
				class="input"
				placeholder="نام و نام خانوادگی خود را وارد کنید..."
				inputmode="text"
				pattern={FULL_NAME_PATTERN}
				title="تنها استفاده از حروف فارسی مجاز است"
				required
				autocomplete="off"
				oninput={handleClearProfileStatus}
				oninvalid={handleFullnameInvalid}
				bind:value={fullName}
			/>
		</label>
		<label class="input-wrapper">
			<span class="label">تاریخ تولد</span>
			<InputDate bind:value={birthDate} oninput={handleClearProfileStatus} />
		</label>
		<label class="input-wrapper">
			<span class="label">کد ملی</span>
			<Input
				name="citizenId"
				class="input"
				placeholder="کد ملی خود را وارد کنید..."
				inputmode="numeric"
				pattern={NUMBER_PATTERN}
				title="تنها استفاده از اعداد مجاز است"
				required
				maxlength={9}
				minlength={10}
				autocomplete="off"
				oninput={handleClearProfileStatus}
				oninvalid={handleCitizenIdInvalid}
				bind:value={citizenId}
			/>
		</label>
		<Button
			type="submit"
			class="submit-btn"
			variant="outline"
			icon={Check}
			disabled={!isProfileDataChanged}>ثبت تغییرات</Button
		>
	</form>
	<Status class="status" message={profileForm.message} type={profileForm.status} />
</div>

<style>
	.submit {
		opacity: 0.5;
		pointer-events: none;
	}

	.section {
		padding: 2rem;
	}

	.profile {
		display: grid;
		gap: 1.6rem;
		transition: opacity var(--duration);
	}

	.profile-wrapper {
		animation: intro-left 1s ease backwards;
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		gap: 1.2rem;
	}

	.label {
		min-width: 10.9rem;
		flex-shrink: 0;
	}

	.profile :global(.submit-btn) {
		width: 100%;
	}

	.profile :global(.status) {
		margin-top: -2rem;
	}

	/* 768px */
	@media (max-width: 48rem) {
		.input-wrapper {
			flex-direction: column;
			align-items: start;
		}
	}
</style>
