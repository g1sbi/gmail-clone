<script lang="ts">
	import arrow from '$lib/assets/expand.svg';
	export let src: string = '';
	export let alt: string = '';
	export let text: string = '';
	export let type: string = '';
	export let onClick = () => {};
	export let url: string = '';

	let style = '';
	let imgStyle = '';
	let textStyle = '';
	let pill = false;
	let pillStyle = '';
	let target = '';

	switch (type) {
		case 'compose':
			style =
				'flex items-center bg-compose rounded-[14px] px-4 py-4 pr-6 border border-compose hover:shadow-2xl hover:border-gray-300';
			imgStyle = 'w-6 mr-4';
			textStyle = 'text-sm font-bold';
			text = 'Compose';
			break;

		case 'user':
			style = 'w-10 p-1 rounded-full hover:bg-gray-200';
			imgStyle = 'w-12 rounded-full';
			break;

		case 'list':
			style = '';
			break;

		case 'google-links':
			style = 'w-[40px] h-[40px] rounded-full hover:bg-gray-200';
			imgStyle = 'w-5 m-auto';
			target = '_blank';
			break;

		case 'gmail':
			style = 'py-0 px-2';
			break;

		case 'new mail':
			style = 'w-4 hover:bg-gray-300 ';
			break;

		case 'send':
			style =
				'py-2 pr-5 border-0 border-r-[1px] border-r-black bg-send text-sm text-white font-bold hover:bg-blue-500';
			text = 'Send';
			textStyle = '';
			pill = true;
			pillStyle = 'flex hover:bg-blue-500';
			break;

		default:
			style = 'w-10 h-10 p-2 hover:bg-gray-300 rounded-full';
	}
</script>

<a href={url} {target} rel="noreferrer">
	<div class={pillStyle}>
		{#if pill}
			<div class="rounded-l-full bg-send w-5 " />
		{/if}
		<button class={style} on:click={onClick}>
			<img {src} {alt} class={imgStyle} />
			<div class={textStyle}>{text}</div>
		</button>
		{#if pill}
			<div class="rounded-r-full bg-send w-8 ">
				<img src={arrow} alt="arrow icon" class="w-4 h-4 my-2 mx-1" />
			</div>
		{/if}
	</div>
</a>
