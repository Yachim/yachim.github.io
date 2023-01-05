/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
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
			par: "50ch"
		},
		transitionProperty: {
			gap: "gap",
			seeSkills: "gap, background-color"
		},
		gridTemplateColumns: {
			aboutArea: "1fr auto 1fr"
		},
		gridTemplateRows: {
			aboutArea: "1fr auto"
		}
	},
  },
  plugins: [],
}
