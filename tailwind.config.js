/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
			colors: {
				'Melody': '#FCD9B8',
				'Kuromi': '#E09145',
				'Tom': '#17181D',
				'Jerry': '#292C35'
			},
			boxShadow: {
        'xxA': 'inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        'xxB': ' 0 4px 4px 0 rgba(0, 0, 0, 0.25)',

      }
		},
  },
  plugins: [],
}

