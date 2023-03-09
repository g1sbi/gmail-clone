<script lang="ts">
	import Button from '$lib/components/UI/Button.svelte';

	export let type = 'inbox';

	let sort = '40';
</script>

<div class="px-4 flex justify-between items-center">
	<div class="flex">
		<div class="flex">
			<Button kind="list-header">
			<input type="checkbox" class="hover:bg-gray-300" />
			</Button>
			<Button icon="arrow_drop_down" kind="list-header" />
		</div>
		<Button icon="refresh" kind="list-header" />
		<Button icon="more_vert" kind="list-header" />
	</div>
	<div class="flex">
		<Button text={sort} kind="list-header" />
		<Button icon="chevron_left" kind="list-header"/>
		<Button icon="chevron_right" kind="list-header"/>
		<div class="flex">
			<Button icon="keyboard" kind="list-header"/>
			<Button icon="arrow_drop_down" kind="list-header" />
		</div>
	</div>
</div>
