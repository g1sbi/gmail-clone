<script>
	import Button from '$lib/components/UI/Button.svelte'
	import icon from '$lib/assets/icon.webp'
	import search from '$lib/assets/search.svg'
	import menu from '$lib/assets/menu.svg'
	import filter from '$lib/assets/filter.svg'
	import help from '$lib/assets/help.svg'
	import settings from '$lib/assets/settings.svg'
	import apps from '$lib/assets/apps.svg'
	import undead from '$lib/assets/undead.jpg'
</script>

<div class="bg-background flex items-center my-2 mx-4">
	<!-- menu and icon -->
	<div class="flex items-center w-60">
		<Button src={menu} alt="menu icon"/>
		<div class="flex items-center">
			<img 
				class="w-7 mx-3"
				src={icon} 
				alt="gmail icon" 
			/>
			<div class="text-2xl">Gmail</div>
		</div>
	</div>
	<!-- search bar -->
	<div class="grow relative">
		<div class="w-[45rem] flex justify-between items-center px-2 py-1 bg-search rounded-lg">
			<Button src={search} alt="search icon"/>
			<input
				class="grow bg-search pl-2"
				placeholder="Search mail"
			/>
			<Button src={filter} alt="filter icon"/>
		</div>
	</div>
	<!-- user -->
	<div class="flex align-center justify-around w-44">
		<Button src={help} alt="help icon" />
		<Button src={settings} alt="settings icon" />
		<Button src={apps} alt="apps icon" />
		<Button src={undead} alt="user icon" type="user" />
	</div>
</div>
