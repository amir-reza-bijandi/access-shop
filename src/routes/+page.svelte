<script>
	import Button from '$lib/component/button.svelte';
	import Logo from '$lib/component/logo.svelte';
	import { LogIn } from 'lucide-svelte';
</script>

<Logo />
<Button icon={LogIn}>ورود به حساب کاربری</Button>
<Button as="a" icon={LogIn} href="/login">ورود به حساب کاربری</Button>
