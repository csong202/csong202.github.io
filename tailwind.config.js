/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			height: {
				112: "28rem",
				128: "32rem",
				144: "36rem",
				160: "40rem",
				176: "44rem",
			},
			width: {
				112: "28rem",
				128: "32rem",
				144: "36rem",
				160: "40rem",
			},
		},
		colors: {
			background: "#0c0b20",
			"background-light": "#16153b",
			teal: "#20bf9b",
			"teal-light": "#6fc0ad",
			pink: "#f043b3",
			blue: "#2bc3f4",
			purple: "#8e55e8",
			"purple-dark": "#402669",
			black: "#000000",
			white: "#ffffff",
		},
		screens: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
