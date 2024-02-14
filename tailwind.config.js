/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		colors: {
			// Primary

			main: "hsl(75, 94%, 57%)",

			// Neutral

			white: "hsl(0, 0%, 100%)",
			grey: "hsl(0, 0%, 20%)",
			darkGrey: "hsl(0, 0%, 12%)",
			black: "hsl(0, 0%, 8%)",
		},
		fontFamily: {
			inter: "'Inter', sans-serif",
		},
		extend: {},
	},
	plugins: [],
};
