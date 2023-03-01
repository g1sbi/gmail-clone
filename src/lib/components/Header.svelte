<script>
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte'
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte'
	import icon from '$lib/assets/icon.webp'
</script>

<div class="bg-background flex items-center m-2">
	<!-- menu and icon -->
	<div class="flex items-center mr-16">
		<div class="text-gray-800 w-6 h-8 m-2 flex items-center"><IoIosMenu/></div>
			<div class="flex items-center">
				<img src={icon} alt="gmail icon" class="w-8 h-6 mx-2"/>
				<div class="text-xl">Gmail</div>
			</div>
	</div>
	<!-- search bar -->
	<div class="flex relative">
		<div class="absolute w-6 h-8 translate-y-1/4 translate-x-1/4">
			<IoIosSearch/>
		</div>
		<input
		class="bg-search rounded-lg p-2 w-96"
	/>
	</div>
</div>
