<script>
	import calendar from '$lib/assets/calendar.png';
	import keep from '$lib/assets/keep.png';
	import tasks from '$lib/assets/tasks.png';
	import contacts from '$lib/assets/contacts.png';
	import add from '$lib/assets/add.svg';
	import Button from '$lib/components/UI/Button.svelte';
</script>

<div class="flex flex-col justify-around items-center w-14 h-80">
	<Button
		src={calendar}
		alt="calendar icon"
		kind="google-links"
		url="https://calendar.google.com"
	/>
	<Button src={keep} alt="keep icon" kind="google-links" url="https://keep.google.com" />
	<Button src={tasks} alt="tasks icon" kind="google-links" />
	<Button src={contacts} alt="contacts icon" kind="google-links" />
	<div class="h-px w-5 bg-gray-200 border-0 " />
	<Button src={add} alt="add icon" kind="google-links" />
</div>
