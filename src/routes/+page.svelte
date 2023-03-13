<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	//render inbox by default
	onMount(() => {
		goto('/inbox', { keepFocus:true });
	});

</script>
