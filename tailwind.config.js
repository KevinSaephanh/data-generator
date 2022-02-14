module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      minHeight: {
        500: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
