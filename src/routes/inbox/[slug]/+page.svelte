<script lang="ts">
	import { page } from '$app/stores';
	import type ReceivedMail from '$lib/types/Mail.ts'

	//fetch email from storage
	const idString: string | undefined = $page.url.pathname.split('/').pop();
	let id = 0;
	if (idString) {
		id = parseInt(idString);
	}

	let mail:ReceivedMail = {
		id: 0,
		sender: "",
		subject: "",
		body: "",
		date: new Date(0,0,0),
		read: false,
		starred: false
	};

	if (typeof window !== 'undefined') {
		const mailsJSON = localStorage.getItem('emails');
		if (mailsJSON) {
			mail = JSON.parse(mailsJSON)[id];
		}
	}

</script>

<div>{mail.sender}</div>
<div>{mail.body}</div>

<div class="flex flex-col">
<div>{mail.subject}</div>


</div>
