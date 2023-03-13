<script lang="ts">
	import Button from '$lib/components/UI/Button.svelte';
	import type Mail from '$lib/components/UI/List.svelte'

	export let renderCompose: Function;

	//window size variables
	let minimize = false;
	let fullscreen = false;

	//variable to conditionally render contacts
	let contacts = false;

		
	export let mail:Mail;

	const handleSend = () => {console.log(mail)};

</script>

<div
	class={`${
		fullscreen
			? 'fixed inset-0 z-10 flex justify-center items-center bg-gray-500 bg-opacity-75'
			: 'bg-opacity-0'
	}`}
>
	<div
		class={`z-10 flex flex-col bg-white border rounded-t-lg drop-2shadow-2xl ${
			minimize ? 'w-72 h-10' : 'w-[37.5rem] h-[38.5rem]'
		} ${fullscreen ? 'relative w-[84%] h-[92%]' : 'fixed bottom-0 right-0 mr-[4.5rem]'}`}
	>
		<!-- header -->
		<div class="flex justify-between items-center py-2 px-4 bg-read rounded-t-lg">
			<div class="text-sm font-bold">New Message</div>
			<div class="flex items-center">
				<Button
					icon="minimize"
					kind="list-header"
					onClick={() => {
						minimize = !minimize;
					}}
				/>
				<Button
					icon="open_in_full"
					kind="list-header"
					onClick={() => {
						fullscreen = !fullscreen;
					}}
				/>
				<Button icon="close" kind="list-header" onClick={renderCompose} />
			</div>
		</div>
		<!-- recipient, subject and body -->
		<div class="grow flex flex-col px-4 py-1 text-sm">
			<div class="flex items-center">
				{#if contacts}
					<Button text="To" />
				{/if}
				<input
					class="w-full py-2 outline-none border-b"
					placeholder="Recipients"
		 bind:value={mail.to}
					on:click={() => {
						contacts = !contacts;
					}}
					on:blur={() => {
						contacts = !contacts;
					}}
				/>
			</div>
			<input class="w-full py-2 outline-none border-b" placeholder="Subject" bind:value={mail.subject} />
			<textarea
				bind:value={mail.body}
				class="grow outline-none w-full overflow-y-auto resize-none py-2"
			/>
		</div>
		<!-- footer -->
		<div class="flex justify-between items-center px-3 py-3">
			<!-- custom pill shaped button -->
			<div class="flex items-center">
				<Button kind="send" onClick={handleSend}>Send</Button>
				<Button icon="attach_file" kind="list-header" onClick={handleSend} />
			</div>
			<Button icon="delete" kind="list-header" />
		</div>
	</div>
</div>

