/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1500px",
      "xxl-max": { max: "1500px" },
      "xl-max": { max: "1279px" },
      "lg-max": { max: "1023px" },
      "md-max": { max: "767px" },
      "sm-max": { max: "639px" },
    },
    extend: {
      backgroundImage: {
        "climbing-wall": "url('/assets/climbing-wall.svg')",
      },
      colors: {
        "main-green": "#04d98b",
        "main-grey": "#8F8F8F",
        "main-black": "#333",
      },
    },
  },
  plugins: [],
};
