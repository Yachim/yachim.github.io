<script lang="ts">
export default {
	data() {
		return {
			showShadow: false,
			navBarShown: false
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
	<header :data-scrolled="showShadow" ref="header"
		class="z-10 w-full grid grid-areas-navMobile sm:grid-areas-nav justify-between items-center p-6 fixed bg-bg"
		:class="{ 'gap-y-6': navBarShown }">
		<NuxtLink class="hover:text-accent transition-colors duration-300 grid-in-heading" to="/#top">
			<h1 class="font-medium text-3xl">Jáchym Kohout</h1>
		</NuxtLink>
		<label for="nav-toggle" class="px-2 cursor-pointer sm:hidden grid-in-show-nav">
			<ClientOnly>
				<font-awesome-icon class="navbar-toggle-icon" :class="{ 'label-checked': navBarShown }"
					icon="fa-solid fa-chevron-left" />
			</ClientOnly>
		</label>
		<input type="checkbox" class="hidden" id="nav-toggle" name="mobile-nav-visible" v-model="navBarShown" />
		<nav class="flex gap-7 items-center grid-in-nav justify-between sm:justify-end">
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

.navbar-toggle-icon {
	transition: rotate 300ms ease-in-out;
	rotate: 0;
}

.navbar-toggle-icon.label-checked {
	rotate: -90deg;
}

@media screen and (max-width: 640px) {
	nav {
		display: none;
	}

	#nav-toggle:checked+nav {
		display: flex;
	}
}
</style>
