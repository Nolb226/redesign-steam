const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#66C0F4',
				'secondary-color': '#4B619B',
			},
			accentColor: {
				green: '#A1CD44',
				red: '#CD5444',
				yellow:'#C1B15F'
			},
			backgroundColor: {
				main: '#0E141B',
				highlight: '#1E2329',
				hover: '#313843',
				secondary: '#14344B',
				tertiary: '#212B45',
			},
			textColor: {
				main: '#F3F3F3',
				dim: '#76808C',
			},
			fontSize: {
				'heading/small': '18px',
			},
			fontWeight: {
				'heading/small': '700',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.heading-small': {
					'font-size': '18px',
					'font-weight': '700',
				},
				'.body-large': {
					'font-size': '16px',
				},
				'.body-medium': {
					'font-size': '14px',
				},
				'.body-small': {
					'font-size': '12px',
				},
			});
		}),
	],
};
