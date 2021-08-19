module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	// backgroundImage: theme => ({
    	// 	'green-wall': "url('/images/background.jpg')"
    		
    	// })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
