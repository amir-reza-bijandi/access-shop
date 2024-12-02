<script lang="ts">
	import type { ModalProps } from '$lib/component/modal.svelte';
	import type { AuthContext } from '../type/auth';
	import Logo from '$lib/component/logo.svelte';
	import Modal from '$lib/component/modal.svelte';
	import PhoneNumber from './auth/phone-number.svelte';
	import CodeVerification from './auth/code-verification.svelte';
	import { setContext } from 'svelte';

	type AuthProps = Omit<ModalProps, 'children' | 'header'>;
	const { open, onclose }: AuthProps = $props();

	type FormStep = {
		index: number;
		modalHeight: {
			min: number;
			max: number;
		};
	};
	const formStepList: FormStep[] = [
		{ index: 0, modalHeight: { min: 38.4, max: 42.6 } },
		{ index: 1, modalHeight: { min: 40.1, max: 44.8 } }
	];

	let currentStep: FormStep = $state(formStepList[0]);

	const authContext: AuthContext = $state({
		setStep(index) {
			currentStep = formStepList[index];
			authContext.setError(null);
			authContext.setModalHeight('min');
		},
		setError(error) {
			authContext.error = error;
			if (error) {
				authContext.setModalHeight('max');
			} else {
				authContext.setModalHeight('min');
			}
		},
		setSubmit(isSubmiting) {
			authContext.isSubmiting = isSubmiting;
			authContext.setError(null);
		},
		setModalHeight(height) {
			authContext.modalHeight = height;
		},
		setPhoneNumber(phoneNumber) {
			authContext.phoneNumber = phoneNumber;
		},
		error: null,
		isSubmiting: false,
		modalHeight: 'min',
		phoneNumber: ''
	});
	setContext('auth', authContext);

	const handleClose = () => {
		onclose?.();
		authContext.setError(null);
	};
</script>

<Modal
	{open}
	onclose={handleClose}
	height={currentStep.modalHeight[authContext.modalHeight]}
	opacity={authContext.isSubmiting ? 0.5 : 1}
>
	{#snippet header()}
		<Logo interactive={false} />
	{/snippet}
	<div class="wrapper">
		{#if currentStep.index === 0}
			<PhoneNumber />
		{:else if currentStep.index === 1}
			<CodeVerification />
		{/if}
	</div>
</Modal>

<style>
	.wrapper :global(> *) {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
