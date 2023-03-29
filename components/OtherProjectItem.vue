<script lang="ts" setup>
const props = defineProps<{
	name: string;
	image: string;
	siteUrl: string;
	ghUrl: string;
}>();
</script>

<template>
	<div class="flex flex-col gap-3 project-wrapper w-[25ch]">
		<div class="relative">
			<h4 class="text-accent text-xl absolute p-2 w-full h-1/2 bg-gradient-to-b from-bg">
				{{
					props.name
				}}</h4>
			<img class="aspect-video object-cover w-full rounded-lg" :src="props.image" :alt="`${props.name}'s Image`">
			<div
				class="absolute flex flex-row gap-2 right-2 bottom-2 opacity-30 transition-opacity duration-300 ease-in-out icons">
				<SocialButton class="bg-bg" :title="`${props.name}'s GitHub`" icon="fa-brands fa-github"
					:href="props.ghUrl" />
				<SocialButton class="bg-bg" :title="`${props.name}'s Site`"
					icon="fa-solid fa-arrow-up-right-from-square" :href="props.siteUrl" />
			</div>
		</div>
		<slot />
	</div>
</template>

<style scoped>
.project-wrapper:hover .icons {
	opacity: 1;
}
</style>
