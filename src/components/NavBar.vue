<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<script lang="ts">
export default {
	data() {
		return {
			showShadow: false
		}
	},
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	unmounted() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			if (
				document.body.scrollTop > window.innerHeight / 2 ||
				document.documentElement.scrollTop > window.innerHeight / 2
			) {
				this.showShadow = true;
			}
			else {
				this.showShadow = false;
			}
		},
		scrollTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
		}
	}
}
</script>

<template>
	<header :data-scrolled="showShadow" ref="header" class="w-full flex justify-between items-center p-6 fixed bg-bg">
		<RouterLink class="hover:text-accent transition-colors duration-300" to="/" @click="scrollTop">
			<h1 class="font-medium text-3xl">Jáchym Kohout</h1>
		</RouterLink>
		<nav class="flex gap-7 items-center">
			<RouterLink class="link" to="/blog">
				Blog
			</RouterLink>
			<div class="flex items-center border-accent border-2 rounded-[3rem] overflow-hidden">
				<a class="p-3 px-7 border-r border-r-accent transition-colors hover:bg-accent duration-300 rounded-link"
					href="mailto:jachym.kohout@gmail.com" target="_blank">
					Email Me
				</a>
				<a class="p-3 px-7 border-l border-l-accent transition-colors hover:bg-accent duration-300 flex gap-2 items-center rounded-link"
					href="/cv" target="_blank">
					<font-awesome-icon icon="fa-solid fa-floppy-disk" />
					CV
				</a>
			</div>
		</nav>
	</header>
</template>

<style scoped>
header {
	z-index: 9999;
	transition: box-shadow 300ms ease-in-out;
}

header[data-scrolled="true"] {
	-webkit-box-shadow: 0px 1px 5px 0px theme("colors.shadow");
	-moz-box-shadow: 0px 1px 5px 0px theme("colors.shadow");
	box-shadow: 0px 1px 5px 0px theme("colors.shadow");
}
</style>
