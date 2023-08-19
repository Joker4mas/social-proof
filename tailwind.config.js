/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      //font family for the site
      fontFamily: {
        'league': ['League Spartan'],
      },
      colors: {
        'Dark-Magenta': 'hsl(300, 43%, 22%)',
        'Soft-Pink': 'hsl(333, 80%, 67%)',
        'Grayish-Magenta': 'hsl(303, 10%, 53%)',
        'Light-Magenta': 'hsl(300, 24%, 96%)',
        'White-star': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}

