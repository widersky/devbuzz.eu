module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        inter: "'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'",
      },
      colors: {
        brandRed: "#FF6455",
        brandRedTransparent: "rgba(255,100,85,0.5)",
        brandTextLight: "#6E6466",
        brandText: "#4E3C42",
        brandLight: "#F8F6F3"
      },
    },
  },
  plugins: [],
}
