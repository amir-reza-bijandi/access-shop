<script lang="ts">
	import type { ModalProps } from '$lib/component/modal.svelte';
	import type { AuthInternalContext } from '../type/auth';
	import Logo from '$lib/component/logo.svelte';
	import Modal from '$lib/component/modal.svelte';
	import PhoneNumber from './auth/phone-number.svelte';
	import CodeVerification from './auth/code-verification.svelte';
	import { getContext, setContext } from 'svelte';
	import FullName from './auth/full-name.svelte';
	import type { AuthExternalContext } from '$lib/type/auth';

	type AuthProps = Omit<ModalProps, 'children' | 'header'> & {
		step: number;
	};
	const { open, onclose, step }: AuthProps = $props();

	const authExternalContext: AuthExternalContext = getContext('auth-external');

	type FormStep = {
		index: number;
		modalHeight: {
			min: number;
			max: number;
		};
	};
	const formStepList: FormStep[] = [
		{ index: 0, modalHeight: { min: 38.4, max: 42.6 } },
		{ index: 1, modalHeight: { min: 40.1, max: 44.8 } },
		{ index: 2, modalHeight: { min: 38.4, max: 42.6 } }
	];

	let currentStep: FormStep = $derived(formStepList[step]);

	const authContext: AuthInternalContext = $state({
		setStep(index) {
			authExternalContext.currentStep = index;
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
		closeModal() {
			onclose?.();
		},
		cancel() {
			authContext.closeModal();
			authContext.setStep(0);
		},
		error: null,
		isSubmiting: false,
		modalHeight: 'min'
	});
	setContext('auth-internal', authContext);

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
		{:else if currentStep.index === 2}
			<FullName />
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
