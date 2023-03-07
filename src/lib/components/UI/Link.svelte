<script lang="ts">
	export let href = '';
	export let src = '';
	export let alt = '';
	export let text = '';
</script>

<button class="hover:bg-gray-200 focus-within:bg-link active:bg-link px-2 py-1 rounded-r-full">
	<a {href} class="flex items-center focus:bg-link active:bg-link">
		<img {src} {alt} class="w-4 mx-5 " />
		<div class="focus:font-bold">{text}</div>
	</a>
</button>
