<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	//render inbox by default
	onMount(() => {
		goto('/inbox', { keepFocus:true });
	});
</script>

<div class="w-full grow bg-white rounded-[14px] px-4 py-2"></div>

