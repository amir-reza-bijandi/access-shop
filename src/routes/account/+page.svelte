<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Button from '$lib/component/button.svelte';
	import Input from '$lib/component/input.svelte';
	import Page from '$lib/component/page.svelte';
	import { Smartphone } from 'lucide-svelte';
	import { userInfo } from '$lib/data/user-info';
	import type { FormEventHandler } from 'svelte/elements';
	import type { AuthExternalContext } from '$lib/type/auth';
	import { getContext } from 'svelte';
	import digitsToEnglish from './_lib/utility/digits-to-english';
	import Status from '$lib/component/status.svelte';
	import Avatar from './_lib/component/avatar.svelte';
	import Profile from './_lib/component/profile.svelte';
	import ChangePhoneNumber from './_lib/component/change-phone-number.svelte';
</script>

<Page>
	<div class="content">
		<Avatar />
		<Profile />
		<ChangePhoneNumber />
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

	.content :global(.input) {
		flex-grow: 1;
	}

	/* 768px */
	@media (max-width: 48rem) {
		.content {
			grid-template-columns: 1fr 1fr;
		}
	}

	/* 640px */
	@media (max-width: 40rem) {
		.content {
			grid-template-columns: 1fr;
		}
	}
</style>
