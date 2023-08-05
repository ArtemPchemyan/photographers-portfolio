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
        "default-bg": "#020202",
        "light-grey": "#71706f",
      },
      backgroundImage: {
        avatar: "url('../store/model/assets/avatar.jpg')",
        radial:
          "radial-gradient(circle farthest-corner at 10% 20%, rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2%)",
      },
      boxShadow: {
        inset: "inset 0px 0px 3px rgba(1,1,1,0.5)",
      },
    },
  },
  plugins: [],
};
