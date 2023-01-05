<script setup lang="ts">
import SocialButton from '../SocialButton.vue';
</script>

<template>
<div class="page-part">
	<div class="grid grid-cols-aboutArea grid-rows-aboutArea gap-x-8 gap-y-8">
		<div class="flex flex-col gap-3 justify-end col-start-1 col-end-1 row-start-1 row-end-1">
			<h1 class="font-medium text-6xl text-accent text-right">Jáchym Kohout</h1>
			<h2 class="text-3xl text-right">Frontend developper</h2>
		</div>
		<div class="flex justify-self-end gap-3 col-start-1 col-end-1 row-start-2 row-end-2">
			<SocialButton title="GitHub" icon="fa-brands fa-github" />
			<SocialButton title="LinkedIn" icon="fa-brands fa-linkedin" />
		</div>

		<div class="h-full w-[2px] bg-text row-span-2 col-start-2 col-end-2"></div>

		<p class="w-par row-start-1 row-end-1 col-start-3 col-end-3">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Possimus rem consequuntur praesentium expedita! 
			Doloremque molestiae dolor porro nobis ipsam vitae voluptates illum et? 
			Iste explicabo debitis quo dignissimos velit eaque?
		</p>
		<button class="flex gap-3 items-center justify-self-start transition-seeSkills duration-300 hover:gap-5 py-[auto] px-7 border-accent border-2 rounded-[3rem] hover:bg-accent row-start-2 row-end-2 col-start-3 col-end-3">
			See skills <font-awesome-icon icon="fa-solid fa-arrow-right" />
		</button>
	</div>
</div>
</template>
