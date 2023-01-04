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
		accent: "hsl(150deg, 70%, 40%)"
	},
    extend: {},
  },
  plugins: [],
}
