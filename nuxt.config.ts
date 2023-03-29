// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			base: {
				href: "./"
			}
		}
	},
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css'
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
})
