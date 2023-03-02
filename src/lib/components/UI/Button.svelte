<script lang="ts">
	export let src:string;
	export let alt:string;
	export let text="";
	export let type="";

	let style="";
	let imgStyle="";
	let textStyle="";

	switch (type) {
		case "compose":
			style = "flex items-center bg-compose rounded-[14px] px-4 py-4 pr-6"
			imgStyle = "w-6 mr-4"
			textStyle = "text-sm font-bold"
			break;

		case "user":
			style = "w-10 p-1 rounded-full hover:bg-gray-100"
			imgStyle = "w-12 rounded-full"
			break;
		
		case "list":
			style = ""

		break;

		default:
			style= "w-10 h-10 p-2 hover:bg-gray-300 rounded-full"
	}

</script>

<button class={style}>
	<img
	 src={src}
	 alt={alt}
	 class={imgStyle}
	 />
	 <div class={textStyle} >{text}</div>
</button>
