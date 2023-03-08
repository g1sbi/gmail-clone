<script>
	import Button from '$lib/components/UI/Button.svelte';
	import icon from '$lib/assets/logo.png';
	import undead from '$lib/assets/undead.jpg';
</script>

<div class="bg-background flex items-center mx-4 my-2">
	<!-- menu and icon -->
	<div class="flex items-center w-60">
		<Button icon="menu" />
		<Button src={icon} alt="gmail icon" kind="gmail" url="/inbox"/>
	</div>
	<!-- search bar -->
	<div class="grow-0 md:grow">
		<div class="lg:w-[45rem] flex justify-between items-center px-2 py-1 bg-search rounded-lg">
			<Button icon="search" />
			<input class="grow bg-search pl-2" placeholder="Search mail" />
			<Button icon="tune" />
		</div>
	</div>
	<!-- user -->
	<div class="flex items-center justify-around w-44">
		<Button icon="help"/>
		<Button icon="settings"/>
		<Button icon="apps"/>
		<Button src={undead} alt="user icon" kind="user" />
	</div>
</div>
