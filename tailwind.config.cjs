/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	safelist: ["emphasized"],
	theme: {
		colors: {
			text: "hsl(150deg, 83%, 95%)",
			bg: "hsl(150deg, 83%, 2%)",
			accent: "hsl(150deg, 70%, 40%)",
			focus: "hsl(150deg, 50%, 60%)",
			shadow: "hsl(150deg, 27%, 15%)"
		},
		extend: {
			width: {
				par: "35ch"
			},
			transitionProperty: {
				gap: "gap",
				seeSkills: "gap, background-color"
			},
			gridTemplateAreas: {
				about: [
					"heading heading",
					"subheading subheading",
					"socials projects-button"
				],
				aboutMobile: [
					"heading",
					"subheading",
					"socials",
					"projects-button"
				]
			},
			gridTemplateColumns: {
				about: "1fr 1fr",
				aboutMobile: "1fr"
			},
			gridTemplateRows: {
				about: "repeat(3, auto)",
				aboutMobile: "repeat(4, auto)"
			}
		},
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas')
	],
}
