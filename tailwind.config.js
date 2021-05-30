const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/*.{js,ts}", "./components/*.{js,ts}"],
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
