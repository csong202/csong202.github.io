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
			pink: "#f043b3",
			blue: "#2bc3f4",
			purple: "#9e61ff",
			black: "#000000",
			white: "#ffffff",
		},
		screens: {
			xxs: "320px",
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
