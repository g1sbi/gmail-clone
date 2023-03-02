<script>
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Apps from '$lib/components/Apps.svelte'
</script>


<div class="bg-background">
	<Header/>
	<div class="flex">
		<Sidebar/>
		<slot/>
		<Apps/>
	</div>
</div>
