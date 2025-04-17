/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors:{
            primary: 'hsl(308, 56%, 85%)',
            'primary-foreground': 'hsl(210, 22% ,22%)',
            secondary: 'hsl(196, 75%, 88%)',
            'secondary-foreground': 'hsl(210, 22% ,22%)',
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            merriweather: ['Merriweather', 'serif'],
        }
      },
    },
    plugins: [],
  }