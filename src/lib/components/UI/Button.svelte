<script lang="ts">
	import styles from '../../buttonStyles.js';
	export let src: string = '';
	export let icon: string = '';
	export let alt: string = '';
	export let text: string = '';
	export let kind: string = '';
	export let onClick: any = () => {};
	export let url: string = '';

	//kinds
	interface Buttonkind {
		tag?: string;
		style?: string;
		imgStyle?: string;
		iconStyle?: string;
		textStyle?: string;
		linkStyle?: string;
	}

	//store button kind
	const buttonStyles: Record<string, Buttonkind> = styles;
	const button: Buttonkind = buttonStyles[kind] || buttonStyles.default;

</script>

{#if button.tag === "button"}
	<a href={url}  rel="noreferrer" class={button.linkStyle}>
		<button class={button.style} on:click={onClick}>
			<img {src} {alt} class={button.imgStyle} />
			<span class={`material-symbols-outlined ${button.iconStyle}`}>{icon}</span>
			<div class={button.textStyle}>{text}</div>
		</button>
	</a>
{/if}

{#if button.tag === "link"}
	<button class={button.style} on:click={onClick}>
			<img {src} {alt} class={button.imgStyle} />
			<span class={`material-symbols-outlined ${button.iconStyle}`}>{icon}</span>
			<div class={button.textStyle}>{text}</div>
		</button>
	{/if}

{#if button.tag === "pill"}
	<button class={button.style} on:click={onClick}>
		<div class="rounded-l-full bg-send w-5" />
		<div class={button.textStyle}>{text}</div>
		<div class="rounded-r-full bg-send w-8 px-1 pt-2 ">
			<span class="material-symbols-outlined white">arrow_drop_down</span>
		</div>
	</button>
{/if}

