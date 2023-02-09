/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },

      container: {
        center: true,
        padding: "4rem",
      },

      colors: {
        dark_primary: "#058388",
        dark_secondary: "#248F9A",
        bg_light_primary: "#14B0BF",
        bg_light_secondary: "#1FC4D4",
        gray: "#99b1bb",
        txt: "#161616",
      },
    },
  },
  plugins: [],
};
