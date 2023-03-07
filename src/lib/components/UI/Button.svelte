<script lang="ts">
	import data from '$lib/buttonStyles.json';
	import arrow from '$lib/assets/expand.svg';
	export let src: string = '';
	export let alt: string = '';
	export let text: string = '';
	export let kind: string = '';
	export let onClick: () => void = () => {};
	export let url: string = '';

	let pill = false;

	//types
	interface StylesType {
		button: string;
		img: string;
		text: string;
		pill: boolean;
		pillStyle: string;
		style: string;
		imgStyle: string;
		textStyle: string;
		target: string;
	}

	interface ButtonType {
		[key: string]: StylesType;
		}

	//store button type
	const buttonStyles: StylesType = data;
	const button: ButtonType = buttonStyles[kind] || buttonStyles.default;
</script>

<a href={url} target={button.target} rel="noreferrer">
	<div class={button.pillStyle}>
		{#if pill}
			<div class="rounded-l-full bg-send w-5 " />
		{/if}
		<button class={button.style} on:click={onClick}>
			<img {src} {alt} class={button.imgStyle} />
			<div class={button.textStyle}>{text}</div>
		</button>
		{#if pill}
			<div class="rounded-r-full bg-send w-8 ">
				<img src={arrow} alt="arrow icon" class="w-4 h-4 my-2 mx-1" />
			</div>
		{/if}
	</div>
</a>
