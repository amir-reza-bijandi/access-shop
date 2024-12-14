<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import type { NavigationProps } from '../type/navigation';
	import Desktop from './navigation/desktop.svelte';
	import Tablet from './navigation/tablet.svelte';
	import Phone from './navigation/phone.svelte';
	import { setContext } from 'svelte';

	/* ---------------------------------- Props --------------------------------- */
	const props: NavigationProps = $props();
	setContext('navigationProps', props);
</script>

<Desktop />
<Tablet />
<Phone />
