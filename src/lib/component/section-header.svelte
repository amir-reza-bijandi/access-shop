<script lang="ts">
	type HeaderProps = {
		title: string;
		subtitle: string;
	};
	const { title, subtitle }: HeaderProps = $props();
</script>

<div class="header">
	<h2 class="title">{title}</h2>
	<span class="subtitle">{subtitle}</span>
</div>

<style>
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 6.4rem;
	}

	.title {
		font-size: 3.2rem;
		font-weight: 700;
		margin-bottom: 1.2rem;
	}

	.subtitle {
		font-size: 2rem;
	}
</style>
