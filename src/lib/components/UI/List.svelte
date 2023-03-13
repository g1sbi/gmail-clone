<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/UI/Button.svelte';
	import fakeMails from '$lib/fakeMails.js';

	//check for client side rendering
	if (typeof window !== 'undefined') {
		//check localStorage and fill if empty
		if (!localStorage.getItem('emails')) {
			localStorage.setItem('emails', JSON.stringify(fakeMails));
		}
	}

	//types
	export interface Mail {
		id: number;
		sender: string;
		subject: string;
		body: string;
		date: string;
		read: boolean;
		starred: boolean;
	}

	//get mails from localStorage
	let localMails: Array<Mail> = [];
	if (typeof window !== 'undefined') {
		localMails = JSON.parse(localStorage.getItem('emails') || '[]');
	}

	//create array of either all inbox or starred, depending on page
	let mailArray: Array<Mail> = [];
	if ($page.url.pathname === '/starred') {
		mailArray = localMails.filter((mail) => mail.starred === true);
	} else {
		mailArray = localMails;
	}

	//change star/read status
	const handleChange = (mail: Mail, prop:string) => {
		if (prop === 'read') {
			mail.read = true;
		} else {
			mail.starred = !mail.starred;
		}

		//update localStorage
		const index = localMails.findIndex((m) => m.id === mail.id);
		localMails[index] = { ...mail };
		localStorage.setItem('emails', JSON.stringify(localMails));
		mailArray = [...localMails];
	};
</script>

<div class="h-[90vh] pt-2 text-sm overflow-y-auto">
	{#each mailArray as mail (mail.id)}
		<Button
			url={`${$page.url.pathname}/${mail.id}`}
			kind="mail"
			onClick={() => {
				handleChange(mail, 'read');
			}}
		>
			<div
				class={`px-3 flex justify-between items-center border-b-[1px] hover:drop-shadow-mail whitespace-nowrap ${
					!mail.read ? 'bg-white' : 'bg-read'
				}`}
			>
				<!-- checkbox, star and sender -->
				<div class="min-w-[16.5rem] flex items-center ">
					<Button kind="mail-button">
						<input type="checkbox" class="bg-[#CCCDD2]" />
					</Button>
					<Button
						icon="star"
						kind={`${mail.starred ? 'mail-star-filled' : 'mail-star-empty'}`}
						onClick={() => {
							handleChange(mail, 'starred');
						}}
					/>
					<div class={`${!mail.read ? 'font-bold' : ''}`}>{mail.sender}</div>
				</div>
				<!-- subject -->
				<div class="min-w-0 max-w-[72rem] flex mr-auto">
					<div class={`${!mail.read ? 'font-bold text-md' : ''}`}>{mail.subject}</div>
					<div class="mx-1">-</div>
					<div class="text-gray-500 truncate">{mail.body}</div>
				</div>
				<!-- time/date -->
				<div class={`min-w-10 w-10 ml-16 text-right text-xs ${!mail.read ? 'font-bold' : ''}`}>
					{mail.date}
				</div>
			</div>
		</Button>
	{/each}
</div>
