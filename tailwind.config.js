/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'cursive': ['Playwrite IT Moderna', 'cursive'] 
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  "rules": {
    "react/prop-types": "off"
  }
}

