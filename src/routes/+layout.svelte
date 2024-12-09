<script lang="ts">
	import Background from './_lib/component/background.svelte';
	import Header from './_lib/component/header.svelte';
	import '../app.css';
	import { setContext } from 'svelte';
	import type { UserContext } from '$lib/type/user';
	import Auth from './_lib/component/auth.svelte';
	import type { AuthExternalContext } from '$lib/type/auth';

	const { children } = $props();

	const userContext: UserContext = $state({
		isLoggedIn: false
	});
	setContext('user', userContext);

	const authExternalContext: AuthExternalContext = $state({
		operation: 'auth',
		isAuthActive: false,
		phoneNumber: '',
		currentStep: 0
	});
	setContext('auth-external', authExternalContext);

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
