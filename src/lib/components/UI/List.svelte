<script lang="ts">
	import Button from '$lib/components/UI/Button.svelte';
	import mails from '$lib/fakeMails.js';

	export let type = 'inbox';

	//types
	interface Mail {
		id: number;
		sender: string;
		subject: string;
		body: string;
		date: string;
		read: boolean;
	}

	const mailArray: Array<Mail> = mails;

</script>

<div class="pt-2 text-sm">
	{#each mailArray as mail}
		<Button kind="mail">
		<div
			class={`px-3 flex justify-between items-center ${!mail.read ? 'bg-white' : 'bg-read'}`}
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
			<div class="w-[72rem] flex truncate">
				<div class={`${!mail.read ? 'font-bold' : ''}`}>{mail.subject}</div>
				<div class="mx-1">-</div>
				<div class="truncate overflow-hidden whitespace-nowrap text-gray-500">{mail.body}</div>
			</div>
			<!-- time/date -->
			<div class={`w-10 ml-16 text-right text-xs ${!mail.read ? 'font-bold' : ''}`}>{mail.date}</div>
		</div>
		</Button>
	{/each}
</div>
