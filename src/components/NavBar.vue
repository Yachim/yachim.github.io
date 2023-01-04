<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
<header class="w-full flex justify-between items-center p-6">
	<RouterLink to="/">
		<h1 class="font-medium text-3xl">Jáchym Kohout</h1>
	</RouterLink>
	<nav class="flex gap-7 items-center">
		<RouterLink to="/projects">Projects</RouterLink>
		<RouterLink to="/skills">Skills</RouterLink>
		<RouterLink to="/blog">Blog</RouterLink>
		<div class="flex items-center border-accent border-2 rounded-[3rem] overflow-hidden">
			<RouterLink class="p-3 px-7 border-r border-r-accent transition-colors hover:bg-accent duration-300" to="/contact">
				Contact
			</RouterLink>
			<RouterLink class="p-3 px-7 border-l border-l-accent transition-colors hover:bg-accent duration-300 flex gap-2 items-center justify-between" to="/cv">
				<font-awesome-icon icon="fa-solid fa-floppy-disk" /> CV
			</RouterLink>
		</div>
	</nav>
</header>
</template>
