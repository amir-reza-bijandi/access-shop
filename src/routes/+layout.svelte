<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Background from './_lib/component/background.svelte';
	import Header from './_lib/component/header.svelte';
	import '../app.css';
	import { setContext } from 'svelte';
	import type { UserContext } from '$lib/type/user';
	import Auth from './_lib/component/auth.svelte';
	import type { AuthExternalContext } from '$lib/type/auth';

	/* ---------------------------------- Props --------------------------------- */
	const { children } = $props();

	/* -------------------------------- Constants ------------------------------- */
	const INITIAL_TIMER = 30;

	/* ---------------------------------- State --------------------------------- */
	const userContext: UserContext = $state({
		isLoggedIn: false
	});
	setContext('user', userContext);

	const authExternalContext: AuthExternalContext = $state({
		operation: 'auth',
		isAuthActive: false,
		currentPhoneNumber: '',
		previousPhoneNumber: '',
		currentStep: 0,
		codeTimer: 0,
		startCodeTimer() {
			if (this.currentPhoneNumber !== this.previousPhoneNumber) {
				this.resetCodeTimer();
			}
		},
		resetCodeTimer() {
			this.codeTimer = INITIAL_TIMER;
		},
		setPhoneNumber(phoneNumber) {
			this.previousPhoneNumber = this.currentPhoneNumber;
			this.currentPhoneNumber = phoneNumber;
		}
	});
	setContext('auth-external', authExternalContext);

	/* --------------------------------- Effect --------------------------------- */
	function startTimer() {
		return setInterval(
			() => authExternalContext.codeTimer > 0 && (authExternalContext.codeTimer -= 1),
			1000
		);
	}

	$effect(() => {
		let id = 0;
		if (authExternalContext.codeTimer > 0 && !id) {
			id = startTimer();
		} else {
			clearInterval(id);
		}
		return () => clearInterval(id);
	});

	/* --------------------------------- Events --------------------------------- */
	const toggleAuth = () => {
		authExternalContext.isAuthActive = !authExternalContext.isAuthActive;
	};
</script>

<Auth
	open={authExternalContext.isAuthActive}
	onclose={toggleAuth}
	step={authExternalContext.currentStep}
/>
<div class="app">
	<Background />
	<div class="container">
		<Header />
		{@render children()}
	</div>
</div>

<style>
	.app {
		position: relative;
	}

	.container {
		max-width: 128rem;
		margin-inline: auto;
		padding: 3.2rem;
	}

	/* Tablet */
	@media (max-width: 72rem) {
		.container {
			padding: 2.4rem;
		}
	}

	/* Mobile */
	@media (max-width: 32rem) {
		.container {
			padding: 1.6rem;
		}
	}
</style>
