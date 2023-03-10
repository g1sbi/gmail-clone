<script lang="ts">
	import Button from '$lib/components/UI/Button.svelte';

	//compose new mail
	export let renderCompose: Function;
</script>

<div class="min-w-[240px] w-[240px] flex flex-col mr-4 ">
	<!-- compose -->
	<div>
		<Button icon="edit" kind="compose" onClick={renderCompose}>Compose</Button>
	</div>
	<!-- list -->
	<div class="flex flex-col my-2">
		<Button icon="inbox" kind="links" url="/">Inbox</Button>
		<Button icon="star" kind="links" url="/starred">Starred</Button>
		<Button icon="schedule" kind="links">Snoozed</Button>
		<Button icon="send" kind="links" url="/sent">Sent</Button>
		<Button icon="draft" kind="links" url="/drafts">Drafts</Button>
		<Button icon="expand_more" kind="links">More</Button>
	</div>
	<!-- labels -->
	<div class="pl-6 pt-3">
		<div class="flex justify-between items-center ">
			<div class="text-lg">Labels</div>
			<Button icon="add" kind="gmail-links" />
		</div>
	</div>
</div>
