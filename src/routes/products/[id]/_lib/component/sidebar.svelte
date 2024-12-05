<script lang="ts">
	import Checkout from './sidebar/checkout.svelte';
	import DiscountCode from './sidebar/discount-code.svelte';
	import FastDelivary from './sidebar/fast-delivary.svelte';
	import NewAccount from './sidebar/new-account.svelte';
	import Note from './sidebar/note.svelte';
</script>

<aside class="sidebar">
	<Checkout />
	<NewAccount />
	<FastDelivary />
	<DiscountCode />
	<Note />
</aside>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
