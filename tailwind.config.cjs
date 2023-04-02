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
				],
				projectLeft: [
					"img name links",
					"img desc desc",
				],
				projectRight: [
					"links name img",
					"desc desc img",
				],
				projectMobile: [
					"img img",
					"name links",
					"desc desc"
				],
				nav: [
					"heading nav"
				],
				navMobile: [
					"heading show-nav",
					"nav nav"
				]
			},
			gridTemplateColumns: {
				about: "1fr 1fr",
				aboutMobile: "1fr",
				projectLeft: "3fr 4fr auto",
				projectRight: "auto 4fr 3fr",
				projectMobile: "1fr auto"
			},
			gridTemplateRows: {
				about: "repeat(3, auto)",
				aboutMobile: "repeat(4, auto)",
				project: "2.5rem auto",
				projectMobile: "repeat(3, auto)",
			}
		},
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas')
	],
}
