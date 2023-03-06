<script lang="ts">
	export let src:string="";
	export let alt:string="";
	export let text:string="";
	export let type:string="";
	export let onClick=() => {};

	let style="";
	let imgStyle="";
	let textStyle="";
	let pill=false;
	let pillStyle="";

	switch (type) {

		case "compose":
			style = "flex items-center bg-compose rounded-[14px] px-4 py-4 pr-6 border border-compose hover:shadow-2xl hover:border-gray-300"
			imgStyle = "w-6 mr-4"
			textStyle = "text-sm font-bold"
			text = "Compose"
			break;

		case "user":
			style = "w-10 p-1 rounded-full hover:bg-gray-200"
			imgStyle = "w-12 rounded-full"
			break;
		
		case "list":
			style = ""
		break;

		case "google-links":
			style = "w-[40px] h-[40px] rounded-full hover:bg-gray-200"	
			imgStyle = "w-5 m-auto"
		break;

		case "gmail":
			style="py-0 px-2"
		break;

		case "new mail":
			style="w-4 "
		break;

		case "send":
			style="rounded-lg bg-blue-500"
			text="Send"
			textStyle=""
			pill=true;
			pillStyle="flex"
		break;

		default:
			style= "w-10 h-10 p-2 hover:bg-gray-300 rounded-full"
	}

</script>

<div class={pillStyle}>
	{#if pill}
		<div class="rounded-l-full bg-blue-500 w-4"></div>
	{/if}
<button class={style} on:click={onClick}>
	<img
	 src={src}
	 alt={alt}
	 class={imgStyle}
	 />
	 <div class={textStyle}>{text}</div>
</button>
	{#if pill}
		<div>pill</div>
	{/if}
</div>
