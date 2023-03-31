<script lang="ts">
export default {
	data() {
		return {
			showShadow: false
		}
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeUnmount() {
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
		}
	}
}
</script>

<template>
	<header :data-scrolled="showShadow" ref="header" class="w-full flex justify-between items-center p-6 fixed bg-bg">
		<NuxtLink class="hover:text-accent transition-colors duration-300" to="/#top">
			<h1 class="font-medium text-3xl">Jáchym Kohout</h1>
		</NuxtLink>
		<nav class="flex gap-7 items-center">
			<NuxtLink class="link" to="/blog">
				Blog
			</NuxtLink>
			<a class="border-accent border-2 rounded-[3rem] p-3 px-7 border-r border-r-accent transition-colors hover:bg-accent duration-300 rounded-link"
				href="mailto:jachym.kohout@gmail.com" target="_blank">
				Email Me
			</a>
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
