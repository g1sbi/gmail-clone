<script>
	export let src;
	export let alt;
	export let style="";
	export let imgStyle="";
	export let text="";
</script>

<button class={`${style} flex p-2 hover:bg-gray-300 rounded-full`}>
	<img
		src={src}
		alt={alt}
		class={imgStyle}
	/>
	<div>{text}</div>
</button>
