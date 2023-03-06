<script>
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Apps from '$lib/components/Apps.svelte'
	import Compose from '$lib/components/UI/Compose.svelte'

	let compose = false
	console.log(compose)
</script>


<div class="bg-background">
	<Header/>
	<div class="flex">
		<Sidebar renderCompose={() => { compose = true }}/>
		<slot/>
		<Apps/>
	</div>
	{ #if compose }
		<Compose renderCompose={() => { compose = false }} />
	{/if}
</div>
