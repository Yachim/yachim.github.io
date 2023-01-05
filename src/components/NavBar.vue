<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
	data() {
		return {
			showShadow: false
		}
	},
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	unmounted() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			if (
				document.body.scrollTop > window.innerHeight || 
				document.documentElement.scrollTop > window.innerHeight
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
			<RouterLink class="p-3 px-7 border-r border-r-accent transition-colors hover:bg-accent duration-300 rounded-link" to="/contact">
				Contact
			</RouterLink>
			<RouterLink class="p-3 px-7 border-l border-l-accent transition-colors hover:bg-accent duration-300 flex gap-2 items-center rounded-link" to="/cv">
				<font-awesome-icon icon="fa-solid fa-floppy-disk" />
				CV
			</RouterLink>
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
