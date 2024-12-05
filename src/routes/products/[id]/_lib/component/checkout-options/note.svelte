<script lang="ts">
	import SwitchBox from '$lib/component/switch-box.svelte';
</script>

<SwitchBox label="توضیحات سفارش">
	<textarea class="text" placeholder="توضیحات سفارش را وارد کنید..."></textarea>
</SwitchBox>

<style>
	.text {
		width: 100%;
		height: 28rem;
		background: transparent;
		color: inherit;
		border: 0;
		outline: 0;
		resize: vertical;
	}

	@media (max-width: 32rem) {
		.text {
			resize: none;
		}
	}
</style>
