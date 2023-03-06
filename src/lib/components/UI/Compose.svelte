<script>

	import Button from '$lib/components/UI/Button.svelte'
	import close from '$lib/assets/close.svg'
	import fullscreen_icon from '$lib/assets/fullscreen.svg'
	import minimize_icon from '$lib/assets/minimize.svg'

	export let renderCompose;

	//minimize
	let minimize = false;
	const handleMinimize = () =>{
		minimize = true;
	}

	//fullscreen
	let fullscreen = false;
	const handleFullscreen = () =>{

	}

	const handleSend = () => {

	}

</script>

{#if minimize}
	<div class="fixed flex flex-col bottom-0 right-0 mr-[4.5rem] w-72 h-10 bg-white border rounded-t-lg drop-shadow-2xl">
		minimize
	</div>
{/if}

{#if !minimize}
<div class="fixed flex flex-col bottom-0 right-0 mr-[4.5rem] w-[37.5rem] h-[38.5rem] bg-white border rounded-t-lg drop-shadow-2xl">
	<!-- header -->
	<div class="flex justify-between items-center py-2 px-4 bg-read">
		<div class="text-sm font-bold">New Message</div>
		<div class="flex items-center">
			<Button 
				src={minimize_icon}
				alt="close button"
				type="new mail"
				onClick={handleMinimize}
			/>
			<Button 
				src={fullscreen_icon}
				alt="close button"
				type="new mail"
				onClick={handleFullscreen}
			/>
			<Button 
				src={close}
				alt="close button"
				type="new mail"
				onClick={renderCompose}
			/>
		</div>
	</div>
	<!-- recipient, subject and body -->
	<div class="grow flex flex-col px-4 py-1 text-sm">
		<input
			class="w-full py-2 outline-none border-b"
			placeholder="Recipient"
		/>
		<input
			class="w-full py-2 outline-none border-b"
			placeholder="Subject"
		/>
		<textarea
			class="grow outline-none w-full overflow-y-auto resize-none py-2"
		/>
	</div>
	<!-- footer -->
	<div class="flex px-4 py-2">
		<!-- custom pill shaped button -->
		<div class="mb-1">
			<Button
				type="send"
				onClick={handleSend}
			/>
		</div>
	</div>
</div>
{/if}
