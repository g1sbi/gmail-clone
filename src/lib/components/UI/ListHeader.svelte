<script lang="ts">
	import Button from '$lib/components/UI/Button.svelte';

	export let type="inbox";
</script>

<div class="flex items-center">
	<div class="flex items-center">
		<input type="checkbox" class="hover:bg-gray-300" />
		<Button icon="arrow_drop_down" kind="list-header"/>
	</div>
	<Button icon="refresh" kind="list-header"/>
	<Button icon="more_vert" kind="list-header"/>
</div>
