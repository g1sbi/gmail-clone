<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Apps from '$lib/components/Apps.svelte';
	import Compose from '$lib/components/UI/Compose.svelte';

//store mail
	interface Mail {
		to: string;
		subject: string;
		body: string;
		attachment?: string;
	}
	
	let mail:Mail = {
		to: '',
		subject: '',
		body: '',
		attachment: ''
	}

	console.log(mail)

	let compose = false;
</script>

<div class="relative bg-background font-roboto">
	<Header />
	<div class="flex">
		<Sidebar
			renderCompose={() => {
				compose = true;
			}}
		/>
		<div class="w-full grow bg-white rounded-[14px] py-2">
			<slot/>
		</div>
		<Apps />
	</div>
	{#if compose}
		<Compose
			renderCompose={() => {
				compose = false;
			}}
			mail = {mail}
		/>
	{/if}
</div>
