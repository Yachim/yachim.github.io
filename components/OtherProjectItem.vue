<script lang="ts" setup>
const props = defineProps<{
	name: string;
	image: string;
	siteUrl: string;
	ghUrl: string;
	order: number;
}>();
</script>

<template>
	<div :style="{ '--order': order }" class="wrapper flex flex-col gap-3
	w-[300px] flex-shrink-0">
		<div class="relative">
			<h4 class="text-accent text-xl absolute p-2 w-full h-1/2 bg-gradient-to-b from-bg">
				{{
					props.name
				}}</h4>
			<img class="aspect-video object-cover w-full rounded-lg" :src="props.image" :alt="`${props.name}'s Image`">
			<div
				class="absolute flex flex-row-reverse w-full gap-2 right-0 bottom-0 p-2 opacity-30 transition-opacity duration-300 ease-in-out icons bg-gradient-to-t from-bg">
				<SocialButton class="bg-bg" :title="`${props.name}'s GitHub`" icon="fa-brands fa-github"
					:href="props.ghUrl" />
				<SocialButton class="bg-bg" :title="`${props.name}'s Site`"
					icon="fa-solid fa-arrow-up-right-from-square" :href="props.siteUrl" />
			</div>
		</div>

		<div class="project-desc">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.wrapper:hover .icons {
	opacity: 1;
}

.wrapper {
	opacity: 0;
}

.visible {
	animation: load 1200ms calc(var(--order) * 300ms) forwards ease-in-out;
}
</style>
