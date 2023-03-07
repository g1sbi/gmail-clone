<script>
	import Button from '$lib/components/UI/Button.svelte';
	import close from '$lib/assets/close.svg';
	import fullscreen_icon from '$lib/assets/fullscreen.svg';
	import minimize_icon from '$lib/assets/minimize.svg';

	export let renderCompose;

	//window size variables
	let minimize = false;
	let fullscreen = false;

	//store mail to send
	let mail = '';

	const handleSend = () => {};
</script>

<div
	class={`${
		fullscreen
			? 'fixed inset-0 z-10 flex justify-center items-center bg-gray-500 bg-opacity-75'
			: 'bg-opacity-0'
	}`}
>
	<div
		class={`z-10 flex flex-col bg-white border rounded-t-lg drop-shadow-2xl ${
			minimize ? 'w-72 h-10' : 'w-[37.5rem] h-[38.5rem]'
		} ${fullscreen ? 'relative w-[100rem] h-[52rem]' : 'fixed bottom-0 right-0 mr-[4.5rem]'}`}
	>
		<!-- header -->
		<div class="flex justify-between items-center py-2 px-4 bg-read rounded-t-lg">
			<div class="text-sm font-bold">New Message</div>
			<div class="flex items-center">
				<Button
					src={minimize_icon}
					alt="close button"
					kind="new mail"
					onClick={() => {
						minimize = !minimize;
					}}
				/>
				<Button
					src={fullscreen_icon}
					alt="close button"
					kind="new mail"
					onClick={() => {
						fullscreen = !fullscreen;
					}}
				/>
				<Button src={close} alt="close button" kind="new mail" onClick={renderCompose} />
			</div>
		</div>
		<!-- recipient, subject and body -->
		<div class="grow flex flex-col px-4 py-1 text-sm">
			<input class="w-full py-2 outline-none border-b" placeholder="Recipient" />
			<input class="w-full py-2 outline-none border-b" placeholder="Subject" />
			<textarea
				bind:value={mail}
				class="grow outline-none w-full overflow-y-auto resize-none py-2"
			/>
		</div>
		<!-- footer -->
		<div class="flex px-4 py-2">
			<!-- custom pill shaped button -->
			<div class="mb-1">
				<Button kind="send" onClick={handleSend} />
			</div>
		</div>
	</div>
</div>
