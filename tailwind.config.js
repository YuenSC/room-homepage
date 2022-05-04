module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [],
};
