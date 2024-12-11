<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import type { ModalProps } from '$lib/component/modal.svelte';
	import type { AuthInternalContext } from '../type/auth';
	import Logo from '$lib/component/logo.svelte';
	import Modal from '$lib/component/modal.svelte';
	import PhoneNumber from './auth/phone-number.svelte';
	import CodeVerification from './auth/code-verification.svelte';
	import { getContext, setContext } from 'svelte';
	import FullName from './auth/full-name.svelte';
	import type { AuthExternalContext } from '$lib/type/auth';

	/* -------------------------------- Constants ------------------------------- */
	const STEPS = [PhoneNumber, CodeVerification, FullName];

	/* ---------------------------------- Props --------------------------------- */
	type AuthProps = Omit<ModalProps, 'children' | 'header'> & {
		step: number;
	};
	const { open, onclose, step }: AuthProps = $props();

	/* ---------------------------------- State --------------------------------- */
	const CurrentStep = $derived(STEPS[step]);
	let headerHeight = $state(80);
	const authExternalContext: AuthExternalContext = getContext('auth-external');
	const authInternalContext: AuthInternalContext = $state({
		setStep(index) {
			authExternalContext.currentStep = index;
			authInternalContext.setError(null);
		},
		setError(error) {
			authInternalContext.error = error;
		},
		setSubmit(isSubmiting) {
			authInternalContext.isSubmiting = isSubmiting;
			authInternalContext.setError(null);
		},
		closeModal() {
			onclose?.();
		},
		cancel() {
			authInternalContext.closeModal();
			authInternalContext.setStep(0);
		},
		error: null,
		isSubmiting: false,
		contentHeight: 302
	});
	setContext('auth-internal', authInternalContext);

	/* --------------------------------- Events --------------------------------- */
	const handleClose = () => {
		onclose?.();
		authInternalContext.setError(null);
	};
</script>

<Modal
	{open}
	bind:headerHeight
	onclose={handleClose}
	--height={(headerHeight + authInternalContext.contentHeight) / 10 + 'rem'}
	--opacity={authInternalContext.isSubmiting ? 0.5 : 1}
>
	{#snippet header()}
		<Logo interactive={false} />
	{/snippet}
	<div class="wrapper">
		<CurrentStep />
	</div>
</Modal>

<style>
	.wrapper :global(> *) {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
