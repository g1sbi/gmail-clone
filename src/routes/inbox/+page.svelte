<script>
	import ListHeader from "$lib/components/UI/ListHeader.svelte";
	import List from "$lib/components/UI/List.svelte";
	import { page } from "$app/stores"

	console.log($page.data)

</script>

<div class="">
	<p>{$page.data}</p>
	<ListHeader />
	<List />
</div>
