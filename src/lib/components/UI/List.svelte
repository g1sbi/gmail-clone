<script lang="ts">
	import { page } from "$app/stores"
	import Button from '$lib/components/UI/Button.svelte';
	import mails from '$lib/fakeMails.js';

	//check if route is /starred
	let isStarred = false;

	if ($page.url.pathname === "/starred") {
		isStarred = true;
	};

	console.log(isStarred)
	//types
	interface Mail {
		id: number;
		sender: string;
		subject: string;
		body: string;
		date: string;
		read: boolean;
		starred: boolean;
	}

	//create array of either all inbox or starred
	let mailArray: Array<Mail> = []
	if ( isStarred === true ){
		mailArray = mails.filter( mail => mail.starred === true );
	} else {
		mailArray = mails;
	}


</script>

<div class="h-[52rem] pt-2 text-sm overflow-y-auto">
	{#each mailArray as mail}
		<Button kind="mail">
		<div
			class={`px-3 flex justify-between items-center border-b-[1px] hover:drop-shadow-mail ${!mail.read ? 'bg-white' : 'bg-read'}`}
		>
			<!-- checkbox, star and sender -->
			<div class="w-[16.5rem] flex items-center">
				<Button kind="mail-button">
				<input type="checkbox" class=""/>
				</Button>
				<Button icon="star" kind="mail-button"/>
				<div class={`${!mail.read ? 'font-bold' : ''}`}>{mail.sender}</div>
			</div>
			<!-- subject -->
			<div class="max-w-[72rem] grow flex truncate">
				<div class={`${!mail.read ? 'font-bold text-md' : ''}`}>{mail.subject}</div>
				<div class="mx-1">-</div>
				<div class="text-gray-500">{mail.body}</div>
			</div>
			<!-- time/date -->
			<div class={`w-10 ml-16 text-right text-xs ${!mail.read ? 'font-bold' : ''}`}>{mail.date}</div>
		</div>
		</Button>
	{/each}
</div>
