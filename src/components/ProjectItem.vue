<script lang="ts" setup>
import SocialButton from "./SocialButton.vue";

const props = defineProps<{
	name: string;
	description: string;
	image1: string;
	image2: string;
	align: "left" | "right";
	siteUrl: string;
	ghUrl: string;
}>();
</script>

<template>
<div :data-align="props.align" class="wrapper flex w-3/5 gap-6">
	<a :href="props.siteUrl" class="image flex-[2_1_0%]" :style="`--img1: url(${image1}); --img2: url(${image2})`">
		<img class="second-img" :src="props.image2" :alt="`${props.name}'s Second Image`">
		<img class="first-img" :src="props.image1" :alt="`${props.name}'s First Image`">
	</a>
	<div class="flex-[3_1_0%] flex flex-col gap-2">
		<h3 class="text-accent text-xl">{{props.name}}</h3>
		<p class="">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Maiores quidem nisi nemo! Aut perferendis similique esse possimus dignissimos.
			Quis error architecto porro praesentium molestiae vitae blanditiis corporis.
			Alias, esse nemo.
		</p>

		<div class="flex mt-auto gap-2 links">
			<SocialButton :title="`${props.name}'s GitHub`" icon="fa-brands fa-github" :href="props.ghUrl" />
			<SocialButton :title="`${props.name}'s Site`" icon="fa-solid fa-arrow-up-right-from-square" :href="props.siteUrl" />
		</div>
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
}

.image > img {
	object-fit: cover;
	border-radius: 0.5rem;

	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.first-img {
	opacity: 1;
	transition: opacity 300ms ease-in-out;
}

.second-img {
	opacity: 0;
	transition: opacity 300ms ease-in-out;
}

.wrapper:hover .first-img {
	opacity: 0;
}

.wrapper:hover .second-img {
	opacity: 1;
}

[data-align="right"] {
	flex-direction: row-reverse;
}

[data-align="right"] > div {
	text-align: right;
	align-items: end;
}

[data-align="right"] .links {
	flex-direction: row-reverse;
}
</style>
