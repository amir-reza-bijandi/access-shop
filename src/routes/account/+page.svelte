<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Input from '$lib/component/input.svelte';
	import PageWrapper from '$lib/component/page-wrapper.svelte';
	import { Check, Smartphone, Upload } from 'lucide-svelte';
	import { userInfo } from '$lib/data/user-info';
	import InputDate from './_lib/component/input-date.svelte';
	import type { ChangeEventHandler } from 'svelte/elements';
	import type { AuthExternalContext } from '$lib/type/auth';
	import { getContext } from 'svelte';
	import digitsToEnglish from './_lib/utility/digits-to-english';

	const fullNamePattern = '^[\u0600-\u06FF\s]+$';
	const numberPattern = '[0-9۰۱۲۳۴۵۶۷۸۹]*';
	const phoneNumberPattern = '^(09|۰۹)[\\d۰-۹]{9}$';

	let fullName = $state(userInfo.fullName);
	let birthDate = $state(userInfo.birthDate);
	let phoneNumber = $state(
		'۰' + Number(userInfo.phoneNumber).toLocaleString('fa-IR', { useGrouping: false })
	);
	let nationalCode = $state(
		userInfo.nationalCode
			? userInfo.nationalCode.toLocaleString('fa-IR', { useGrouping: false })
			: ''
	);

	let avatarForm = $state<HTMLFormElement | undefined>();
	let avatarSrc = $state(userInfo.avatarSrc);

	const authExternalContext: AuthExternalContext = getContext('auth-external');

	const handleSubmitOnSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (avatarForm) {
			const formData = new FormData(avatarForm);
			const image = formData.get('image') as File;
			if (image) {
				avatarSrc = URL.createObjectURL(image);
			}
		}
	};

	const handleOpenAuth = () => {
		authExternalContext.isAuthActive = true;
		authExternalContext.operation = 'change-phone-number';
		authExternalContext.phoneNumber = digitsToEnglish(phoneNumber);
		authExternalContext.currentStep = 1;
	};
</script>

<PageWrapper>
	<main class="content">
		<!-- AVATAR -->
		<form class="box rounded-lg avatar section" bind:this={avatarForm}>
			<img class="avatar-img" src={avatarSrc} alt="تصویر پروفایل شما" />
			<input
				id="upload"
				type="file"
				name="image"
				accept="image/*"
				hidden
				onchange={handleSubmitOnSelect}
			/>
			<Button as="label" for="upload" class="upload-btn" variant="outline" icon={Upload}>
				بارگذاری تصویر جدید
			</Button>
		</form>
		<!-- PROFILE -->
		<form class="box rounded-lg profile section">
			<label class="input-wrapper">
				<span class="label">نام و نام خانوادگی</span>
				<Input
					class="input"
					placeholder="نام و نام خانوادگی خود را وارد کنید..."
					inputmode="text"
					pattern={fullNamePattern}
					title="تنها استفاده از حروف فارسی مجاز است"
					required
					autocomplete="off"
					bind:value={fullName}
				/>
			</label>
			<label class="input-wrapper">
				<span class="label">تاریخ تولد</span>
				<InputDate bind:value={birthDate} />
			</label>
			<label class="input-wrapper">
				<span class="label">کد ملی</span>
				<Input
					class="input"
					placeholder="کد ملی خود را وارد کنید..."
					inputmode="numeric"
					pattern={numberPattern}
					title="تنها استفاده از اعداد مجاز است"
					required
					maxlength={10}
					minlength={10}
					autocomplete="off"
					bind:value={nationalCode}
				/>
			</label>
			<Button class="submit-btn" variant="outline" icon={Check}>ثبت تغییرات</Button>
		</form>
		<!-- PHONE NUMBER -->
		<div class="box rounded-lg phone-number section">
			<label class="input-wrapper">
				<span class="label">شمارهٔ همراه</span>
				<Input
					class="input"
					placeholder="شمارهٔ موبایل خود را وارد کنید..."
					inputmode="numeric"
					pattern={phoneNumberPattern}
					title="تنها استفاده از اعداد مجاز است"
					required
					maxlength={11}
					minlength={11}
					autocomplete="tel-national"
					bind:value={phoneNumber}
				/>
			</label>
			<Button variant="outline" icon={Smartphone} onclick={handleOpenAuth}
				>تغییر شمارهٔ همراه</Button
			>
		</div>
	</main>
</PageWrapper>

<style>
	.content {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 28rem auto;
		max-width: 76.8rem;
		margin-inline: auto;
		gap: 2rem;
	}

	.section {
		padding: 2rem;
	}

	.profile {
		display: grid;
		gap: 1.6rem;
		animation: intro-left 1s ease backwards;
	}

	.profile :global(.submit-btn) {
		width: 100%;
	}

	.profile .label {
		width: 11.4rem;
	}

	.avatar {
		display: grid;
		gap: 2rem;
		place-items: center;
		animation: intro-right 1s ease 200ms backwards;
	}

	.avatar :global(.upload-btn) {
		width: 100%;
	}

	.avatar-img {
		width: 17.2rem;
		height: 17.2rem;
		border-radius: 50%;
	}

	.phone-number {
		display: flex;
		gap: 1.2rem;
		width: 100%;
		grid-column: span 2;
		animation: intro-up 1s ease 400ms backwards;
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
</style>
