<script lang="ts">
	import SwitchBox from '$lib/component/switch-box.svelte';
	import { getContext } from 'svelte';
	import type { CheckoutContext } from '../../type/checkout';

	let context: CheckoutContext = getContext('checkout');
</script>

<SwitchBox label="تحویل فوری" expandable={false} bind:active={context.fastDeliveryFee} />
