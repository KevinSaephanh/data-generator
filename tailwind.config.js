module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      minHeight: {
        500: "500px",
      },
      height: {
        550: "550px",
      },
      width: {
        200: "200px",
        500: "500px",
        700: "700px",
      },
      maxWidth: {
        700: "700px",
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"], backgroundColor: ["hover"], cursorNotAllowed: ["disabled"] },
    backgroundColor: ["disabled"],
  },
  plugins: [],
};
