<script>
	import Button from '$lib/components/UI/Button.svelte';
	import expand from '$lib/assets/expand.svg';
</script>

<div class="flex items-center">
	<div class="flex items-center hover:bg-gray-300">
		<input type="checkbox" />
		<button >
			<img src={expand} alt="expand icon" class="w-4"/>
		</button>
		<Button src={expand} alt="expand icon" type="list-header"/>
	</div>
</div>
