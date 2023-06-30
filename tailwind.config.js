/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-bg": "#1d1d1d",
      },
      backgroundImage: {
        sky: "url('../components/main-page/parallax-img/sky.png')",
        house: "url('../components/main-page/parallax-img/house.png')",
        ground: "url('../components/main-page/parallax-img/ground.png')",
      },
    },
  },
  plugins: [],
};
