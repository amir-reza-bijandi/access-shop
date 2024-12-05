<script lang="ts">
	import Checkout from './checkout-options/checkout.svelte';
	import DiscountCode from './checkout-options/discount-code.svelte';
	import FastDelivary from './checkout-options/fast-delivary.svelte';
	import NewAccount from './checkout-options/new-account.svelte';
	import Note from './checkout-options/note.svelte';
</script>

<div class="checkout-optons">
	<Checkout />
	<NewAccount />
	<FastDelivary />
	<DiscountCode />
	<Note />
</div>

<style>
	.checkout-optons {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
