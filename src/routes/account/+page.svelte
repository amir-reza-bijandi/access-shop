<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Input from '$lib/component/input.svelte';
	import Page from '$lib/component/page.svelte';
	import { Check, Smartphone, Upload } from 'lucide-svelte';
	import { userInfo } from '$lib/data/user-info';
	import InputDate from './_lib/component/input-date.svelte';
	import type { ChangeEventHandler, FormEventHandler } from 'svelte/elements';
	import type { AuthExternalContext } from '$lib/type/auth';
	import { getContext } from 'svelte';
	import digitsToEnglish from './_lib/utility/digits-to-english';
	import Status from '$lib/component/status.svelte';

	type ProfileForm = {
		status: 'error' | 'success' | null;
		message: string | null;
		isSubmitting: boolean;
	};

	type PhoneNumberForm = {
		status: 'error' | 'success' | null;
		message: string | null;
	};

	const fullNamePattern = '^[ء-ي\\u0600-\\u06FF\\s]+$';
	const numberPattern = '[0-9۰۱۲۳۴۵۶۷۸۹]*';
	const phoneNumberPattern = '^(09|۰۹)[\\d۰-۹]{9}$';

	const initialPhoneNumber =
		'۰' + userInfo.phoneNumber.toLocaleString('fa-IR', { useGrouping: false });
	const initialCitizenId = userInfo.citizenId
		? userInfo.citizenId.toLocaleString('fa-IR', { useGrouping: false })
		: '';

	// INPUT STATE
	let fullName = $state(userInfo.fullName);
	let birthDate = $state(userInfo.birthDate);
	let citizenId = $state(initialCitizenId);
	let phoneNumber = $state(initialPhoneNumber);

	// FORM STATE
	const profileForm = $state<ProfileForm>({
		isSubmitting: false,
		status: null,
		message: ''
	});

	const phoneNumberForm = $state<PhoneNumberForm>({
		status: null,
		message: ''
	});

	let isProfileDataChanged = $derived(
		userInfo.fullName !== fullName ||
			userInfo.birthDate.year !== birthDate.year ||
			userInfo.birthDate.month !== birthDate.month ||
			userInfo.birthDate.day !== birthDate.day ||
			initialCitizenId !== citizenId
	);

	let avatarForm = $state<HTMLFormElement | undefined>();
	let avatarSrc = $state(userInfo.avatarSrc);

	const authExternalContext: AuthExternalContext = getContext('auth-external');

	const handlePhoneNumberChange: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		authExternalContext.isAuthActive = true;
		authExternalContext.operation = 'change-phone-number';
		authExternalContext.setPhoneNumber(digitsToEnglish(phoneNumber));
		authExternalContext.currentStep = 1;
	};

	const handleSubmitOnFileSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (avatarForm) {
			const formData = new FormData(avatarForm);
			const image = formData.get('image') as File;
			if (image) {
				avatarSrc = URL.createObjectURL(image);
			}
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

	const handleClearPhoneNumberStatus = () => {
		phoneNumberForm.status = null;
		phoneNumberForm.message = '';
	};

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

	const handlePhoneNumberInvalid: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		if (e.currentTarget.validity.patternMismatch) {
			phoneNumberForm.status = 'error';
			phoneNumberForm.message = 'شماره موبایل معتبر نیست!';
		}
	};
</script>

<Page>
	<div class="content">
		<!-- AVATAR -->
		<form class="box rounded-lg avatar section" bind:this={avatarForm}>
			<img class="avatar-img" src={avatarSrc} alt="تصویر پروفایل شما" />
			<input
				id="upload"
				type="file"
				name="image"
				accept="image/*"
				hidden
				onchange={handleSubmitOnFileSelect}
			/>
			<Button as="label" for="upload" class="upload-btn" variant="outline" icon={Upload}>
				بارگذاری تصویر جدید
			</Button>
		</form>
		<!-- PROFILE -->
		<div class="box rounded-lg section profile-wrapper">
			<form class:submit={profileForm.isSubmitting} class="profile" onsubmit={handleProfileSubmit}>
				<label class="input-wrapper">
					<span class="label">نام و نام خانوادگی</span>
					<Input
						name="fullName"
						class="input"
						placeholder="نام و نام خانوادگی خود را وارد کنید..."
						inputmode="text"
						pattern={fullNamePattern}
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
						pattern={numberPattern}
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
		<!-- PHONE NUMBER -->
		<div class="box rounded-lg section phone-number-wrapper">
			<form class="phone-number" onsubmit={handlePhoneNumberChange}>
				<label class="input-wrapper">
					<span class="label">شمارهٔ همراه</span>
					<Input
						class="input"
						name="phoneNumber"
						placeholder="شمارهٔ موبایل خود را وارد کنید..."
						inputmode="numeric"
						pattern={phoneNumberPattern}
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
	</div>
</Page>

<style>
	.content {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: auto auto;
		max-width: 76.8rem;
		margin-inline: auto;
		gap: 2rem;
	}

	.section {
		padding: 2rem;
	}

	.submit {
		opacity: 0.5;
		pointer-events: none;
	}

	.profile {
		display: grid;
		gap: 1.6rem;
		transition: opacity var(--duration);
	}

	.profile-wrapper {
		animation: intro-left 1s ease backwards;
	}

	.profile :global(.submit-btn) {
		width: 100%;
	}

	.profile :global(.status) {
		margin-top: -2rem;
	}

	.profile .label {
		width: 11.4rem;
	}

	.avatar {
		display: grid;
		gap: 2rem;
		place-items: center;
		animation: intro-right 1s ease 100ms backwards;
	}

	.avatar :global(.upload-btn) {
		width: 100%;
	}

	.avatar-img {
		width: 17.2rem;
		aspect-ratio: 1 / 1;
		height: auto;
		border-radius: 50%;
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

	.content :global(.input) {
		flex-grow: 1;
	}

	@media (max-width: 48rem) {
		.content {
			grid-template-columns: 1fr 1fr;
		}

		.avatar {
			align-content: end;
		}

		.avatar-img {
			width: 25.6rem;
		}

		.input-wrapper {
			flex-direction: column;
			align-items: start;
		}
	}

	@media (max-width: 40rem) {
		.content {
			grid-template-columns: 1fr;
		}

		.avatar {
			grid-template-columns: auto 1fr;
		}

		.avatar {
			animation: intro-right 1s ease both;
		}

		.phone-number-wrapper {
			grid-column: span 1;
		}

		.avatar-img {
			width: 4.8rem;
			height: 4.8rem;
			border-radius: 50%;
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
