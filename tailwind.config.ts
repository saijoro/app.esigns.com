/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./app/**/*.tsx"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Poppins", "sans-serif"]
  		},
  		colors: {
  			primary: '#bf1b39',
  			secondary: '#1e3a8a'
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(95.1deg, #3357AA 0.6%, #BF1B39 101.33%)'
  		},
  		boxShadow: {
  			all: '0px 0px 9px 0px rgba(0, 0, 0, 0.14)'
  		},
  		height: {
  			comments: 'calc(100vh - 520px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
};
