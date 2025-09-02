/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        bondi: "#0095b6",
        brandeis: "#0070ff",
      },
    },
  },
  plugins: [],
};
