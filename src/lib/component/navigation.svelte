<script lang="ts">
	import type { NavigationProps } from '$lib/type/navigation';
	import Desktop from './navigation/desktop.svelte';
	import Tablet from './navigation/tablet.svelte';
	import Phone from './navigation/phone.svelte';
	import { setContext } from 'svelte';

	const props: NavigationProps = $props();
	setContext('navigationProps', props);
</script>

<Desktop />
<Tablet />
<Phone />
