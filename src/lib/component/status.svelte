<script lang="ts">
	type StatusProps = {
		type: 'error' | 'success' | null;
		message: string | null;
	};
	const { message, type }: StatusProps = $props();
</script>

<span class="status {type ? type : ''}"><span class="text">{message}</span></span>

<style>
	.status {
		display: flex;
		align-items: end;
		justify-content: center;
		transition-property: height, transform, opacity;
		transition-duration: var(--duration);
		overflow: hidden;
		height: 0;
		opacity: 0;
		transform: translateY(-10);
	}

	.status.error {
		color: var(--error);
	}

	.status.success {
		color: var(--success);
	}

	.status.error,
	.status.success {
		height: 3.6rem;
		transform: translateY(0);
		opacity: 1;
	}

	.text {
		height: 1em;
	}
</style>
