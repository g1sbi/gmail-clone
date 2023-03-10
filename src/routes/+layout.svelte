<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Apps from '$lib/components/Apps.svelte';
	import Compose from '$lib/components/UI/Compose.svelte';

	let compose = false;
</script>

<div class="relative bg-background font-roboto">
	<Header />
	<div class="flex">
		<div class="w-72 shrink-0">
		<Sidebar
			renderCompose={() => {
				compose = true;
			}}
		/>
		</div>
		<div class="w-full grow bg-white rounded-[14px] py-2">
			<slot/>
		</div>
		<div class="w-16 shrink-0">
		<Apps />
		</div>
	</div>
	{#if compose}
		<Compose
			renderCompose={() => {
				compose = false;
			}}
		/>
	{/if}
</div>
