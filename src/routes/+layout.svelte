<script>
	import { onMount } from 'svelte'
	import { go } from '@sveltejs/kit'
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Apps from '$lib/components/Apps.svelte';
	import Compose from '$lib/components/UI/Compose.svelte';
	import ListHeader from '$lib/components/UI/ListHeader.svelte';

	//render inbox when mounting
	onMount( () => {
		if (location.pathname === '/'){
			go('/inbox')
		}
	})

	let compose = false;
</script>

<div class="relative bg-background">
	<Header />
	<div class="flex">
		<Sidebar
			renderCompose={() => {
				compose = true;
			}}
		/>
		<div class="w-full grow bg-white rounded-[14px] px-4 py-2">
			<ListHeader />
			<slot />
		</div>
		<Apps />
	</div>
	{#if compose}
		<Compose
			renderCompose={() => {
				compose = false;
			}}
		/>
	{/if}
</div>
