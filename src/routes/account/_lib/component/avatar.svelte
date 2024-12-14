<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import Button from '$lib/component/button.svelte';
	import { Upload } from 'lucide-svelte';
	import type { ChangeEventHandler } from 'svelte/elements';
	import { userInfo } from '$lib/data/user-info';

	/* ---------------------------------- State --------------------------------- */
	let avatarForm = $state<HTMLFormElement | undefined>();
	let avatarSrc = $state(userInfo.avatarSrc);

	/* --------------------------------- Events --------------------------------- */
	const handleSubmitOnFileSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (avatarForm) {
			const formData = new FormData(avatarForm);
			const image = formData.get('image') as File;
			if (image) {
				avatarSrc = URL.createObjectURL(image);
			}
		}
	};
</script>

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

<style>
	.section {
		padding: 2rem;
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

	/* 768px */
	@media (max-width: 48rem) {
		.avatar {
			align-content: end;
		}

		.avatar-img {
			width: 25.6rem;
		}
	}

	/* 640px */
	@media (max-width: 40rem) {
		.avatar {
			grid-template-columns: auto 1fr;
		}

		.avatar {
			animation: intro-right 1s ease both;
		}

		.avatar-img {
			width: 4.8rem;
			height: 4.8rem;
			border-radius: 50%;
		}
	}
</style>
