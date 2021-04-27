module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        4000: "4000ms",
      },
      transitionDelay: {
        0: "0ms",
        1: "100ms",
        2: "200ms",
        3: "300ms",
        4: "400ms",
        5: "500ms",
        6: "600ms",
        7: "700ms",
        8: "800ms",
        9: "900ms",
        10: "1000ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
