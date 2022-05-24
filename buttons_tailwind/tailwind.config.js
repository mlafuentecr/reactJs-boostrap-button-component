module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			display: ['Inter', 'system-ui', 'sans-serif'],
			body: ['Inter', 'system-ui', 'sans-serif'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			brand: {
				100: '#cffafe',
				200: '#a5f3fc',
				300: '#67e8f9',
				400: '#22d3ee',
				500: '#8a66b0',
				600: '#0891b2',
				700: '#0e7490',
				800: '#5c3f7b',
				900: '#3b2552',
			},
			midnight: '#121063',
			metal: '#565584',
			tahiti: '#3ab7bf',
			silver: '#ecebff',
			bermuda: '#78dcca',
		},
		extend: {},
	},
	plugins: [],
};
