<script>
	import Button from '$lib/components/UI/Button.svelte'
	import edit from '$lib/assets/edit.svg'
</script>

<div class="w-60 flex flex-col m-2">
	<!-- compose -->
	<div>
		<Button 
			src={edit}
		alt="pencil icon"
	text="Compose"
 type="compose"
 />
	</div>
	<!-- list -->
	<div>
		<Button
			src={edit}
			alt="inbox icon"
	 />
		
	</div>

	<!-- labels -->
	<div>
	</div>

</div>
