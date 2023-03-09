<script lang="ts">
	import Button from '$lib/components/UI/Button.svelte';

	//compose new mail
	export let renderCompose: Function;
</script>

<div class="w-72 flex flex-col mr-4">
	<!-- compose -->
	<div>
		<Button icon="edit" kind="compose" text="Compose" onClick={renderCompose} />
	</div>
	<!-- list -->
	<div class="flex flex-col my-2">
		<Button icon="inbox" kind="links" text="Inbox" url="/" />
		<Button icon="star" kind="links" text="Starred" url="/starred" />
		<Button icon="schedule" kind="links" text="Snoozed" />
		<Button icon="send" kind="links" text="Sent" url="/sent" />
		<Button icon="draft" kind="links" text="Drafts" url="/drafts" />
		<Button icon="expand_more" kind="links" text="More" />
	</div>

	<!-- labels -->
	<div class="pl-6 pt-3">
		<div class="flex justify-between items-center ">
			<div class="text-lg">Labels</div>
			<Button icon="add" kind="gmail-links" />
		</div>
	</div>
</div>
