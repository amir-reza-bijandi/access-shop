<script lang="ts">
	import SwitchBox from '$lib/component/switch-box.svelte';
	import { getContext } from 'svelte';
	import { singleProduct } from '../../data/single-product';
	import SwitchBoxInput from '../switch-box-input.svelte';
	import type { CheckoutContext } from '../../type/checkout';

	const { accountType, nameFa } = singleProduct;
	const phoneNumberValidationPattern = '^(09|۰۹)[\\d۰-۹]{9}$';

	let context: CheckoutContext = getContext('checkout');
</script>

{#if accountType !== 'voucher'}
	<SwitchBox reverse={true} label="ساخت حساب جدید" bind:active={context.accountFee}>
		<div class="new-account-description">
			برای فعال سازی اشتراک در حساب شخصی خود اطلاعات حساب‌تان در {nameFa} را وارد کنید:
		</div>
		{#if accountType === 'email'}
			<SwitchBoxInput
				type="email"
				inputmode="email"
				placeholder="آدرس ایمیل"
				autocomplete="email"
			/>
		{:else if accountType === 'phone'}
			<SwitchBoxInput
				type="text"
				placeholder="شمارهٔ موبایل"
				inputmode="numeric"
				pattern={phoneNumberValidationPattern}
				title="تنها استفاده از اعداد مجاز است"
				required
				maxlength={11}
				minlength={11}
				autocomplete="tel-national"
			/>
		{/if}
		<SwitchBoxInput type="password" placeholder="رمز عبور" autocomplete="new-password" />
	</SwitchBox>
{/if}

<style>
	.new-account-description {
		line-height: var(--line-height);
		margin-bottom: 1.6rem;
	}
</style>
