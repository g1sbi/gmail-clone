<script lang="ts">
	import Button from '$lib/components/UI/Button.svelte';

	export let type="inbox";
</script>

<div class="flex items-center">
	<div class="flex items-center hover:bg-gray-300">
		<input type="checkbox" />
		<Button icon="arrow_drop_down" kind="list-header"/>
	</div>
	<Button icon="refresh" kind="list-header"/>
	<Button icon="more_vert" kind="list-header"/>
</div>
