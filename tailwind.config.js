/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "half-yellow": "linear-gradient(175deg, #FFD370 60%, #fff 40%)",
    },
  },
},
  plugins: [],
};
