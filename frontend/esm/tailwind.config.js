/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        110: "1.10",
      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      backgroundImage: (theme) => ({
        sample:
          "url('https://images-na.ssl-images-amazon.com/images/S/pv-target-images/26a13d14dd8849a6d7ad2655cd9c270e91190387432e6ee139096da7bec65cd4._RI_V_TTW_.png')",
      }),
    },
  },
  plugins: [],
};
