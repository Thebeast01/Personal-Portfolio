/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			name: 'Playwrite GB S',
			roboto: 'Roboto',
			Mont: 'Montserrat',
		},
		extend: {
			keyframes: {
				'border-spin': {
					'100%': {
						transform: 'rotate(-360deg)',
					},
				},
			},
			animation: {
				'border-spin': 'border-spin 7s linear infinite',
			},
			colors: {
				background: '#010323',
				background2: '#171b4f',
				cursor: '#5cfbff',
			},
			backgroundImage: {
				profile: "url( 'src/assets/19362653.jpg' )",
			},
			boxShadow: {
				outer: '0px -0.4px 4px #d1d0d0',
			},
		},
	},
	plugins: [],
};
