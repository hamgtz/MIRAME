/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hurmeOblack: ["HurmeGeometricSans4-Black"],
        hurmeOblique: ["HurmeGeometricSans4-BoldObl"],
      },
      colors: {
        azul: {
          1: "#9EC2FF",
          5: "#1B3A57",
          10: "#0039d9",
          20: "#001935",
          30: "#020B1F",
        },
        // ajusta al azul que quieras
        mostaza: {
          1000: "#002551",
          950: "#3B2A00",
          900: "#5C3E00",
          800: "#815700",
          700: "#A86F00",
          600: "#C98B0E",
          500: "#E5B143",
          400: "#F1C366",
          300: "#F6D48C",
          200: "#FAE3B2",
          100: "#FDF1D7",
          50: "#FFFAEE",
          5: "#FFB300",
        }, // ajusta al mostaza que quieras
        blanco: "#FFFFFF",
      },
      // fontFamily: {
      //   playfair: ["Playfair Display", "serif"],
      //   poppins: ["Poppins", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
