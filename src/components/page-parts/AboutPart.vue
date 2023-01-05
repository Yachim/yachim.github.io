<script setup lang="ts">
import SeeButton from '../SeeButton.vue';
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
			<SocialButton title="GitHub" icon="fa-brands fa-github" href="https://github.com/Yachim" />
			<SocialButton title="LinkedIn" icon="fa-brands fa-linkedin" href="https://www.linkedin.com/in/jachym-kohout/" />
		</div>

		<div class="h-full w-[2px] bg-text row-span-2 col-start-2 col-end-2"></div>

		<p class="w-par row-start-1 row-end-1 col-start-3 col-end-3">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Possimus rem consequuntur praesentium expedita! 
			Doloremque molestiae dolor porro nobis ipsam vitae voluptates illum et? 
			Iste explicabo debitis quo dignissimos velit eaque?
		</p>
		<div class="row-start-2 row-end-2 col-start-3 col-end-3 flex gap-3">
			<SeeButton href="" see-text="projects"/>
		</div>
	</div>
</div>
</template>
