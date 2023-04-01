<script lang="ts" setup>
const props = defineProps<{
	name: string;
	image1: string;
	image2: string;
	siteUrl: string;
	ghUrl: string;
	align: "left" | "right";
	order: number;
}>();
</script>

<template>
	<div :data-align="props.align" class="wrapper w-full gap-x-6 gap-y-4
		grid 
		grid-areas-projectMobile xl:grid-areas-project
		grid-cols-projectMobile xl:grid-cols-project
		grid-rows-projectMobile xl:grid-rows-project" :style="{ '--order': order }">
		<a target="_blank" :href="props.siteUrl" class="grid-in-img image flex-[2_1_0%]">
			<img class="second-img" :src="props.image2" :alt="`${props.name}'s Second Image`">
			<img class="first-img" :src="props.image1" :alt="`${props.name}'s First Image`">
		</a>

		<h4 class="grid-in-name text-accent text-xl">{{ props.name }}</h4>

		<p class="grid-in-desc project-desc">
			<slot />
		</p>

		<div class="grid-in-links flex gap-2 links self-center">
			<SocialButton :title="`${props.name}'s GitHub`" icon="fa-brands fa-github" :href="props.ghUrl" />
			<SocialButton :title="`${props.name}'s Site`" icon="fa-solid fa-arrow-up-right-from-square"
				:href="props.siteUrl" />
		</div>
	</div>
</template>

<style scoped>
.image {
	width: auto;
	max-width: 100%;

	cursor: pointer;
	aspect-ratio: 16/9;
	position: relative;
	overflow: hidden;
}

.image>img {
	object-fit: cover;
	border-radius: 0.5rem;

	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	transition-property: opacity, scale;
	transition-duration: 300ms;
	transition-timing-function: ease-in-out;

	--hover-scale: 1.05;
}

.first-img {
	opacity: 1;
	scale: 1;
}

.second-img {
	opacity: 0;
	scale: 1;
}

.image:hover .first-img {
	opacity: 0;
	scale: var(--hover-scale);
}

.image:hover .second-img {
	opacity: 1;
	scale: var(--hover-scale);
}

[data-align="right"] {
	flex-direction: row-reverse;
}

[data-align="right"]>div {
	text-align: right;
	align-items: end;
}

[data-align="right"] .links {
	flex-direction: row-reverse;
}

.wrapper {
	opacity: 0;
}

.visible {
	animation: load 1200ms calc(var(--order) * 300ms) forwards ease-in-out;
}
</style>
