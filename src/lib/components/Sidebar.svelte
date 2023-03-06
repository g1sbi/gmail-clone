<script>
	import Button from '$lib/components/UI/Button.svelte'
	import Link from '$lib/components/UI/Link.svelte'
	import edit from '$lib/assets/edit.svg'
	import inbox from '$lib/assets/inbox.svg'
	import star from '$lib/assets/star.svg'
	import clock from '$lib/assets/clock.svg'
	import send from '$lib/assets/send.svg'
	import draft from '$lib/assets/draft.svg'
	import expand from '$lib/assets/expand.svg'
	import add from '$lib/assets/add.svg'


	//compose new mail
	export let renderCompose;

</script>

<div class="w-60 flex flex-col mr-4">
	<!-- compose -->
	<div class="m-2">
		<Button 
			src={edit} 
			alt="edit icon" 
			type="compose"
			onClick={renderCompose}
		/>
	</div>
	<!-- list -->
	<div class="flex flex-col my-2">
		<Link
			href="/"
			src={inbox}
			alt="inbox icon"
			text="Inbox"
		/>
		<Link
			href="/starred"
			src={star}
			alt="star icon"
			text="Starred"
		/>
		<Link
			href="/snoozed"
			src={clock}
			alt="clock icon"
			text="Snoozed"
		/>
		<Link
			href="/sent"
			src={send}
			alt="send icon"
			text="Sent"
		/>
		<Link
			href="/drafts"
			src={draft}
			alt="draft icon"
			text="Drafts"
		/>
		<Link
			href="/more"
			src={expand}
			alt="arrow icon"
			text="More"
		/>

	</div>

	<!-- labels -->
	<div class="pl-6 pt-3">
		<div class="flex justify-between items-center ">
			<div class="font-bold text-lg">Labels</div>
			<Button src={add} alt="add icon" type="gmail-links" />
		</div>
	</div>

</div>
