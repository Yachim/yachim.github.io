<script setup lang="ts">
import SocialButton from '../SocialButton.vue';
</script>

<template>
<div class="w-full h-screen flex flex-col items-center justify-center">
	<div class="flex flex-col items-center gap-2">
		<h1 class="font-medium text-6xl text-accent">Jáchym Kohout</h1>
		<h2 class="text-3xl">Frontend developper</h2>
	</div>
	<div class="flex gap-3">
		<SocialButton title="GitHub" icon="fa-brands fa-github" />
		<SocialButton title="LinkedIn" icon="fa-brands fa-linkedin" />
	</div>
</div>
</template>
