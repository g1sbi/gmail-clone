<script>
	import calendar from '$lib/assets/calendar.png';
	import keep from '$lib/assets/keep.png';
	import tasks from '$lib/assets/tasks.png';
	import contacts from '$lib/assets/contacts.png';
	import Button from '$lib/components/UI/Button.svelte';
</script>

<div class="w-16 ml-1 flex flex-col items-center">
	<div class="h-56 flex flex-col justify-around items-center ">
		<Button
			src={calendar}
			alt="calendar icon"
			kind="google-links"
			url="https://calendar.google.com"
		/>
		<Button src={keep} alt="keep icon" kind="google-links" url="https://keep.google.com" />
		<Button src={tasks} alt="tasks icon" kind="google-links" />
		<Button src={contacts} alt="contacts icon" kind="google-links" />
	</div>
	<div class="mt-4 h-px w-5 bg-gray-200 border-0 " />
	<div class="mt-6">
	<Button icon="add" kind="google-links" />
	</div>
</div>
